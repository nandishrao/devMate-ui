import RoadmapTemplate from "./Roadmaptemplate";

const steps = [
  "Linux Basics",
  "Networking",
  "Git & GitHub",
  "CI/CD",
  "Docker",
  "Kubernetes",
  "AWS / Cloud",
  "Terraform",
  "Monitoring Tools",
];

export default function DevOpsRoadmap() {
  return <RoadmapTemplate title="DevOps Engineer" steps={steps} />;
}