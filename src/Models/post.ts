import { GENDER, TYPE } from "../Utils/Values";

export class Post {
  id?: string;
  userId?: string;
  latitude?: number;
  longitude?: number;
  geohash?: string;
  avatar?: string;
  label?: string;
  type?: TYPE;
  duration?: Date;
  content?: string;
  image?: string | object;
  image_height?: number;
  image_width?: number;
  nickname?: string;
  create_ts?: Date;

  distance?:number
}
