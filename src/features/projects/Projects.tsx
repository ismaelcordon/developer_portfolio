import { useTranslation } from "react-i18next";
import { SectionTitle } from "../../components/SectionTitle";
import { ProjectItem } from "./types/ProjectItem";
import ProjectItemView from "./ProjectItemView";
import MasterMemeCover from "../../assets/projects/master_meme.png";
import EchoJournalCover from "../../assets/projects/echo_journal.png";
import NoteMarkCover from "../../assets/projects/note_mark.png";
import LazyPizzaCover from "../../assets/projects/lazy_pizza.png";

export default function Projects() {
    const { t } = useTranslation();

    const projects: ProjectItem[] = [
        {
            title: "Lazy Pizza",
            description: "projects.lazy_pizza",
            imageUrl: LazyPizzaCover,
            projectUrl: "https://github.com/icdominguez/LazyPizza",
            technologies: [
                "Jetpack Compose",
                "MVI Arquitecture",
                "Koin",
                "Firebase Firestore",
                "Gateway API",
                "Responsive Design",
            ],
        },
        {
            title: "Note Mark",
            description: "projects.note_mark",
            imageUrl: NoteMarkCover,
            projectUrl: "https://github.com/galahseno/NoteMark",
            technologies: [
                "Jetpack Compose",
                "MVI Arquitecture",
                "Koin",
                "Room",
                "Ktor",
                "Offline-First",
                "Responsive Design",
            ],
        },
        {
            title: "Echo Journal",
            description: "projects.echo_journal",
            imageUrl: EchoJournalCover,
            projectUrl: "https://github.com/icdominguez/echo_journal",
            technologies: [
                "Jetpack Compose",
                "MVI Arquitecture",
                "Dagger Hilt",
                "OpenAI API",
            ],
        },
        {
            title: "Master Meme",
            description: "projects.master_meme",
            imageUrl: MasterMemeCover,
            projectUrl: "https://github.com/icdominguez/master_meme",
            technologies: [
                "Jetpack Compose",
                "MVI Arquitecture",
                "Dagger Hilt",
            ],
        },
    ];

    return (
        <section
            id="projects"
            className="flex flex-col items-center justify-center bg-slate-50/50 dark:bg-slate-900/50 pb-20"
        >
            <SectionTitle title={t("nav.projects")} />

            <div className="grid md:grid-cols-2 xl:grid-cols-4 px-4 lg:px-12 xl:px-12 gap-6">
                {projects.map((project, index) => (
                    <ProjectItemView key={index} project={project} />
                ))}
            </div>
        </section>
    );
}
