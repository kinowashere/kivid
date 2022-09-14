import { FunctionComponent } from "preact";
import { hover as sHover, keys as sKeys } from "@/utils/state.ts";
import { useEffect, useState } from "preact/hooks";
import { KeysEnum } from "@/ts/types.ts";
import Trash from "@/components/Icons/Trash.tsx";
import TextInput from "@/components/Forms/TextInput.tsx";

const useKeySelector = () => {
  const { value: keys } = sKeys;
  const [selectKeys, setSelectKeys] = useState<KeysEnum[]>([]);
  useEffect(() => {
    setSelectKeys(
      Object.values(KeysEnum).filter((k) =>
        keys.findIndex(({ key }) => key === k) === -1
      ),
    );
  }, [keys]);
  const handleSelectKey = (key: KeysEnum) => {
    sKeys.value = [...keys, { key }];
  };
  const handleRemoveKey = (key: KeysEnum) => {
    sKeys.value = keys.filter((k) => k.key !== key);
  };
  const updateCustomValue = (key: KeysEnum, val: string) => {
    sKeys.value = sKeys.value.map((k) => {
      if (k.key !== key) return k;
      return { key, customKey: val };
    });
  };
  return {
    keys,
    selectKeys,
    handleSelectKey,
    handleRemoveKey,
    updateCustomValue,
  };
};

const KeySelector: FunctionComponent = () => {
  const {
    keys,
    selectKeys,
    handleSelectKey,
    handleRemoveKey,
    updateCustomValue,
  } = useKeySelector();
  return (
    <div className="flex flex-col">
      <span className="text-xl font-semibold">Select keys below</span>
      <div className="my-4 flex space-between flex-wrap space-x-4">
        {selectKeys.map((key) => (
          <button
            type="button"
            className="font-mono py-2 px-5 rounded bg-purple-800 text-sm font-bold text-white transition duration-150 hover:opacity-80"
            onClick={() => handleSelectKey(key)}
          >
            {key}
          </button>
        ))}
      </div>
      <span className="text-xl font-semibold">
        Set names for the selected keys
      </span>
      <div className="flex flex-col my-4">
        {keys.map(({ key, customKey }) => {
          return (
            <div
              className="grid grid-cols-keys items-end gap-x-2 my-2 px-4 py-1 rounded-xl transition duration-150 hover:bg-gray-50"
              onMouseOver={() => sHover.value = key}
              onMouseLeave={() => sHover.value = undefined}
            >
              <div className="flex flex-col space-y-1">
                <span className="font-mono text-sm font-bold ml-1">{key}</span>
                <TextInput
                  type="text"
                  value={customKey || ""}
                  placeholder={key}
                  onInput={({ currentTarget: { value } }) =>
                    updateCustomValue(key, value)}
                />
              </div>
              <div className="mx-auto">
                <button type="button" onClick={() => handleRemoveKey(key)}>
                  <Trash className="w-6 h-6 transition duration-150 hover:text-red-500" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default KeySelector;
