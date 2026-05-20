import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import { SettingsProvider } from "./contexts/SettingsContext";
import About from "./features/about/About";
import Contact from "./features/contact/Contact";
import Experience from "./features/experience/Experience";
import Home from "./features/home/Home";
import Projects from "./features/projects/Projects";
import BlogPage from "./features/blog/BlogPage";
import BlogPostPage from "./features/blog/BlogPostPage";

function ScrollToHash() {
    const location = useLocation();

    useEffect(() => {
        if (!location.hash) {
            window.scrollTo({ top: 0, left: 0, behavior: "auto" });
            return;
        }

        const id = location.hash.replace("#", "");
        const target = document.getElementById(id);

        if (target) {
            target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    }, [location]);

    return null;
}

export default function App() {
    return (
        <SettingsProvider>
            <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-white transition-colors duration-500">
                <NavBar />
                <ScrollToHash />

                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                <Home />
                                <About />
                                <Experience />
                                <Projects />
                                <Contact />
                                <Footer />
                            </>
                        }
                    />
                    <Route path="/blog" element={<BlogPage />} />
                    <Route path="/blog/:slug" element={<BlogPostPage />} />
                </Routes>
            </div>
        </SettingsProvider>
    );
}
