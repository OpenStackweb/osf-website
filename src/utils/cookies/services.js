import { triggerTagManagerConsentEvent } from "../eventTriggers";

const services = [
  {
    name: "google-tag-manager",
    title: "Google Tag Manager",
    purposes: ["marketing"],
    default: true,
    onInit: () => {
      triggerTagManagerConsentEvent("default", {
        "analytics_storage": "denied",
      });
    }
  },
  {
    name: "google-analytics",
    title: "Google Analytics",
    purposes: ["marketing"],
    cookies: [/^_ga(_.*)?/],
    default: true,
    onAccept: () => {
      triggerTagManagerConsentEvent("update", { "analytics_storage": "granted" });
    },
    onDecline: () => {
      triggerTagManagerConsentEvent("update", { "analytics_storage": "denied" });
    }
  }
];

export default services;
