import "bootstrap/dist/css/bootstrap.min.css";
import headshot from "../assets/images/Allison Hua headshot.jpeg";

export default function Home() {
  return (
    <section
      className="container min-vh-100 d-flex flex-column justify-content-center align-items-center bg-primary-subtle"
      aria-label="Home Section"
    >
      <h1 className="display-4 text-center mb-2">Allison Hua</h1>
      <h2 className="h4 text-center text-secondary mb-4">Software Engineer</h2>
      <div className="row w-100 justify-content-center align-items-center">
        {/* Image */}
        <div className="col-12 col-md-4 d-flex justify-content-center mb-3">
          <figure>
            <img
              src={headshot}
              alt="Headshot of Allison Hua smiling at the camera"
              className="img-fluid rounded shadow"
              style={{ maxWidth: "250px" }}
            />
            <figcaption className="visually-hidden">
              Professional headshot of Allison Hua
            </figcaption>
          </figure>
        </div>
        {/* Text */}
        <div className="col-12 col-md-6">
          <p className="lead text-center text-md-start">
            Hello! Welcome to my portfolio. Here you will find my about me,
            resume, projects, and contact information. Have fun exploring!
          </p>
        </div>
      </div>
    </section>
  );
}
