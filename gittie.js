let button = document.querySelector('#fetch');
let arr=[];
button.addEventListener('click', function(event) {
    event.preventDefault()
    console.log("Prevented default action of submit button and making it print all the repos")
    let name = document.querySelector('#name').value;
    arr=[];
    if (name.trim() === "") {
        alert("Please enter a name!");
        return;
      }
    else{
        let requestURL='https://api.github.com/users/' + name;
        fetch(requestURL)// it returns a promise that resolves to the response of the request        
        .then((response)=>{
        return response.json()// this will return a promise that resolves to the json data of the response
      })
        .then((data)=>{// this will run after the json data is resolved
          console.log("Data fetched successfully");
          console.log(data)
          if (data.message === "Not Found") {
            document.querySelector('#name').value = "";
            addpara('User not found');
            return;
          }
          console.log(data.name)
          const repoUrl=data.repos_url;
          fetch(repoUrl)// fetching the repositories of the user
          .then((response)=>{
            return response.json()// this will return a promise that resolves to the json data of the response
          }).
          then((repos)=>{
            console.log(`Repositories are:`);
            for(const repo in repos){
              arr.push(repos[repo].name)
              console.log(repos[repo].name);
            }
            console.log(arr);
            addpara('The repositories of the user are:');
            addElement();
          }).
          catch((e)=>{
            console.log("Error occured while fetching repos: ",e);
          })
        })
        .catch((error)=>{
          console.log("Error:",error)
        })
      } const parentid = document.getElementById('repos');
    parentid.innerHTML = "";
  }     
,false);

document.getElementById('reset').addEventListener('click', () => {
  document.getElementById('repos').innerHTML = "";
  document.querySelector('#name').value = "";
});

function addpara(insidedata){
    let newElement = document.createElement("p");
    let textNode = document.createTextNode(insidedata);
    newElement.appendChild(textNode);
    let parentid=document.getElementById('repos');

    parentid.appendChild(newElement);
}
function addElement() {
  console.log("Printing repos on the webpage.....")
  arr.forEach(element => {
    let newElement = document.createElement("div");
    let textNode = document.createTextNode(element);
    newElement.appendChild(textNode);
    let parentid=document.getElementById('repos');
    newElement.classList.add("repo-box"); // Add styling class
    parentid.appendChild(newElement);
    
  });
    
}
