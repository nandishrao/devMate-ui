// MernRoadmap.jsx
import RoadmapTemplate from "./Roadmaptemplate";

const steps = [
  "HTML, CSS Basics",
  "JavaScript Fundamentals",
  "Advanced JavaScript",
  "React Basics",
  "React Hooks & Routing",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Authentication (JWT)",
  "Build Full Stack Project",
];

export default function MernRoadmap() {
  return <RoadmapTemplate title="MERN Stack Developer" steps={steps} />;
}