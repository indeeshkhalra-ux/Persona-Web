/*==================================================
  J1
  Core Project Initialization
  My Personal Project
==================================================*/

"use strict";

/*==================================================
  Project Object
==================================================*/

const Project = {

    version: "1.0",

    init() {

        console.log("🚀 Project Initialized");

        this.cache();

        this.events();

    },

    cache() {

        this.body = document.body;

        this.navbar = document.querySelector(".navbar");

        this.hero = document.querySelector(".hero-section");

        this.planetSystem = document.querySelector(".planet-system");

        this.terminal = document.querySelector(".terminal-output");

        this.equalizer = document.querySelector(".equalizer");

    },

    events() {

        window.addEventListener("resize", this.onResize);

        window.addEventListener("scroll", this.onScroll);

    },

    onResize() {

        console.log("Window resized");

    },

    onScroll() {

        // Reserved for future modules

    }

};

/*==================================================
  Start Project
==================================================*/

document.addEventListener("DOMContentLoaded", () => {

    Project.init();

});
/*==================================================
  J2
  Galaxy Cursor Engine
==================================================*/
/*====================================
    SUPERNOVA V3
    PART 1
====================================*/

const Supernova={

    theme:"default",

    colors:{

        default:"#7df9ff",

        nasa:"#7df9ff",

        coding:"#00ff88",

        music:"#ff4ecd",

        rocket:"#ff9900",

        cpu:"#00ffff",

        laptop:"#ffffff"

    }

};

function setTheme(theme){

    Supernova.theme=theme;

    const color=
    Supernova.colors[theme]||
    Supernova.colors.default;

    document.documentElement.style.setProperty("--sn-primary",color);
    document.documentElement.style.setProperty("--sn-accent",color);
    document.documentElement.style.setProperty("--sn-glow",color);

}
/*====================================
    SUPERNOVA V3
    PARTICLE ENGINE
====================================*/

function createParticle(x,y,color){

    const particle=document.createElement("span");

    particle.className="cursor-particle";

    particle.style.left=x+"px";
    particle.style.top=y+"px";

    particle.style.background=color;

    const size=Math.random()*8+4;

    particle.style.width=size+"px";
    particle.style.height=size+"px";

    const angle=Math.random()*Math.PI*2;

    const distance=Math.random()*120+40;

    particle.style.setProperty(
        "--x",
        Math.cos(angle)*distance+"px"
    );

    particle.style.setProperty(
        "--y",
        Math.sin(angle)*distance+"px"
    );

    document.body.appendChild(particle);

    setTimeout(()=>{

        particle.remove();

    },900);

}

/*====================================
    ICON THEME SWITCH
====================================*/

const iconCards=
document.querySelectorAll(".icon-card");

iconCards.forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        if(card.classList.contains("nasa"))
        setTheme("nasa");

        else if(card.classList.contains("coding"))
        setTheme("coding");

        else if(card.classList.contains("music"))
        setTheme("music");

        else if(card.classList.contains("rocket"))
        setTheme("rocket");

        else if(card.classList.contains("cpu"))
        setTheme("cpu");

        else if(card.classList.contains("laptop"))
        setTheme("laptop");

    });

    card.addEventListener("mouseleave",()=>{

        setTheme("default");

    });

});

const Cursor = {

    cursor: null,

    mouseX: window.innerWidth / 2,
    mouseY: window.innerHeight / 2,

    x: window.innerWidth / 2,
    y: window.innerHeight / 2,

    speed: 0.16,

    init() {

        this.cursor = document.querySelector(".cursor-container");

        if (!this.cursor) return;

        document.addEventListener("mousemove",(e)=>{

            this.mouseX = e.clientX;
            this.mouseY = e.clientY;

        });

        document.addEventListener("mousedown",()=>{

            this.cursor.classList.add("cursor-click");

            setTimeout(()=>{

                this.cursor.classList.remove("cursor-click");

            },250);

        });

        document.querySelectorAll(

            "button,a,.planet,.glass-card,.icon-card,.nav-link"

        ).forEach(item=>{

            item.addEventListener("mouseenter",()=>{

                this.cursor.classList.add("active");

            });

            item.addEventListener("mouseleave",()=>{

                this.cursor.classList.remove("active");

            });

        });

        this.animate();

    },

    animate(){

        this.x += (this.mouseX - this.x) * this.speed;

        this.y += (this.mouseY - this.y) * this.speed;

        this.cursor.style.left = this.x + "px";

        this.cursor.style.top = this.y + "px";

        requestAnimationFrame(()=>this.animate());

    }

};

