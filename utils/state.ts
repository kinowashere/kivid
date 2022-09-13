import { signal } from "@preact/signals";
import { Key, KeysEnum, Region } from "@/ts/types.ts";
import { REGIONS } from "@/utils/regions.ts";

const DEFAULT_KEYS: Key[] = [
  {
    key: KeysEnum.NAME,
  },
  {
    key: KeysEnum.ISO_3166_1_ALPHA_3_CODE,
    customKey: "isoCode",
  },
  {
    key: KeysEnum.ISO_3166_1_ALPHA_2_CODE,
  },
];

export const keys = signal<Key[]>(DEFAULT_KEYS);

export const region = signal<Region>(
  REGIONS.find(({ alpha_3 }) => alpha_3 === "MEX") as Region,
);

export const hover = signal<KeysEnum | undefined>(undefined);
