import React, { Suspense } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Contact from '../components/Contact';
import ServicesSection from '../components/ServicesSection';
import ToolsSection from '../components/ToolsSection';
import Experience from '../components/Experience';
import Hero from '../components/Hero';
import Projects from '../components/Projects';


//const Contact = React.lazy(() => import('../components/Contact'));
const StarsCanvas = React.lazy(() => import('../components/canvas/Stars'));

const switchLanguage = (lang) => {
  i18n.changeLanguage(lang);
};

export default function HomePage() {
  const { lang } = useParams();
  const { t, i18n } = useTranslation();

  React.useEffect(() => {
    if (lang && i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }
  }, [lang, i18n]);

  const url = window.location.href;


  return (
    <>
      {/* Main tags for SEO */}
      <title>{t("meta.title")}</title>
      <meta name="title" content={t("meta.title")} />
      <meta name="description" content={t("meta.description")} />
      <meta name="keywords" content={t("meta.keywords")} />
      <meta name="author" content={t("meta.author")} />
      <link rel="canonical" href={url} />
      <meta name="robots" content="index, follow" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={t("meta.type")} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={t("meta.title")} />
      <meta property="og:description" content={t("meta.description")} />
      <meta property="og:image" content={t("meta.Img")} />
      <meta property="og:site_name" content={t("meta.author")} />
      <meta property="og:locale" content={t("meta.OgLocale")} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:site" content={url} />
      <meta property="twitter:title" content={t("meta.title")} />
      <meta property="twitter:description" content={t("meta.description")} />
      <meta property="twitter:image" content={t("meta.Img")} />
      <meta property="twitter:creator" content={t("meta.author")} />

      <Hero />
      <ServicesSection />
      <Experience />
      <ToolsSection />
      <Projects />
      <div className="relative z-0">

        <Contact />
        <Suspense fallback={<div>Loading...</div>}>
          <StarsCanvas />
        </Suspense>

      </div>
    </>
  );
}
