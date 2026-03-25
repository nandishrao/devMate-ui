import RoadmapTemplate from "./Roadmaptemplate";

const steps = [
  "Programming Language",
  "Data Structures",
  "REST APIs",
  "Databases",
  "Authentication",
  "Caching (Redis)",
  "System Design",
  "Message Queues",
];

export default function BackendRoadmap() {
  return <RoadmapTemplate title="Backend Developer" steps={steps} />;
}