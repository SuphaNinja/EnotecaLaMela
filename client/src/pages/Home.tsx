import { useTranslation } from "react-i18next";



export default function Home () {
    const { t } = useTranslation();
    return (
        <div className="w-full pb-24">
            <div className="relative h-[400px] sm:h-[500px] overflow-hidden w-full">
                <div className='absolute items-center left-1/2 rounded-b top-0 text-white transform -translate-x-1/2 z-50 dark:bg-slate-800/40 bg-slate-950/40 w-full sm:w-2/3 h-7'>
                    <div className="flex items-center justify-evenly  px-4">
                        <p className="text-sm font-extralight">Hornsgatan 149, 117 34</p>
                        <p className="font-bold">|</p>
                        <p className="text-sm font-extralight">{t("home.openHours")}</p>
                    </div>
                </div>
                <img
                    className="w-full object-cover h-full object-top dark:brightness-75 brightness-90" 
                    src="https://png.pngtree.com/thumb_back/fw800/background/20231103/pngtree-vintage-wine-cellar-featuring-textured-walls-and-impressive-oak-barrels-on-image_13773053.png"
                />
                <div className="flex flex-col text-slate-50 absolute top-0 z-10 w-full gap-6 sm:gap-10 h-full items-center sm:pt-16 pt-12">
                    <p className="sm:text-2xl text-xl text-center">{t("home.summerClosed")}</p>
                    <p className="sm:text-8xl text-5xl text-center">Enoteca La Mela</p>
                    <p className="sm:text-3xl text-2xl text-center">{t("home.wineAndCider")}</p>
                    <p className="text-lg text-center max-w-lg">{t("home.bookingInfo")}</p>
                </div>
            </div>
            <div className="flex flex-col items-center sm:pt-24 pt-12 sm:px-0 px-3">
                <div className="max-w-2xl">
                    <h2 className="sm:text-5xl text-3xl sm:mb-16 mb-10 text-center">{t("home.aboutUsTitle")}</h2>
                    <p className="sm:text-lg mb-10">{t("home.aboutTextOne")}</p>
                    <p className="sm:text-lg mb-10">{t("home.aboutTextTwo")}</p>
                    <p className="sm:text-lg mb-10">{t("home.aboutTextThree")}</p>
                    <p className="font-cursive sm:text-lg">Ci vediamo!</p>
                </div>
            </div>
        </div>
    )
}