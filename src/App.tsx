import { Routes, Route } from "react-router-dom";
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

export default function App() {
    return (
        <SettingsProvider>
            <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-white transition-colors duration-500">
                <NavBar />

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
