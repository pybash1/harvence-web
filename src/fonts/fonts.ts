import localFont from "next/font/local";

export const plain = localFont({
  src: [
    {
      path: "./Plain-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./Plain-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./Plain-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
});
