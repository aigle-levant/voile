// components
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { type TabProps } from "@/utils/types.ts";
// libraries
import { useTranslation } from "react-i18next";

export default function Tab({ currentContinent, onContinentChange }: TabProps) {
  const { t } = useTranslation("history");
  return (
    <>
      <Tabs
        value={currentContinent}
        onValueChange={onContinentChange}
        className="w-[400px]"
      >
        <TabsList>
          <TabsTrigger value="asia">{t("asia")}</TabsTrigger>
          <TabsTrigger value="europe">{t("europe")}</TabsTrigger>
          <TabsTrigger value="africa">{t("africa")}</TabsTrigger>
          <TabsTrigger value="america">{t("americas")}</TabsTrigger>
          <TabsTrigger value="oceania">{t("oceania")}</TabsTrigger>
        </TabsList>
        <TabsContent value="asia"></TabsContent>
        <TabsContent value="europe"></TabsContent>
        <TabsContent value="africa"></TabsContent>
        <TabsContent value="america"></TabsContent>
        <TabsContent value="oceania"></TabsContent>
      </Tabs>
    </>
  );
}
