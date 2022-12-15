export type saveGameInfo = {
  _id: string;
  titleOfGame: string;
  isPublished: string | boolean;
  description?: string | null;
  uId?: string;
  author?: string | null;
  rating?: number | string | null;
  image?: string | undefined;
  estimatedTimeMinutes?: number | string | null;
  isPrivate: string | boolean;
  gameModules?: GameModule[];
  startingLocationCoordinates?: Array<number> | null;
  startLocation?: string | null;
};

export type GameModule = {
  _id: string;
  typeOfModule: string;
  title: string;
  description: string;
  question?: string;
  answer?: string;
  image?: string;
  locationCoordinates?: number[] | null;
  hint?: string;
};

