//your JS code here. If required.
const form = document.getElementById('userForm');
    const terms = document.getElementById('terms');
    const submitBtn = document.getElementById('submitBtn');

    terms.addEventListener('change', function () {
        if (terms.checked) {

            if (form.checkValidity()) {
                submitBtn.disabled = false;
            } else {
                submitBtn.disabled = true;
                alert("Please fill in all required fields before accepting the terms.");
                terms.checked = false;
            }

        } else {
            submitBtn.disabled = true;
        }
    });