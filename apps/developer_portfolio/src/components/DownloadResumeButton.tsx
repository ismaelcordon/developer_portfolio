import { useTranslation } from "react-i18next";
import { SPRITE_URL } from "../constants/paths";
import { useSettings } from "../contexts/SettingsContext";
import { ResumeLocation, trackResumeDownloadClick } from "../analytics/umami";

type DownloadResumeButtonProps = {
    location: ResumeLocation;
};

export default function DownloadResumeButton({
    location,
}: DownloadResumeButtonProps) {
    const { t } = useTranslation();
    const { language } = useSettings();

    function handleClick() {
        trackResumeDownloadClick(location);
        const resumeUrl = `${import.meta.env.VITE_SERVER_BASE_URL}/cv?lang=${language.code}`;
        window.open(resumeUrl, "_blank");
    }

    return (
        <button
            onClick={handleClick}
            className="group flex items-center gap-3 px-8 py-4 bg-linear-to-r from-blue-600 to-cyan-500 text-white font-medium rounded-full shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 cursor-pointer hover:scale-105 transition-all duration-300"
        >
            <svg className="w-5 h-5 group-hover:animate-bounce">
                <use href={`${SPRITE_URL}#download-icon`} />
            </svg>
            {t("download_resume")}
        </button>
    );
}
