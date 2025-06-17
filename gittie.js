let button = document.querySelector('#fetch');
let arr = [];

button.addEventListener('click', function(event) {
  event.preventDefault();
  console.log("Prevented default action of submit button and making it print all the repos");

  let name = document.querySelector('#name').value;
  arr = [];

  const parentid = document.getElementById('repos');
  parentid.innerHTML = "";

  if (name.trim() === "") {
    alert("Please enter a name!");
    return;
  }

  let requestURL = 'https://api.github.com/users/' + name;
  fetch(requestURL)
    .then((response) => response.json())
    .then((data) => {
      console.log("Data fetched successfully");
      console.log(data);

      if (data.message === "Not Found") {
        document.querySelector('#name').value = "";
        addpara('User not found');
        return;
      }

      const repoUrl = data.repos_url;
      fetch(repoUrl)
        .then((response) => response.json())
        .then((repos) => {
          console.log(`Repositories are:`);
          for (const repo of repos) {
            arr.push({
              name: repo.name,
              link: repo.html_url
            });
            console.log(repo.name, repo.html_url);
          }
          console.log(arr);
          addpara('The repositories of the user are:');
          addElement();
        })
        .catch((e) => {
          console.log("Error occurred while fetching repos: ", e);
        });
    })
    .catch((error) => {
      console.log("Error:", error);
    });
}, false);

document.getElementById('reset').addEventListener('click', () => {
  document.getElementById('repos').innerHTML = "";
  document.querySelector('#name').value = "";
});

function addpara(text) {
  let newElement = document.createElement("p");
  let textNode = document.createTextNode(text);
  newElement.appendChild(textNode);
  let parentid = document.getElementById('repos');
  parentid.appendChild(newElement);
}

function addElement() {
  console.log("Printing repos on the webpage.....");
  arr.forEach(element => {
    let newElement = document.createElement("div");
    let anchor = document.createElement("a");
    anchor.href = element.link;
    anchor.textContent = element.name;
    anchor.target = "_blank";
    anchor.style.textDecoration = "none";
    anchor.style.color = "aliceblue";
    newElement.appendChild(anchor);
    newElement.classList.add("repo-box");
    document.getElementById('repos').appendChild(newElement);
  });
}

document.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    console.log("Enter key pressed");
    document.querySelector('#fetch').click();
  }
}, false);
