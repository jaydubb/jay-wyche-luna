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