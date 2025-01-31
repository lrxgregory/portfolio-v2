export const languages = {
  fr: "Français",
  en: "English",
  es: "Español",
};

export const defaultLang = "fr";

// Importer les traductions de manière synchrone
import en from "../locales/en.json";
import es from "../locales/es.json";
import fr from "../locales/fr.json";

const translations = { fr, en, es };

export type Language = keyof typeof languages;

// Fonction pour obtenir la langue depuis l'URL
export const getLangFromUrl = (url: URL): Language => {
  const [, lang] = url.pathname.split("/");
  if (lang in languages) return lang as Language;
  return defaultLang;
};

// Fonction pour vérifier si une langue est valide
export const isValidLang = (lang: string): lang is Language => {
  return lang in languages;
};

// Fonction pour récupérer la traduction d'une clé donnée
export const t = (key: string, lang: Language = defaultLang): string => {
  const keys = key.split(".");
  let value = translations[lang];

  for (const k of keys) {
    if (!value || typeof value !== "object") return key;
    value = value[k];
  }

  return value?.toString() || key;
};

export const translatePath = (
  currentPath: string,
  newLang: Language,
): string => {
  const segments = currentPath.split("/").filter(Boolean);
  if (segments.length > 0 && isValidLang(segments[0])) {
    segments[0] = newLang;
  } else {
    segments.unshift(newLang);
  }
  return `/${segments.join("/")}`;
};
