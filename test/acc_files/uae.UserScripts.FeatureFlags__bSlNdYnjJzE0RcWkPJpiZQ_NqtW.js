/**
 * Feature Flags System with Versioning
 * 
 * VERSION USAGE:
 * - Increment VERSION when changing default values, adding or removing flags
 * - When version changes, all users get the new defaults
 * - Between versions, user preferences are preserved
 * 
 * RULES:
 * - Flag names must be UPPERCASE with underscores
 * - Access flags at https://home.deriv.com/dashboard/dev/flags
 */

// Current version - increment when changing defaults, adding or removing flags
const VERSION = "1.0.28";

// Define feature flags with default values
const FEATURE_FLAGS = [
    { name: "ENABLE_AXIOS", enabled: false },
    { name: "PERSONAL_DETAILS", enabled: false},
];

// Initialize or update feature flags
(function initFeatureFlags() {
    // Get stored data
    const storedData = localStorage.getItem("_uae:featureFlags");
    const stored = storedData ? JSON.parse(storedData) : null;

    // Check if we need to update flags
    const needsUpdate = !stored ||
        stored.version !== VERSION ||
        !haveSameFlags(FEATURE_FLAGS, stored.flags);

    if (needsUpdate) {
        // If version changed, use defaults; otherwise preserve user settings
        const flags = !stored || stored.version !== VERSION
            ? FEATURE_FLAGS
            : mergeFlags(FEATURE_FLAGS, stored.flags);

        // Save to localStorage
        localStorage.setItem("_uae:featureFlags", JSON.stringify({
            version: VERSION,
            flags: flags
        }));
    }
})();

// Helper: Check if flag arrays have the same flags
function haveSameFlags(newFlags, savedFlags) {
    if (!savedFlags || newFlags.length !== savedFlags.length) return false;

    // Check if all flags exist with same defaults
    return newFlags.every(newFlag => {
        const savedFlag = savedFlags.find(f => f.name === newFlag.name);
        return savedFlag && savedFlag.enabled === newFlag.enabled;
    });
}

// Helper: Merge new flags with saved user preferences
function mergeFlags(newFlags, savedFlags) {
    return newFlags.map(newFlag => {
        const savedFlag = savedFlags.find(f => f.name === newFlag.name);
        return {
            name: newFlag.name,
            enabled: savedFlag ? savedFlag.enabled : newFlag.enabled,
            staging: savedFlag ? savedFlag.staging : newFlag.staging
        };
    });
}

// Global: Toggle a feature flag
globalThis.toggleFeatureFlag = function (flagName) {
    if (!flagName) return;

    const storedData = localStorage.getItem("_uae:featureFlags");
    if (!storedData) {
        location.reload();
        return;
    }

    const data = JSON.parse(storedData);
    data.flags = data.flags.map(flag =>
        flag.name === flagName
            ? { ...flag, enabled: !flag.enabled }
            : flag
    );

    localStorage.setItem("_uae:featureFlags", JSON.stringify(data));
};

// Global: Get a feature flag value
globalThis._getFeatureFlagValueByName = function (flagName) {
    const storedData = localStorage.getItem("_uae:featureFlags");
    if (!storedData) return null;

    const data = JSON.parse(storedData);
    const flag = data.flags.find(flag => flag.name === flagName);
    return flag?.staging ? flag?.staging : (flag?.enabled || false);
};
