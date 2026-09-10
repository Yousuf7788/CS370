function calculateBMI(){
    let height = parseFloat(document.getElementById("height").value);
    let weight = parseFloat(document.getElementById("weight").value);

    let bmi = weight / (height * height);

    let category;

    if (bmi < 18.5) {
        category = "Underweight";
    }
    else if (bmi >= 18.5 && bmi <= 24.9) {
        category = "Healthy/Normal Weight";
    }
    else if (bmi >= 25 && bmi <= 29.9) {
        category = "Overweight";
    }
    else if(bmi > 30) {
        category = "Obese";
    }

    document.getElementById("result").textContent=
        "BMI = " + bmi.toFixed(2) + " - " + category;
}