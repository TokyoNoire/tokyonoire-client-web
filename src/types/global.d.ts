export type saveGameInfo = {
  _id: string;
  isPublished: string | boolean;
  isPrivate: string | boolean;
  titleOfGame: string;
  description?: string | null;
  uId?: string;
  author?: string | null;
  rating?: number | string | null;
  gameImageURL?: string | undefined;
  estimatedTimeMinutes?: number | string | null;
  gameModules?: GameModule[];
  startingLocationCoordinates?: Array<number> | null;
  startLocation?: string | null;
};

export type GameModule = {
  _id: string;
  typeOfModule: string;
  title: string;
  description: string;
  imageURL?: string;
  locationCoordinates?: number[] | null;
  question?: string;
  answer?: string;
  hint?: string;
};

