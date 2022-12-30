function shortLongShort(string1, string2) {
  let shorter = string1.length > string2 ? string2 : string1;
  let longer = string1.length > string2 ? string1 : string2;

  console.log(shorter + longer + shorter);

}

shortLongShort('abc', 'defgh');    // "abcdefghabc"
shortLongShort('abcde', 'fgh');    // "fghabcdefgh"
shortLongShort('', 'xyz');         // "xyz"