// // import emailjs from "emailjs-com";
// window.sendEmail = sendEmail;

// export const sendEmail = (e) => {
//   e.preventDefault();

//   emailjs
//     .sendForm(
//       "service_5xvwqpw",    // Replace with your Email.js Service ID
//       "template_bp1lkxr",   // Replace with your Email.js Template ID
//       e.target,
//       "5eGAhOGXOrPsC6VZ3"     // Replace with your Email.js Public Key
//     )
//     .then(
//       (result) => {
//         alert("Message Sent Successfully!");
//         console.log(result.text);
//       },
//       (error) => {
//         alert("Failed to send message. Please try again.");
//         console.error(error.text);
//       }
//     );

//   e.target.reset(); // Reset the form after submission
  
// };


// document.addEventListener("DOMContentLoaded", function () {
//   document.getElementById("btn").addEventListener("submit", function (e) {
//       e.preventDefault();
      

//       emailjs.sendForm(
//           "service_5xvwqpw",
//           "template_bp1lkxr",
//           this,
//           "5eGAhOGXOrPsC6VZ3"
//       )
//       .then(
//           (result) => {
//               alert("Message Sent Successfully!");
//               console.log(result.text);
//           },
//           (error) => {
//               alert("Failed to send message. Please try again.");
//               console.error(error.text);
//           }
//       );

//       this.reset();
//   });
// });



function fun(){
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("text").value.trim();

  if (name === "" || email === "" || message === "") {
      showToast("All fields are required!", "red");
      return;
  }
  showToast("Message Sent Successfully!", "green");
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("text").value = "";

}
function showToast(message, color) {
  Toastify({
      text: message,
      duration: 3000,
      close: true,
      gravity: "top", // Position: top, bottom
      position: "right", // Left, Center, Right
      backgroundColor: color,
      stopOnFocus: true,
  }).showToast();
}