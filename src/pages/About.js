import "bootstrap/dist/css/bootstrap.min.css";
import presentation from "../assets/images/Allison Hua presentation.jpg";

export default function About() {
  return (
    <section
      className="container min-vh-100 py-5 bg-primary-subtle"
      aria-label="About Section"
    >
      <h1 className="display-4 text-center mb-3">About</h1>
      <hr className="mb-3" style={{ width: "50%", margin: "0 auto" }} />
      <div className="row align-items-center justify-content-center">
        {/* Info list */}
        <div className="col-md-6 mb-4 text-center text-md-start">
          <ul aria-label="Information about Allison Hua">
            <li className="mb-2">
              <strong>Name:</strong> Allison Hua
            </li>
            <li className="mb-2">
              <strong>School:</strong> University of California, Irvine
            </li>
            <li className="mb-2">
              <strong>Major:</strong> Software Engineering
            </li>
            <li className="mb-2">
              <strong>Minor:</strong> Health Informatics
            </li>
            <li className="mb-2">
              <strong>Favorite thing about software engineering:</strong> Seeing
              UI be affected by code changes
            </li>
            <li className="mb-2">
              <strong>Hobbies & Interests (besides coding):</strong> Shopping,
              Arts and crafts, Working out, Hiking, Gaming, Baking, Eating
            </li>
          </ul>
        </div>
        {/* Image */}
        <div className="col-md-4 d-flex justify-content-center">
          <figure>
            <img
              src={presentation}
              alt="Allison Hua giving a presentation"
              className="img-fluid rounded shadow"
              style={{ maxWidth: "500px" }}
            />
            <figcaption class="text-secondary fs-6">
              Picture of Allison Hua Presenting a Project to an Audience
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
