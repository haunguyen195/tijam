import { GENDER } from "../Values";

export function getColorGender(gender: GENDER = GENDER.CUSTOM) {
  switch (gender) {
    case GENDER.CUSTOM:
      return "#F5B120";
    case GENDER.MAN:
      return "#24A8AF";
    case GENDER.WOMEN:
      return "#DE3576";
  }
}

export function getIconGender(gender: GENDER = GENDER.CUSTOM) {
  switch (gender) {
    case GENDER.CUSTOM:
      return "gender-male-female-variant";
    case GENDER.MAN:
      return "gender-male";
    case GENDER.WOMEN:
      return "gender-female";
  }
}
