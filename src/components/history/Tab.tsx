// components
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { type TabProps } from "@/utils/types.ts";

export default function Tab({ currentContinent, onContinentChange }: TabProps) {
  return (
    <>
      <Tabs
        value={currentContinent}
        onValueChange={onContinentChange}
        className="w-[400px]"
      >
        <TabsList>
          <TabsTrigger value="asia">Asia</TabsTrigger>
          <TabsTrigger value="europe">Europe</TabsTrigger>
          <TabsTrigger value="africa">Africa</TabsTrigger>
          <TabsTrigger value="america">The Americas</TabsTrigger>
          <TabsTrigger value="oceania">Oceania</TabsTrigger>
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
