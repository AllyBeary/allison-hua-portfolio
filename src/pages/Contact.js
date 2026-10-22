import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Contact() {
  const contacts = [
    {
      type: "LinkedIn",
      value: "linkedin.com/in/allison-hua",
      link: "https://linkedin.com/in/allison-hua",
    },
    {
      type: "GitHub",
      value: "github.com/AllyBeary",
      link: "https://github.com/AllyBeary",
    },
    {
      type: "Portfolio",
      value: "AllyBeary.github.io/allison-hua-portfolio",
      link: "https://AllyBeary.github.io/allison-hua-portfolio/",
    },
    {
      type: "Email",
      value: "allyth2004@gmail.com",
      link: "mailto:allyth2004@gmail.com",
    },
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [showForm, setShowForm] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you! Your message has been sent.");
    setFormData({ name: "", email: "", message: "" });
    setShowForm(false);
  };

  return (
    <section
      className="container min-vh-100 py-5 bg-primary-subtle"
      aria-label="Contact Section"
    >
      <h1 className="display-4 text-center mb-3">Contact</h1>
      <hr className="mb-3" style={{ width: "50%", margin: "0 auto" }} />
      {/* Contact Table */}
      <div className="row justify-content-center">
        <div className="row justify-content-center col-md-5 mb-4">
          <table
            className="table table-bordered text-center col-md-5 mb-0"
            aria-label="Contact Links Table"
          >
            <thead className="table-light">
              <tr>
                <th colSpan={2}>Let's Connect!</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((c) => (
                <tr key={c.type}>
                  <td>{c.type}</td>
                  <td>
                    <a
                      href={c.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-primary"
                      aria-label={`Open ${c.type} link in new tab`}
                    >
                      {c.value}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
            <caption
              class="text-secondary fs-6"
              style={{ captionSide: "bottom", marginTop: 0, paddingTop: 0 }}
            >
              Table of Contacts
            </caption>
          </table>
        </div>
      </div>
      {/* Toggle button */}
      <p className="text-center mb-3">
        <button
          className="btn btn-link"
          onClick={() => setShowForm(!showForm)}
          aria-expanded={showForm}
          aria-controls="emailForm"
        >
          <em>Let's talk ASAP.</em> ⬇️
        </button>
      </p>
      {/* Email Form */}
      <div id="emailForm" className={`collapse ${showForm ? "show" : ""}`}>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Sender Name:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-control"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  aria-label="Enter your name"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Sender Email:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  aria-label="Enter your email"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Email Message:
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="form-control"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  required
                  aria-label="Enter your message"
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary w-100"
                aria-label="Send email"
              >
                Send Email
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
