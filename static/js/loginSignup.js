function opensignuppopup(){
    // Create the main signup popup container
    const signupPopup = document.createElement('div');
    signupPopup.className = 'signup-popup', "d-none";
    signupPopup.id = 'signupForm';

    // Create the close button
    const closeBtn = document.createElement('div');
    closeBtn.className = 'close-button';
    closeBtn.onclick = closeSignupForm;

    const closeIcon = document.createElement('i');
    closeIcon.className = 'fa-solid fa-xmark fa-xl';
    closeIcon.style.color = '#ffffff';

    closeBtn.appendChild(closeIcon);

    // Create the signup form content
    const signupContent = document.createElement('div');
    signupContent.className = 'login-main-container';

    const textCenterDiv = document.createElement('div');
    textCenterDiv.className = 'text-center';

    const centerDiv = document.createElement('div');
    centerDiv.className = 'center';

    const containerDiv = document.createElement('div');
    containerDiv.className = 'container';

    const rowDiv = document.createElement('div');
    rowDiv.className = 'row';
    
    const headingDiv = document.createElement('div');
    headingDiv.className = 'text-center col-sm-12 mb-3';

    const heading = document.createElement('h1');
    heading.className = 'banner-heading';
    heading.textContent = 'Ayur Bharat';

    const signupContainer = document.createElement('div');
    signupContainer.className = 'container col-sm-11 col-md-7 login-container';

    const signupHeading = document.createElement('h1');
    signupHeading.className = 'mb-3';
    signupHeading.textContent = 'Signup';

    const signupForm = document.createElement('form');
    signupForm.action = '/signup';
    signupForm.method = 'post';
    signupForm.onsubmit = validateSignupForm;

    const nameDiv = document.createElement('div');
    nameDiv.className = 'mb-3';

    const nameLabel = document.createElement('label');
    nameLabel.htmlFor = 'signupName';
    nameLabel.textContent = 'Name';

    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.className = 'form-control';
    nameInput.id = 'signupName';
    nameInput.name = 'signupName';
    nameInput.required = true;

    const nameError = document.createElement('p');
    nameError.className = 'error-message';
    nameError.id = 'signupNameError';

    const emailDiv = document.createElement('div');
    emailDiv.className = 'mb-3';

    const emailLabel = document.createElement('label');
    emailLabel.htmlFor = 'signupEmail';
    emailLabel.textContent = 'Email';

    const emailInput = document.createElement('input');
    emailInput.type = 'text';
    emailInput.className = 'form-control';
    emailInput.id = 'signupEmail';
    emailInput.name = 'signupEmail';
    emailInput.required = true;

    const emailError = document.createElement('p');
    emailError.className = 'error-message';
    emailError.id = 'signupEmailError';

    const passwordDiv = document.createElement('div');
    passwordDiv.className = 'mb-3';

    const passwordLabel = document.createElement('label');
    passwordLabel.htmlFor = 'signupPassword';
    passwordLabel.textContent = 'Password';

    const passwordInput = document.createElement('input');
    passwordInput.type = 'password';
    passwordInput.className = 'form-control';
    passwordInput.id = 'signupPassword';
    passwordInput.name = 'signupPassword';
    passwordInput.required = true;

    const passwordError = document.createElement('p');
    passwordError.className = 'error-message';
    passwordError.id = 'signupPasswordError';

    const signupButtonDiv = document.createElement('div');
    signupButtonDiv.className = 'text-center';

    const signupButton = document.createElement('button');
    signupButton.className = 'btn btn-primary';
    signupButton.textContent = 'Signup';

    const openLoginButton = document.createElement('button');
    openLoginButton.className = 'open-login-button';
    openLoginButton.textContent = 'Open Login Form';
    openLoginButton.onclick = openLoginForm;

    const forgotPasswordLink = document.createElement('a');
    forgotPasswordLink.href = '';
    forgotPasswordLink.textContent = 'Forgot Password?';

    // Append all the elements together to create the structure
    
    headingDiv.appendChild(heading);
    
    
    nameDiv.appendChild(nameLabel);
    nameDiv.appendChild(nameInput);
    nameDiv.appendChild(nameError);

    emailDiv.appendChild(emailLabel);
    emailDiv.appendChild(emailInput);
    emailDiv.appendChild(emailError);

    passwordDiv.appendChild(passwordLabel);
    passwordDiv.appendChild(passwordInput);
    passwordDiv.appendChild(passwordError);

    signupButtonDiv.appendChild(signupButton);
    signupButtonDiv.appendChild(openLoginButton);
    signupButtonDiv.appendChild(forgotPasswordLink);
    
    signupForm.appendChild(nameDiv);
    signupForm.appendChild(emailDiv);
    signupForm.appendChild(passwordDiv);
    signupForm.appendChild(signupButtonDiv);


    signupContainer.appendChild(signupHeading);
    signupContainer.appendChild(signupForm);

    rowDiv.appendChild(headingDiv);
    rowDiv.appendChild(signupContainer);
        

    containerDiv.appendChild(rowDiv);

    centerDiv.appendChild(containerDiv);

    signupContent.appendChild(textCenterDiv);
    signupContent.appendChild(centerDiv);


    signupPopup.appendChild(closeBtn);
    signupPopup.appendChild(signupContent);

    // Append the signup popup to the document body
    document.body.appendChild(signupPopup);
}

