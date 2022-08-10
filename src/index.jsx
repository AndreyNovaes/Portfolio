import { ChakraProvider, ColorModeScript, theme } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import ContextProvider from './context/ContextProvider';
import reportWebVitals from './misc/reportWebVitals';
import * as serviceWorker from './misc/serviceWorker';

// maybe organize the providers into a separate file

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <StrictMode>
    <ContextProvider>
      <ChakraProvider resetCSS theme={theme}>
        <ColorModeScript />
        <App />
      </ChakraProvider>
    </ContextProvider>
  </StrictMode>
);

serviceWorker.unregister();

reportWebVitals();
