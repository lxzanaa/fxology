let inp_password = document.querySelector(".inp_password");
  let passwordField = inp_password.querySelector("#password");
  let confirmPasswordField = inp_password.querySelector("#confirm-password");
  let confirmPasswordToggle = document.querySelectorAll("#confirm-password-toggle");
  let passwordToggle = document.querySelector("#password-toggle");
    if (inp_password.type !== "checkbox") {
      // Toggle password visibility
      confirmPasswordToggle.forEach((icon, idx) => {
        icon.addEventListener("click", function () {
          let inputType = confirmPasswordField.type;
          if (inputType === "password") {
            confirmPasswordField.type = "text";
            icon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 640 512"><path fill="#ffffff" d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zm151 118.3C226 97.7 269.5 80 320 80c65.2 0 118.8 29.6 159.9 67.7C518.4 183.5 545 226 558.6 256c-12.6 28-36.6 66.8-70.9 100.9l-53.8-42.2c9.1-17.6 14.2-37.5 14.2-58.7c0-70.7-57.3-128-128-128c-32.2 0-61.7 11.9-84.2 31.5l-46.1-36.1z"/></svg>`; // Change icon to 'eye closed'
          } else {
            confirmPasswordField.type = "password";
            icon.innerHTML = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.9833 9.99993C12.9833 11.6499 11.65 12.9833 10 12.9833C8.35 12.9833 7.01666 11.6499 7.01666 9.99993C7.01666 8.34993 8.35 7.0166 10 7.0166C11.65 7.0166 12.9833 8.34993 12.9833 9.99993Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M9.99999 16.8913C12.9417 16.8913 15.6833 15.1579 17.5917 12.1579C18.3417 10.9829 18.3417 9.00794 17.5917 7.83294C15.6833 4.83294 12.9417 3.09961 9.99999 3.09961C7.05832 3.09961 4.31666 4.83294 2.40833 7.83294C1.65833 9.00794 1.65833 10.9829 2.40833 12.1579C4.31666 15.1579 7.05832 16.8913 9.99999 16.8913Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`; // Change icon back to 'eye'
          }
        });
      });

        passwordToggle.addEventListener("click", function () {
          let inputType = passwordField.type;
          if (inputType === "password") {
            passwordField.type = "text";
            passwordToggle.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 640 512"><path fill="#ffffff" d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zm151 118.3C226 97.7 269.5 80 320 80c65.2 0 118.8 29.6 159.9 67.7C518.4 183.5 545 226 558.6 256c-12.6 28-36.6 66.8-70.9 100.9l-53.8-42.2c9.1-17.6 14.2-37.5 14.2-58.7c0-70.7-57.3-128-128-128c-32.2 0-61.7 11.9-84.2 31.5l-46.1-36.1z"/></svg>`; // Change icon to 'eye closed'
          } else {
            passwordField.type = "password";
            passwordToggle.innerHTML = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.9833 9.99993C12.9833 11.6499 11.65 12.9833 10 12.9833C8.35 12.9833 7.01666 11.6499 7.01666 9.99993C7.01666 8.34993 8.35 7.0166 10 7.0166C11.65 7.0166 12.9833 8.34993 12.9833 9.99993Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M9.99999 16.8913C12.9417 16.8913 15.6833 15.1579 17.5917 12.1579C18.3417 10.9829 18.3417 9.00794 17.5917 7.83294C15.6833 4.83294 12.9417 3.09961 9.99999 3.09961C7.05832 3.09961 4.31666 4.83294 2.40833 7.83294C1.65833 9.00794 1.65833 10.9829 2.40833 12.1579C4.31666 15.1579 7.05832 16.8913 9.99999 16.8913Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`; // Change icon back to 'eye'
          }
        });
    }