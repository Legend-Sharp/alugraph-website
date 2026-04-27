import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "AluGraph — ალუმინის ფასადები და მინის კონსტრუქციები",
    short_name: "AluGraph",
    description:
      "ალუმინის ფასადები, მინის სისტემები, კარ-ფანჯრები და ვიტრაჟები. 20+ წლის გამოცდილება.",
    start_url: "/",
    display: "standalone",
    background_color: "#080c14",
    theme_color: "#080c14",
    lang: "ka-GE",
    dir: "ltr",
    categories: ["business", "construction"],
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
