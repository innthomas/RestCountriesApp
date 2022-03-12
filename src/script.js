var app = document.getElementById("root");

var container = document.createElement("div");
container.setAttribute("class", "container");

app.appendChild(container);

function fetchData() {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      var h1 = document.createElement("h1");
      h1.textContent = json.title;
      container.appendChild(h1);
    });
}
fetchData();