function createLoginPopup() {
    // Create the main login popup container
    const loginPopup = document.createElement('div');
    loginPopup.className = 'login-popup', "d-none";
    loginPopup.id = 'loginForm';

    // Create the close button
    const closeBtn = document.createElement('div');
    closeBtn.className = 'close-button';
    closeBtn.onclick = closeLoginForm;
    
    const closeIcon = document.createElement('i');
    closeIcon.className = 'fa-solid fa-xmark fa-xl';
    closeIcon.style.color = '#ffffff';

    closeBtn.appendChild(closeIcon);

    // Create the login form content
    const loginContent = document.createElement('div');
    loginContent.className = 'login-main-container';

    const textCenterDiv = document.createElement('div');
    textCenterDiv.className = 'text-center';

    const centerDiv = document.createElement('div');
    centerDiv.className = 'center';

    const containerDiv = document.createElement('div');
    containerDiv.className = 'container';

    const rowDiv = document.createElement('div');
    rowDiv.className = 'row';

    const headingDiv = document.createElement('div');
    headingDiv.className = 'text-center col-sm-12 mb-3';

    const heading = document.createElement('h1');
    heading.className = 'banner-heading';
    heading.textContent = 'Ayur Bharat';

    const loginContainer = document.createElement('div');
    loginContainer.className = 'container col-sm-11 col-md-7 login-container';

    const loginHeading = document.createElement('h1');
    loginHeading.textContent = 'Login';

    const loginForm = document.createElement('form');
    loginForm.action = '/login';
    loginForm.method = 'post';
    loginForm.onsubmit = validateLoginForm;

    const emailDiv = document.createElement('div');
    emailDiv.className = 'mb-3';

    const emailLabel = document.createElement('label');
    emailLabel.htmlFor = 'loginEmail';
    emailLabel.textContent = 'Email';

    const emailInput = document.createElement('input');
    emailInput.type = 'text';
    emailInput.className = 'form-control';
    emailInput.id = 'loginEmail';
    emailInput.name = 'loginEmail';
    emailInput.required = true;

    const emailError = document.createElement('p');
    emailError.className = 'error-message';
    emailError.id = 'loginEmailError';

    const passwordDiv = document.createElement('div');
    passwordDiv.className = 'mb-3';

    const passwordLabel = document.createElement('label');
    passwordLabel.htmlFor = 'loginPassword';
    passwordLabel.textContent = 'Password';

    const passwordInput = document.createElement('input');
    passwordInput.type = 'password';
    passwordInput.className = 'form-control';
    passwordInput.id = 'loginPassword';
    passwordInput.name = 'loginPassword';
    passwordInput.required = true;

    const passwordError = document.createElement('p');
    passwordError.className = 'error-message';
    passwordError.id = 'loginPasswordError';

    const loginButtonDiv = document.createElement('div');
    loginButtonDiv.className = 'text-center';

    const loginButton = document.createElement('button');
    loginButton.className = 'btn btn-primary';
    loginButton.textContent = 'Login';

    const openSignupButton = document.createElement('button');
    openSignupButton.className = 'open-signup-button';
    openSignupButton.textContent = 'Open Signup Form';
    openSignupButton.onclick = openSignupForm;

    const forgotPasswordLink = document.createElement('a');
    forgotPasswordLink.href = '';
    forgotPasswordLink.textContent = 'Forgot Password?';

    // Append all the elements together to create the structure
    headingDiv.appendChild(heading);
    headingDiv.appendChild(loginContainer);

    emailDiv.appendChild(emailLabel);
    emailDiv.appendChild(emailInput);
    emailDiv.appendChild(emailError);

    passwordDiv.appendChild(passwordLabel);
    passwordDiv.appendChild(passwordInput);
    passwordDiv.appendChild(passwordError);

    loginButtonDiv.appendChild(loginButton);
    loginButtonDiv.appendChild(openSignupButton);
    loginButtonDiv.appendChild(forgotPasswordLink);

    loginForm.appendChild(emailDiv);
    loginForm.appendChild(passwordDiv);
    loginForm.appendChild(loginButtonDiv);


    loginContainer.appendChild(loginHeading);
    loginContainer.appendChild(loginForm);

    rowDiv.appendChild(headingDiv);

    containerDiv.appendChild(rowDiv);
    rowDiv.appendChild(loginContainer);
    

    centerDiv.appendChild(containerDiv);
    
    loginContent.appendChild(textCenterDiv);
    loginContent.appendChild(centerDiv);

    loginPopup.appendChild(closeBtn);
    loginPopup.appendChild(loginContent);

    // Append the login popup to the document body
    document.body.appendChild(loginPopup);
}
opensignuppopup();
createLoginPopup();

function closeSignupForm() {
    document.body.style.overflow = 'auto';
    document.getElementById("signupForm").style.display = "none";
}
function openLoginForm() {
    closeSignupForm();
    createLoginPopup();
    document.body.style.overflow = 'hidden';
    document.getElementById("loginForm").style.display = "block";
}

function closeLoginForm() {
    document.body.style.overflow = 'auto';
    document.getElementById("loginForm").style.display = "none";
}

function openSignupForm() {
    closeLoginForm();
    opensignuppopup();
    document.body.style.overflow = 'hidden';
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


