import React from 'react';
import {createRoot} from 'react-dom/client';
import '@/app/style/style.scss'
import {App} from "./app/App";
import {BrowserRouter} from "react-router";
import {StoreProvider} from "@/app/providers/StoreProvider/StoreProvider";
import {ThemeProvider} from "@/app/providers/ThemeProvider/ThemeProvider";

const root = createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <StoreProvider>
      <ThemeProvider>
        <App/>
      </ThemeProvider>
    </StoreProvider>
  </BrowserRouter>
);