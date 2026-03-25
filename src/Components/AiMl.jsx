import RoadmapTemplate from "./Roadmaptemplate";

const steps = [
  "Python Basics",
  "NumPy & Pandas",
  "Data Visualization",
  "Statistics",
  "Machine Learning",
  "Scikit-learn",
  "Deep Learning",
  "TensorFlow / PyTorch",
  "ML Projects",
];

export default function AiMlRoadmap() {
  return <RoadmapTemplate title="AI / ML Engineer" steps={steps} />;
}