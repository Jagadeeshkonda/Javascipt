function isEven(num){
 if(num%2 === 0){
     return true;
 }
 else{
     return false;
 }
}

function areBothOdd(num1, num2){
    if(num1%2 !=0 && num2%2 != 0){
        return true;
    }
    else{
        return false;
    }
   }

   function getFullName(firstName,  lastName){
       var first = firstName.concat(" ");
       var last = lastName;
    var fullname = first.concat(lastName);
    return fullname;
   }

   function getLengthOfWord( word1){
    var lene = word1.length;
    return lene;
   }

   function isSameLength(word1, word2){
    var len1 = word1.length; var len2 = word2.length
    if(len1 === len2){
        return true;
    }
    else{
        return false;
    }
   }


   var getNthElement = function(array,n){
       if((n < array.length - 1)&& array.length > 0){
        return array[n];
       }
       else{
        return undefined;
       }
   }


 var getLastElement = function(array){
    return array[array.length-1]
   }


var obj = {
    key: "value"
    };

var key = obj[key];
   function getProperty(obj, key) {
       var key = key
    console.log(obj[key])
   }

   var myObj = obj;

   function addProperty(myObj, key){

    myObj[key] = true;
    return myObj;
   }

   function removeProperty(obj, key){
    delete obj[key];
    return undefined;
   }







