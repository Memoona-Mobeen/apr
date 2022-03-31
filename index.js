 let result = document.getElementById("result");
 let btn = document.getElementById("get-leap-years");
 
 //loo
 btn.addEventListener("click", () =>{
let startyear = Number(document.getElementById("start-year").value);
let endyear = Number(document.getElementById("end-year").value);

//leoo
if((startyear < 1582 || startyear>2999) && (endyear<1582 || endyear>2999)){
    result.innerHTML = `the start year and end year should be greater than 1581 n less than 3000`;

}
else if (startyear>endyear){
    result.innerHTML = `the end year should be greater start year`;
}

else if(startyear < 1582 || startyear>2999){
    result.innerHTML = `the start year should be greater than 1581 n end year less than 3000`;
}

 });


 //looo

 let leapYears = [];
for(let i = startyear; i <= endyear; i++ ){
//mm
///mmmm

i((i % 4 == 0 && i % 100 !=0) || i % 400 == 0)
{
    leapYears.push(i);
}

}
 //mmm
 //nnn

 result.innerHTML = `there r ${
     leapYears.length
 }    leap years btw ${startyear} & ${endyear}. <span>${leapYears
.toString()
.split(",")
.join()}</span>`; 




