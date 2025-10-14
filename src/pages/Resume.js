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
      <p className="text-center mb-3">
        <em>Scroll down to see more</em>
      </p>
      {/* PDF Embed */}
      <div className="ratio ratio-16x9 mb-3" role="document">
        <iframe
          aria-label="PDF of Allison Hua Resume"
          className="embed-responsive-item"
          src={resume}
          title="Allison Hua Resume"
          width="100%"
          height="800px"
          style={{ border: "1px solid #ccc", borderRadius: "8px" }}
        />
      </div>
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
    </section>
  );
}
