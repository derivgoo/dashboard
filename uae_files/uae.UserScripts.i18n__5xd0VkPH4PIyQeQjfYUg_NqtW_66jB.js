/**
 * Internationalization (i18n) utility for OutSystems
 * Loads language files on demand and provides translations
 * Stores translations in both memory and localStorage for offline access
 */

// Cache for loaded language files
const languageCache = {};

// LocalStorage key prefix for storing translations
const STORAGE_PREFIX = "i18n_translations_";

/**
 * Store translations in localStorage
 * @param {string} language - Language code
 * @param {Object} translations - Translations object
 */
function storeInLocalStorage(language, translations) {
  try {
    localStorage.setItem(
      `${STORAGE_PREFIX}${language}`,
      JSON.stringify(translations)
    );
  } catch (error) {
    console.warn(
      `Failed to store ${language} translations in localStorage:`,
      error
    );
  }
}

/**
 * Get translations from localStorage
 * @param {string} language - Language code
 * @returns {Object|null} - Translations object or null if not found
 */
function getFromLocalStorage(language) {
  try {
    const stored = localStorage.getItem(`${STORAGE_PREFIX}${language}`);
    return stored ? JSON.parse(stored) : null;
  } catch (error) {
    console.warn(
      `Failed to retrieve ${language} translations from localStorage:`,
      error
    );
    return null;
  }
}

// Track loading promises to prevent duplicate loading
const loadingPromises = {};

/**
 * Load a language file and store it in memory
 * @param {string} language - Language code to load
 * @returns {Promise<Object>} - Promise resolving to the translations object
 */
function loadLanguageFile(language) {
  // Check if this language is already being loaded
  if (loadingPromises[language]) {
    return loadingPromises[language];
  }

  // Check if translations are already in memory
  if (languageCache[language]) {
    return Promise.resolve(languageCache[language]);
  }

  // Create a new loading promise
  loadingPromises[language] = new Promise((resolve, reject) => {
    // In OutSystems, we need to use the appropriate method to load resources
    fetch(`https://deriv-ae-translation.pages.dev/${language}.json`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `Failed to load ${language} translations: ${response.statusText}`
          );
        }
        return response.json();
      })
      .then((translations) => {
        // Store in memory cache and localStorage
        languageCache[language] = translations;
        storeInLocalStorage(language, translations);
        resolve(translations);
      })
      .catch((error) => {
        console.error(`Error loading ${language} translations:`, error);
        reject(error);
      })
      .finally(() => {
        // Clean up the loading promise
        delete loadingPromises[language];
      });
  });

  return loadingPromises[language];
}

/**
 * Get translation for a key in the specified language
 * @param {string} language - Language code (e.g., 'en', 'ar')
 * @param {string} key - The English text to translate
 * @param {Object} options - Optional parameters
 * @param {boolean} options.fallback - Whether to return the key if translation is not found (default: true)
 * @returns {string} - The translated text
 */
function getTranslation(language, key, options = { fallback: true }) {
  // Default to English if no language specified
  language = language || "en";

  // If language is English, just return the key (since keys are in English)
  if (language === "en") {
    return key;
  }

  // Check if translations for this language are loaded in memory
  if (!languageCache[language]) {
    // Try to get from localStorage if not in memory
    const storedTranslations = getFromLocalStorage(language);
    if (storedTranslations) {
      // Load from localStorage into memory for future use
      languageCache[language] = storedTranslations;
    } else {
      console.warn(
        `Translations for ${language} not available in memory or localStorage. Using fallback.`
      );
      return options.fallback ? key : "";
    }
  }

  // Return the translation or fall back to the key if not found
  return languageCache[language][key] || (options.fallback ? key : "");
}

/**
 * Preload a language file to avoid delays during user interaction
 * @param {string} language - Language code to preload
 * @returns {Promise<boolean>} - Success status
 */
async function preloadLanguage(language) {
  try {
    await loadLanguageFile(language);
    return true;
  } catch (error) {
    return false;
  }
}

/**
 * Clear the language cache to free memory or force reloading
 * @param {string} language - Specific language to clear, or all if not specified
 */
function clearCache(language) {
  if (language) {
    // Clear specific language from memory and localStorage
    delete languageCache[language];
    try {
      localStorage.removeItem(`${STORAGE_PREFIX}${language}`);
    } catch (error) {
      console.warn(
        `Failed to remove ${language} translations from localStorage:`,
        error
      );
    }
  } else {
    // Clear all languages from memory and localStorage
    Object.keys(languageCache).forEach((lang) => {
      delete languageCache[lang];
      try {
        localStorage.removeItem(`${STORAGE_PREFIX}${lang}`);
      } catch (error) {
        console.warn(
          `Failed to remove ${lang} translations from localStorage:`,
          error
        );
      }
    });
  }
}

// Export functions for OutSystems
window.i18n = {
  getTranslation,
  preloadLanguage,
  clearCache,
};
