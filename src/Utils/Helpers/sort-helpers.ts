import { Post } from "../../Models";

interface countryCode  {
  name: string,
  label: string,
  value: string,
  value_number: number,
  code: string
}

export function compareCountryCode(a: countryCode, b: countryCode) {
  if (a.value_number < b.value_number) {
    return -1;
  }
  if (a.value_number > b.value_number) {
    return 1;
  }
  return 0;
}

export function compareKey(a: Array<any>, b: Array<any>) {
  if (a[0] < b[0]) {
    return -1;
  }
  if (a[0] > b[0]) {
    return 1;
  }
  return 0;
}

export function compareCreate_ts(a: Post, b: Post) {
  if (a.create_ts.getTime() > b.create_ts.getTime()) {
    return -1;
  }
  if (a.create_ts.getTime() < b.create_ts.getTime()) {
    return 1;
  }
  return 0;
}

export function compareTime(a: any, b: any) {
  if (a.time<b.time) {
    return 1;
  }
  if (a.time>b.time) {
    return -1;
  }
  return 0;
}
