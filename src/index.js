import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";

import lang_ch from "./translations/ch/lang.json";
import lang_en from "./translations/en/lang.json";

i18next.init({
  interpolation: { escapeValue: false },
  lng: 'ch',
  resources: {
    en: {
      lang: lang_en
    },
    ch: {
      lang: lang_ch
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
