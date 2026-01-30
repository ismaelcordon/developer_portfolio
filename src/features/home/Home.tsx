import { useTranslation } from "react-i18next";
import TypingText from "../../components/TypingText";
import TerminalParallax3DEffect from "./TerminalParallax3DEffect";
import { SPRITE_URL } from "../../constants/paths";
import SocialButton from "../../components/SocialButton";
import DownloadResumeButton from "../../components/DownloadResumeButton";
import { trackOutboundClick } from "../../analytics/umami";
import { TechItem } from "./types/TechItem";
import TechItemView from "./TechItemView";

import KotlinPng from "../../assets/tech_stack/kotlin.png";
import SwiftPng from "../../assets/tech_stack/swift.png";
import NodeJSPng from "../../assets/tech_stack/nodejs.png";
import PostgreSQLPng from "../../assets/tech_stack/postgresql.png";
import TypescriptPng from "../../assets/tech_stack/typescript.png";
import GitHubPng from "../../assets/tech_stack/github.png";
import GitPng from "../../assets/tech_stack/git.png";

export default function Home() {
    const { t } = useTranslation();

    const handleGithubClick = () => {
        trackOutboundClick("github");
        window.open("https://github.com/icdominguez", "_blank");
    };

    const handleLinkedinClick = () => {
        trackOutboundClick("linkedin");
        window.open(
            "https://linkedin.com/in/ismael-cordon-dominguez/",
            "_blank",
        );
    };

    const techStack: TechItem[] = [
        {
            imageUrl: KotlinPng,
            name: "Kotlin",
        },
        {
            imageUrl: SwiftPng,
            name: "Swift",
        },
        {
            imageUrl: GitHubPng,
            name: "GitHub Actions",
        },
        {
            imageUrl: NodeJSPng,
            name: "NodeJS",
        },
        {
            imageUrl: PostgreSQLPng,
            name: "PostgreSQL",
        },
        {
            imageUrl: TypescriptPng,
            name: "Typescript",
        },
        {
            imageUrl: GitPng,
            name: "Git",
        },
    ];

    return (
        <section id="home">
            <div className="w-full flex items-center justify-center pt-20 pb-20">
                <div className="w-full max-w-7xl grid md:grid-cols-[1.1fr_0.9fr] items-start px-4 md:px-8">
                    {/* Left Column */}
                    <div className="w-full flex flex-col items-center md:items-start">
                        <div className="flex flex-row items-center">
                            <span className="inline-block animate-wave text-3xl sm:text-4xl lg:text-6xl">
                                👋
                            </span>
                            <h1 className="w-full text-3xl sm:text-4xl lg:text-6xl font-bold px-4">
                                {t("greeting")}
                            </h1>
                        </div>

                        <div className="mt-4">
                            <TypingText />
                        </div>

                        <p className="text-md md:text-lg text-center md:text-start text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl mb-12">
                            {t("home.description")}
                        </p>

                        <div className="md:hidden mb-12">
                            <h3 className="text-xl font-semibold text-slate-900 dark:text-white text-center pb-12">
                                Tech Stack
                            </h3>

                            <div className="flex flex-wrap gap-2 justify-center">
                                {techStack.map((techStackItem, index) => (
                                    <TechItemView
                                        key={index}
                                        techItem={techStackItem}
                                    />
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-row gap-4 items-center">
                            <DownloadResumeButton location="home" />

                            <SocialButton
                                icon={`${SPRITE_URL}#github-icon`}
                                onClick={handleGithubClick}
                                label="GitHub button"
                            />

                            <SocialButton
                                icon={`${SPRITE_URL}#linkedin-icon`}
                                onClick={handleLinkedinClick}
                                label="LinkedIn button"
                            />
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="w-full hidden md:flex h-full items-center justify-center pl-12">
                        <TerminalParallax3DEffect />
                    </div>
                </div>
            </div>
        </section>
    );
}
