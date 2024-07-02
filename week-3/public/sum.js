const calculateBtn = document.querySelector("#button");
calculateBtn.addEventListener("click", () => {
  const number = document.querySelector("#input").value;
  const result = document.getElementById("result");

  let url = "/getData";
  if (number) {
    url += `?number=${number}`;
  };

  fetch(url)
    .then(response => response.text())
    .then(data => {
      result.innerHTML = data;
    })
    .catch(error => {
      result.innerHTML = 'Error: ' + error;
    });
});