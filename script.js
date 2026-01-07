
const cta = document.getElementById('cta-btn');

cta.addEventListener('click', () => {
const contactSection = document.getElementById('contact');
if (contactSection) {
contactSection.scrollIntoView({ behavior: 'smooth' });
}
});

cta.addEventListener('mouseenter', () => {
cta.innerText = "Let's Stitch! ✨";
});

cta.addEventListener('mouseleave', () => {
cta.innerText = "Book Your Session";
});

const form = document.getElementById('tailorForm');

form.addEventListener('submit', async (e) => {
e.preventDefault();

const formData = {
name: document.getElementById('name').value,
email: document.getElementById('email').value,
message: document.getElementById('message').value
};

try {
// Changed to a relative path so it works when hosted
const response = await fetch('/api/stylejada-inquiry', {
method: 'POST',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify(formData)
});

if (response.ok) {
alert("Ọrụ Aka Di Ebube! Your message has been sent.");
form.reset();
} else {
alert("The server received the request but had an error.");
}
} catch (error) {
console.log("Detailed Error:", error);
alert("Connection Failed.");
}
});
