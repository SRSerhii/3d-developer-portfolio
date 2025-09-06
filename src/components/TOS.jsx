import TermsOfService from "../pages/TermsOfService";
import TermsOfService_ua from "../pages/uk/TermsOfService_ua";
import { Suspense } from 'react';
import { useTranslation } from 'react-i18next';

const termsComponents = {
  en: TermsOfService,
  uk: TermsOfService_ua,
};

const TermsOfServiceWrapper = () => {
  const { t, i18n } = useTranslation();
  const SelectedTermsComponent = termsComponents[i18n.language] || termsComponents.en;
  const url = window.location.href;

  return (
    <div className='container mx-auto px-4 py-8'>

      <title>{t("meta.tos.title")}</title>
      <meta name="title" content={t("meta.tos.title")} />
      <meta name="description" content={t("meta.tos.description")} />
      <meta name="author" content={t("meta.author")} />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="article" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={t("meta.tos.title")} />
      <meta property="og:description" content={t("meta.tos.description")} />
      <meta property="og:locale" content={t("meta.OgLocale")} />
      <meta property="og:site_name" content={t("meta.author")} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:site" content={url} />
      <meta property="twitter:title" content={t("meta.tos.title")} />
      <meta property="twitter:description" content={t("meta.tos.description")} />


      <Suspense fallback={<div>Loading...</div>}>
        <SelectedTermsComponent />
      </Suspense>
    </div>
  );
};

export default TermsOfServiceWrapper;