/*==================================================
    Mission Guntaas 13
    CLEAN JAVASCRIPT
    PART 1/2
==================================================*/


//=========================================
// Loading Screen
//=========================================

window.addEventListener("load",()=>{


    const loader =
    document.getElementById("loading-screen");


    if(loader){


        setTimeout(()=>{


            loader.classList.add(
            "hide-loader"
            );


        },1200);


    }


});




//=========================================
// Custom Cursor
//=========================================

const cursorDot =
document.querySelector(".cursor-dot");


const cursorRing =
document.querySelector(".cursor-ring");



if(cursorDot && cursorRing){


document.addEventListener("mousemove",(e)=>{


    cursorDot.style.left =
    e.clientX+"px";


    cursorDot.style.top =
    e.clientY+"px";



    cursorRing.style.left =
    e.clientX+"px";


    cursorRing.style.top =
    e.clientY+"px";


});



const hoverElements =
document.querySelectorAll(
"a,button,.game-card,.reward-card,.party-card"
);



hoverElements.forEach((item)=>{


    item.addEventListener("mouseenter",()=>{


        cursorDot.classList.add(
        "cursor-hover"
        );


        cursorRing.classList.add(
        "cursor-ring-hover"
        );


    });



    item.addEventListener("mouseleave",()=>{


        cursorDot.classList.remove(
        "cursor-hover"
        );


        cursorRing.classList.remove(
        "cursor-ring-hover"
        );


    });


});


}




//=========================================
// Navbar Scroll Effect
//=========================================


const navbar =
document.querySelector(".glass-nav");



if(navbar){


window.addEventListener("scroll",()=>{


    if(window.scrollY > 50){


        navbar.classList.add(
        "nav-scrolled"
        );


    }else{


        navbar.classList.remove(
        "nav-scrolled"
        );


    }


});


}




//=========================================
// Scroll Reveal
//=========================================


const revealElements =
document.querySelectorAll(
".game-card,.timeline-card,.commander-card,.reward-card,.party-card,.memory-card"
);



const revealObserver =
new IntersectionObserver((entries)=>{


    entries.forEach((entry)=>{


        if(entry.isIntersecting){


            entry.target.classList.add(
            "fade-show"
            );


        }


    });


},
{

threshold:0.15

});



revealElements.forEach((element)=>{


    revealObserver.observe(element);


});






//=========================================
// Mission Popup
//=========================================


const popup =
document.querySelector(".mission-popup");


const popupTitle =
document.querySelector(".popup-content h2");


const popupText =
document.querySelector(".popup-content p");


const popupClose =
document.querySelector(".popup-close");




function showMissionPopup(title,message){


    if(popup && popupTitle && popupText){


        popupTitle.innerHTML =
        title;


        popupText.innerHTML =
        message;



        popup.classList.add(
        "active"
        );


    }


}




if(popupClose){


popupClose.addEventListener("click",()=>{


    popup.classList.remove(
    "active"
    );


});


}




//=========================================
// Empty Link Protection
//=========================================


document.querySelectorAll(
'a[href="#"]'
).forEach((link)=>{


    link.addEventListener("click",(e)=>{


        e.preventDefault();


    });


});




//=========================================
// Console Status
//=========================================


console.log(
"🚀 Mission Guntaas 13 System Online"
);



//========== CONTINUE IN PART 2 ==========
/*==================================================
    Mission Guntaas 13
    SECRET GIFT SYSTEM (2/2)
==================================================*/


const giftOverlay =
document.getElementById("gift-overlay");


const giftBox =
document.getElementById("gift-box");


let giftOpened = false;



//=========================================
// Gift Show Function
//=========================================

function showSecretGift(){


    if(!giftOverlay) return;


    giftOverlay.style.display = "flex";


}



//=========================================
// First Gift After Opening Website
//=========================================

window.addEventListener("load",()=>{


    setTimeout(()=>{


        showSecretGift();


    },2000);


});




//=========================================
// 1-5 Minute Cooldown Timer
//=========================================

function startGiftTimer(){


    let cooldown =
    Math.floor(
        Math.random() *
        (300000 - 60000)
        + 60000
    );



    setTimeout(()=>{


        giftOpened=false;


        showSecretGift();



    },cooldown);


}





//=========================================
// Gift Click
//=========================================

if(giftBox){


giftBox.addEventListener("click",()=>{

    if(giftOpened) return;

    giftOpened = true;

    const giftIcon =
    document.querySelector(".gift-icon i");

    giftIcon.classList.add(
        "gift-shake"
    );

    setTimeout(()=>{

        giftIcon.classList.remove(
            "gift-shake"
        );

        createGiftConfetti();

        giftOverlay.style.display = "none";

        startGiftTimer();

    },800);

});


}




//=========================================
// Confetti Explosion
//=========================================

function createGiftConfetti(){


    for(let i=0;i<150;i++){


        const confetti =
        document.createElement("div");



        confetti.className =
        "confetti";



        confetti.style.setProperty(
        "--x",
        `${Math.random()*800-400}px`
        );

        confetti.style.setProperty(
        "--h",
        Math.random()*360
       );



        confetti.style.setProperty(
        "--y",
        `${Math.random()*800-400}px`
        );



        document.body.appendChild(
        confetti
        );



        setTimeout(()=>{


            confetti.remove();


        },2000);


    }


}


//==================================================
// END OF SECRET GIFT SYSTEM
//==================================================