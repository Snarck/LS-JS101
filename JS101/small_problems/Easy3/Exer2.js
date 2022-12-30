/*
Idea 1: 
Create a function that creates the banner itself. The banner by default should be 4 x 5
+--+
|  |
|  |
|  |
+--+

function logInBox(string) {
  let bannerText = string.split('')
  bannerText.unshift("|", " ");
  bannerText.push(" ", "|");
  
  let mediumBanner = ["|"];
  mediumBanner[bannerText.length -2] = " ";
  mediumBanner.fill(" ", 1, (bannerText.length -2));
  mediumBanner.push("|");
  
  let topBanner = ["+"]
  topBanner[bannerText.length -2] = "-";
  topBanner.fill("-", 1, (bannerText.length - 2));
  topBanner.push("+");


  //mediumBanner.fill(0);
  console.log(topBanner.join(""));
  console.log(mediumBanner.join(""));
  console.log(bannerText.join(""));
  console.log(mediumBanner.join(""));
  console.log(topBanner.join(""));
}

*/

let newArr = [];
let bannerLength = 20; 


function logInBox(string) {

  if(string.length > bannerLength) {
    let arr = string.split(" ");
    let newString = "";
    let format = (bannerLength - 4);
    
    for(let i = 0; i < arr.length; i += 1) {

      if (newString.length < format) {
        newString += arr[i] + " ";
      }

      if(newArr[0] && newString.length >= format){
        newString = newString.padEnd((newArr[0].length -4), " ");
        newArr.push("| " + newString + " |");
        newString = "";
      } else if (newString.length >= format) {
        newArr.push("| " + newString + "|");
        newString = "";
      }
    }

    if(newString.length > 0 && newArr[0]) {
      newString = newString.padEnd((newArr[0].length -4), " ");
      newArr.push("| " + newString + " |");
      newString = ""
    } else if (newString.length > 0) {
      newArr.push("| " + newString + "|");
      newString = "";
    }
  }




    /*
    arr.forEach(element => {
      
      if (newString.length < (bannerLength - 4)) {
        newString += element + " ";
        console.log(newString);
       }
       if (newArr[0] && newString.length >= bannerLength -4) {
        newString = newString.padEnd((newArr[0].length -4), " ")
        newArr.push("| " + newString + " |");
        console.log(newString);
        newString = "";

       } else if(newString.length >= bannerLength - 4) {
          newArr.push("| " + newString + "|");
          console.log(newString);
          newString = "";
        } else {

        }
    })

    console.log(newArr.join("\n"));
    console.log(newArr[0].length);
    console.log(newArr[1].length);
  }
*/

  let topBox = `+ ${"-".repeat(newArr[0].length - 4)} +`;
  let medBox = `| ${" ".repeat(newArr[0].length - 4)} |`;
  let stringBox = `${newArr.join("\n")}`;
  let finished = `${topBox}\n${medBox}\n${stringBox}\n${medBox}\n${topBox}`;
  console.log(finished);
}


logInBox('To boldly go where no one has gone before.');
