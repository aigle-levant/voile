// libraries
import {
  Timeline,
  TimelineDate,
  TimelineHeader,
  TimelineIndicator,
  TimelineItem,
  TimelineSeparator,
  TimelineTitle,
} from "@/components/ui/timeline";
import { useTranslation } from "react-i18next";

export default function TimelinePart() {
  const { t } = useTranslation("about");
  const items = [
    {
      id: 1,
      date: "1983",
      title: t("timelineOne"),
    },
    {
      id: 2,
      date: "1984",
      title: t("timelineTwo"),
    },
    {
      id: 3,
      date: "1990",
      title: t("timelineThree"),
    },
    {
      id: 4,
      date: "2005",
      title: t("timelineFour"),
    },
    {
      id: 5,
      date: "2020",
      title: t("timelineFive"),
    },
    {
      id: 6,
      date: "2024",
      title: t("timelineSix"),
    },
  ];
  return (
    <Timeline defaultValue={5}>
      {items.map((item) => (
        <TimelineItem
          key={item.id}
          step={item.id}
          className="w-[calc(50%-1.5rem)] odd:ms-auto even:text-right even:group-data-[orientation=vertical]/timeline:ms-0 even:group-data-[orientation=vertical]/timeline:me-8 even:group-data-[orientation=vertical]/timeline:[&_[data-slot=timeline-indicator]]:-right-6 even:group-data-[orientation=vertical]/timeline:[&_[data-slot=timeline-indicator]]:left-auto even:group-data-[orientation=vertical]/timeline:[&_[data-slot=timeline-indicator]]:translate-x-1/2 even:group-data-[orientation=vertical]/timeline:[&_[data-slot=timeline-separator]]:-right-6 even:group-data-[orientation=vertical]/timeline:[&_[data-slot=timeline-separator]]:left-auto even:group-data-[orientation=vertical]/timeline:[&_[data-slot=timeline-separator]]:translate-x-1/2"
        >
          <TimelineHeader>
            <TimelineSeparator />
            <TimelineDate>{item.date}</TimelineDate>
            <TimelineTitle>{item.title}</TimelineTitle>
            <TimelineIndicator />
          </TimelineHeader>
        </TimelineItem>
      ))}
    </Timeline>
  );
}
