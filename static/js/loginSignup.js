// JavaScript

function closeLoginForm() {
    document.getElementById("loginForm").style.display = "none";
}

function closeSignupForm() {
    document.getElementById("signupForm").style.display = "none";
}

function openLoginForm() {
    closeSignupForm()
    document.getElementById("loginForm").style.display = "block";
}



function openSignupForm() {
    closeLoginForm();
    document.getElementById("signupForm").style.display = "block";
}


function validateEmail(email, errorMessage) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                errorMessage.textContent = 'Please enter a valid email address.';
                return false;
            }
            errorMessage.textContent = '';
            return true;
        }

function validateLoginForm() {
            const email = document.getElementById('loginEmail').value;
            const password = document.getElementById('loginPassword').value;
            const emailError = document.getElementById('loginEmailError');

            if (!email || !password) {
                emailError.textContent = 'Please fill in all fields.';
                return false;
            } else {
                emailError.textContent = '';
            }

            return validateEmail(email, emailError);
        }

function validateSignupForm() {
            const name = document.getElementById('signupName').value;
            const email = document.getElementById('signupEmail').value;
            const password = document.getElementById('signupPassword').value;
            const nameError = document.getElementById('signupNameError');
            const emailError = document.getElementById('signupEmailError');
            const passwordError = document.getElementById('signupPasswordError');

            if (!name || !email || !password) {
                nameError.textContent = emailError.textContent = passwordError.textContent = 'Please fill in all fields.';
                return false;
            } else {
                nameError.textContent = emailError.textContent = passwordError.textContent = '';
            }

            if (!validateEmail(email, emailError)) {
                return false;
            }

            if (password.length < 6) {
                passwordError.textContent = 'Password must be at least 6 characters long.';
                return false;
            } else {
                passwordError.textContent = '';
            }

            return true;
        }


// Open the login popup when the login button is clicked.