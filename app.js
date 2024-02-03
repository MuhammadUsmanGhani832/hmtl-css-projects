const menuBtn = document.getElementById('menu-btn');
const menuDiv = document.getElementById('menu-div');
const menuDivClossBtn = document.getElementsByClassName('menu-close-btn')[0];
const main = document.getElementById('main');

setTimeout(() => {
    main.style.display = 'block';
    document.getElementsByClassName('loading')[0].style.display = 'none';
    const allProjects = document.getElementsByClassName('projects');

    for (let i = 0; i < allProjects.length; i++) {
        allProjects[i].style.display = 'none';
    }
    handleCloseMenu();
    allProjects[1].style.display = "block"
}, 2000);


const menuFunction = () => {
    menuBtn.style.display = 'none';
    menuDiv.style.left = '0';
}

menuDivClossBtn.addEventListener("click", () => {
    handleCloseMenu();
})

const handleCloseMenu = () => {
    menuDiv.style.left = "-300px";
    menuBtn.style.display = 'flex';
}
const showProject = (id) => {
    const projectToShow = document.getElementById(id);
    const allProjects = document.getElementsByClassName('projects');

    for (let i = 0; i < allProjects.length; i++) {
        allProjects[i].style.display = 'none';
    }
    handleCloseMenu();
    projectToShow.style.display = 'block'


}