// components
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ArtifactCard from "./ArtifactCard.tsx";

export default function Tab() {
  return (
    <>
      <Tabs defaultValue="account" className="w-[400px]">
        <TabsList>
          <TabsTrigger value="asia">Asia</TabsTrigger>
          <TabsTrigger value="europe">Europe</TabsTrigger>
          <TabsTrigger value="africa">Africa</TabsTrigger>
          <TabsTrigger value="america">The Americas</TabsTrigger>
          <TabsTrigger value="oceania">Oceania</TabsTrigger>
        </TabsList>
        <TabsContent value="asia">
          <ArtifactCard continent={"asia"} />
        </TabsContent>
        <TabsContent value="europe">
          <ArtifactCard continent={"europe"} />
        </TabsContent>
        <TabsContent value="africa">
          <ArtifactCard continent={"africa"} />
        </TabsContent>
        <TabsContent value="america">
          <ArtifactCard continent={"america"} />
        </TabsContent>
        <TabsContent value="oceania">
          <ArtifactCard continent={"oceania"} />
        </TabsContent>
      </Tabs>
    </>
  );
}
