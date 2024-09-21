let list_item = document.querySelectorAll(".list_item");
let list_border_b = document.querySelectorAll(".list_border_b");
let list_svg = document.querySelectorAll(".list_svg");
let list_text = document.querySelectorAll(".list_text");
let search = document.querySelector("#search");
let list_modal = document.querySelector(".list_modal");
let list_state_modal = document.querySelector(".list_state_modal");
let list_city_modal = document.querySelector(".list_city_modal");
let number_modal = document.querySelector(".number_modal");
let country = document.querySelector(".country");
let state = document.querySelector(".state");
let city = document.querySelector(".city");

let list_modal__list = document.querySelector(".list_modal__list");
let list_state_modal__list = document.querySelector(".list_state_modal__list");
let list_city_modal__list = document.querySelector(".list_city_modal__list");
let list_number_modal__list = document.querySelector(".list_number_modal__list");

function toggleModal(modal, modalList) {
  // Barcha modallarni yopish
  [list_modal, list_state_modal, list_city_modal, number_modal].forEach(function (otherModal) {
    if (otherModal !== modal) {
      otherModal.classList.add("h-0", "border-transparent");
      otherModal.classList.remove("h-[345px]", "border-[#FFFFFF1A]", "mt-[11px]");
    }
  });

  if (modal.classList.contains("h-0")) {
    modal.classList.remove("h-0", "border-transparent");
    modal.classList.add("h-[345px]", "border-[#FFFFFF1A]");
    modal.classList.remove("mt-0");
    modal.classList.add("mt-[11px]");
    modalList.classList.remove("overflow-hidden");
    modalList.classList.add("overflow-y-auto");
  } else {
    modal.classList.add("h-0", "border-transparent");
    modal.classList.remove("h-[345px]", "border-[#FFFFFF1A]");
    modal.classList.remove("mt-[11px]");
    modal.classList.add("mt-0");
    modalList.classList.remove("overflow-y-auto");
    modalList.classList.add("overflow-hidden");
  }
}

document.querySelector(".list_tooggle").addEventListener("click", function () {
  toggleModal(list_modal, list_modal__list);
});

document.querySelector(".list_state_toogle_modal").addEventListener("click", function () {
  toggleModal(list_state_modal, list_state_modal__list);
});

document.querySelector(".list_city_toogle_modal").addEventListener("click", function () {
  toggleModal(list_city_modal, list_city_modal__list);
});

document.querySelector(".number_open").addEventListener("click", function () {
  toggleModal(number_modal, list_number_modal__list);
});

// Elementlarni faollashtirish funksiyasi
function activateItem(items, svgs, borders, textElement, targetElement, index) {
  items.forEach(item => item.classList.remove("list_item_active"));
  svgs.forEach(svg => svg.classList.remove("list_svg_active"));
  borders.forEach(border => border.classList.remove("list_border_b_active"));
  
  borders[index].classList.add("list_border_b_active");
  svgs[index].classList.add("list_svg_active");
  items[index].classList.add("list_item_active");
  targetElement.textContent = textElement[index].textContent;
}

// Country item tanlanganda
list_item.forEach((item, index) => {
  item.addEventListener("click", function () {
    activateItem(list_item, list_svg, list_border_b, list_text, country, index);
  });
});

// State item tanlanganda
let list_state_item = document.querySelectorAll(".list_state_item");
let list_state_svg = document.querySelectorAll(".list_state_svg");
let list_state_border_b = document.querySelectorAll(".list_state_border_b");
let list_state_text = document.querySelectorAll(".list_state_text");

list_state_item.forEach((item, index) => {
  item.addEventListener("click", function () {
    activateItem(list_state_item, list_state_svg, list_state_border_b, list_state_text, state, index);
  });
});

// City item tanlanganda
let list_city_item = document.querySelectorAll(".list_city_item");
let list_city_svg = document.querySelectorAll(".list_city_svg");
let list_city_border_b = document.querySelectorAll(".list_city_border_b");
let list_city_text = document.querySelectorAll(".list_city_text");

list_city_item.forEach((item, index) => {
  item.addEventListener("click", function () {
    activateItem(list_city_item, list_city_svg, list_city_border_b, list_city_text, city, index);
  });
});

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