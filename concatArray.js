const { template } = require("@babel/core");

function concatArray(array1, array2) {
  if (
    (array1 === null || array1 === undefined) &&
    (array1 === null || array2 === undefined)
  )
    return undefined;
  else if (array1?.length === 0 && array2?.length === 0)
    return []; // array1 และ array2 ทั้งคู่เป็น empty array ทั้งคู่ ให้ return empty array
  else if (array1 === null || array1 === undefined || array1.length === 0)
    return array2; //array1 มีค่าเป็น empty array ,null,undefined ให้ return element ของ array2
  else if (array2 === null || array2 === undefined || array2.length === 0)
    return array1; ////array2 มีค่าเป็น empty array ,null,undefined ให้ return element ของ array1
  else return array1.concat(array2);
}
module.exports = concatArray;
