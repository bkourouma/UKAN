import type { ReactNode } from "react";
import { getDict } from "@/content";
import { sans, serif } from "@/lib/fonts";
import type { Locale } from "@/lib/site";
import { Footer } from "./Footer";
import { Header } from "./Header";
import "@/app/globals.css";

export function SiteShell({ locale, children }: { locale: Locale; children: ReactNode }) {
  const t = getDict(locale);
  return (
    <html lang={locale} className={`${serif.variable} ${sans.variable}`}>
      <body>
        <Header locale={locale} common={t.common} nav={t.nav} />
        <main id="contenu" tabIndex={-1}>
          {children}
        </main>
        <Footer t={t} locale={locale} />
      </body>
    </html>
  );
}
