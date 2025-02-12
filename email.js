import emailjs from "emailjs-com";

export const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm(
      "service_5xvwqpw",    // Replace with your Email.js Service ID
      "template_bp1lkxr",   // Replace with your Email.js Template ID
      e.target,
      "5eGAhOGXOrPsC6VZ3"     // Replace with your Email.js Public Key
    )
    .then(
      (result) => {
        alert("Message Sent Successfully!");
        console.log(result.text);
      },
      (error) => {
        alert("Failed to send message. Please try again.");
        console.error(error.text);
      }
    );

  e.target.reset(); // Reset the form after submission
};
