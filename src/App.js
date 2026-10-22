import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/App.scss";
import Home from "./pages/Home";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function TabBar() {
  const location = useLocation();

  const tabs = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/resume", label: "Resume" },
    { path: "/projects", label: "Projects" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <header>
      <nav className="bg-light shadow-sm">
        <ul className="nav justify-content-center py-3">
          {tabs.map((tab) => (
            <li key={tab.path} className="nav-item">
              <Link
                to={tab.path}
                className={`nav-link ${
                  location.pathname === tab.path ? "active" : "text-dark"
                }`}
              >
                {tab.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <TabBar />
      <a href="#main" className="visually-hidden-focusable">
        Skip to main content
      </a>
      <main
        className="container-fluid"
        style={{ backgroundColor: "#a9c5f1ff" }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <footer className="text-center py-4 bg-light">© 2026 Allison Hua</footer>
    </Router>
  );
}