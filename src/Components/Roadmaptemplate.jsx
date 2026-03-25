// RoadmapTemplate.jsx
import { useState } from "react";

export default function RoadmapTemplate({ title, steps }) {
  const [completed, setCompleted] = useState([]);

  const toggleStep = (index) => {
    if (completed.includes(index)) {
      setCompleted(completed.filter((i) => i !== index));
    } else {
      setCompleted([...completed, index]);
    }
  };

  const progress = Math.round((completed.length / steps.length) * 100);

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      {/* Header */}
      <div className="max-w-3xl mx-auto mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          {title} Roadmap
        </h1>
        <p className="text-gray-600">Track your learning step by step</p>

        {/* Progress Bar */}
        <div className="mt-4">
          <div className="w-full bg-gray-200 h-3 rounded-full">
            <div
              className="bg-blue-500 h-3 rounded-full"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="text-sm mt-2 text-gray-600">
            {progress}% completed
          </p>
        </div>
      </div>

      {/* Steps */}
      <div className="max-w-3xl mx-auto space-y-4">
        {steps.map((step, index) => (
          <div
            key={index}
            onClick={() => toggleStep(index)}
            className={`cursor-pointer p-4 rounded-xl border flex items-center justify-between transition ${
              completed.includes(index)
                ? "bg-green-50 border-green-400"
                : "bg-white border-gray-200 hover:shadow"
            }`}
          >
            <span className="text-gray-800">{step}</span>

            <span className="text-sm">
              {completed.includes(index) ? "✔ Done" : "Mark"}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}