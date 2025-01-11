function toggleLightDark(){
    const body = document.body;
    const icon = document.getElementById("lightdarkicon");
    if (body.classList.contains("light-mode")){
        body.classList.remove("light-mode");
        body.classList.add("dark-mode");
        localStorage.setItem("mode", "dark-mode");
        icon.classList.remove("fa-solid");
        icon.classList.add("fa-regular");
        localStorage.setItem("moon", "fa-regular")
    } else{
        body.classList.remove("dark-mode");
        body.classList.add("light-mode");
        localStorage.setItem("mode", "light-mode");
        icon.classList.remove("fa-regular");
        icon.classList.add("fa-solid");
        localStorage.setItem("moon", "fa-solid");
    }
}

function setInitialMode(){
    const mode = localStorage.getItem("mode");
    const moon = localStorage.getItem("moon");
    const icon = document.getElementById("lightdarkicon");
    if (mode) {
        document.body.classList.add(mode);
        icon.classList.add(moon);
    } else {
        document.body.classList.add("light-mode");
        icon.classList.add("fa-solid");
    }
}

document.getElementById("lightdark").addEventListener("click", function(event){
    event.preventDefault();
    toggleLightDark();
});

window.onload = setInitialMode;


