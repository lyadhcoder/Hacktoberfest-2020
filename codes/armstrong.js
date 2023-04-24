function arm(){
    var sum=0;
    // Change line 4 for different input
    var input=123;
    var count=input.length;
    var temp=input;
    while(input!==0){             
        var digit=Math.floor(input%10);
        sum+=Math.pow(digit,count);
        input=Math.floor(input/10);
    }
    if(temp==sum)
        console.log("The number "+temp+" is an  Armstrong number.");
    else
        console.log("The number "+temp+" is not an  Armstrong number.");    
}
arm();