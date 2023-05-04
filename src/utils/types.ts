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


export interface SelectionState {
  coffe1: {
    value: string;
    selected: boolean;
  };
  coffe2: {
    value: string;
    selected: boolean;
  };
  coffe3: {
    value: string;
    selected: boolean;
  };
  coffe4: {
    value: string;
    selected: boolean;
  };
  coffe5: {
    value: string;
    selected: boolean;
  };
}