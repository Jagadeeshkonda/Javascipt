var odd = (array)=>{
    var res = [];
    for(var i=0;i<=array.length-1 ;i++){
        if(array[i]%2 !==0){
            res.push(array[i])
        }
        
    }
   return res;
} 


var titleCaps1 =(str1)=>
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

var arrsum = (array)=>{
    
    var sum = 0;
    for(var i=0;i<=array.length-1 ;i++){
        sum = sum + array[i];
        
        
    }
   return sum;
} 

var isprime = (array)=>{
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

var palindrome = (str)=>{
    var res = [];
    for(i=0;i<=str.length-1 ;i++){
        if(str[i]=== str[i].split('').reverse().join("")){
            res.push(str[i])
        }
    }
    return res;

}