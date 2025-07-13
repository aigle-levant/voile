export type TabProps = {
  currentContinent: string;
  onContinentChange: (val: string) => void;
};

export type FilterProps = {
  currentPeriod: string;
  onPeriodChange: (val: string) => void;
};

export type ArtifactCardProps = {
  artifact: Artifact;
};

export type ArtifactGridProps = {
  continent: string;
  period: string;
};

export type Artifact = {
  objectID: number;
  title: string;
  primaryImageSmall: string;
  artistDisplayName: string;
  objectDate: string;
  objectName: string;
};
