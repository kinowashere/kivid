import { FunctionComponent } from "preact";
import { keys as sKeys } from "@/utils/state.ts";
import { useEffect, useState } from "preact/hooks";
import Download from "../components/Icons/Download.tsx";

const GenerateButton: FunctionComponent = () => {
  const { value: keys } = sKeys;
  const [query, setQuery] = useState<string>("");
  useEffect(() => {
    if (!keys.length) {
      setQuery("");
    } else {
      const searchParams = new URLSearchParams();
      const keysArr: string[] = [];
      const customKeysArr: string[] = [];
      keys.map(({ key, customKey }) => {
        keysArr.push(key);
        if (customKey) customKeysArr.push(`${key}:${customKey}`);
      });
      searchParams.append("keys", keysArr.join(","));
      searchParams.append("customKeys", customKeysArr.join(","));
      setQuery(`?${searchParams.toString()}`);
    }
  }, [keys]);
  return (
    <a
      href={sKeys.value.length === 0 ? "#" : `/api/generate${query}`}
      download={sKeys.value.length === 0 ? undefined : "regions.json"}
      className={`flex items-center rounded-2xl ${
        sKeys.value.length === 0 ? "bg-blue-200 cursor-default" : "bg-blue-700"
      } w-min py-2 px-6 space-x-4 text-white text-xl font-medium shadow-md transition duration-150 hover:opacity-80`}
    >
      <span>Generate</span>
      <Download className="h-6 w-6" />
    </a>
  );
};

export default GenerateButton;
