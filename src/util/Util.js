const BloodGroups = [
  "OPositive",
  "ONegative",
  "APositive",
  "ANegative",
  "BPositive",
  "BNegative",
  "ABPositive",
  "ABNegative",
];
const status = ["Collected", "Verified", "Delivered"];
export const getBlooodGroup = (num) => {
  num = num % 8;
  return BloodGroups[num];
};
export const getBloodStatus = (num) => {
  num = num % 3;
  return status[num];
};
