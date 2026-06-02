import {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useRef,
    useState,
} from "react";
import { useTranslation } from "react-i18next";
import { trackLanguageChange, trackThemeChange } from "../analytics/umami";

type Theme = "light" | "dark";
interface Language {
    code: "es" | "en";
    flag: string;
    name: string;
}

interface SettingsContextType {
    theme: Theme;
    toggleTheme: () => void;
    language: Language;
    switchLanguage: (language: Language) => void;
}

export const LANGUAGES: Record<string, Language> = {
    es: { code: "es", flag: "https://flagcdn.com/es.svg", name: "Español" },
    en: { code: "en", flag: "https://flagcdn.com/gb.svg", name: "English" },
};

const getSystemTheme = (): Theme => {
    if (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
        return "dark";
    }
    return "light";
};

const getBrowserLanguage = (): Language => {
    const browserLang = navigator.language.split("-")[0];
    return LANGUAGES[browserLang] || LANGUAGES.es;
};

const SettingsContext = createContext<SettingsContextType | undefined>(
    undefined,
);

export function SettingsProvider({
    children,
    initialLanguage,
}: {
    children: ReactNode;
    // Si se indica (p. ej. desde la URL /[lang]/blog), tiene prioridad sobre
    // localStorage: la URL es la fuente de verdad del idioma en el blog.
    initialLanguage?: "es" | "en";
}) {
    const { i18n } = useTranslation();

    const userInitiatedRef = useRef(false);

    const [theme, setTheme] = useState<Theme>(() => {
        const savedTheme = localStorage.getItem("theme");
        return (savedTheme as Theme) || getSystemTheme();
    });

    const [language, setLanguage] = useState<Language>(() => {
        if (initialLanguage) {
            return LANGUAGES[initialLanguage];
        }
        const savedLanguage = localStorage.getItem("language");
        if (savedLanguage) {
            try {
                return JSON.parse(savedLanguage) as Language;
            } catch {
                return getBrowserLanguage();
            }
        }
        return getBrowserLanguage();
    });

    useEffect(() => {
        localStorage.setItem("theme", theme);

        const root = window.document.documentElement;
        if (theme === "dark") {
            root.classList.add("dark");
        } else {
            root.classList.remove("dark");
        }
    }, [theme]);

    useEffect(() => {
        localStorage.setItem("language", JSON.stringify(language));
        i18n.changeLanguage(language.code);
    }, [language]);

    useEffect(() => {
        if (!userInitiatedRef.current) return;
        userInitiatedRef.current = false;
        trackThemeChange(theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
    };

    const switchLanguage = (newLanguage: Language) => {
        trackLanguageChange(newLanguage.code);
        setLanguage(newLanguage);
    };

    return (
        <SettingsContext.Provider
            value={{ theme, language, toggleTheme, switchLanguage }}
        >
            {children}
        </SettingsContext.Provider>
    );
}

export function useSettings() {
    const context = useContext(SettingsContext);
    if (context === undefined) {
        throw new Error("useSettings must be used within a SettingsProvider");
    }
    return context;
}
