export interface IData {
  destinations: IDestinations[];
  crew: ICrew[];
  technology: ITechnology[];
}

export interface ITechnology {
  name: string;
  images: {
    portrait: string;
    landscape: string;
  };
  description: string;
}

export interface ICrew {
  name: string;
  image: string;
  role: string;
  bio: string;
}
export interface IDestinations {
  name: string;
  image: string;
  description: string;
  distance: string;
  travel: string;
}
