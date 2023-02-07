const btnEl = document.getElementById("btn");
const bmiInputEl = document.getElementById("bmiResult");
const weightConditionEl = document.getElementById("weightConditioninput");

function calculateBmi(){
	const heightValue = document.getElementById("height").value / 100;
	const weightValue = document.getElementById("weight").value;
	const bmiValue = weightValue / (heightValue * heightValue);

	bmiInputEl.value = bmiValue;
	if(bmiValue < 18.5){
		weightConditionEl.innerText = "Underweight"
		weightConditionEl.style.color = "yellow";
		weightConditionEl.style.background = "black";
		weightConditionEl.style.padding = "5px";
	} else if (bmiValue >= 18.5 && bmiValue <= 24.9){
		weightConditionEl.innerText = "Normal weight"
		weightConditionEl.style.color = "green";
		weightConditionEl.style.background = "black";
		weightConditionEl.style.padding = "5px";
	} else if (bmiValue >= 25 && bmiValue <= 29.9){
		weightConditionEl.innerText = " Overweight"
		weightConditionEl.style.color = "red";
		weightConditionEl.style.background = "black";
		weightConditionEl.style.padding = "5px";
	} else if (bmiValue >= 30){
		weightConditionEl.innerText = "Obesity"
		weightConditionEl.style.color = "darkred";
		weightConditionEl.style.background = "black";
		weightConditionEl.style.padding = "5px";
	};
}

btnEl.addEventListener("click", calculateBmi);