export enum KeysEnum {
  NAME = "name",
  ISO_3166_1_ALPHA_2_CODE = "alpha_2",
  ISO_3166_1_ALPHA_3_CODE = "alpha_3",
  ISO_3166_1_NUMERIC_CODE = "numeric_code",
}

export interface Key {
  key: KeysEnum;
  customKey?: string;
}

export interface Region {
  [KeysEnum.NAME]: string;
  [KeysEnum.ISO_3166_1_ALPHA_2_CODE]: string;
  [KeysEnum.ISO_3166_1_ALPHA_3_CODE]: string;
  [KeysEnum.ISO_3166_1_NUMERIC_CODE]: number;
}

export type DisplayRegion = Record<KeysEnum | string, string | number>;
