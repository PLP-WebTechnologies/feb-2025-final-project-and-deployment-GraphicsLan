// African countries list
const africanCountries = [
    "Algeria", "Angola", "Benin", "Botswana", "Burkina Faso", "Burundi", 
    "Cabo Verde", "Cameroon", "Central African Republic", "Chad", 
    "Comoros", "Congo", "Côte d'Ivoire", "Djibouti", "Democratic Republic of the Congo", 
    "Egypt", "Equatorial Guinea", "Eritrea", "Eswatini", "Ethiopia", 
    "Gabon", "Gambia", "Ghana", "Guinea", "Guinea-Bissau", 
    "Kenya", "Lesotho", "Liberia", "Libya", "Madagascar", 
    "Malawi", "Mali", "Mauritania", "Mauritius", "Morocco", 
    "Mozambique", "Namibia", "Niger", "Nigeria", "Rwanda", 
    "Sao Tome and Principe", "Senegal", "Seychelles", "Sierra Leone", "Somalia", 
    "South Africa", "South Sudan", "Sudan", "Tanzania", "Togo", 
    "Tunisia", "Uganda", "Zambia", "Zimbabwe"
];

document.addEventListener('DOMContentLoaded', function() {
    //  nationality dropdown
    const nationalitySelect = document.getElementById('nationality');
    africanCountries.forEach(country => {
        const option = document.createElement('option');
        option.value = country;
        option.textContent = country;
        nationalitySelect.appendChild(option);
    });

    // Form submissions
    document.getElementById('loginForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;
        
        //  backend
        console.log('Login attempt with:', { email, password });
        alert('Login functionality will be included soon chill🙌😂.'); //to be removed
    });

    document.getElementById('signupForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = {
            fullName: document.getElementById('fullName').value,
            phoneNumber: document.getElementById('phoneNumber').value,
            email: document.getElementById('signupEmail').value,
            gender: document.getElementById('gender').value,
            nationality: document.getElementById('nationality').value,
            password: document.getElementById('signupPassword').value
        };
        
        // Validate passwords match
        if (formData.password !== document.getElementById('confirmPassword').value) {
            alert('Passwords do not match!');
            return;
        }
        
        // Show verification modal (simulating email verification)
        showVerificationModal();
    });
});

function showSignup() {
    document.querySelector('.login-form').classList.add('hidden');
    document.querySelector('.signup-form').classList.remove('hidden');
    document.querySelector('.signup-form').style.animation = 'fadeIn 0.5s ease-in-out';
}

function showLogin() {
    document.querySelector('.signup-form').classList.add('hidden');
    document.querySelector('.login-form').classList.remove('hidden');
    document.querySelector('.login-form').style.animation = 'fadeIn 0.5s ease-in-out';
}

function togglePassword(inputId, icon) {
    const input = document.getElementById(inputId);
    if (input.type === 'password') {
        input.type = 'text';
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
    } else {
        input.type = 'password';
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
    }
}

function showVerificationModal() {
    document.querySelector('.verification-modal').classList.add('active');
}

function closeModal() {
    document.querySelector('.verification-modal').classList.remove('active');
    showLogin(); // Switch to login after signup
}

// Alerts for Social login functions will be implemented soon!
function loginWithGoogle() {
    alert('Sorry! Google login will be implemented with soon, Please sign up with email and password');
}

function loginWithGithub() {
    alert('Sorry! Google login will be implemented with soon, Please sign up with email and password');
}

function loginWithFacebook() {
    alert('Sorry! Google login will be implemented with soon, Please sign up with email and password');
}