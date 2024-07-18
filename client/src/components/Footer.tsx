import { useTranslation } from "react-i18next";

export default function Footer () {
    const { t } = useTranslation();

    return (
        <footer className="bg-slate-950 dark:bg-slate-50 text-white dark:text-black py-8 px-4">
            <div className="max-w-4xl mx-auto flex flex-wrap justify-center">
                <div className="w-full md:w-1/2 lg:w-1/3 p-4">
                    <h2 className="text-2xl font-semibold">Enoteca La Mela</h2>
                    <p className="text-sm">Hornsgatan 149<br />Stockholm, 117 34</p>
                    <p className="text-sm">{t("footer.phone")} 070-774 57 32<br />{t("footer.email")} enotecalamela@gmail.com</p>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/3 p-4">
                    <h2 className="text-xl font-semibold">{t("footer.openHours")}</h2>
                    <p className="text-sm">{t("footer.openHours.tue-thu")}<br />{t("footer.openHours.fri-sat")}</p>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/3 p-4">
                    <h2 className="text-xl font-semibold">Info</h2>
                    <p className="text-sm">{t("footer.info.dogsAreWelcome")}</p>
                    <p className="text-sm sm:text-nowrap">{t("footer.info.bookingInfo")}</p>
                </div>
            </div>
        </footer>
    )
}