
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const location = window.location;

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);

    const currentPathWithoutLang = location.pathname.replace(/^\/(en|uk)/, '');
    navigate(`/${lang}${currentPathWithoutLang}${location.hash}`);
    document.documentElement.lang = i18n.language;

  };

  return (
    <div className='flex items-center gap-3'>
      <button
        type='button'
        className={`font-bold ${i18n.language === 'en' ? 'text-white' : 'text-secondary'}`}
        onClick={() => handleLanguageChange('en')}
      >
        🇺🇸 EN
      </button>
      <div className='w-px h-5 bg-gray-500'></div>
      <button
        type='button'
        className={`font-bold ${i18n.language === 'uk' ? 'text-white' : 'text-secondary'}`}
        onClick={() => handleLanguageChange('uk')}
      >
        🇺🇦 UK
      </button>
    </div>
  );
};

export default LanguageSwitcher;