document.addEventListener("DOMContentLoaded",()=>{

    Cursor.init();

});
/*==================================================
  J3
  Live Terminal Engine
==================================================*/

const Terminal = {

    output: null,

    lines: [

        "> Initializing Project...",
        "> Loading Galaxy Engine...",
        "> Connecting NASA Database...",
        "> Loading Bootstrap 5...",
        "> Activating Solar System...",
        "> Preparing Portfolio...",
        "> Status: READY ✓"

    ],

    line: 0,

    character: 0,

    speed: 40,

    init() {

        this.output = document.querySelector(".terminal-output");

        if(!this.output) return;

        this.output.innerHTML = "";

        this.type();

    },

    type() {

        if(this.line >= this.lines.length){

            setTimeout(()=>{

                this.output.innerHTML = "";

                this.line = 0;

                this.character = 0;

                this.type();

            },2500);

            return;

        }

        let current = this.lines[this.line];

        if(this.character < current.length){

            this.output.innerHTML += current.charAt(this.character);

            this.character++;

            setTimeout(()=>this.type(),this.speed);

        }

        else{

            this.output.innerHTML += "<br>";

            this.line++;

            this.character = 0;

            setTimeout(()=>this.type(),450);

        }

    }

};

document.addEventListener("DOMContentLoaded",()=>{

    Terminal.init();

});
/*==================================================
  J4
  Dynamic Music Equalizer
==================================================*/

const Equalizer = {

    bars: [],

    animationFrame: null,

    init() {

        this.bars = document.querySelectorAll(".eq-bar");

        if (!this.bars.length) return;

        this.animate();

    },

    animate() {

        this.bars.forEach((bar, index) => {

            let base = 18;

            let randomHeight = Math.random() * 55 + base;

            let delay = index * 15;

            setTimeout(() => {

                bar.style.height = randomHeight + "px";

                bar.style.opacity = 0.75 + Math.random() * 0.25;

            }, delay);

        });

        this.animationFrame = setTimeout(() => {

            this.animate();

        }, 120);

    }

};

document.addEventListener("DOMContentLoaded", () => {

    Equalizer.init();

});
/*==================================================
  J5
  Solar System Engine
==================================================*/

const SolarSystem = {

    planets: [],

    infoTitle: null,

    infoText: null,

    init() {

        this.planets = document.querySelectorAll(".planet");

        this.infoTitle = document.getElementById("planetName");

        this.infoText = document.getElementById("planetData");

        if (this.planets.length === 0) return;

        this.registerEvents();

    },

    registerEvents() {

        this.planets.forEach((planet) => {

            planet.addEventListener("mouseenter", () => {

                this.showInfo(planet);

            });

            planet.addEventListener("click", () => {

                this.showInfo(planet);

            });

            planet.addEventListener("mouseleave", () => {

                this.resetInfo();

            });

        });

    },

    showInfo(planet) {

        const name = planet.dataset.planet || "Unknown Planet";

        const temp = planet.dataset.temp || "Unknown";

        const distance = planet.dataset.distance || "Unknown";

        const atmosphere = planet.dataset.atmosphere || "Unknown";

        this.infoTitle.textContent = name;

        this.infoText.innerHTML =

            "<strong>Temperature:</strong> " + temp +

            "<br><strong>Distance:</strong> " + distance +

            "<br><strong>Atmosphere:</strong> " + atmosphere;

    },

    resetInfo() {

        this.infoTitle.textContent = "Select Planet";

        this.infoText.textContent = "Hover over a planet";

    }

};

document.addEventListener("DOMContentLoaded", () => {

    SolarSystem.init();

});
/*==================================================
  J5-2
  Solar System Motion Engine
==================================================*/

