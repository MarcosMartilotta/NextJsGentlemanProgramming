import localFont from "next/font/local";

export const firacode = localFont({
    src: [
      {
        path: "../woff2/FiraCode-Medium.woff2",
        weight: "400",
        style: "normal",
      },
      {
        path: "../woff2/FiraCode-Bold.woff2",
        weight: "700",
        style: "italic",
      },
    ],
  });