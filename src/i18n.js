import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from 'i18next-http-backend';
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";
import ar from "./artranslation.json"
import en from "./translation.json"
const resources = {
  en: {
    translation: en
  },
  ar: {
    translation: ar
  }
};


i18n
  .use(Backend)
  .use(I18nextBrowserLanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    fallbackLng: 'en',
    debug: true,

    interpolation: {
      escapeValue: true // react already safes from xss
    }
  });

  export default i18n;