function generate_header(path = "..") {
    document.querySelector("body header").innerHTML = `
        <div class="content">
            <h1><a href="${path}/">PlayerPlanner</a></h1>
            <div class="nav close">
                <button onclick="alternate_nav()">Abrir</button>
                <nav>
                    <a href="${path}/genshin-impact/"><span>Genshin Impact</span></a>
                    <a href="${path}/wuthering-waves/"><span>Wuthering Waves</span></a>
                    <a href="${path}/honkai-star-rail/"><span>Honkai Star Rail</span></a>
                    <a href="${path}/league-of-legends/"><span>League Of Legends</span></a>
                </nav>
            </div>
        </div>
    `;
}
function alternate_nav(){
    const nav = document.querySelector("body header .content .nav");
    if(nav.classList.contains("open")){
        nav.querySelector("button").textContent = "Abrir"
        nav.classList.replace("open", "close")
    } else {
        nav.querySelector("button").textContent = "Cerrar"
        nav.classList.replace("close", "open")
    }
}
function generate_footer() {
    document.querySelector("body footer").innerHTML = `        
        <div class="content">
            <p>a</p>
            <div></div>
            <div></div>
            <div></div>
        </div>
    `;
}

generate_header();
generate_footer();