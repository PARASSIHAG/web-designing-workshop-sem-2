function cal(){
    let n= document.getElementById("std").value;
    let total=0;
    for (let i=0;i<n;i++){
        let marks=parseFloat(prompt("enter the marks"+i)); 
        total+=marks; 
    }
    let grade;
    if (total/n>=90){
        grade="A";
    }
    else if(total/n>=80){
        grade="B";
    }
    else if (total/n>=70){
        grade="C";
    }
    else if(total/n>=60){
        grade="D";
    }
    else{
        grade="E";
    }
    let classStatus;
    if (total/n>=70){
        classStatus="first class";
    }
    else if(total/n>=40){
        classStatus="second class";
    }
    else {
        classStatus="fail"
    }
    document.getElementById("result").innerHTML="TOTAL MARKS:"+ total+"<br>percentage:"+(total/n)*100 + "<br> grade:" +grade+ "<br>average:" +(total/n)+"<br> status"+classStatus;
}
