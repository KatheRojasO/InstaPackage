export function getFullDate(eta) {
  let dateObject = new Date(eta);

  return dateObject.toLocaleString("en-US", { dateStyle: "full" });
}

export function getShortTime(eta) {
  let dateObject = new Date(eta);

  return dateObject.toLocaleTimeString([], { timeStyle: "short" });
}
