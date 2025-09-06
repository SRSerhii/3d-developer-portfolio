
import {
  FaHtml5, FaCss3Alt, FaReact, FaGithub, FaWordpress
} from 'react-icons/fa';
import {
  SiJavascript, SiTailwindcss, SiFirebase, SiNextdotjs, SiVercel, SiTypescript
} from 'react-icons/si';
import { TbFileTypeSql } from "react-icons/tb";
import SectionWrapper from "../hoc/SectionWrapper";
import { useTranslation } from 'react-i18next';


const techs = [
  { name: 'HTML 5', icon: <FaHtml5 size={40} />, label: 'HTML' },
  { name: 'CSS 3', icon: <FaCss3Alt size={40} />, label: 'CSS' },
  { name: 'JavaScript', icon: <SiJavascript size={40} />, label: 'JavaScript' },
  { name: 'TypeScript', icon: <SiTypescript size={40} />, label: 'TypeScript' },
  { name: 'React', icon: <FaReact size={40} />, label: 'React' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss size={40} />, label: 'Tailwind' },
  { name: 'Firebase', icon: <SiFirebase size={40} />, label: 'Firebase' },
  { name: 'Next.js', icon: <SiNextdotjs size={40} />, label: 'Next.js' },
  { name: 'Vercel', icon: <SiVercel size={40} />, label: 'Vercel' },
  { name: 'WordPress', icon: <FaWordpress size={40} />, label: 'WordPress' },
  { name: 'SQL', icon: <TbFileTypeSql size={40} />, label: 'SQL' },
  { name: 'GitHub', icon: <FaGithub size={40} />, label: 'GitHub' },

];

const ToolsSection = () => {

  const { t, i18n } = useTranslation();
  const switchLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="mb-24">
      <div className="sectionHeader">
        <p className="sectionSubText">{t('tools.subtitle')}</p>
        <h2 className="sectionHeadText"> {t('tools.title')}</h2>
        <p className="text-white sm:text-md">
          {t('tools.description')}
        </p>
      </div>
      <div className="grid gap-6 sm:gap-4 md:gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl mx-auto">
        {techs.map((tech, index) => (
          <div key={index} className="bg-[#2ef1710d] border border-[#2ef1710d] rounded-xl p-6 sm:p-4 md:p-6 flex flex-col items-center justify-center 
          text-center min-h-[180px] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(46,204,113,0.15)] 
      hover:border-[#2ECC71] hover:bg-[radial-gradient(circle,rgba(46,241,113,0.3)_0%,rgba(46,241,113,0.1)_100%)]">
            <div className="mb-4 text-[#2ECC71] text-3xl">
              {tech.icon}
            </div>
            <span className="text-white text-lg font-medium">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(ToolsSection, "tools");
