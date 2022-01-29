import { VI } from "../Languages";

export function numberHelpers(number: number, language:object) {

  let tail_type = language===VI?["", "N", "Tr", "Tỉ", "N Tỉ"]:["", "Th", "Mil", "Bil", "Th Bil"];
  let i = 0;

  while (number >= 1000) {
    number /= 1000;
    i++;
  }

  number = Math.round(number * 10) / 10;

  return number + `${tail_type[i]}`;
}
