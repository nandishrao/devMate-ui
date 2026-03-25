const blogs = [
  {
    title: "Getting Started with MERN Stack",
    description:
      "Learn how to build full-stack applications using MongoDB, Express, React, and Node.js.",
    link: "https://www.mongodb.com/mern-stack",
    tag: "MERN",
    date: "March 2026",
  },
  {
    title: "DevOps Basics for Beginners",
    description:
      "Understand CI/CD, Docker, and deployment pipelines in simple terms.",
    link: "https://aws.amazon.com/devops/what-is-devops/",
    tag: "DevOps",
    date: "March 2026",
  },
  {
    title: "Java Backend Development Guide",
    description:
      "Build scalable backend systems using Spring Boot and Java.",
    link: "https://spring.io/guides",
    tag: "Java",
    date: "March 2026",
  },
  {
    title: "Data Analyst Roadmap",
    description:
      "Step-by-step guide to becoming a data analyst using SQL, Python, and visualization tools.",
    link: "https://www.datacamp.com/blog/how-to-become-a-data-analyst",
    tag: "Data",
    date: "March 2026",
  },
  {
    title: "Frontend Development in 2026",
    description:
      "Master modern frontend tools like React, Tailwind, and performance optimization.",
    link: "https://roadmap.sh/frontend",
    tag: "Frontend",
    date: "March 2026",
  },
];

export default function BlogSection() {
  return (
    <div className="min-h-screen bg-base-200 px-6 py-10">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h1 className="text-4xl text-black font-bold">Developer Blogs</h1>
        <p className="text-base-content/70 mt-2">
          Learn from top resources across different domains
        </p>
      </div>

      {/* Cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="card bg-base-100 shadow-xl hover:shadow-2xl transition duration-300"
          >
            <div className="card-body">

              {/* Tag + Date */}
              <div className="flex justify-between items-center mb-2">
                <span className="badge  badge-primary">{blog.tag}</span>
                <span className="text-sm text-black text-base-content/60">
                  {blog.date}
                </span>
              </div>

              {/* Title */}
              <h2 className="card-title text-lg text-black ">
                {blog.title}
              </h2>

              {/* Description */}
              <p className="text-sm text-base-content/70">
                {blog.description}
              </p>

              {/* Button */}
              <div className="card-actions justify-end mt-4">
                <button
                  onClick={() => window.open(blog.link, "_blank")}
                  className="btn btn-primary btn-sm"
                >
                  Read Article ↗
                </button>
              </div>

            </div>
          </div>
        ))}
      </div>

    </div>
  );
}