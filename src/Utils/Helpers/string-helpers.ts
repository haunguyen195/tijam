export function removeAccents(str:string) {
  return str.normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd').replace(/Đ/g, 'D');
}

export function createUUID(){
  let time = new Date().getTime();
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    let r = (time + Math.random() * 16) % 16 | 0;
    time = Math.floor(time / 16);
    return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
  });
}
