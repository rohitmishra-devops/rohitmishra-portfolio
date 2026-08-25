// =========================================================
// ROHIT MISHRA PORTFOLIO
// FINAL JAVASCRIPT
// =========================================================


// =========================================================
// PAGE NAVIGATION
// =========================================================

function showPage(pageId) {

    const pages = document.querySelectorAll(".page");

    pages.forEach((page) => {
        page.classList.remove("active");
    });

    const selectedPage = document.getElementById(pageId);

    if (selectedPage) {
        selectedPage.classList.add("active");
    }

    // Update active navbar button
    const navButtons = document.querySelectorAll("nav button");

    navButtons.forEach((button) => {
        button.classList.remove("active");
    });

    const activeButton = document.querySelector(
        `nav button[onclick="showPage('${pageId}')"]`
    );

    if (activeButton) {
        activeButton.classList.add("active");
    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// =========================================================
// TYPING EFFECT
// =========================================================

const words = [
    "Full Stack Developer...",
    "Python Developer...",
    "AI Developer...",
    "Web Developer..."
];

let wordIndex = 0;
let letterIndex = 0;
let isDeleting = false;

const typingElement =
    document.querySelector(".hero-left h2");


function typingEffect() {

    if (!typingElement) return;

    const currentWord = words[wordIndex];

    if (isDeleting) {

        typingElement.textContent =
            currentWord.substring(0, letterIndex);

        letterIndex--;

    } else {

        typingElement.textContent =
            currentWord.substring(0, letterIndex);

        letterIndex++;

    }

    let speed = isDeleting ? 60 : 110;


    // Word completely typed
    if (
        !isDeleting &&
        letterIndex > currentWord.length
    ) {

        speed = 1300;

        isDeleting = true;
    }


    // Word completely deleted
    if (
        isDeleting &&
        letterIndex < 0
    ) {

        isDeleting = false;

        letterIndex = 0;

        wordIndex++;

        if (wordIndex >= words.length) {
            wordIndex = 0;
        }

        speed = 400;
    }


    setTimeout(
        typingEffect,
        speed
    );
}

typingEffect();


// =========================================================
// PROJECT DATA
// =========================================================

const projectData = {

    ai: {

        title: "AI Career Assistant",

        description:
            "An AI-powered career platform that helps users analyze resumes, explore suitable career paths, prepare for interviews and receive personalized career guidance.",

        live:
            "#",

        github:
            "https://github.com/rohitmishra-devops/ai-career-assistant-platform",

        icon:
            "ri-robot-2-fill"

    },


    hiregenie: {

        title: "HireGenie",

        description:
            "An AI-integrated freelance marketplace designed to connect clients and freelancers with intelligent matching, project management and modern web experiences.",

        live:
            "https://hiregenie-go83.onrender.com",

        github:
            "https://github.com/rohitmishra-devops/HireGenie",

        icon:
            "ri-briefcase-4-fill"

    }

};


// =========================================================
// PROJECT POPUP
// =========================================================

function openProject(project) {

    const data =
        projectData[project];

    if (!data) {
        return;
    }


    const modal =
        document.getElementById("projectModal");

    const title =
        document.getElementById("modalTitle");

    const description =
        document.getElementById("modalDescription");

    const icon =
        document.getElementById("modalIcon");

    const liveButton =
        document.getElementById("liveProject");

    const githubButton =
        document.getElementById("githubProject");


    if (!modal) {
        console.error(
            "Project modal not found in HTML."
        );

        return;
    }


    // Title
    if (title) {
        title.textContent =
            data.title;
    }


    // Description
    if (description) {
        description.textContent =
            data.description;
    }


    // Icon
    if (icon) {

        icon.className =
            data.icon;
    }


    // Live Project
    if (liveButton) {

        liveButton.href =
            data.live;

        liveButton.target =
            "_blank";

        liveButton.rel =
            "noopener noreferrer";


        // AI live link not added yet
        if (
            !data.live ||
            data.live === "#"
        ) {

            liveButton.style.display =
                "none";

        } else {

            liveButton.style.display =
                "inline-flex";
        }
    }


    // GitHub
    if (githubButton) {

        githubButton.href =
            data.github;

        githubButton.target =
            "_blank";

        githubButton.rel =
            "noopener noreferrer";
    }


    // Open modal
    modal.classList.add("show");

    document.body.classList.add(
        "modal-open"
    );
}


// =========================================================
// CLOSE PROJECT POPUP
// =========================================================

function closeProject() {

    const modal =
        document.getElementById(
            "projectModal"
        );

    if (!modal) {
        return;
    }

    modal.classList.remove(
        "show"
    );

    document.body.classList.remove(
        "modal-open"
    );
}


// =========================================================
// CLOSE MODAL WHEN CLICKING OUTSIDE
// =========================================================

document.addEventListener(
    "click",
    function (event) {

        const modal =
            document.getElementById(
                "projectModal"
            );

        if (!modal) {
            return;
        }

        if (
            event.target === modal
        ) {

            closeProject();
        }

    }
);


// =========================================================
// ESC KEY CLOSE MODAL
// =========================================================

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Escape"
        ) {

            closeProject();
        }

    }
);


