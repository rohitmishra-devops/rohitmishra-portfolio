// ===============================
// PAGE NAVIGATION
// ===============================

function showPage(pageId){

    let pages = document.querySelectorAll(".page");

    pages.forEach((page)=>{
        page.classList.remove("active");
    });

    let selectedPage = document.getElementById(pageId);

    if(selectedPage){
        selectedPage.classList.add("active");
    }

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

}





// ===============================
// ACTIVE NAV BUTTON
// ===============================

let navButtons = document.querySelectorAll("nav button");

navButtons.forEach((btn)=>{

    btn.addEventListener("click",()=>{

        navButtons.forEach((b)=>{
            b.classList.remove("active");
        });

        btn.classList.add("active");

    });

});






// ===============================
// TYPING EFFECT
// ===============================

const words = [

"Full Stack Developer...",

"Python Developer...",

"Web Developer...",

];

let wordIndex = 0;

let letterIndex = 0;

let currentWord = "";

let isDeleting = false;

const typingElement = document.querySelector(".hero-left h2");

function typingEffect(){

    if(!typingElement) return;

    currentWord = words[wordIndex];

    if(isDeleting){

        typingElement.innerHTML =
        currentWord.substring(0,letterIndex--);

    }

    else{

        typingElement.innerHTML =
        currentWord.substring(0,letterIndex++);

    }

    let speed = isDeleting ? 60 : 120;

    if(!isDeleting && letterIndex === currentWord.length+1){

        speed = 1200;

        isDeleting = true;

    }

    if(isDeleting && letterIndex === 0){

        isDeleting = false;

        wordIndex++;

        if(wordIndex >= words.length){

            wordIndex = 0;

        }

    }

    setTimeout(typingEffect,speed);

}

typingEffect();







// ===============================
// FLOAT EFFECT
// ===============================

let profile = document.querySelector(".profile-3d");

if(profile){

setInterval(()=>{

profile.animate([

{

transform:"translateY(0px)"

},

{

transform:"translateY(-10px)"

},

{

transform:"translateY(0px)"

}

],{

duration:3000,

iterations:1

});

},3000);

}
// ===============================
// PROJECT DETAILS
// ===============================

function openProject(project){

    const title = document.getElementById("project-title");
    const description = document.getElementById("project-description");
    const github = document.getElementById("github-link");

    if(project === "amazon"){

        title.innerHTML = "Amazon Clone";

        description.innerHTML =
        "A responsive Amazon Clone built using HTML, CSS and JavaScript with a modern UI and responsive layout.";

        github.href =
        "https://github.com/rohitmishra-devops";

    }

 else if(project === "ai"){

    title.innerHTML = "AI Career Assistant Platform";

    description.innerHTML =
    "An AI-powered Career Assistant Platform built to help users analyze resumes, discover suitable career paths, prepare for interviews, and receive personalized job recommendations.";

    github.href =
    "https://github.com/rohitmishra-devops/ai-career-assistant-platform";

}
     else if(project === "image"){

    title.innerHTML = "Image Editor";

    description.innerHTML =
    "A modern Image Editor built using HTML, CSS and JavaScript with image upload, filters, brightness, saturation, grayscale, rotate, flip and download functionality.";

    github.href =
    "https://rohitmishra-devops.github.io/Image-Editor/";

}
    else if(project === "login"){

        title.innerHTML = "Login System";

        description.innerHTML =
        "A Login Authentication System built using Python and MySQL with secure database connectivity.";

        github.href =
        "https://github.com/rohitmishra-devops/login-system";

    }

    showPage("project-detail");

}






// ===============================
// BUTTON CLICK ANIMATION
// ===============================

let buttons = document.querySelectorAll("button");

buttons.forEach((button)=>{

    button.addEventListener("click",(e)=>{

        let ripple = document.createElement("span");

        ripple.className = "ripple";

        let x = e.clientX - button.offsetLeft;

        let y = e.clientY - button.offsetTop;

        ripple.style.left = x + "px";

        ripple.style.top = y + "px";

        button.appendChild(ripple);

        setTimeout(()=>{

            ripple.remove();

        },600);

    });

});






// ===============================
// GITHUB BUTTON HOVER
// ===============================

const githubButton = document.getElementById("github-link");

if(githubButton){

    githubButton.addEventListener("mouseenter",()=>{

        githubButton.style.transform = "scale(1.05)";

    });

    githubButton.addEventListener("mouseleave",()=>{

        githubButton.style.transform = "scale(1)";

    });

}

