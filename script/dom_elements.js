function generate_header() {
    document.querySelector("body header").innerHTML = `
        <h1><a href="../">PlayerPlanner</a></h1>
        <div class="close">
            <button onclick="alternate_nav()">Abrir</button>
            <nav>
                <a href="../genshin-impact/"><span>Genshin Impact</span></a>
                <a href="../wuthering-waves/"><span>Wuthering Waves</span></a>
                <a href="../honkai-star-rail/"><span>Honkai Star Rail</span></a>
                <a href="../league-of-legends/"><span>League Of Legends</span></a>
            </nav>
        </div>
    `;
}
function alternate_nav(){
    const nav = document.querySelector("body header div");
    if(nav.classList.contains("open")){
        nav.querySelector("button").textContent = "Abrir"
        nav.classList.replace("open", "close")
    } else {
        nav.querySelector("button").textContent = "Cerrar"
        nav.setAttribute("class", "open")
    }
}
function generate_footer() {
    document.querySelector("body footer").innerHTML = `
        <div></div>
        <div></div>
        <div></div>
    `;
}

generate_header();
generate_footer();