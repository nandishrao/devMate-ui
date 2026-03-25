const projects = [
  {
    title: "MERN Stack",
    idea: "Build a real-time chat application with authentication and Socket.io",
    tech: "MongoDB, Express, React, Node.js",
  },
  {
    title: "DevOps",
    idea: "Create a CI/CD pipeline using Docker, GitHub Actions, and deploy on AWS",
    tech: "Docker, AWS, GitHub Actions",
  },
  {
    title: "Java Developer",
    idea: "Build a Spring Boot backend for an e-commerce system with JWT authentication",
    tech: "Java, Spring Boot, MySQL",
  },
  {
    title: "Data Analyst",
    idea: "Analyze sales data and build an interactive dashboard using Power BI",
    tech: "SQL, Python, Power BI",
  },
  {
    title: "Frontend",
    idea: "Create a portfolio website with animations and responsive design",
    tech: "React, Tailwind CSS",
  },
  {
    title: "Backend",
    idea: "Build a scalable REST API with authentication, caching, and rate limiting",
    tech: "Node.js, Redis, Express",
  },
];

export default function ProjectIdeas() {
  return (
    <div className="min-h-screen bg-base-200 px-6 py-10">
      
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-black">
          Project Ideas
        </h1>
        <p className="text-black mt-2">
          Build real-world projects to strengthen your skills
        </p>
      </div>

      {/* Cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {projects.map((proj, index) => (
          <div
            key={index}
            className="card bg-base-100 shadow-xl hover:shadow-2xl transition duration-300"
          >
            <div className="card-body">
              <h2 className="card-title text-black">
                {proj.title}
              </h2>
              <p className="text-black">
                {proj.idea}
              </p>
              <div className="mt-3">
                <span className="badge badge-primary text-=white">
                  {proj.tech}
                </span>
              </div>
              <div className="card-actions justify-end mt-4">
                <button className="btn btn-primary btn-sm text-white">
                  Start Project →
                </button>
              </div>

            </div>
          </div>
        ))}
      </div>

    </div>
  );
}