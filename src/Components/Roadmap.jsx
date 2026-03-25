import { useNavigate } from "react-router-dom";
import { Cpu, Server, Code, Database, BarChart, Layers } from "lucide-react";

const roadmaps = [
  {
    title: "AI / ML Engineer",
    description: "Python, ML algorithms, deep learning, and real-world models",
    route: "/roadmaps/ai-ml",
    icon: Cpu,
  },
  {
    title: "DevOps Engineer",
    description: "CI/CD, Docker, Kubernetes, cloud & automation",
    route: "/roadmaps/devops",
    icon: Server,
  },
  {
    title: "Java Developer",
    description: "Core Java, Spring Boot, APIs, and backend systems",
    route: "/roadmaps/java",
    icon: Code,
  },
  {
    title: "MERN Stack Developer",
    description: "MongoDB, Express, React, Node.js full-stack development",
    route: "/roadmaps/mern",
    icon: Layers,
  },
  {
    title: "Data Analyst",
    description: "SQL, Excel, Python, data visualization & insights",
    route: "/roadmaps/data-analyst",
    icon: BarChart,
  },
  {
    title: "Backend Developer",
    description: "APIs, databases, authentication, and system design",
    route: "/roadmaps/backend",
    icon: Database,
  },
];

export default function RoadmapCards() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 px-6 py-10">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-3">
          Developer Roadmaps
        </h1>
        <p className="text-gray-600">
          Choose a path and start your journey step by step
        </p>
      </div>

      {/* Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {roadmaps.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              onClick={() => navigate(item.route)}
              className="group cursor-pointer bg-white border border-gray-200 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 mb-4 group-hover:bg-indigo-100">
                <Icon size={24} />
              </div>

              {/* Title */}
              <h2 className="text-lg font-semibold text-gray-800 mb-2">
                {item.title}
              </h2>

              {/* Description */}
              <p className="text-sm text-gray-600 leading-relaxed">
                {item.description}
              </p>

              {/* CTA */}
              <div className="mt-4 text-sm font-medium text-indigo-600 group-hover:underline">
                View Roadmap →
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}