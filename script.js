// Basit form kontrolü
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Habarnamanyz ugradyldy !");
});

// EmailJS kütüphanesini ekle
// <script src="https://cdn.emailjs.com/dist/email.min.js"></script>
// ve init ile User ID'yi ekle
emailjs.init("YOUR_USER_ID");

document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  
  emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", this)
    .then(function() {
      alert("Mail başarıyla gönderildi!");
    }, function(error) {
      alert("Mail gönderilemedi: " + JSON.stringify(error));
    });
});