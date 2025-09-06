import { motion } from "framer-motion";
import SectionWrapper from "../hoc/SectionWrapper";
import AuroraHero from './AuroraHero';
import { useTranslation } from 'react-i18next';
import React, { Suspense } from "react"

const ComputersCanvasWrapper = React.lazy(() => import('./ComputersCanvasWrapper'));

const Hero = () => {
  const { t, i18n } = useTranslation();
  const switchLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <section className={`relative w-full h-screen mx-auto mb-16 `}>
      <AuroraHero />
      <div
        className={`absolute inset-0 top-[150px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >

        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#2ECC71]' />
          <div className='w-1 sm:h-80 h-40 bg-gradient-to-b from-green-800 to-transparent' />
        </div>


        <div className="grid grid-cols-1 lg:grid-cols-2 mx-auto">
          {/* Left Column */}
          <div>

            <div>
              <h1 className={`heroHeadText text-white`}>
                {t('hero.title')}
              </h1>
              <p className={`heroSubText mt-12 text-white-100`}>
                {t('hero.description')}
              </p>
            </div>
            <div className="flex flex-col items-start space-x-5">
              <a href="#contact" id="consult-1" className='mt-10 px-4 py-3 bg-transparent border border-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75'>
                {t('hero.consultation.email')}
              </a>
              <a href={import.meta.env.VITE_MY_TELEGRAM} target="_blank" style={{ marginLeft: 0, paddingLeft: '1rem' }} id="consult-2" className='mt-10 px-4 py-3 bg-white text-green-700 font-semibold rounded-lg shadow-md hover:bg-green-200 hover:text-green-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75'>
                {t('hero.consultation.telegram')}
              </a>
            </div>
          </div>


          <div className="mt-20 lg:mt-0 lg:ml-20">
            <Suspense fallback={<div className="flex h-screen justify-center items-center">Loading...</div>}>
              <ComputersCanvasWrapper />
            </Suspense>
          </div>
        </div>
      </div>

      <div className="hidden sm:flex absolute bottom-10 sm:bottom-20 w-full justify-center items-center">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
      </div>
    </section>
  );
};

export default SectionWrapper(Hero, "home");