const OrbitEngine = {

    planets: [],

    init() {

        this.planets = document.querySelectorAll(".orbit");

        if (!this.planets.length) return;

        this.planets.forEach((orbit, index) => {

            const duration = 8 + (index * 6);

            orbit.style.animation =
                `orbitMove ${duration}s linear infinite`;

        });

        this.rotatePlanets();

    },

    rotatePlanets() {

        document.querySelectorAll(".planet").forEach((planet, index) => {

            const speed = 5 + (index * 2);

            planet.style.animation =
                `planetSpin ${speed}s linear infinite`;

        });

    }

};

document.addEventListener("DOMContentLoaded", () => {

    OrbitEngine.init();

});
/*==================================================
  J5-3
  Solar System Controls
==================================================*/

const SpaceControls = {

    playing: true,

    init() {

        this.playBtn = document.getElementById("playSystem");
        this.resetBtn = document.getElementById("resetSystem");

        if (this.playBtn) {

            this.playBtn.addEventListener("click", () => {

                this.toggle();

            });

        }

        if (this.resetBtn) {

            this.resetBtn.addEventListener("click", () => {

                this.reset();

            });

        }

    },

    toggle() {

        const orbits = document.querySelectorAll(".orbit");
        const planets = document.querySelectorAll(".planet");

        this.playing = !this.playing;

        orbits.forEach((orbit) => {

            orbit.style.animationPlayState =
                this.playing ? "running" : "paused";

        });

        planets.forEach((planet) => {

            planet.style.animationPlayState =
                this.playing ? "running" : "paused";

        });

        if (this.playBtn) {

            this.playBtn.textContent =
                this.playing ? "Pause System" : "Resume System";

        }

    },

    reset() {

        const orbits = document.querySelectorAll(".orbit");
        const planets = document.querySelectorAll(".planet");

        orbits.forEach((orbit) => {

            orbit.style.animation = "none";

            orbit.offsetHeight;

            orbit.style.animation = "";

        });

        planets.forEach((planet) => {

            planet.style.animation = "none";

            planet.offsetHeight;

            planet.style.animation = "";

        });

    }

};

document.addEventListener("DOMContentLoaded", () => {

    SpaceControls.init();

});
/*==================================================
  J6
  Advanced Hover Interactions
==================================================*/

const HoverEffects = {

    cards: [],
    buttons: [],

    init() {

        this.cards = document.querySelectorAll(
            ".glass-card,.hero-card,.hobby-card,.icon-card"
        );

        this.buttons = document.querySelectorAll(
            ".btn,.nav-link"
        );

        this.cardTilt();

        this.magneticButtons();

    },

    cardTilt() {

        this.cards.forEach(card => {

            card.addEventListener("mousemove",(e)=>{

                const rect = card.getBoundingClientRect();

                const x = e.clientX - rect.left;

                const y = e.clientY - rect.top;

                const rotateY =
                    ((x / rect.width) - 0.5) * 18;

                const rotateX =
                    ((rect.height / 2 - y) / rect.height) * 18;

                card.style.transform =

                    `perspective(1000px)
                     rotateX(${rotateX}deg)
                     rotateY(${rotateY}deg)
                     translateY(-8px)`;

            });

            card.addEventListener("mouseleave",()=>{

                card.style.transform =

                    "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)";

            });

        });

    },

    magneticButtons() {

        this.buttons.forEach(button=>{

            button.addEventListener("mousemove",(e)=>{

                const rect = button.getBoundingClientRect();

                const x = e.clientX - rect.left - rect.width/2;

                const y = e.clientY - rect.top - rect.height/2;

                button.style.transform =

                    `translate(${x*0.18}px,${y*0.18}px)`;

            });

            button.addEventListener("mouseleave",()=>{

                button.style.transform="translate(0,0)";

            });

        });

    }

};

document.addEventListener("DOMContentLoaded",()=>{

    HoverEffects.init();

});
/*==================================================
  J7
  Scroll Reveal Engine
==================================================*/

