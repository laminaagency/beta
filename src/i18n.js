// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// 1. Import your translation files (or use a loader/backend)
import enTranslation from './locales/en.json'; // Base language
import esTranslation from './locales/es.json'; // Spanish translation

// 2. Define the resource structure
const resources = {
  en: {
    translation: enTranslation
  },
  es: {
    translation: esTranslation
  }
};

i18n
  .use(initReactI18next) // passes i18n instance to react-i18next
  .init({
    resources,
    lng: 'es', // set the initial language
    fallbackLng: 'es', // use en if a translation is missing in the current language

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;