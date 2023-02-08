function cleanUp(string) {

  return string.replace(/[!@#$%^&*(),.?":{}|\'\"<>\-_=+]/g, " ").replace(/\s+/gi, " ");

}



console.log(cleanUp("---what's my +*& line?"));    // " what s my line "