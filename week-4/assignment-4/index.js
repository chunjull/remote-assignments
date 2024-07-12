let page = 1;
function displayRepos() {
  const url = `https://api.github.com/orgs/facebook/repos?per_page=5&page=${page}`;
  fetch(url)
    .then(response => response.json())
    .then(data => {
      const reposContainer = document.getElementById("repos");
      data.forEach(repo => {
        const repoLi = document.createElement("li");
        repoLi.classList.add("card");

        let topicsContent = "";
        if (repo.topics.length === 0) {
          topicsContent = `<ul class="btnGroup" style="display: none;"></ul>`;
        } else {
          topicsContent = `<ul class="btnGroup">`;
          repo.topics.forEach(topic => {
            topicsContent += `<li class="btnItem"><button class="topicsBtn">${topic}</button></li>`;
          });
          topicsContent += `</ul>`;
        }

        repoLi.innerHTML = `
        <div class="card-title">
          <h3><a href="#">${repo.name}</a></h3>
          <span class="visibility">${repo.visibility}</span>
        </div>
        <div class="description">${repo.description || "No description"}</div>
        ${topicsContent}
        `;
        reposContainer.appendChild(repoLi);
      });
    })
    .catch(error => console.log('Error:', error));
};
displayRepos();

document.getElementById("more").addEventListener("click", () => {
  page++;
  displayRepos();
});