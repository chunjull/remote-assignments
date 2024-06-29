/* 1. Click to Change Text. */
const textChange = document.querySelector('#text-change');
textChange.addEventListener("click", function() {
  textChange.textContent = "HAVE a GOOD TIME!";
});

/* 2. Click to Show/Close Menu. */
const toggle = document.querySelector(".toggle-button");
const navbar = document.querySelector(".navbar");
const bar = document.querySelectorAll(".bar");
toggle.addEventListener("click", () => {
  navbar.classList.toggle("active");
  for (let i = 0; i < bar.length; i++) {
    bar[i].classList.toggle("active");
  }
});

/* 3. Click to Show More Content Boxes. */
const btn = document.getElementById("btn-toggle");
btn.addEventListener("click", () => {
  const hiddenCard = document.querySelector(".d-none");
  if (hiddenCard.style.display === "none") {
    btn.textContent = "Show less"
    hiddenCard.style.display = "flex";
  } else {
    btn.textContent = "Show more"
    hiddenCard.style.display = "none";
  }
});
