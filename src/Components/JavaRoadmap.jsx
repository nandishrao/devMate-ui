import RoadmapTemplate from "./Roadmaptemplate";

const steps = [
  "Core Java",
  "OOP Concepts",
  "Collections",
  "Java 8 Features",
  "JDBC",
  "Spring Core",
  "Spring Boot",
  "REST APIs",
  "Hibernate / JPA",
];

export default function JavaRoadmap() {
  return <RoadmapTemplate title="Java Developer" steps={steps} />;
}