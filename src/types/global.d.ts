export type GameModule = {
  positionId?: number;
  _id: string;
  typeOfModule: string;
  title: string;
  description: string;
  question: string;
  answer: string;
  image: string;
  locationCoordinates: number[] | null;
  hint: string;
};

export type saveGameInfo = {
  _id: string;
  titleOfGame: string;
  isPublished: string | boolean;
  description?: string | null;
  rating?: number | string | null;
  author?: string | null;
  image?: string | undefined;
  estimatedTimeMinutes?: number | string | null;
  gameModules?: GameModules[];
  startLocationCoordinates?: Array<number>;
  startLocation?: string | null;
};