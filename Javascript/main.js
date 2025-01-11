function lightdark(){
    const button = document.getElementById("lightdark");
    button.onclick = function(){
        document.body.classList.toggle("light-mode");
        document.body.classList.toggle("dark-mode");
    };
};

window.onload = function(){
    lightdark();
};