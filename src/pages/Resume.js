import "bootstrap/dist/css/bootstrap.min.css";
import resume from "../assets/docs/Allison Hua resume.pdf";

export default function Resume() {
  return (
    <section
      className="container min-vh-100 py-5 bg-primary-subtle"
      aria-label="Resume Section"
    >
      <h1 className="display-4 text-center mb-3">Resume</h1>
      <hr className="mb-3" style={{ width: "50%", margin: "0 auto" }} />

      <div className="row align-items-center justify-content-center">
        <div className="col-12 col-lg-10 mb-4">
          <p className="text-center mb-3">
            <em>Scroll down to see more</em>
          </p>

          {/* PDF Embed */}
          <iframe
            aria-label="PDF of Allison Hua Resume"
            src={resume}
            title="Allison Hua Resume"
            className="w-100 rounded shadow mb-4"
            style={{ height: "800px", border: "1px solid #ccc" }}
          />

          {/* Download link */}
          <div className="text-center">
            <a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}