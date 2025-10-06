const body = document.querySelector('body');
const footer = document.createElement('footer');
body.append(footer);

const today = new Date();
const thisYear = today.getFullYear();
const copyright = document.createElement('p');
const copySymbol = '\u{00A9}';
const skills = ["JavaScript", "HTML", "CSS", "Product Design", "Data Visualization", "UX Strategy", "Information Architecture"];
const skillsSection = document.getElementById('skills');
const skillList = skillsSection.querySelector('ul');
const navLinks = document.querySelectorAll('.navLink');
copyright.innerHTML = "Jay Wyche " + copySymbol + " " + thisYear;

footer.append(copyright);

for (let skill of skills) {
    let item = document.createElement('li');
    item.innerHTML = skill;
    item.classList.add('list-item');
    skillList.append(item);
}

footer.style.textAlign = "center";
footer.style.fontSize = ".8em";

function mobileNav() {
    navLinks.forEach(link => {
        link.classList.toggle('showLink')
    });
}

function hideNav() {
    navLinks.forEach(link => {
        link.classList.remove('showLink')
    });
}

const messageForm = document.getElementsByName('leave_message');
messageForm[0].addEventListener('submit', event => {
    event.preventDefault();
    const userName = event.target.usersName.value;
    const userEmail = event.target.usersEmail.value;
    const userMessage = event.target.usersMessage.value;
    const messageSection = document.getElementById('messages');
    const messageList = messageSection.querySelector('ul');
    headerToggle(messageSection, messageList);
    const newMessage = document.createElement('li');
    newMessage.innerHTML = `<a href="mailto:${userEmail}">${userName}</a>\n<span>${userMessage}</span>`;
    newMessage.classList.add('msg');
    const removeButton = document.createElement('button');
    removeButton.innerHTML = "Remove";
    removeButton.type = 'button';
    removeButton.style.marginLeft = '1em';
    removeButton.addEventListener('click', () => {
        const entry = removeButton.parentNode;
        entry.remove();
        headerToggle(messageSection, messageList);
    })
    newMessage.append(removeButton);
    messageList.append(newMessage);
    messageForm[0].reset();
});

const headerToggle = (head,list) => {
    if (!head.checkVisibility()){
        head.style.display = 'block';
    } else {
        if (!list.hasChildNodes()){
            head.style.display = 'none';
        }
    }
};

const gitFetch = async () => {
    try{
        const response = await fetch('https://api.github.com/users/jaydubb/repos');
        const gitData = await response.json();
        if(!response.ok){
            throw new Error(response.status);
        }
        const repositories = [];
        for(let repo of gitData){
            repositories.push(repo.name);
        }
        const projectSection = document.getElementById('projects');
        const projectList = projectSection.querySelector('ul');
        for(let item of repositories) {
            let project = document.createElement('li');
            project.innerHTML = `${item}`;
            project.classList.add('list-item');
            projectList.appendChild(project);
        }
    } catch(error) {
        console.error(error);
    }
}

gitFetch();