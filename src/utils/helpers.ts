export const isValid = (x: any) => {
  return ((x !== "") && (x !== null) && (x !== undefined) && (x !== NaN));
}