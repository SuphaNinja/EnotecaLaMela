import { useState } from "react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuRadioGroup,
    DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import LanguageToggle from "./LanguageToggle";
import { ToggleTheme } from "./ui/toggleTheme";

export function MobileMenu() {
    const { t, i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false)
    return (
        <DropdownMenu onOpenChange={() => setIsOpen(!isOpen)}>
            <DropdownMenuTrigger asChild>
                <Button variant="link" className="" >
                    {isOpen ? (
                        <svg
                            className="block h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg
                            className="block h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    )}
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="">
                <DropdownMenuRadioGroup>
                    <Button asChild variant="link">
                        <Link to="#" className='font-semibold'>{t('navbar.home')}</Link>
                    </Button>
                    <Button asChild variant="link">
                        <Link to="#" className='font-semibold'>{t('navbar.menu')}</Link>
                    </Button>
                    <Button asChild variant="link">
                        <Link to="#" className='font-semibold'>{t('navbar.about')}</Link>
                    </Button>
                    <Button asChild variant="link">
                        <Link to="#" className='font-semibold'>{t('navbar.contact')}</Link>
                    </Button>
                    <div className="flex gap-4 items-center justify-evenly">
                        <LanguageToggle />
                        <ToggleTheme />
                    </div>
                </DropdownMenuRadioGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}