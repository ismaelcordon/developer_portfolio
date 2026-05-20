import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import ChangeThemeButton from "./ChangeThemeButton";
import DefaultButton from "./DefaultButton";
import LanguageSelector from "./LanguageSelector/LanguageSelector";
import { useTranslation } from "react-i18next";
import { BASE_URL, SPRITE_URL } from "../constants/paths";

export default function NavBar() {
    const navRef = useRef<HTMLElement>(null);
    const [isMenuOpen, setMenuOpen] = useState(false);

    const { t } = useTranslation();

    useEffect(() => {
        if (navRef.current) {
            const height = navRef.current.offsetHeight;
            document.documentElement.style.setProperty(
                "--navbar-height",
                `${height}px`,
            );
        }
    }, []);

    const links = [
        { to: "home", label: t("nav.home") },
        { to: "about", label: t("nav.about") },
        { to: "experience", label: t("nav.experience") },
        { to: "projects", label: t("nav.projects") },
        { to: "/blog", label: t("nav.blog"), type: "route" },
        { to: "contact", label: t("nav.contact") },
    ];

    const anchorLinkClass =
        "px-4 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 rounded-full hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-all duration-300";

    return (
        <nav
            ref={navRef}
            className="sticky top-0 z-50 w-full pt-4 pb-4 bg-white/40 dark:bg-slate-950/40 backdrop-blur-xl border-b border-neutral-200/50 dark:border-neutral-800/50"
        >
            <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
                {/* Name */}
                <div className="flex flex-row items-center">
                    <svg className="w-8 h-6 bg-gray-200 dark:bg-slate-800 border-transparent rounded-md mr-2 text-blue-600">
                        <use href={`${SPRITE_URL}#terminal-icon`} />
                    </svg>

                    <a href={`${BASE_URL}#home`}>
                        <h1
                            className="cursor-pointer text-xl font-bold
                    hover:underline hover:underline-offset-4 hover:decoration-blue-600 xs:text-lg"
                        >
                            <span className="bg-linear-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                                ICD
                            </span>
                            <span>OMINGUEZ</span>
                        </h1>
                    </a>
                </div>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-6">
                    {links.map(({ to, label, type }) =>
                        type === "route" ? (
                            <Link key={to} to={to} className={anchorLinkClass}>
                                {label}
                            </Link>
                        ) : (
                            <a key={to} href={`${BASE_URL}#${to}`} className={anchorLinkClass}>
                                {label}
                            </a>
                        )
                    )}

                    {/*<Link to="/blog" className={anchorLinkClass}>
                        {t("nav.blog")}
                    </Link>*/}

                    <ChangeThemeButton />

                    <LanguageSelector />
                </div>

                {/* Mobile buttons */}
                <div className="md:hidden flex items-center gap-3 xs:gap-1">
                    <ChangeThemeButton />

                    <LanguageSelector />

                    <DefaultButton
                        iconId={isMenuOpen ? "close-icon" : "menu-icon"}
                        onClick={() => setMenuOpen(!isMenuOpen)}
                    />
                </div>

                {/* Mobile menu */}
                <div
                    className={`fixed top-16 left-0 right-0 z-40 md:hidden bg-white dark:bg-slate-950 shadow-lg transition-all duration-300 ${isMenuOpen
                        ? "top-16 opacity-100"
                        : "-top-full opacity-0 pointer-events-none"
                        }`}
                >
                    <ul className="flex flex-col text-sm">
                        {links.map(({ to, label, type }) =>
                            type === "route" ? (
                                <Link key={to} to={to} className={anchorLinkClass} onClick={() => setMenuOpen(false)}>
                                    {label}
                                </Link>
                            ) : (
                                <a key={to} href={`${BASE_URL}#${to}`} className={anchorLinkClass} onClick={() => setMenuOpen(false)}>
                                    {label}
                                </a>
                            )
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
}