// =========================================================
// BUTTON RIPPLE EFFECT
// =========================================================

document.addEventListener(
    "click",
    function (event) {

        const button =
            event.target.closest(
                "button"
            );

        if (!button) {
            return;
        }


        const ripple =
            document.createElement(
                "span"
            );

        ripple.className =
            "ripple";


        const rect =
            button.getBoundingClientRect();


        const x =
            event.clientX -
            rect.left;


        const y =
            event.clientY -
            rect.top;


        ripple.style.left =
            x + "px";

        ripple.style.top =
            y + "px";


        button.appendChild(
            ripple
        );


        setTimeout(() => {

            ripple.remove();

        }, 600);

    }
);


// =========================================================
// 3D CARD EFFECT
// =========================================================

const cards =
    document.querySelectorAll(
        ".card"
    );


cards.forEach((card) => {


    card.addEventListener(
        "mousemove",
        function (event) {

            const rect =
                card.getBoundingClientRect();


            const x =
                event.clientX -
                rect.left;


            const y =
                event.clientY -
                rect.top;


            const rotateX =
                -(
                    (y - rect.height / 2)
                    / 18
                );


            const rotateY =
                (
                    (x - rect.width / 2)
                    / 18
                );


            card.style.transform =
                `perspective(1000px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 translateY(-8px)
                 scale(1.01)`;

        }
    );


    card.addEventListener(
        "mouseleave",
        function () {

            card.style.transform =
                "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0) scale(1)";

        }
    );

});


// =========================================================
// CURSOR GLOW
// =========================================================

const cursor =
    document.createElement(
        "div"
    );

cursor.className =
    "cursor-glow";

document.body.appendChild(
    cursor
);


document.addEventListener(
    "mousemove",
    function (event) {

        cursor.style.left =
            event.clientX + "px";

        cursor.style.top =
            event.clientY + "px";

    }
);


// =========================================================
// HERO PROFILE PARALLAX
// =========================================================

const heroProfile =
    document.querySelector(
        ".profile-3d"
    );


document.addEventListener(
    "mousemove",
    function (event) {

        if (!heroProfile) {
            return;
        }


        // Don't move profile too much
        const x =
            (window.innerWidth / 2 -
                event.clientX) / 80;


        const y =
            (window.innerHeight / 2 -
                event.clientY) / 80;


        heroProfile.style.setProperty(
            "--mouse-x",
            `${x}px`
        );

        heroProfile.style.setProperty(
            "--mouse-y",
            `${y}px`
        );

    }
);


// =========================================================
// PROFILE FLOAT EFFECT
// =========================================================

if (heroProfile) {

    let floatDirection = 1;

    setInterval(() => {

        heroProfile.animate(

            [
                {
                    transform:
                        `translate(
                            var(--mouse-x, 0px),
                            var(--mouse-y, 0px)
                        )`
                },

                {
                    transform:
                        `translate(
                            var(--mouse-x, 0px),
                            calc(
                                var(--mouse-y, 0px) - 10px
                            )
                        )`
                },

                {
                    transform:
                        `translate(
                            var(--mouse-x, 0px),
                            var(--mouse-y, 0px)
                        )`
                }

            ],

            {
                duration: 3000,
                iterations: 1
            }

        );

        floatDirection *= -1;

    }, 3000);
}


