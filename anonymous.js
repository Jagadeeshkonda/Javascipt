var odd = function(array){
    var res = [];
    for(var i=0;i<=array.length-1 ;i++){
        if(array[i]%2 !==0){
            res.push(array[i])
        }
        
    }
   return res;
} 

(function(array){
    var res = [];
    for(var i=0;i<=array.length-1 ;i++){
        if(array[i]%2 !==0){
            res.push(array[i])
        }
        
    }
   return res;   
})([2,5,8,13])

var titleCaps1 =function(str1)
{
    var i,j;
    for(i=0;i<str1.length;i++)
    { 
        var titleCaps = "" ;
        for(j=0;j<str1[i].length;j++)
        {
            if(j==0)
            {
                titleCaps = titleCaps + str1[i][j].toUpperCase();
            }
            else
            {
            titleCaps= titleCaps + str1[i][j]
            }
        }
        console.log(titleCaps)

    }
}

(function(str1){
    var i,j;
    for(i=0;i<str1.length;i++)
    { 
        var titleCaps = "" ;
        for(j=0;j<str1[i].length;j++)
        {
            if(j==0)
            {
                titleCaps = titleCaps + str1[i][j].toUpperCase();
            }
            else
            {
            titleCaps= titleCaps + str1[i][j]
            }
        }
        console.log(titleCaps)

    }
})(["first","debugging","lesson","guvi","geek"])

var arrsum = function(array){
    
    var sum = 0;
    for(var i=0;i<=array.length-1 ;i++){
        sum = sum + array[i];
        
        
    }
   return sum;
} 

(function(array){
    var sum = 0;
    for(var i=0;i<=array.length-1 ;i++){
        sum = sum + array[i];
        
        
    }
   return sum;    

})([10,10,10]);


var isprime = function(array){
    var res = []
    for(i=0;i<=array.length-1 ;i++){
        var flag =0
        for(j=2;j<array[i]/2;j++){
            if(array[i]%j ===0){
                flag = 1;
                break;
            }

        }
        if(flag === 0){
            res.push(array[i]);
        }
    }
    return res;
}

(function(array){
    var res = []
    for(i=0;i<=array.length-1 ;i++){
        var flag =0
        for(j=2;j<array[i]/2;j++){
            if(array[i]%j ===0){
                flag = 1;
                break;
            }

        }
        if(flag === 0){
            res.push(array[i]);
        }
    }
    return res;
})([6,13,15,23,19])


var palindrome = function(str){
    var res = [];
    for(i=0;i<=str.length-1 ;i++){
        if(str[i]=== str[i].split('').reverse().join("")){
            res.push(str[i])
        }
    }
    return res;

}

(function(str){
    var res = [];
    for(i=0;i<=str.length-1 ;i++){
        if(str[i]=== str[i].split('').reverse().join("")){
            res.push(str[i])
        }
    }
    return res;
})(["mama","sajkgfk","mam"]);

var median = function(array1,array2){
    res = array1.concat(array2).sort(function(a,b){return a - b});
    var med = (res[parseInt((res.length-1)/2)] +  res[parseInt(((res.length -1)/2))+1])/2
    return med;
}

(function(array1,array2){
    res = array1.concat(array2).sort(function(a,b){return a - b});
    var med = (res[parseInt((res.length-1)/2)] +  res[parseInt(((res.length -1)/2))+1])/2
    return med;

})([1,12,15,26,38],[2,13,17,30,45]);

var removeduplicate = function(array){
    return[...new Set(array)]
}

(function(array){
    return[...new Set(array)]
})(["haha", "winner","haha"])


