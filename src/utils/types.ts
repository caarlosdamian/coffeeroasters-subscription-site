export interface HomeCoffes {
  id: string;
  title: string;
  desc: string;
  img: string;
}

export interface MenuLinks {
  id: number;
  label: string;
  path: string;
}

export interface StepsWorks {
  id: string;
  title: string;
  desc: string;
}

export interface CoffeOption {
  id: string;
  title: string;
  desc: string;
}

export interface CoffeSection {
  id: string;
  section: String;
  question: string;
  options: CoffeOption[];
}
