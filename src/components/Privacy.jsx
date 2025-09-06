import PrivacyPolicy from "../pages/PrivacyPolicy";
import PrivacyPolicyUa from "../pages/uk/PrivacyPolicy_ua";
import { Suspense } from 'react';
import { useTranslation } from 'react-i18next';

const privacyComponents = {
  en: PrivacyPolicy,
  uk: PrivacyPolicyUa,
};

const PrivacyWrapper = () => {
  const { t, i18n } = useTranslation();
  const SelectedPrivacyComponent = privacyComponents[i18n.language] || privacyComponents.en;
  const url = window.location.href;

  return (
    <div className='container mx-auto px-4 py-8'>

      <title>{t("meta.privacy.title")}</title>
      <meta name="title" content={t("meta.privacy.title")} />
      <meta name="description" content={t("meta.privacy.description")} />
      <meta name="author" content={t("meta.author")} />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="article" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={t("meta.privacy.title")} />
      <meta property="og:description" content={t("meta.privacy.description")} />
      <meta property="og:locale" content={t("meta.OgLocale")} />
      <meta property="og:site_name" content={t("meta.author")} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:site" content={url} />
      <meta property="twitter:title" content={t("meta.privacy.title")} />
      <meta property="twitter:description" content={t("meta.privacy.description")} />


      <Suspense fallback={<div>Loading...</div>}>
        <SelectedPrivacyComponent />
      </Suspense>
    </div>
  );
};

export default PrivacyWrapper;