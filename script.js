

    



    var inputArray = []; //when keys pressed they are stored here
    var calculationArray = [];//when operator pressed number and operator stored here

    var displayString = document.querySelector(".displayText");



    var keysCont = document.querySelector(".keysCont");
    keysCont.addEventListener("click",populateDisplay,false);




    function populateDisplay(e){

      var keyCapture = "";
      if(e.target !== e.currentTarget){ //checks whether the child of keysCont is being clicked or not
        if(e.target.className === "keyZero"){ //sees whick key was clicked
          keyCapture = "0";  //and records the number
          inputArray.push(keyCapture); // adds the number to current display value
          displayString.innerText = inputArray.join(""); // displays the display valu without commas from array
        }
        else if(e.target.className === "keyOne"){
          keyCapture = "1";
          inputArray.push(keyCapture); 
          displayString.innerText = inputArray.join("");
        }
        else if(e.target.className === "keyTwo"){
          keyCapture = "2";
          inputArray.push(keyCapture); 
          displayString.innerText = inputArray.join("");
        }
        else if(e.target.className === "keyThree"){
          keyCapture = "3";
          inputArray.push(keyCapture); 
          displayString.innerText = inputArray.join("");
        }
        else if(e.target.className === "keyFour"){
          keyCapture = "4";
          inputArray.push(keyCapture); 
          displayString.innerText = inputArray.join("");
        }
        else if(e.target.className === "keyFive"){
          keyCapture = "5";
          inputArray.push(keyCapture); 
          displayString.innerText = inputArray.join("");
        }
        else if(e.target.className === "keySix"){
          keyCapture = "6";
          inputArray.push(keyCapture); 
          displayString.innerText = inputArray.join("");
        }
        else if(e.target.className === "keySeven"){
          keyCapture = "7";
          inputArray.push(keyCapture); 
          displayString.innerText = inputArray.join("");
        }
        else if(e.target.className === "keyEight"){
          keyCapture = "8";
          inputArray.push(keyCapture); 
          displayString.innerText = inputArray.join("");
        }
        else if(e.target.className === "keyNine"){
          keyCapture = "9";
          inputArray.push(keyCapture); 
          displayString.innerText = inputArray.join("");
        }
        else if(e.target.className === "operatorKeys divide"){
          keyCapture = "/";
          calculationArray.push(inputArray.join(""));//stores first number to be calculated
          calculationArray.push(keyCapture);//stores operator to be used in calculation
          inputArray = []; //clears array for new number
          
        }
        
      }
        e.stopPropagation(); //stops function bubbling up through parent div
    }


    
    

    function add(a,b){
      return a + b;
    }

    function subtract(a,b){
      return a-b;
    }

    function divide(a,b){
      return a/b;
    }
  
    function multiply(a,b){
      return a*b;
    }	

    
    function operate(operator,a,b){

      if (operator === add){
        return add(a,b);
      }

      else if(operator === subtract){
        return subtract(a,b);
      }

      else if(operator === divide){
        return divide(a,b);
      }

      else if (operator === multiply){
        return multiply(a,b);
      }

      else{
        return;
      }


    }


    


  