export type GameModule = {
  positionId?: number;
  _id: number;
  typeOfModule: string;
  title: string;
  description: string;
  question: string;
  answer: string[];
  image: string;
  locationCoordinates: number[];
  hint: string;
};

export type saveGameInfo = {
  titleOfGame: string;
  isPublished: string | boolean;
  description?: string | null;
  rating?: number | string | null;
  author?: string | null;
  image?: string | null;
  estimatedTimeMinutes?: number | string | null;
  gameModules?: GameModule[];
  startLocationCoordinates?: Array<number>;
};