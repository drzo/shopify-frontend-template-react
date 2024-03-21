import App from "./App";
import { createRoot } from "react-dom/client";
import { initI18n } from "./utils/i18nUtils";

// Ensure that locales are loaded before rendering the app
initI18n().then(() => {
  const root = createRoot(document.getElementById("app"));
  root.render(<App />);
});

import React from 'react';
import { useOrgData } from '@shopify/app-bridge-react';

// A component that uses the org data from the app bridge context
export function WithOrgData(props: { children: React.ReactNode }) {
  const orgData = useOrgData();

  // If the org data is not available, show a loading message
  if (orgData == null) {
    return <div>Loading...</div>;
  }

  // Otherwise, pass the org data as a prop to the children
  return React.cloneElement(React.Children.only(props.children), {
    orgData,
  });
}

import { useAppBridge } from '@shopify/app-bridge-react';
import { PlusExperience } from '@shopify/app-bridge/actions';

// A context that provides access to the plus experience action
export const PlusExperienceContext = React.createContext<PlusExperience | null>(
  null,
);

// A provider that creates and provides the plus experience action
export function PlusExperienceProvider(props: { children: React.ReactNode }) {
  const app = useAppBridge();
  const plusExperience = PlusExperience.create(app);

  return (
    <PlusExperienceContext.Provider value={plusExperience}>
      {props.children}
    </PlusExperienceContext.Provider>
  );
}

// A hook that consumes the plus experience context
export function usePlusExperience() {
  const plusExperience = React.useContext(PlusExperienceContext);
  if (plusExperience == null) {
    throw new Error(
      'usePlusExperience must be used within a PlusExperienceProvider',
    );
  }
  return plusExperience;
}
