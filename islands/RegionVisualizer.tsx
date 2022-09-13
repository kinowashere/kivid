import { FunctionComponent } from "preact";
import {
  hover as sHover,
  keys as sKeys,
  region as sRegion,
} from "@/utils/state.ts";

const RegionVisualizer: FunctionComponent = () => {
  const { value: keys } = sKeys;
  const { value: region } = sRegion;

  return (
    <div className="flex flex-col bg-gray-800 rounded-xl p-6 text-white shadow-lg">
      <span>{"{"}</span>
      <div className="flex flex-col">
        {keys.map(({ key, customKey }, i) => {
          const regionValue = region[key];
          const isLast = i + 1 === keys.length;
          return (
            <span
              className={`ml-4 py-1 px-2 transition duration-150 rounded ${
                sHover.value === key ? "bg-gray-700" : ""
              }`}
            >
              {`"${customKey ? customKey : key}": "${regionValue}"${
                isLast ? "" : ","
              }`}
            </span>
          );
        })}
      </div>
      <span>{"}"}</span>
    </div>
  );
};

export default RegionVisualizer;
