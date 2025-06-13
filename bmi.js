const height = document.querySelector('.height');
const weight = document.querySelector('.weight');
const calculateBtn = document.querySelector(".calculate");
const result = document.querySelector(".result");

calculateBtn.addEventListener('click', function() {

    const heightValue = parseFloat(height.value);
    const weightValue = parseFloat(weight.value);

   
    if (isNaN(heightValue) || isNaN(weightValue) || heightValue <= 0 || weightValue <= 0) {
        alert("Please enter valid height and weight values.");
        return;
    }

    const heightInMeters = heightValue / 100;
    const bmi = (weightValue / (heightInMeters ** 2)).toFixed(2);


    let category = "";
    if (bmi < 18.5) {
        category = "Underweight ";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = "Normal weight ";
    } else if (bmi >= 25 && bmi < 29.9) {
        category = "Overweight ";
    } else {
        category = "Obese ";
    }

    
    result.innerText = `Your BMI: ${bmi} (${category})`;
    result.style.color="Yellow";
    result.style.fontsize="30px";
    
    height.value = "";
    weight.value = "";
});
