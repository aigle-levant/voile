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
  artifacts: Artifact[];
};

export type Artifact = {
  objectID: number;
  primaryImage: string;
  title: string;
  culture: string;
  period: string;
  artistDisplayName: string;
  objectDate: string;
  country: string;
};
