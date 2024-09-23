function inputs() {
    const inputs = document.querySelectorAll("input");
    inputs.forEach(function (item) {
      if (item.type !== "checkbox") {
        const label = item.previousElementSibling; // Assuming the label is right before the input
  
        if (!item.classList.contains("clicked")) {
          item.classList.add("transparent-placeholder");
        } else {
          item.classList.remove("transparent-placeholder");
        }
  
        item.addEventListener("focus", function () {
          item.classList.add("mt-2");
          item.classList.add("clicked");
          item.classList.remove("transparent-placeholder");
          label.classList.remove("top-1/2");
          label.classList.add("top-[12px]");
        });
  
        item.addEventListener("blur", function () {
          if (item.value === "") {
            item.classList.remove("clicked");
            item.classList.add("transparent-placeholder");
            label.classList.remove("top-[12px]");
            label.classList.add("top-1/2");
          }
        });
      }
    });
    
  }
  inputs();

  function inputs() {
    const inputs = document.querySelectorAll("input");
    inputs.forEach(function (item, index) {
      if (item.type !== "checkbox") {
        const label = item.previousElementSibling; // Assuming the label is right before the input
  
        // Initial styles based on input's value
        if (!item.classList.contains("clicked")) {
          item.classList.add("transparent-placeholder");
        } else {
          item.classList.remove("transparent-placeholder");
        }
  
        // On focus (when input is clicked)
        item.addEventListener("focus", function () {
          item.classList.add("mt-2");
          item.classList.add("clicked");
          item.classList.remove("transparent-placeholder");
          label.classList.remove("top-1/2");
          label.classList.add("top-[12px]");
        });
  
        // On blur (when input loses focus)
        item.addEventListener("blur", function () {
          if (item.value === "") {
            // Reset styles if the input is empty
            item.classList.remove("clicked");
            item.classList.add("transparent-placeholder");
            label.classList.remove("top-[12px]");
            label.classList.add("top-1/2");
          }
        });
      }
    });
  }
  inputs();