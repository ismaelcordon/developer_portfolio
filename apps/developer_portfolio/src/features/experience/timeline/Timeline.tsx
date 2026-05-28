import { useTranslation } from "react-i18next";
import { ExperienceItem } from "../types/ExperienceItem";
import TimelineItem from "./TimelineItem";

export default function Timeline() {
    const { t } = useTranslation();

    const experiences: ExperienceItem[] = [
        {
            from: new Date(2026, 4),
            to: null,
            company: "Entelgy - Corporate Security BBVA",
            position: "Android & iOS developer",
            shortDescription: t(
                "experience.descriptions.corporate_security_bbva",
            ),
            highlights: [
                {
                    description: "Kotlin",
                    type: "android",
                },
                {
                    description: "Ktor",
                    type: "android",
                },
                {
                    description: "Notifications",
                    type: "android",
                },
                {
                    description: "Biometric authentication",
                    type: "android",
                },
                {
                    description: "Room",
                    type: "android",
                },
                {
                    description: "JUnit5",
                    type: "android",
                },
                {
                    description: "Swift",
                    type: "ios",
                },
                {
                    description: "Notifications",
                    type: "ios",
                },

                {
                    description: "Biometric authentication",
                    type: "ios",
                },
            ],
        },
        {
            from: new Date(2025, 6),
            to: null,
            company: "App Soluciones",
            position: "Freelance",
            shortDescription: t("experience.descriptions.appsoluciones"),
            highlights: [
                {
                    description: "Kotlin",
                    type: "android",
                },
                {
                    description: "Ktor",
                    type: "android",
                },
                {
                    description: "Room",
                    type: "android",
                },
                {
                    description: "JUnit5",
                    type: "android",
                },
                {
                    description: "CI/CD",
                    type: "android",
                },
                {
                    description: "Swift",
                    type: "ios",
                },
                {
                    description: "Swift Data",
                    type: "ios",
                },
                {
                    description: "Notifications",
                    type: "ios",
                },
                {
                    description: "URL Session",
                    type: "ios",
                },
                {
                    description: "NodeJS",
                    type: "backend",
                },
                {
                    description: "Analytics",
                    type: "backend",
                },
                {
                    description: "PostgreSQL",
                    type: "backend",
                },
            ],
        },
        {
            from: new Date(2024, 1),
            to: new Date(2025, 6),
            company: "Stradivarius",
            position: "Android Native Developer",
            shortDescription: t("experience.descriptions.stradivarius"),
            highlights: [
                {
                    description: "Kotlin",
                    type: "android",
                },
                {
                    description: "MVI Architecture",
                    type: "android",
                },
                {
                    description: "Retrofit",
                    type: "android",
                },
                {
                    description: "Room",
                    type: "android",
                },
                {
                    description: "Google Analytics",
                    type: "android",
                },
                {
                    description: "Crashlytics",
                    type: "android",
                },
                {
                    description: "Growthbook",
                    type: "android",
                },
                {
                    description: "JUnit4",
                    type: "android",
                },
                {
                    description: "Ecommerce",
                    type: "domain",
                },
            ],
        },
        {
            from: new Date(2022, 2),
            to: new Date(2024, 1),
            company: "Astrata International",
            position: "Android Full Stack Developer",
            shortDescription: t("experience.descriptions.astrata"),
            highlights: [
                {
                    description: "Kotlin",
                    type: "android",
                },
                {
                    description: "React Native",
                    type: "android",
                },
                {
                    description: "Push notifications",
                    type: "android",
                },
                {
                    description: "Jetpack Compose",
                    type: "android",
                },
                {
                    description: "MVI architecture",
                    type: "android",
                },
                {
                    description: "Room",
                    type: "android",
                },
                {
                    description: "Workers",
                    type: "android",
                },
                {
                    description: "Content providers",
                    type: "android",
                },
                {
                    description: "CI/CD",
                    type: "android",
                },
                {
                    description: "Kotlin/Quarkuss",
                    type: "backend",
                },
                {
                    description: "Firebase",
                    type: "backend",
                },
            ],
        },
        {
            from: new Date(2021, 10),
            to: new Date(2022, 2),
            company: "Hasten Group",
            position: "Android Native Developer",
            shortDescription: t("experience.descriptions.hasten"),
            highlights: [
                {
                    description: "Kotlin",
                    type: "android",
                },
                {
                    description: "MVVM Architecture",
                    type: "android",
                },
                {
                    description: "Redsys SDK",
                    type: "android",
                },
                {
                    description: "Medios de pago",
                    type: "domain",
                },
            ],
        },
        {
            from: new Date(2021, 3),
            to: new Date(2021, 9),
            company: "ICP Logística",
            position: "Android Full Stack Developer",
            shortDescription: t("experience.descriptions.icp"),
            highlights: [
                {
                    description: "Java",
                    type: "android",
                },
                {
                    description: "Kotlin",
                    type: "android",
                },
                {
                    description: "MVP Architecture",
                    type: "android",
                },
                {
                    description: "MVVM Architecture",
                    type: "android",
                },
                {
                    description: "Volley",
                    type: "android",
                },
                {
                    description: "Google Maps",
                    type: "android",
                },
                {
                    description: "Firebase",
                    type: "android",
                },
                {
                    description: "C#",
                    type: "backend",
                },
                {
                    description: "SQL Server",
                    type: "backend",
                },
            ],
        },
        {
            from: new Date(2020, 3),
            to: new Date(2021, 2),
            company: "Serban biometrics",
            position: "Android Full Stack Developer",
            shortDescription: t("experience.descriptions.serban"),
            highlights: [
                {
                    description: "Java",
                    type: "android",
                },
                {
                    description: "Retrofit",
                    type: "android",
                },
                {
                    description: "Angular",
                    type: "frontend",
                },
                {
                    description: "Java",
                    type: "backend",
                },
                {
                    description: ".NET/C#",
                    type: "backend",
                },
                {
                    description: "Biometrías",
                    type: "domain",
                },
            ],
        },
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 md:px-8">
            {experiences.map((item, index) => (
                <div key={index}>
                    <TimelineItem item={item} />
                </div>
            ))}
        </div>
    );
}
