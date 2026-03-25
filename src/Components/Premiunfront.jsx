import { useNavigate } from "react-router-dom";
import { Map, Brain, CheckSquare, PenTool, Lightbulb } from "lucide-react";

const features = [
  {
    title: "Roadmaps",
    description: "Structured learning paths for different developer roles",
    route: "/roadmaps",
    icon: Map,
  },
  {
    title: "Quiz",
    description: "Test your knowledge with curated developer quizzes",
    route: "/quiz",
    icon: Brain,
  },
  {
    title: "Tasks",
    description: "Track daily coding challenges and improve consistency",
    route: "/tasks",
    icon: CheckSquare,
  },
  {
    title: "Blogs",
    description: "Read, write and share knowledge with developers",
    route: "/blogs",
    icon: PenTool,
  },
  {
    title: "Project Ideas",
    description: "Explore curated ideas based on skill level",
    route: "/projects",
    icon: Lightbulb,
  },
];

export default function FeatureCards() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 px-6 py-10 rounded-xl">
      
      {/* Heading */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-3">
          Explore Developer Tools
        </h1>
        <p className="text-gray-600">
          Everything you need to learn, build, and grow as a developer
        </p>
      </div>

      {/* Cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {features.map((feature, index) => {
          const Icon = feature.icon;

          return (
            <div
              key={index}
              onClick={() => navigate(feature.route)}
              className="group cursor-pointer bg-white border border-gray-200 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-50 text-blue-600 mb-4 group-hover:bg-blue-100 transition">
                <Icon size={24} />
              </div>

              {/* Title */}
              <h2 className="text-lg font-semibold text-gray-800 mb-2">
                {feature.title}
              </h2>

              {/* Description */}
              <p className="text-sm text-gray-600 leading-relaxed">
                {feature.description}
              </p>

              {/* CTA */}
              <div className="mt-4 text-sm font-medium text-blue-600 group-hover:underline">
                Explore →
              </div>
            </div>
          );
        })}
       
      </div>
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-3 mt-8">
          Be The Best Developer
        </h1>
    </div>
  );
}