const ScrollRevealEngine = {

    observer: null,

    init() {

        const elements = document.querySelectorAll(
            ".glass-card, .hero-card, .hobby-card, .timeline-item, .icon-card, section"
        );

        if (!elements.length) return;

        this.observer = new IntersectionObserver(

            (entries) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("reveal-active");

                        this.observer.unobserve(entry.target);

                    }

                });

            },

            {
                threshold: 0.15
            }

        );

        elements.forEach((element) => {

            element.classList.add("reveal");

            this.observer.observe(element);

        });

    }

};

document.addEventListener("DOMContentLoaded", () => {

    ScrollRevealEngine.init();

});
/*==================================================
  J8
  Final Performance Engine
==================================================*/

const PerformanceEngine = {

    init() {

        this.pageVisibility();

        this.smoothAnchors();

        this.reduceMotion();

        console.log("✓ Performance Engine Loaded");

    },

    /*==================================
      Pause animations when tab hidden
    ==================================*/

    pageVisibility() {

        document.addEventListener("visibilitychange", () => {

            const state = document.hidden ? "paused" : "running";

            document.querySelectorAll("*").forEach((element) => {

                element.style.animationPlayState = state;

            });

        });

    },

    /*==================================
      Smooth Anchor Scrolling
    ==================================*/

    smoothAnchors() {

        document.querySelectorAll('a[href^="#"]').forEach(anchor => {

            anchor.addEventListener("click", function(e) {

                const target = document.querySelector(

                    this.getAttribute("href")

                );

                if (!target) return;

                e.preventDefault();

                target.scrollIntoView({

                    behavior: "smooth",

                    block: "start"

                });

            });

        });

    },

    /*==================================
      Accessibility
    ==================================*/

    reduceMotion() {

        if (

            window.matchMedia(

                "(prefers-reduced-motion: reduce)"

            ).matches

        ) {

            document.querySelectorAll("*").forEach(el => {

                el.style.animationDuration = "0.01ms";

                el.style.transitionDuration = "0.01ms";

            });

        }

    }

};

document.addEventListener("DOMContentLoaded", () => {

    PerformanceEngine.init();

});

const navbar = document.querySelector(".glass-nav");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.style.background = "rgba(8,10,30,.85)";
        navbar.style.backdropFilter = "blur(22px)";
    } else {
        navbar.style.background = "rgba(8,10,30,.55)";
        navbar.style.backdropFilter = "blur(18px)";
    }
});

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const top = section.offsetTop - 120;
        if (scrollY >= top) current = section.id;
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});

/*====================================
    CURSOR COLOR ENGINE
====================================*/

function updateCursorTheme(){

    if(!cursor) return;

    const color=
    Supernova.colors[Supernova.theme];

    cursor.style.borderColor=color;

    cursor.style.boxShadow=
    `0 0 30px ${color},
     0 0 60px ${color}`;

}

setInterval(updateCursorTheme,20);
/*====================================
    SUPERNOVA V3
    DEPTH SYSTEM
====================================*/

document.addEventListener("click",(e)=>{

    const target=e.target.closest(

        ".btn, button, .nav-link, .icon-card, .glass-card, .project-card, a"

    );

    if(!target) return;

    let color=getComputedStyle(document.documentElement)

    .getPropertyValue("--sn-primary")

    .trim();

    if(color===""){

        color="#7df9ff";

    }

    let amount=120;

    if(target.classList.contains("rocket")){

        amount=260;

    }

    else if(target.classList.contains("coding")){

        amount=200;

    }

    else if(target.classList.contains("music")){

        amount=180;

    }

    else if(target.classList.contains("cpu")){

        amount=190;

    }

    else if(target.classList.contains("nasa")){

        amount=220;

    }

    for(let i=0;i<amount;i++){

        createParticle(

            e.clientX,

            e.clientY,

            color

        );

    }

});
/*====================================
    SUPERNOVA V3
    THEME TRANSITIONS
====================================*/

const themeColors={

    default:"#7df9ff",

    coding:"#00ff88",

    music:"#ff4ecd",

    rocket:"#ff9900",

    nasa:"#00d9ff",

    cpu:"#00ffff",

    laptop:"#ffffff"

};

