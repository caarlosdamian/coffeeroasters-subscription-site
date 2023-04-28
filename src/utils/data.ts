import {
  australia,
  canada,
  coffeBean,
  danche,
  espresso,
  gift,
  picollo,
  planalto,
  truck,
  uk,
} from '../assets';
import { HomeCoffes, MenuLinks, StepsWorks } from './types';

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

export const worksSteps: StepsWorks[] = [
  {
    id: '01',
    title: 'Pick your coffee',
    desc: 'Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out.',
  },
  {
    id: '02',
    title: 'Choose the frequency',
    desc: 'Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal.',
  },
  {
    id: '03',
    title: 'Receive and enjoy!',
    desc: 'We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience.',
  },
];

export const headQuartrsInfo = [
  {
    id: 'h1',
    img: uk,
    country: 'United Kingdom',
    address: [
      {
        id: 'ha1',
        label: '68  Asfordby Rd',
      },
      {
        id: 'ha2',
        label: 'Alcaston',
      },
      {
        id: 'ha3',
        label: 'SY6 1YA',
      },
      {
        id: 'ha4',
        label: '+44 1241 918425',
      },
    ],
  },
  {
    id: 'h2',
    img: canada,
    country: 'Canada',
    address: [
      {
        id: 'ha5',
        label: '1528  Eglinton Avenue',
      },
      {
        id: 'ha6',
        label: 'Toronto',
      },
      {
        id: 'ha7',
        label: 'Ontario M4P 1A6',
      },
      {
        id: 'ha8',
        label: '+1 416 485 2997',
      },
    ],
  },
  {
    id: 'h3',
    img: australia,
    country: 'Australia',
    address: [
      {
        id: 'ha9',
        label: '36 Swanston Street',
      },
      {
        id: 'ha10',
        label: 'Kewell',
      },
      {
        id: 'ha11',
        label: 'Victoria',
      },
      {
        id: 'ha12',
        label: '+61 4 9928 3629',
      },
    ],
  },
];
