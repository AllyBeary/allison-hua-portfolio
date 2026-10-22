import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import snapPresentation from "../assets/images/Allison Hua snap presentation.jpg";
import icsPresentation from "../assets/images/Allison Hua ics presentation.jpg";
import phitPresentation from "../assets/images/Allison Hua phit presentation.jpg";

const infoList = [
  { label: "Name", value: "Allison Tran Hua" },
  { label: "School", value: "University of California, Irvine" },
  { label: "Major", value: "Software Engineering" },
  { label: "Minor", value: "Health Informatics" },
  {
    label: "Favorite Thing about Software Engineering",
    value: "Seeing how the technology I have developed has an impact on users",
  },
  {
    label: "Hobbies & Interests",
    value: "Shopping, Arts and Crafts, Working Out, Hiking, Gaming, Baking, Eating",
  },
];

const imageList = [
  {
    src: snapPresentation,
    alt: "Allison Hua giving a presentation at Snap Inc.",
    caption: "Allison Hua Presenting a Project at Snap Inc.",
  },
  {
    src: icsPresentation,
    alt: "Allison Hua giving a presentation at UCI ICS Project Expo",
    caption: "Allison Hua Presenting a Project at UCI ICS Project Expo",
  },
  {
    src: phitPresentation,
    alt: "Allison Hua giving a presentation at PHIT Summit",
    caption: "Allison Hua Presenting a Project at PHIT Summit",
  },
];

export default function About() {
  return (
    <section
      className="container min-vh-100 py-5 bg-primary-subtle"
      aria-label="About Section"
    >
      <h1 className="display-4 text-center mb-3">About</h1>
      <hr className="mb-3" style={{ width: "50%", margin: "0 auto" }} />
      <div className="row align-items-center justify-content-center">

        {/* Info points */}
        <div className="col-md-6 mb-4 d-flex justify-content-center justify-content-md-end">
          <ul 
            aria-label="Information about Allison Hua"
            className="text-start mb-0"
            style={{ maxWidth: "500px" }}
          >
            {infoList.map((item) => (
              <li key={item.label} className="mb-2">
                <strong>{item.label}:</strong> {item.value}
              </li>
            ))}
          </ul>
        </div>

        {/* Image carousel */}
        <div className="col-md-6 d-flex justify-content-center justify-content-md-start">
          <div
            id="aboutCarousel"
            className="carousel slide"
            data-bs-ride="carousel"
            style={{ maxWidth: "500px", width: "100%" }}
            aria-label="Presentation photos"
          >
            <div className="carousel-indicators">
              {imageList.map((image, index) => (
                <button
                  key={image.src}
                  type="button"
                  data-bs-target="#aboutCarousel"
                  data-bs-slide-to={index}
                  className={index === 0 ? "active" : ""}
                  aria-current={index === 0 ? "true" : undefined}
                  aria-label={`Slide ${index + 1}`}
                />
              ))}
            </div>

            <div className="carousel-inner rounded shadow">
              {imageList.map((image, index) => (
                <div
                  key={image.src}
                  className={`carousel-item ${index === 0 ? "active" : ""}`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    style={{ height: "350px", objectFit: "cover" }}
                    className="d-block w-100"
                  />
                  <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded">
                    <p className="mb-0">{image.caption}</p>
                  </div>
                </div>
              ))}
            </div>

            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#aboutCarousel"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#aboutCarousel"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}