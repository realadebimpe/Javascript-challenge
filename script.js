// 1st challenge

function exerciseOne(){
    // Create a variable named 'myName' and assign it a string containing your name
    var myName = "Adebimpe";
    // Please write answer above  
      return myName
    }
    function exerciseTwo(){
    // Create a variable named 'tripsAroundTheSun' and assign your age as a number:
    var tripsAroundTheSun = 26;
    // Please write answer above  
      return tripsAroundTheSun
    }
    function exerciseThree(){
    //Create a variable named 'pineappleOnPizza' and assign it a Boolean of whether or not you think pineapple belongs on pizza.
    var pineappleOnPizza = false;
    // Please write answer above 
      return pineappleOnPizza
    }

    console.log(exerciseOne);
    console.log(exerciseTwo);
    console.log(exerciseThree);

    // 2nd chllenge
    //Write a function that takes an array of strings and return the longest string in the array.

    const myArrays = ["Having", "fun", "with", "Javascript"]
    function longestString (arr) {
      let string = arr[0];
      for (i = 0; i <arr.length; i++){
         if (arr[i].length > string.length) {
           string = arr[i];
         }
      }
      return string;
    }
    document.write(longestString(myArrays));
    console.log(longestString(myArrays));