// components
import Form from "@/components/contact/Form.tsx";
// libraries
import { useTranslation } from "react-i18next";

export default function ContactUs() {
  const { t } = useTranslation("contact");
  return (
    <main
      id="main"
      className="flex flex-col overflow-x-hidden bg-zinc-50 px-3 pt-10 text-center text-zinc-950 dark:bg-zinc-950 dark:text-zinc-50"
    >
      <p className="py-8 font-sans">{t("begin")}</p>
      <Form />
    </main>
  );
}
