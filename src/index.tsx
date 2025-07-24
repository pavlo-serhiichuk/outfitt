import React from 'react';
import {createRoot} from 'react-dom/client';
import '@/app/style/style.scss'
import {App} from "./app/App";
import {BrowserRouter} from "react-router";
import {StoreProvider} from "@/app/providers/StoreProvider/StoreProvider";

const root = createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <StoreProvider>
      <App/>
    </StoreProvider>
  </BrowserRouter>
);