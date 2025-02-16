import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'; // ✅ استيراد Provider
import App from './App';
import store from './Store'; // ✅ تأكد أن `store.js` مضبوط بشكل صحيح

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}> {/* ✅ لف التطبيق بـ Provider */}
      <App />
    </Provider>
  </React.StrictMode>
);
