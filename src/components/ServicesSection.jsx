
import SectionWrapper from "../hoc/SectionWrapper";
import { useTranslation } from 'react-i18next';

const WebDevIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="18" rx="2" ry="2"></rect>
    <line x1="2" y1="9" x2="22" y2="9"></line>
  </svg>
);

const FullStackIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6"></polyline>
    <polyline points="8 6 2 12 8 18"></polyline>
  </svg>
);

const EcommerceIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="9" cy="21" r="1"></circle>
    <circle cx="20" cy="21" r="1"></circle>
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
  </svg>
);

const OptimizationIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="1" x2="12" y2="23"></line>
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
  </svg>
);

const ServicesSection = () => {
const { t, i18n } = useTranslation();
const switchLanguage = (lang) => {
  i18n.changeLanguage(lang);
};

const servicesData = [
  {
    icon: <WebDevIcon />,
    title: t('servicesData.webDevelopment.title'),
    description: t('servicesData.webDevelopment.description'),
    tags: [t('servicesData.webDevelopment.tags.0'), t('servicesData.webDevelopment.tags.1'), t('servicesData.webDevelopment.tags.2'), t('servicesData.webDevelopment.tags.3'), t('servicesData.webDevelopment.tags.4')]
  },
  {
    icon: <FullStackIcon />,
    title: t('servicesData.fullStackDevelopment.title'),
    description: t('servicesData.fullStackDevelopment.description'),
    tags: [t('servicesData.fullStackDevelopment.tags.0'), t('servicesData.fullStackDevelopment.tags.1'), t('servicesData.fullStackDevelopment.tags.2'), t('servicesData.fullStackDevelopment.tags.3')]
  },
  {
    icon: <EcommerceIcon />,
    title: t('servicesData.ecommerceSolutions.title'),
    description: t('servicesData.ecommerceSolutions.description'),
    tags: [t('servicesData.ecommerceSolutions.tags.0'), t('servicesData.ecommerceSolutions.tags.1'), t('servicesData.ecommerceSolutions.tags.2'), t('servicesData.ecommerceSolutions.tags.3')]
  },
  {
    icon: <OptimizationIcon />,
    title: t('servicesData.websiteOptimization.title'),
    description: t('servicesData.websiteOptimization.description'),
    tags: [t('servicesData.websiteOptimization.tags.0'), t('servicesData.websiteOptimization.tags.1'), t('servicesData.websiteOptimization.tags.2'), t('servicesData.websiteOptimization.tags.3')]
  }
];


  return (
    <div className="mb-24">
      <div className="sectionHeader">
        <p className="sectionSubText">{t('services.subtitle')}</p>
        <h2 className="sectionHeadText">
          {t('services.title')}
        </h2>
        <p className="text-white sm:text-md">
          {t('services.description')}
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
        {servicesData.map((service, index) => (
          <div key={index} className="group bg-[#2ef1710d] border border-[#2ef1710d] rounded-2xl p-10 md:p-8 flex flex-col transition-all duration-300 
              hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(46,204,113,0.1)] hover:border-[#2ECC71]">
            <div className="w-12 h-12 mb-6 flex items-center justify-center 
              rounded-md bg-[rgba(46,204,113,0.1)] text-[#2ECC71] text-2xl">{service.icon}</div>
            <h3 className="text-2xl md:text-2xl font-semibold text-white mb-4">{service.title}</h3>
            <p className="text-gray-400 text-base md:text-[0.95rem] leading-relaxed mb-8 flex-grow">{service.description}</p>
            <div className="flex flex-wrap gap-3 mt-auto">
              {service.tags.map((tag, tagIndex) => (
                <span key={tagIndex} className="border border-[#333] text-gray-400 text-sm font-medium px-3 py-1 rounded-md transition-colors duration-300
                    group-hover:shadow-[0_10px_30px_rgba(46,204,113,0.1)] group-hover:border-[#2ECC71] group-hover:text-[#2ECC71]">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(ServicesSection, "services");
