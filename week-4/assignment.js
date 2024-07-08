/*
Assignment1: callback function
*/
function delayedResult(n1, n2, delayTime, callback) {
  window.setTimeout(function(result) {
    result = n1 + n2;
    callback(result);
  }, delayTime);
};
delayedResult(4, 5, 3000, function(result) {
  console.log(result);
});
delayedResult(-5, 10, 2000, function(result) {
  window.alert(result);
});

/*
Assignment 2: HTML DOM and AJAX
*/
function ajax(url) {
  return fetch(url)
    .then(response => response.json())
    .then(data => data)
}
function render(data) {
  let body = document.querySelector("body");
  console.log(data);
  data.forEach((e) => {
    body.innerHTML += `
    <table style="width: 60%; border: 1px solid black;">
      <tr style="background-color: #ffaa00">
        <th style="width: 20%">Name</th>
        <th style="width: 20%">Price</th>
        <th style="width: 20%">Description</th>
      </tr>
      <tr style="text-align: center">
        <td>${e.name}</td>
        <td>${e.price}TWD</td>
        <td>${e.description}</td>
      </tr>
    </table>
    `;
  })
}
const url = "https://remote-assignment.s3.ap-northeast-1.amazonaws.com/products";
ajax(url)
  .then((data) => {render(data)});