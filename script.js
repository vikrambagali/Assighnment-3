$(document).ready(function () {
    // Restrict phone input to digits only and max 10 digits
    $('#Phone').on('input', function () {
        let value = $(this).val().replace(/\D/g, ''); // Remove non-digits
        if (value.length > 10) value = value.slice(0, 10); // Limit to 10 digits
        $(this).val(value);
    });

    $('#submit').click(function (e) {
        e.preventDefault(); // Prevent form submission

        // Clear previous messages
        $('#error').text('');
        $('#success').text('');

        // Get input values
        const email = $('#Email').val().trim();
        const phone = $('#Phone').val().trim();
        const password = $('#Password').val().trim();

        // Validation
        if (!email || !phone || !password) {
            $('#error').text('All fields are required.');
            return;
        }

        if (!validateEmail(email)) {
            $('#error').text('Please enter a valid email address.');
            return;
        }

        if (!/^\d{10}$/.test(phone)) {
            $('#error').text('Phone number must be exactly 10 digits.');
            return;
        }

        if (!validatePassword(password)) {
            $('#error').text('Password must be at least 8 characters long and include uppercase, lowercase, and a number.');
            return;
        }

        if (password !== $('#ConfirmPassword').val().trim()) {
            $('#error').text('Passwords do not match.');
            return;
        }

        // If all validations pass, proceed with form submission

        // Success
        $('#success').text('Form submitted successfully!');
        $('#Email').val('');
        $('#Phone').val('');
        $('#Password').val('');
    });

    // Helper: Validate email format
    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    // Helper: Validate password strength
    function validatePassword(password) {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
        return regex.test(password);
    }
});
function passwordVisibility() {
  var x = document.getElementById("myInput");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}
