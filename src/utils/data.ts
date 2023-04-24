import {
  coffeBean,
  danche,
  espresso,
  gift,
  picollo,
  planalto,
  truck,
} from '../assets';
import { HomeCoffes, MenuLinks } from './types';

export const menuLinks: MenuLinks[] = [
  {
    id: 1,
    label: 'Home',
    path: '/',
  },
  {
    id: 2,
    label: 'About Us',
    path: '/about',
  },
  {
    id: 3,
    label: 'Create Your Plan',
    path: '/plan',
  },
];

export const homeCoffes: HomeCoffes[] = [
  {
    id: '1e',
    title: 'Gran Espresso',
    desc: 'Light and flavorful blend with cocoa and black pepper for an intense experience',
    img: espresso,
  },
  {
    id: '2e',
    title: 'Planalto',
    desc: 'Brazilian dark roast with rich and velvety body, and hints of fruits and nuts',
    img: planalto,
  },
  {
    id: '3e',
    title: 'Piccollo',
    desc: 'Mild and smooth blend featuring notes of toasted almond and dried cherry',
    img: picollo,
  },
  {
    id: '4e',
    title: 'Danche',
    desc: 'Ethiopian hand-harvested blend densely packed with vibrant fruit notes',
    img: danche,
  },
];

export const featureInfo: HomeCoffes[] = [
  {
    id: 'b24',
    title: 'Best quality',
    desc: 'Discover an endless variety of the world’s best artisan coffee from each of our roasters.',
    img: coffeBean,
  },
  {
    id: 'b25',
    title: 'Exclusive benefits',
    desc: 'Special offers and swag when you subscribe, including 30% off your first shipment.',
    img: gift,
  },
  {
    id: 'b26',
    title: 'Free shipping',
    desc: 'We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.',
    img: truck,
  },
];
