import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { App } from '../common/App';

export const router = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<App />}></Route>)
);
