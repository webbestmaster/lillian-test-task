/* global document, Element */

import {createRoot} from 'react-dom/client';

import {selector} from './const';
import {App} from './app/app';

const nodeWrapper: Element = document.querySelector(selector.appWrapper) || document.body;

createRoot(nodeWrapper).render(<App />);
