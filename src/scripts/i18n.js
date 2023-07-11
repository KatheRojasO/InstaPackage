import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "../data/translation-english.json";
import es from "../data/translation-spanish.json";
import sv from "../data/translation-swedish.json";

const resources = { en, es, sv };

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
