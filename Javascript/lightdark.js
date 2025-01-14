//Light + Dark Mode
document.addEventListener("DOMContentLoaded", function(){
    const body = document.body;
    const icon = document.getElementById("lightdarkicon");
    const mode = localStorage.getItem("mode") || "light-mode";
    const moon = localStorage.getItem("moon") || "fa-solid";

    //Set Initial Mode
    body.classList.add(mode);
    icon.classList.add(moon);

    //Toggle Mode function
    function toggleLightDark(){
        const isLightMode = body.classList.contains("light-mode");

        body.classList.toggle("light-mode", !isLightMode);
        body.classList.toggle("dark-mode", isLightMode);
        localStorage.setItem("mode", isLightMode ? "dark-mode" : "light-mode");

        icon.classList.toggle("fa-solid", !isLightMode);
        icon.classList.toggle("fa-regular", isLightMode);
        localStorage.setItem("moon", isLightMode ? "fa-regular" : "fa-solid");
    }

    //Event Listener for the Button
    document.getElementById("lightdark").addEventListener("click", function(event){
        event.preventDefault();
        toggleLightDark();
    })
})




