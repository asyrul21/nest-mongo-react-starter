export const composeArrayToString = (arr: any) => {
  if (arr.length === 1) {
    return arr[0];
  } else if (arr.length === 2) {
    return `${arr[0]} and ${arr[1]}`;
  } else {
    let s = '';
    arr.forEach((a: any, idx: number) => {
      if (idx === arr.length - 1) {
        s += `and ${a}`;
      } else {
        s += `${a}, `;
      }
    });
    return s;
  }
};
