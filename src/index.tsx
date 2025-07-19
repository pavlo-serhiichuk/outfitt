import React from 'react';
import {createRoot} from 'react-dom/client';
import './assets/style/style.scss'
import {App} from "./app/App";

const root = createRoot(document.getElementById('root'));

root.render(<App />);