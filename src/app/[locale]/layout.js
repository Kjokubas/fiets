import Providers from "@/components/layout/Providers";

const validLocales = ["nl", "en"];

export function generateStaticParams() {
  return validLocales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;
  const lang = validLocales.includes(locale) ? locale : "nl";

  return <Providers locale={lang}>{children}</Providers>;
}
