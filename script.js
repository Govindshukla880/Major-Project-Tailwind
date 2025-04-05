const navSec = document.getElementById("nav-section")

function handleMenu(){
    navSec.classList.toggle('hidden')
}


// EmailJs Validation

(function () {
  emailjs.init("LBGotSW3D8VaOMttF"); // Public Key
})();

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    
    emailjs    // Email Send to EmailJs Template.
      .sendForm("service_0fx4jjj", "template_9wm4bcr", form)
      .then(function (response) {
        alert("✅ Feedback sent successfully!");
        console.log("SUCCESS!", response.status, response.text);
        form.reset(); // clear form after sending
      })
      .catch(function (error) {
        alert("❌ Failed to send feedback. Try again.");
        console.error("FAILED...", error);
      });
  });
});

// Phone Number Validation :---

const phoneInput = document.getElementById('phone');

phoneInput.addEventListener('input', function () {
  this.value = this.value.replace(/[^0-9]/g, '');

  if (this.value.length > 10) {
    this.value = this.value.slice(0, 10);   // Limit to 10 digits
  }
});

document.getElementById('contact-form').addEventListener('submit', function (e) {
  const phone = phoneInput.value;

  if (!/^\d{10}$/.test(phone)) {
    e.preventDefault();
    alert('Please enter a valid 10-digit phone number.');
  }
});
