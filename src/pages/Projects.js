import "bootstrap/dist/css/bootstrap.min.css";
import educationalGamesDemo from "../assets/images/Allison Hua Mobile Educational Games.gif";
import educationalGamesPreview from "../assets/images/Allison Hua Mobile Educational Games.png";

const projectList = [
  {
    name: "Mobile Educational Games",
    description: "A mobile app made with React Native",
    preview: educationalGamesPreview,
    image: educationalGamesDemo,
    link: "https://github.com/AllyBeary/team-education-feature",
  },
  {
    name: "Web Search Engine",
    description: "A program made with Python",
    link: "https://github.com/cs121-s25-grapes/assignment3",
  },
  {
    name: "Web Fashion Closet Makeover",
    description: "A web app made with JavaScript, HTML, and CSS",
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
            className="col-md-4 mb-"
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
                        className="card-img-top "
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
                      <figcaption class="text-secondary fs-6">
                        Gif of Mobile Educational Games Project Demo
                      </figcaption>
                    </figure>
                  </>
                )}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary mt-auto"
                  aria-label={`View ${project.name} project on GitHub`}
                >
                  View Project
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
