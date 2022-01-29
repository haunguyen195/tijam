import { GENDER } from "../Utils/Values";
import { Post } from "./post";

export class UserInfor {
  id: string;
  phoneNumber: string;
  nickname: string;
  firstName: string;
  lastName: string;
  avatar?: string;
  thumbnail?: string;
  name: string;
  reverseName: boolean;
  description?: string;
  gender: GENDER;
  dob?: Date;
  create_ts: Date;
  posts: Array<Post>;

  //social networks
  facebook?: string;
  instagram?: string;
  linkedin?: string;
  youtube?: string;
  twitter?: string;
  reddit?: string;
  skype?: string;
  email?: string;
  pinterest?: string;
  phoneNumberPublic?: string;


  constructor(id: string = "", phoneNumber: string = "", nickname: string = "", firstName: string = "",
              lastName: string = "", name: string = "", create_ts: Date = new Date(),
              reverseName: boolean = false, posts: Array<Post> = [], thumbnail: string = "", gender: GENDER = GENDER.CUSTOM) {
    this.id = id;
    this.thumbnail = thumbnail;
    this.gender = gender;
    this.phoneNumber = phoneNumber;
    this.nickname = nickname;
    this.firstName = firstName;
    this.lastName = lastName;
    this.name = name;
    this.create_ts = create_ts;
    this.reverseName = reverseName;
    this.posts = posts;
  }
}
