
import { Link } from "react-router-dom";
import { FaTelegramPlane } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { useTranslation } from 'react-i18next';


export default function Footer() {
    const year = new Date().getFullYear();
    const { t, i18n } = useTranslation();
    const switchLanguage = (lang) => {
        i18n.changeLanguage(lang);
    };
    const lang = i18n.language.startsWith("uk") ? "uk" : "en";
    return (
        <footer className="bg-green-900 text-white py-8 mt-20">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">

                <div>
                    <h3 className="text-lg font-semibold mb-3">{t('footer.contacts')}</h3>
                    <div className="flex space-x-12">
                        <a href={`mailto:${import.meta.env.VITE_MY_WORK_EMAIL}`}>
                            <MdOutlineMailOutline className="h-12 w-12 hover:text-green-300" />
                        </a>
                        <a href={import.meta.env.VITE_MY_TELEGRAM} target="_blank" rel="noreferrer">
                            <FaTelegramPlane className="h-12 w-12 text-blue-400 hover:text-blue-500" />
                        </a>
                    </div>
                </div>

                <div>
                    <h3 className="text-lg font-semibold mb-3">{t('footer.legal')}</h3>
                    <ul className="space-y-2 text-green-100 text-sm">
                        <li><Link to={`/${lang}/terms-of-service`} className="hover:text-green-300">{t('footer.terms')}</Link></li>
                        <li><Link to={`/${lang}/privacy-policy`} className="hover:text-green-300">{t('footer.privacy')}</Link></li>
                    </ul>
                </div>

            </div>

            <div className="border-t border-green-800 mt-8 pt-4 text-center text-green-200 text-sm">
                © {year} {t('footer.rights')}
            </div>
        </footer>
    );
}
