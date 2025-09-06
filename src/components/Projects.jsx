
import SectionWrapper from "../hoc/SectionWrapper";
import { FaLink, FaBookOpen } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const ProjectCard = () => {
  const { t, i18n } = useTranslation();
  const switchLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };
  return (
    <div className="mb-28">
        <p className={`sectionSubText `}>{t('projects.subtitle')}</p>
        <h2 className={`sectionHeadText`}>{t('projects.title')}</h2>
      <div className="bg-[#2ef1710d] rounded-xl p-6 md:p-10 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-lg">

        {/* Left Column */}
        <div className="flex-1 text-white">
          {/* Logo */}
          <div className="mb-4 opacity-70 uppercase tracking-wide text-sm font-bold">
            {/* LOGO<span className="text-gray-400">IPSUM</span> */}
          </div>

          {/* Title */}
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            {t('projects.myPortfolio.title')}
          </h2>

          {/* Description */}
          <p className="text-gray-300 mb-6 max-w-md">
            {t('projects.myPortfolio.description')}
          </p>

          {/* Action Buttons */}
          <div className="flex items-center gap-6 mb-6">
            <a
              href="https://portfolio.serhiishevchenko.com/" target="_blank"
              className="flex items-center text-sm text-gray-200 hover:text-white transition"
            >
              <FaBookOpen className="mr-2" />
              {t('projects.myPortfolio.link')}
            </a>
            <a
              href="https://github.com/SRSerhii/3d-developer-portfolio/tree/main" target="_blank"
              className="flex items-center text-sm text-gray-200 hover:text-white transition"
            >
              <FaLink className="mr-2" />
              {t('projects.myPortfolio.link_github')}
            </a>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {['#javascript', '#react', '#vite', '#tailwindcss', '#threejs'].map(tag => (
              <span
                key={tag}
                className="text-sm bg-green-400/20 text-green-400 px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Right Column - Project Image */}
        <div className="w-full lg:w-[45%]">
          <img
            src={t("projects.myPortfolio.image")}
            alt={t("projects.myPortfolio.img_alt")}
            loading="lazy"
            className="rounded-lg object-cover w-full h-auto"
          />
        </div>
      </div>

      <div className="bg-[#2ef1710d] rounded-xl p-6 md:p-10 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-lg mt-10">

        {/* Left Column */}
        <div className="w-full lg:w-[45%]">
          <img
            src={t("projects.nutritionBlog.image")}
            alt={t("projects.nutritionBlog.img_alt")}
            loading="lazy"
            className="rounded-lg object-cover w-full h-auto"
          />
        </div>

        {/* Right Column - Project Image */}
        <div className="flex-1 text-white lg:ml-24">
          {/* Logo */}
          <div className="mb-4 opacity-70 uppercase tracking-wide text-sm font-bold">
            {/* LOGO<span className="text-gray-400">IPSUM</span> */}
          </div>

          {/* Title */}
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            {t('projects.nutritionBlog.title')}
          </h2>

          {/* Description */}
          <p className="text-gray-300 mb-6 max-w-md">
            {t('projects.nutritionBlog.description')}
          </p>

          {/* Action Buttons */}
          <div className="flex items-center gap-6 mb-6">
            <a
              href="https://serhiishevchenko.com/" target="_blank"
              className="flex items-center text-sm text-gray-200 hover:text-white transition"
            >
              <FaBookOpen className="mr-2" />
              {t('projects.nutritionBlog.link')}
            </a>
            <a
              href="https://github.com/SRSerhii/hf-exercise-search-en/tree/main" target="_blank"
              className="flex items-center text-sm text-gray-200 hover:text-white transition"
            >
              <FaLink className="mr-2" />
              {t('projects.nutritionBlog.link_github')}
            </a>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {['#javascript', '#wordpress', '#firebase', '#restapi', '#nextjs'].map(tag => (
              <span
                key={tag}
                className="text-sm bg-green-400/20 text-green-400 px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(ProjectCard, "projects");