import { IBM_Plex_Sans, Source_Serif_4 } from "next/font/google";

/* Les deux écritures de la charte (§ 2). Jamais de troisième. */
export const serif = Source_Serif_4({
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"],
  variable: "--font-serif",
  display: "swap",
});

export const sans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});
