var saved_value ='0';
var value = '0';
var saved_opr = '=';
var isCalculating = false;
var isInputing = false;
var sign = '+';
var isDecimal = false;
function soft_reset(){
   value = '0';
   isInputing = false;
   sign ='+';
   isDecimal = false;
}
function hard_reset(){
   soft_reset();
   saved_opr = '=';
   isCalculating = false;
}

function input(number){
    var screen = document.getElementById('screen');
    switch(number){
      case 'C': 
        hard_reset();
        break;
      case 'sign': 
        if(sign ==="+") 
        { 
          value= '-'+value; 
          sign='-';
        }            
        else{
          value= value.slice(1);
          sign='+';
        }; 
        break;
       case '.': 
        if(!isDecimal){
           value+='.';
           isDecimal = true;
        }
        break;
      case '0': 
        if(isInputing) 
          value+='0'; 
        break;
      case '%': 
        value = parseFloat(screen.innerHTML)/100; 
        break;
      default: 
        if(isInputing) 
          value+=number+''; 
        else{
          value=number+'';
          isInputing = true;
       }
    }
   screen.innerHTML=value; 
}

function calculate(opr){
  var screen = document.getElementById("screen");
  if(!isCalculating){
     saved_value = screen.innerHTML;
     isCalculating = true;
  }else{
    var first_value = parseFloat(saved_value);
    var second_value = parseFloat(screen.innerHTML);
    switch(saved_opr){
      case "/": 
        saved_value = first_value / second_value;
        break;
      case "*":
        saved_value = first_value * second_value;
        break;
      case "-":
        saved_value = first_value - second_value;
        break;
      case "+":
        saved_value = first_value + second_value;
        break;
    }
  }
  if(opr === '=')
    isCalculating = false;
  soft_reset();
  saved_opr = opr;
  screen.innerHTML=saved_value; 
}