// =========================================================
// CARD REVEAL
// =========================================================

const revealElements =
    document.querySelectorAll(
        ".card, .box, .stats div"
    );


const revealObserver =
    new IntersectionObserver(

        (entries) => {

            entries.forEach(
                (entry) => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.style.opacity =
                            "1";

                        entry.target.style.transform =
                            "translateY(0)";

                        revealObserver.unobserve(
                            entry.target
                        );
                    }

                }
            );

        },

        {
            threshold: 0.12
        }

    );


revealElements.forEach(
    (element) => {

        element.style.opacity =
            "0";

        element.style.transform =
            "translateY(35px)";

        element.style.transition =
            "opacity .7s ease, transform .7s ease";

        revealObserver.observe(
            element
        );

    }
);


// =========================================================
// LOGO ANIMATION
// =========================================================

const logo =
    document.querySelector(
        ".logo"
    );


if (logo) {

    logo.addEventListener(
        "mouseenter",
        function () {

            logo.style.transform =
                "rotate(-7deg) scale(1.08)";

        }
    );


    logo.addEventListener(
        "mouseleave",
        function () {

            logo.style.transform =
                "rotate(0deg) scale(1)";

        }
    );


    // Double click → Home
    logo.addEventListener(
        "dblclick",
        function () {

            showPage("home");

        }
    );

}


// =========================================================
// NAVBAR SCROLL EFFECT
// =========================================================

const header =
    document.querySelector(
        "header"
    );


window.addEventListener(
    "scroll",
    function () {

        if (!header) {
            return;
        }


        if (
            window.scrollY > 30
        ) {

            header.style.boxShadow =
                "0 8px 25px rgba(0,255,136,.18)";

            header.style.background =
                "rgba(5,8,5,.96)";

        } else {

            header.style.boxShadow =
                "none";

            header.style.background =
                "rgba(5,8,5,.92)";

        }

    }
);


// =========================================================
// SCROLL PROGRESS BAR
// =========================================================

const progress =
    document.createElement(
        "div"
    );


progress.style.position =
    "fixed";

progress.style.top =
    "0";

progress.style.left =
    "0";

progress.style.height =
    "3px";

progress.style.width =
    "0%";

progress.style.background =
    "#00ff88";

progress.style.zIndex =
    "99999";

progress.style.pointerEvents =
    "none";

progress.style.boxShadow =
    "0 0 10px #00ff88";


document.body.appendChild(
    progress
);


function updateProgress() {

    const documentHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;


    if (documentHeight <= 0) {

        progress.style.width =
            "0%";

        return;
    }


    const scrollPercent =
        (
            window.scrollY /
            documentHeight
        ) * 100;


    progress.style.width =
        Math.min(
            scrollPercent,
            100
        ) + "%";
}


window.addEventListener(
    "scroll",
    updateProgress
);

window.addEventListener(
    "resize",
    updateProgress
);


// =========================================================
// PRELOADER / PAGE LOAD
// =========================================================

window.addEventListener(
    "load",
    function () {

        document.body.classList.add(
            "loaded"
        );

        // Always start from Home
        showPage("home");

        updateProgress();

    }
);


// =========================================================
// PREVENT BROKEN LIVE LINK
// =========================================================

document.addEventListener(
    "click",
    function (event) {

        const liveButton =
            event.target.closest(
                "#liveProject"
            );

        if (!liveButton) {
            return;
        }


        if (
            liveButton.href.endsWith("#")
        ) {

            event.preventDefault();

            alert(
                "Live project link will be added soon."
            );
        }

    }
);


// =========================================================
// CONSOLE
// =========================================================

console.log(
    "%cWelcome to Rohit Mishra Portfolio 🚀",
    "color:#00ff88;font-size:18px;font-weight:bold;"
);

console.log(
    "%cFull Stack Developer • Python • Django • AI",
    "color:#ffffff;font-size:14px;"
);

console.log(
    "%cPortfolio Loaded Successfully ✅",
    "color:#00ff88;font-size:14px;font-weight:bold;"
);


// =========================================================
// END
// =========================================================
