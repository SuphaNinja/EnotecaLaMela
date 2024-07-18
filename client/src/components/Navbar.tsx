import { Button } from './ui/button';
import { Link } from 'react-router-dom';
import { ToggleTheme } from './ui/toggleTheme';
import { MobileMenu } from './MobileMenu';
import { useTranslation } from 'react-i18next';
import LanguageToggle from './LanguageToggle';

export default function Navbar() {
    const { t } = useTranslation();

    return (
        <nav className="bg-background shadow-md border-b">
            <div className="max-w-7xl mx-auto">
                <div className="relative flex h-16 px-2 sm:px-6 lg:px-8">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <MobileMenu />
                    </div>
                    <div className="flex-1 flex items-center justify-between">
                        <Link to="/" className="text-3xl mx-auto sm:mx-0 font-semibold hover:text-red-500 hover:underline transition-all">Enoteca La Mela</Link>
                        <div className="hidden sm:block sm:ml-6">
                            <div className="flex  gap-4">
                                <Button asChild variant="link">
                                    <Link to="#" className='text-lg'>{t('navbar.home')}</Link>
                                </Button>
                                <Button asChild variant="link">
                                    <Link to="#" className='text-lg'>{t('navbar.menu')}</Link>
                                </Button>
                                <Button asChild variant="link">
                                    <Link to="#" className='text-lg'>{t('navbar.about')}</Link>
                                </Button>
                                <Button asChild variant="link">
                                    <Link to="#" className='text-lg'>{t('navbar.contact')}</Link>
                                </Button>
                                <div className='flex items-center gap-4'>
                                    <ToggleTheme />
                                    <LanguageToggle />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}