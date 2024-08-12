const btn = document.getElementById('button');

document.getElementById('form')
  .addEventListener('submit', function(event) {
    event.preventDefault();

    btn.value = 'Sending...';

    const serviceID = 'default_service';
    const templateID = 'template_t0q0rxi';

    emailjs.sendForm("IONE Studio","template_t0q0rxi", this)
      .then(() => {
        btn.value = 'Send Email';
        alert('Sent!');
      }, (err) => {
        btn.value = 'Send Email';
        alert(JSON.stringify(err));
      });
  });


  // Function to show the popup
function showPopup() {
    document.getElementById("popup").style.display = "block";
}

// Function to hide the popup
function hidePopup() {
    document.getElementById("popup").style.display = "none";
}

