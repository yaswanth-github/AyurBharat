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
    openLoginButton.className = 'btn btn-primary';
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

function updateDropdownContent() {
    const dropdownContent = document.querySelector('.dropdown-content');
    dropdownContent.innerHTML = ''; // Clear existing content

    // Create new links for the dropdown
    const yourAccountLink = document.createElement('a');
    yourAccountLink.className = 'nav-link';
    yourAccountLink.href = '#'; // Add the appropriate URL
    yourAccountLink.style.color = '#1d2f4e';
    yourAccountLink.textContent = 'Your Account';

    const yourOrdersLink = document.createElement('a');
    yourOrdersLink.className = 'nav-link';
    yourOrdersLink.href = '#'; // Add the appropriate URL
    yourOrdersLink.style.color = '#1d2f4e';
    yourOrdersLink.textContent = 'Your Orders';

    // Append the new links to the dropdown content
    dropdownContent.appendChild(yourAccountLink);
    dropdownContent.appendChild(yourOrdersLink);
}

function hideUserDropdown() {
    const dropdownContent = document.querySelector('.dropdown-content');
    dropdownContent.style.display = 'none';
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
    openSignupButton.className = 'btn btn-primary';  
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
            const loginSuccessful = true; // Replace with your actual login logic
        
            if (!email || !password) {
                emailError.textContent = 'Please fill in all fields.';
                return false;
            } else {
                emailError.textContent = '';
            }
        
            if (!validateEmail(email, emailError)) {
                return false;
            }
        
            if (password.length < 6) {
                document.getElementById('loginPasswordError').textContent = 'Password must be at least 6 characters long.';
                return false;
            } else {
                document.getElementById('loginPasswordError').textContent = '';
            }
        
            // Assuming login is successful
            if (email=="pasumarthykomal2gmail.com" &&  password=="123456789") {
                // Update the dropdown content
                updateDropdownContent();
        
                // Hide the user dropdown
                hideUserDropdown();
        
                // Add any other actions you want to perform after successful login
        
                // Close the login form
                closeLoginForm();
            }
        
            return true; // Return true if the form is valid
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


// Create the navbar element
const navbar = document.createElement('nav');
navbar.className = 'navbar navbar-expand-lg';
navbar.style.backgroundColor = '#F8F8F8';

// Create the container
const container = document.createElement('div');
container.className = 'container-fluid';
navbar.appendChild(container);

// Create the brand link with image
const brandLink = document.createElement('a');
brandLink.className = 'navbar-brand';
brandLink.href = '/';
container.appendChild(brandLink);

const brandImage = document.createElement('img');
brandImage.src = 'https://live.staticflickr.com/65535/53217076980_d733d6cd73_w.jpg';
brandImage.width = '50';
brandImage.height = '50';
brandLink.appendChild(brandImage);

// Create the toggler button
const togglerButton = document.createElement('button');
togglerButton.className = 'navbar-toggler';
togglerButton.type = 'button';
togglerButton.setAttribute('data-bs-toggle', 'collapse');
togglerButton.setAttribute('data-bs-target', '#navbarContent');
togglerButton.setAttribute('aria-controls', 'navbarContent');
togglerButton.setAttribute('aria-expanded', 'false');
togglerButton.setAttribute('aria-label', 'Toggle navigation');
container.appendChild(togglerButton);

const togglerIcon = document.createElement('span');
togglerIcon.className = 'navbar-toggler-icon';
togglerButton.appendChild(togglerIcon);

// Create the navbar content
const navbarContent = document.createElement('div');
navbarContent.className = 'collapse navbar-collapse justify-content-end';
navbarContent.id = 'navbarContent';
container.appendChild(navbarContent);

// Create the list of links
const navList = document.createElement('ul');
navList.className = 'navbar-nav fw-bold';
navbarContent.appendChild(navList);




links.forEach(linkInfo => {
    const listItem = document.createElement('li');
    listItem.className = 'nav-item';
    navList.appendChild(listItem);

    const link = document.createElement('a');
    link.className = 'nav-link';
    link.href = linkInfo.url;
    link.style.color = linkInfo.color;
    link.textContent = linkInfo.text;
    listItem.appendChild(link);
});

// Create the user icon and dropdown
const userIcon = document.createElement('i');
userIcon.className = 'fa-solid fa-user';
userIcon.id = 'user-icon';
userIcon.style.color = '#1d2f4e';
userIcon.style.margin="auto";


navList.appendChild(userIcon);

const dropdownContent = document.createElement('div');
dropdownContent.className = 'dropdown-content';
userIcon.appendChild(dropdownContent);

// Apply CSS properties to the dropdown content
dropdownContent.style.display = 'none';
dropdownContent.style.position = 'absolute';
dropdownContent.style.backgroundColor = '#f9f9f9';
dropdownContent.style.minWidth = '140px';
dropdownContent.style.boxShadow = '0px 8px 16px 0px rgba(0,0,0,0.2)';
dropdownContent.style.zIndex = '1';


// Show dropdown on mouseover
userIcon.addEventListener('mouseover', function() {
    dropdownContent.style.display = 'block';
    dropdownContent.style.right = '0'; // Adjust the value as needed
    dropdownContent.style.top = '75';
});

// Hide dropdown on mouseout
userIcon.addEventListener('mouseout', function() {
    dropdownContent.style.display = 'none';
});



// Change font for login and signup links


// Create login and signup links in the dropdown
const loginLink = document.createElement('a');
loginLink.className = 'nav-link open-login-button';
loginLink.style.color = '#1d2f4e';
loginLink.style.fontFamily="Roboto";
loginLink.textContent = 'Log';
loginLink.onclick = openLoginForm; // Assuming openLoginForm is a function
const logInSpan = document.createElement('span');
logInSpan.style.color = 'MediumSeaGreen';
logInSpan.textContent = 'in';
loginLink.appendChild(logInSpan);
dropdownContent.appendChild(loginLink);

const signupLink = document.createElement('a');
signupLink.className = 'nav-link open-signup-button';
signupLink.style.fontFamily="Roboto";
signupLink.style.color = '#1d2f4e';
signupLink.textContent = 'Sign';
signupLink.onclick = openSignupForm; // Assuming openSignupForm is a function
const signUpSpan = document.createElement('span');
signUpSpan.style.color = 'MediumSeaGreen';
signUpSpan.textContent = 'up';
signupLink.appendChild(signUpSpan);
dropdownContent.appendChild(signupLink);

// Append the navbar to the document
const app = document.getElementById('app');
app.appendChild(navbar);
