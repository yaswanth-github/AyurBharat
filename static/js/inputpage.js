let subscribeForm = document.getElementById("subscribeForm");

let nameElement = document.getElementById("name");
let nameErrMsg = document.getElementById("nameErrMsg");

let emailElement = document.getElementById("email");
let emailErrMsg = document.getElementById("emailErrMsg");

let ageElement = document.getElementById("age");
let ageErrMsg = document.getElementById("ageErrMsg");

let symptomsElement = document.getElementById("symptoms");
let symptomsErrMsg = document.getElementById("symptomsErrMsg");

let subscribeBtn = document.getElementById("subscribeBtn");
/*
nameElement.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        nameErrMsg.textContent = "Required*";
    } else {
        nameErrMsg.textContent = "";
    }
});

emailElement.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        emailErrMsg.textContent = "Required*";
    } else {
        emailErrMsg.textContent = "";
    }
});
ageElement.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        ageErrMsg.textContent = "Required*";
    } else {
        ageErrMsg.textContent = "";
    }
});

symptomsElement.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        symptomsErrMsg.textContent = "Required*";
    } else {
        symptomsErrMsg.textContent = "";
    }
});


subscribeForm.addEventListener("submit", function(event) {
    event.preventDefault();
});

function getGreeting(){
            fetch('http://172.31.196.1:5000/get_greeting')
            .then(response => response.json())
            .then(data => {
            appendResponse(data.greeting);
        })
        .catch(error => {
            appendResponse("Error: Failed to fetch the greeting.");
        });}
getGreeting();

*/
let currentStep = 0;
const steps = document.querySelectorAll('.step');
const prevButton = document.getElementById('prevBtn');
const nextButton = document.getElementById('nextBtn');

function showStep(n) {
    steps[currentStep].classList.remove('active');
    currentStep = n;
    steps[currentStep].classList.add('active');

    if (currentStep === 0) {
        prevButton.style.display = 'none';
    } else {
        prevButton.style.display = 'inline-block';
    }
    if (currentStep === steps.length - 1) {
        nextButton.style.display = 'none';
    } else {
        nextButton.style.display = 'inline-block';
    }
}

function nextStep() {
    let isValid = true;
    const inputs = steps[currentStep].querySelectorAll('input[required], select[required], textarea[required]');

    inputs.forEach(input => {
        if (input.value.trim() === '') {
            isValid = false;
            const errorMsg = input.parentNode.querySelector('.errorMsg');
            if (errorMsg) {
                errorMsg.textContent = '* Required';
            }
        }
    });

    if (isValid && currentStep < steps.length - 1) {
        showStep(currentStep + 1);
    }
}

function prevStep() {
    if (currentStep > 0) {
        showStep(currentStep - 1);
    }
}

showStep(currentStep);


const value = document.querySelector("#value");
const input = document.querySelector("#age");
value.textContent = input.value;

input.addEventListener("input", (event) => {
  value.textContent = event.target.value;
});
