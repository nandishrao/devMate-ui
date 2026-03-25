import { useState } from "react";

const questions = [
  {
    question: "What is React?",
    options: ["Library", "Framework", "Language", "Database"],
    answer: "Library",
  },
  {
    question: "Which hook is used for state?",
    options: ["useState", "useEffect", "useRef", "useMemo"],
    answer: "useState",
  },
  {
    question: "Node.js is used for?",
    options: ["Frontend", "Backend", "Database", "Design"],
    answer: "Backend",
  },
  {
    question: "Which is a NoSQL database?",
    options: ["MySQL", "MongoDB", "PostgreSQL", "Oracle"],
    answer: "MongoDB",
  },
  {
    question: "What does API stand for?",
    options: [
      "Application Programming Interface",
      "Advanced Program Interface",
      "Applied Programming Internet",
      "None",
    ],
    answer: "Application Programming Interface",
  },
  {
    question: "Which is used for styling?",
    options: ["HTML", "CSS", "JS", "Node"],
    answer: "CSS",
  },
  {
    question: "Express is used with?",
    options: ["React", "Node.js", "MongoDB", "Python"],
    answer: "Node.js",
  },
  {
    question: "Which is a JS runtime?",
    options: ["React", "Node.js", "Angular", "Vue"],
    answer: "Node.js",
  },
  {
    question: "Which is used for version control?",
    options: ["Git", "Docker", "Kubernetes", "Jenkins"],
    answer: "Git",
  },
  {
    question: "Which is frontend framework?",
    options: ["React", "Node", "Express", "MongoDB"],
    answer: "React",
  },
  {
    question: "JWT is used for?",
    options: ["Styling", "Authentication", "Database", "Routing"],
    answer: "Authentication",
  },
  {
    question: "Which is used for containerization?",
    options: ["Docker", "Git", "React", "SQL"],
    answer: "Docker",
  },
  {
    question: "Which is backend framework?",
    options: ["Express", "CSS", "HTML", "Bootstrap"],
    answer: "Express",
  },
  {
    question: "Which is cloud platform?",
    options: ["AWS", "HTML", "React", "Node"],
    answer: "AWS",
  },
  {
    question: "Which is used for database queries?",
    options: ["SQL", "CSS", "JS", "React"],
    answer: "SQL",
  },
];

export default function Quiz() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState("");
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleNext = () => {
    if (selected === questions[current].answer) {
      setScore(score + 1);
    }

    setSelected("");

    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      setShowResult(true);
    }
  };

  const restartQuiz = () => {
    setCurrent(0);
    setScore(0);
    setSelected("");
    setShowResult(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 p-4">
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-2xl p-6">
         <h1 className="text-black font-bold">Answer the following Quiz</h1>
        {!showResult ? (
          <>
            {/* Progress */}
            <div className="mb-4">
              <div className="w-full bg-gray-200 h-2 rounded-full">
                <div
                  className="bg-blue-500 h-2 rounded-full transition-all"
                  style={{
                    width: `${((current + 1) / questions.length) * 100}%`,
                  }}
                ></div>
              </div>
              <p className="text-sm text-gray-600 mt-2">
                Question {current + 1} / {questions.length}
              </p>
            </div>

            {/* Question */}
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              {questions[current].question}
            </h2>

            {/* Options */}
            <div className="space-y-3 text-black font-semibold">
              {questions[current].options.map((opt, i) => (
                <div
                  key={i}
                  onClick={() => setSelected(opt)}
                  className={`p-3 border rounded-lg cursor-pointer transition flex items-center justify-between ${
                    selected === opt
                      ? "bg-blue-500 text-white border-blue-500"
                      : "bg-gray-50 hover:bg-gray-100"
                  }`}
                >
                  <span>{opt}</span>
                  {selected === opt && <span>✔</span>}
                </div>
              ))}
            </div>

            {/* Button */}
            <button
              onClick={handleNext}
              disabled={!selected}
              className="mt-6 w-full py-2 rounded-lg font-medium text-white bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400"
            >
              {current === questions.length - 1 ? "Finish Quiz" : "Next"}
            </button>
          </>
        ) : (
          <>
            {/* Result */}
            <h2 className="text-2xl font-bold text-center text-gray-800">
              Quiz Completed 🎉
            </h2>

            <p className="text-center text-lg mt-4 text-black font-semibold">
              Your Score: <span className="text-black font-semibold">{score}</span> / {questions.length}
            </p>

            {/* Percentage Badge */}
            <div className="flex justify-center mt-4">
              <div className="px-4 py-2 bg-green-100 text-green-700 rounded-full font-medium">
                {Math.round((score / questions.length) * 100)}%
              </div>
            </div>

            {/* Button */}
            <button
              onClick={restartQuiz}
              className="mt-6 w-full py-2 rounded-lg font-medium text-white bg-green-600 hover:bg-green-700"
            >
              Restart Quiz
            </button>
          </>
        )}
      </div>
    </div>
  );
}