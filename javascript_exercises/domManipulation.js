const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";
container.appendChild(content);

const para = document.createElement("p");
para.textContent = "Hey I'm red!";
para.style.color = "red";
container.appendChild(para);

const blueTitle = document.createElement("h3");
blueTitle.textContent = "I’m a blue h3!";
blueTitle.style.color = "blue";
container.appendChild(blueTitle);

const fatherDiv = document.createElement("div");
//fatherDiv.setAttribute("id","father");

const secondDiv = document.createElement("div");
secondDiv.textContent = "I'm in a div";
fatherDiv.appendChild(secondDiv);

const paraDiv = document.createElement("p");
paraDiv.textContent = "ME TOO!";
fatherDiv.appendChild(paraDiv);

container.appendChild(fatherDiv);

//trying the event listener

//btn.addEventListener('click', function (e) {
//    console.log(e.target);
//  });

btn.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
  });
