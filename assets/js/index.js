function bmiCalculator() {
  n = document.getElementById("name").value;
  w = document.getElementById("weight").value;
  h = document.getElementById("height").value;
  bmi = parseFloat(w / (h * h)).toFixed(2);
}

    function showResult(){
    document.querySelector(".main-heading").style.fontSize="3.5rem";
    output = document.querySelector(".main-section").innerHTML = `<p
        style="
        font-family:sans-serif;
        color:red; 
        font-size:1.5rem; 
        font-weight: bold; 
        margin-top: 10%;
        padding:10px;
    ">   
        ${n} your BMI is ${bmi}
    </p>`;

    document.querySelector(".go-back").style.visibility="visible";
}








