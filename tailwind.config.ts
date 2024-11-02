import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {},
      colors: {
        primary: "#3355ff",
      },
    },
  },
  plugins: [],
} satisfies Config;