// ===============================
// 3D CARD EFFECT
// ===============================

const cards = document.querySelectorAll(".card");

cards.forEach((card)=>{

    card.addEventListener("mousemove",(e)=>{

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        const rotateX = -((y - rect.height/2)/12);

        const rotateY = ((x - rect.width/2)/12);

        card.style.transform =
        `perspective(1000px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        scale(1.05)`;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform =
        "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";

    });

});






// ===============================
// CURSOR GLOW
// ===============================

const cursor = document.createElement("div");

cursor.className = "cursor-glow";

document.body.appendChild(cursor);

document.addEventListener("mousemove",(e)=>{

    cursor.style.left = e.clientX + "px";

    cursor.style.top = e.clientY + "px";

});






// ===============================
// CARD FADE-IN ANIMATION
// ===============================

const observer = new IntersectionObserver((entries)=>{

    entries.forEach((entry)=>{

        if(entry.isIntersecting){

            entry.target.style.opacity = "1";

            entry.target.style.transform = "translateY(0px)";

        }

    });

},{
    threshold:0.2
});

cards.forEach((card)=>{

    card.style.opacity = "0";

    card.style.transform = "translateY(50px)";

    card.style.transition = "0.7s";

    observer.observe(card);

});






// ===============================
// HERO PARALLAX
// ===============================

const hero = document.querySelector(".profile-3d");

document.addEventListener("mousemove",(e)=>{

    if(!hero) return;

    let x = (window.innerWidth/2 - e.clientX)/40;

    let y = (window.innerHeight/2 - e.clientY)/40;

    hero.style.transform =
    `translate(${x}px,${y}px)`;

});






// ===============================
// LOGO ANIMATION
// ===============================

const logo = document.querySelector(".logo");

if(logo){

logo.addEventListener("mouseenter",()=>{

logo.style.transform="rotate(-8deg) scale(1.1)";

});

logo.addEventListener("mouseleave",()=>{

logo.style.transform="rotate(0deg) scale(1)";

});

}
// ===============================
// PRELOADER
// ===============================

window.addEventListener("load",()=>{

    document.body.classList.add("loaded");

});






// ===============================
// NAVBAR SHADOW ON SCROLL
// ===============================

const header = document.querySelector("header");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 30){

        header.style.boxShadow =
        "0 8px 25px rgba(0,255,136,.25)";

        header.style.background =
        "rgba(5,7,11,.92)";

    }

    else{

        header.style.boxShadow = "none";

        header.style.background =
        "rgba(5,7,11,.65)";

    }

});






// ===============================
// SCROLL PROGRESS BAR
// ===============================

const progress = document.createElement("div");

progress.style.position = "fixed";
progress.style.top = "0";
progress.style.left = "0";
progress.style.height = "4px";
progress.style.width = "0%";
progress.style.background = "#00ff88";
progress.style.zIndex = "99999";
progress.style.transition = "width .1s";

document.body.appendChild(progress);

window.addEventListener("scroll",()=>{

    let totalHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

    let scroll =
    (window.scrollY / totalHeight) * 100;

    progress.style.width = scroll + "%";

});






// ===============================
// SCROLL REVEAL
// ===============================

const revealElements =
document.querySelectorAll(".box,.card,.stats div");

const revealObserver =
new IntersectionObserver((entries)=>{

    entries.forEach((entry)=>{

        if(entry.isIntersecting){

            entry.target.style.opacity = "1";
            entry.target.style.transform =
            "translateY(0)";

        }

    });

},{
    threshold:0.15
});

revealElements.forEach((element)=>{

    element.style.opacity = "0";

    element.style.transform =
    "translateY(40px)";

    element.style.transition =
    ".8s ease";

    revealObserver.observe(element);

});






// ===============================
// DOUBLE CLICK LOGO
// ===============================

const logoElement =
document.querySelector(".logo");

if(logoElement){

logoElement.addEventListener("dblclick",()=>{

    showPage("home");

});

}






// ===============================
// CONSOLE MESSAGE
// ===============================

console.log(
"%cWelcome to Rohit Mishra Portfolio 🚀",
"color:#00ff88;font-size:18px;font-weight:bold;"
);

console.log(
"%cDesigned & Developed by Rohit Mishra",
"color:white;font-size:14px;"
);






// ===============================
// END
// ===============================

console.log("Portfolio Loaded Successfully ✅");
