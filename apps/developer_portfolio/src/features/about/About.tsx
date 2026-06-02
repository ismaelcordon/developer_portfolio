import { useTranslation, Trans } from "react-i18next";
import { SectionTitle } from "../../components/SectionTitle";
import MarqueeBanner from "./MarqueeBanner";
import { SPRITE_URL } from "../../constants/paths";

export default function About() {
    const { t } = useTranslation();

    return (
        <section id="about">
            <div className="w-full flex flex-col items-center justify-center bg-slate-50/50 dark:bg-slate-900/50 pb-20">
                <SectionTitle title={t("nav.about")} />

                <div className="max-w-7xl mx-auto pt-8 pb-20 px-4 md:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div className="order-2 lg:order-1">
                            <div className="space-y-6">
                                <p className="whitespace-pre-line text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
                                    <Trans
                                        i18nKey="about.description"
                                        components={{
                                            1: (
                                                <span className="text-blue-600 dark:text-blue-400 font-semibold" />
                                            ),
                                        }}
                                        parent="span"
                                    ></Trans>
                                </p>
                            </div>
                        </div>
                        <div className="order-1 lg:order-2 flex flex-col items-center">
                            <div className="relative">
                                <div className="absolute -inset-4 bg-linear-to-br from-blue-500/20 to-slate-700/40 rounded-3xl -rotate-3"></div>
                                <div className="absolute -inset-4 bg-linear-to-tr from-slate-700/40 to-blue-500/15 rounded-3xl rotate-3 opacity-60"></div>
                                <div className="relative w-72 h-80 md:w-80 md:h-96 rounded-2xl overflow-hidden shadow-2xl shadow-slate-300/20 dark:shadow-blue-900/20">
                                    <img
                                        src="/assets/DSC_0016.JPG"
                                        className="w-full h-full object-cover object-[center_20%]"
                                    />
                                </div>
                                <div className="absolute inset-0 bg-linear-to-t from-slate-900/10 dark:from-slate-950/40 to-transparent rounded-2xl"></div>
                            </div>
                            <div className="mt-8 flex items-center gap-2 text-slate-400">
                                <svg className="w-6 h-6 text-blue-400">
                                    <use href={`${SPRITE_URL}#location-icon`} />
                                </svg>
                                <span className="font-medium">
                                    Madrid, Spain
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <MarqueeBanner />

                <div className="w-full grid grid-cols-3 gap-4 pt-20 text-center px-4 md:justify-items-center">
                    <div>
                        <div className="text-3xl md:text-4xl font-bold text-transparent bg-linear-to-r from-blue-600 to-cyan-500 bg-clip-text mb-1">
                            5+
                        </div>
                        <div className="text-sm text-slate-600 dark:text-slate-400">
                            {t("about.years_of_experience").toUpperCase()}
                        </div>
                    </div>

                    <div>
                        <div className="text-3xl md:text-4xl font-bold text-transparent bg-linear-to-r from-blue-600 to-cyan-500 bg-clip-text mb-1">
                            7+
                        </div>
                        <div className="text-sm text-slate-600 dark:text-slate-400">
                            {t("about.apps_developed").toUpperCase()}
                        </div>
                    </div>

                    <div>
                        <div className="text-3xl md:text-4xl font-bold text-transparent bg-linear-to-r from-blue-600 to-cyan-500 bg-clip-text mb-1">
                            1+
                        </div>
                        <div className="text-sm text-slate-600 dark:text-slate-400">
                            {t("about.apps_in_store").toUpperCase()}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
