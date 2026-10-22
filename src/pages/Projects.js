import "bootstrap/dist/css/bootstrap.min.css";
import educationalGamesDemo from "../assets/images/Allison Hua Mobile Educational Games.gif";
import educationalGamesPreview from "../assets/images/Allison Hua Mobile Educational Games.png";

const projectList = [
  {
    name: "VOX(EL)",
    description: "Ambient Intelligent Architecture made with Python featuring ASR-corrections, LLM improvements, and RAG implementation",
    link: "https://github.com/AllyBeary/EMS-Handoff",
  },
  {
    name: "MyPolicy",
    description: "Full-Stack Document text Editor and Approval Workflow Builder made with React and Node.js featuring MongoDB Atlas for database and AWS S3 for storage",
    link: "",
  },
  {
    name: "Web Search Engine",
    description: "A program made with Python featuring multithreading, tokenization, comprehensive duplicate detection, and efficient information retrieval",
    link: "https://github.com/cs121-s25-grapes/assignment3",
  },
  {
    name: "Brain Bites",
    description: "A mobile application made with React Native featuring user authentication and API integration for dynamic input and real-time response",
    preview: educationalGamesPreview,
    image: educationalGamesDemo,
    link: "https://github.com/AllyBeary/team-education-feature",
  },
  {
    name: "Fashion Makeover",
    description: "A web application made with JavaScript, HTML, and CSS",
    link: "https://github.com/AllyBeary/snap-engineering-academy-project-assessment",
  },
];

export default function Projects() {
  return (
    <section
      className="container min-vh-100 py-5 bg-primary-subtle"
      aria-label="Projects Section"
    >
      <h1 className="display-4 text-center mb-3">Projects</h1>
      <hr className="mb-3" style={{ width: "50%", margin: "0 auto" }} />
      <div className="row">
        {projectList.map((project) => (
          <article
            key={project.name}
            className="col-md-4 mb-4"
            aria-label={`${project.name} Project`}
          >
            <div className="card shadow-sm">
              <div className="card-body d-flex flex-column">
                <p className="card-title fs-5">
                  <strong>{project.name}</strong>
                </p>
                <p className="card-text">{project.description}</p>
                {project.image && (
                  <>
                    <p className="card-text">
                      <em>Hover over image to play</em>
                    </p>
                    <figure>
                      <img
                        src={project.preview}
                        data-gif={project.image}
                        className="card-img-top"
                        alt={`${project.name} preview`}
                        style={{ objectFit: "cover" }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.src = e.currentTarget.dataset.gif)
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.src = project.preview)
                        }
                        aria-label={`${project.name} demo gif`}
                      />
                      <figcaption className="text-secondary fs-6">
                        Gif of Mobile Educational Games Project Demo
                      </figcaption>
                    </figure>
                  </>
                )}
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary mt-auto"
                    aria-label={`View ${project.name} project on GitHub`}
                  >
                    View Project
                  </a>
                ) : (
                  <div className="mt-auto">
                    <button
                      type="button"
                      className="btn btn-secondary w-100"
                      disabled
                      aria-label={`${project.name} project link is not available yet`}
                    >
                      Link Unavailable
                    </button>
                    <p className="text-secondary fs-6 text-center mt-2 mb-0">
                      <em>Proprietary Work</em>
                    </p>
                  </div>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}