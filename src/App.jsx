import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop";
import ScrollToHashElement from "./components/ScrollToHashElement";
import HomePage from "./pages/HomePage";
import TermsOfServiceWrapper from "./components/TOS";
import PrivacyWrapper from "./components/Privacy";
import i18n from "./i18n";

export default function App() {
  const detectedLang = sessionStorage.getItem("i18nextLng") || i18n.language;

  return (
    <BrowserRouter>
      <ScrollToTop />
      <ScrollToHashElement />
      <Routes>
        <Route path="/" element={<Navigate to={`/${detectedLang}`} replace />} />
        <Route path="/:lang" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/:lang/terms-of-service" element={<TermsOfServiceWrapper />} />
          <Route path="/:lang/privacy-policy" element={<PrivacyWrapper />} />
        </Route>
      </Routes>
    </BrowserRouter >
  );
}