function applyTheme(theme){

    const color=

    themeColors[theme] ||

    themeColors.default;

    document.documentElement.style
    .setProperty("--sn-primary",color);

    document.documentElement.style
    .setProperty("--sn-accent",color);

    document.documentElement.style
    .setProperty("--sn-glow",color);

}
document.addEventListener("mouseover",(e)=>{

    const item=e.target.closest(

".coding,.music,.rocket,.cpu,.nasa,.laptop"

    );

    if(!item) return;

    if(item.classList.contains("coding"))

        applyTheme("coding");

    else if(item.classList.contains("music"))

        applyTheme("music");

    else if(item.classList.contains("rocket"))

        applyTheme("rocket");

    else if(item.classList.contains("cpu"))

        applyTheme("cpu");

    else if(item.classList.contains("nasa"))

        applyTheme("nasa");

    else if(item.classList.contains("laptop"))

        applyTheme("laptop");

});

document.addEventListener("mouseout",()=>{

    applyTheme("default");

});
/*====================================
    SUPERNOVA V3
    CURSOR ENERGY ORBITS
====================================*/

const orbitCount = 8;
const orbitParticles = [];

if (cursor) {

    for (let i = 0; i < orbitCount; i++) {

        const orb = document.createElement("span");

        orb.className = "cursor-orbit";

        document.body.appendChild(orb);

        orbitParticles.push(orb);

    }

}
/*====================================
    ORBIT ANIMATION
====================================*/

let orbitAngle = 0;

function animateOrbit(){

    if(!cursor) return;

    orbitAngle += 0.03;

    const rect = cursor.getBoundingClientRect();

    const cx = rect.left + rect.width/2;

    const cy = rect.top + rect.height/2;

    orbitParticles.forEach((orb,index)=>{

        const angle =
        orbitAngle +
        index * (Math.PI * 2 / orbitParticles.length);

        const radius =
        24 + index * 3;

        orb.style.left =
        cx + Math.cos(angle) * radius + "px";

        orb.style.top =
        cy + Math.sin(angle) * radius + "px";

        orb.style.background =
        getComputedStyle(document.documentElement)
        .getPropertyValue("--sn-primary");

    });

    requestAnimationFrame(animateOrbit);

}

animateOrbit();
/*====================================
    CURSOR PULSE
====================================*/

setInterval(()=>{

    if(!cursor) return;

    cursor.animate(

        [

            {

                transform:
                "translate(-50%,-50%) scale(1)"

            },

            {

                transform:
                "translate(-50%,-50%) scale(1.18)"

            },

            {

                transform:
                "translate(-50%,-50%) scale(1)"

            }

        ],

        {

            duration:900

        }

    );

},1200);
/*====================================
    SUPERNOVA V3
    GALAXY GLOW
====================================*/

function animateGalaxyGlow(){

    const color=getComputedStyle(document.documentElement)

    .getPropertyValue("--sn-primary")

    .trim();

    document.body.style.boxShadow=

    `inset 0 0 180px ${color}22`;

    requestAnimationFrame(animateGalaxyGlow);

}

animateGalaxyGlow();
/*====================================
    GLASS GLOW
====================================*/

const glowCards=document.querySelectorAll(

".glass-card,.project-card,.hero-card"

);

function updateGlassGlow(){

    const color=getComputedStyle(document.documentElement)

    .getPropertyValue("--sn-primary")

    .trim();

    glowCards.forEach(card=>{

        card.style.borderColor=color;

        card.style.boxShadow=

        `0 0 25px ${color}40`;

    });

}

setInterval(updateGlassGlow,200);

/*====================================
    NAVBAR GLOW
====================================*/

const glassNav=document.querySelector(".glass-nav");

function updateNavbar(){

    if(!glassNav) return;

    const color=getComputedStyle(document.documentElement)

    .getPropertyValue("--sn-primary")

    .trim();

    glassNav.style.borderColor=color;

    glassNav.style.boxShadow=

    `0 0 30px ${color}55`;

}

setInterval(updateNavbar,200);