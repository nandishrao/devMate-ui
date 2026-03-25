import RoadmapTemplate from "./Roadmaptemplate";

const steps = [
  "Excel",
  "SQL",
  "Python Basics",
  "Pandas",
  "Data Cleaning",
  "Visualization (Power BI)",
  "Statistics",
  "EDA",
  "Projects",
];

export default function DataAnalystRoadmap() {
  return <RoadmapTemplate title="Data Analyst" steps={steps} />;
}