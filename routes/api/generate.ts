import { HandlerContext } from "$fresh/server.ts";
import { REGIONS } from "@/utils/regions.ts";
import { DisplayRegion, KeysEnum } from "@/ts/types.ts";

const urlToKeys = (
  url: string,
):
  | { key: KeysEnum; customKey?: string }[]
  | null => {
  const urlObject = new URL(url);
  const params = new URLSearchParams(urlObject.search);
  const keysParams = params.get("keys")?.split(",");
  if (!keysParams) return null;
  const keys: { key: KeysEnum; customKey?: string }[] = [];
  const customKeysParams: { key: string; customKey?: string }[] | undefined =
    params.get(
      "customKeys",
    )?.split(",").map((k) => {
      try {
        const v = k.split(":");
        const key = v[0];
        const customKey = v[1];
        return { key, customKey };
      } catch (_e) {
        return { key: "" };
      }
    });
  keysParams.map((k) => {
    const customKey = customKeysParams?.find((v) => v.key === k)?.customKey;
    const key = Object.values(KeysEnum).find((v) => v === k);
    if (key) {
      keys.push({ key, customKey });
    }
  });
  return keys;
};

const generateRegions = (
  keys: { key: KeysEnum; customKey?: string }[],
): DisplayRegion[] => {
  return REGIONS.map((r) => {
    const region: DisplayRegion = {};
    keys.map(({ key, customKey }) => {
      if (customKey) {
        region[customKey] = r[key];
      } else {
        region[key] = r[key];
      }
    });
    return region;
  });
};

export const handler = {
  GET(req: Request, _ctx: HandlerContext) {
    const keys = urlToKeys(req.url);
    if (!keys) return new Response("Error with your request", { status: 401 });
    const regions = generateRegions(keys);
    return new Response(JSON.stringify(regions), {
      headers: { "Content-Type": "application/json" },
    });
  },
};
