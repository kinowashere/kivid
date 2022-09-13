import { Options } from "$fresh/plugins/twind.ts";

export default {
  selfURL: import.meta.url,
  theme: {
    extend: {
      fontFamily: {
        sans: ["Dosis", "sans-serif"],
        mono: ["Mono Space", "monospace"],
        title: ["Righteous", "Dosis", "sans-serif"],
      },
      gridTemplateColumns: {
        keys: "1fr 1fr 64px",
      },
    },
  },
} as Options;
