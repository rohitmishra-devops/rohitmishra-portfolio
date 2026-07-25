*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:'Poppins',sans-serif;
}


body{

    background:#050805;
    color:white;
    overflow-x:hidden;

}



/* NAVBAR */


header{

    position:fixed;
    top:0;
    width:100%;
    padding:20px 8%;
    display:flex;
    justify-content:space-between;
    align-items:center;
    background:#050805dd;
    backdrop-filter:blur(10px);
    z-index:1000;

}



.logo{

    font-size:35px;
    font-weight:700;
    color:#00ff88;

}



nav button{

    background:none;
    border:none;
    color:white;
    font-size:16px;
    margin-left:25px;
    cursor:pointer;
    transition:.3s;

}



nav button:hover{

    color:#00ff88;
    transform:translateY(-3px);

}





/* PAGE SYSTEM */


.page{

    min-height:100vh;
    padding:120px 8%;
    position:absolute;
    width:100%;
    top:0;
    left:0;

    opacity:0;
    visibility:hidden;
    transform:translateX(100px);
    transition:0.6s ease;

}


.page.active{

    opacity:1;
    visibility:visible;
    transform:translateX(0);

}



@keyframes pageOpen{

    from{

        opacity:0;
        transform:translateX(80px);

    }

    to{

        opacity:1;
        transform:translateX(0);

    }

}





/* HOME */


#home{

    justify-content:space-between;
    align-items:center;

}



.content{

    width:50%;

}



.content h3{

    font-size:25px;

}



.content h1{

    font-size:65px;
    color:#00ff88;

}



.content h2{

    color:#aaa;
    margin:10px 0;

}



.content p{

    color:#ccc;
    line-height:1.7;
    margin:20px 0;

}





/* BUTTON */


.main-btn,
.card button{

    padding:12px 30px;
    border:none;
    border-radius:30px;
    background:#00ff88;
    color:black;
    font-weight:bold;
    cursor:pointer;
    transition:.4s;

}



.main-btn:hover,
.card button:hover{

    transform:scale(1.1);
    box-shadow:0 0 30px #00ff88;

}





/* PROFILE */


.profile{

    width:330px;
    height:330px;
    border-radius:50%;
    border:5px solid #00ff88;
    overflow:hidden;
    animation:float 3s infinite;

}



.profile img{

    width:100%;
    height:100%;
    object-fit:cover;

}



@keyframes float{

    50%{

        transform:translateY(-20px);

    }

}







/* HEADINGS */


.page h1{

    font-size:45px;
    color:#00ff88;
    margin:auto;
    margin-bottom:40px;

}





/* BOX */


.box{

    background:#101410;
    padding:35px;
    border-radius:20px;
    box-shadow:0 0 20px #003d20;

}


.box p{

    line-height:2;
    color:#ddd;

}






/* GRID */


.grid{

    width:100%;
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
    gap:25px;

}





/* CARDS */


.card{

    background:#101410;
    padding:30px;
    border-radius:20px;
    text-align:center;
    transition:.4s;
    border:1px solid #1c2b1c;

}



.card i{

    font-size:40px;
    color:#00ff88;

}



.card h2{

    margin:15px 0;

}



.card p{

    color:#bbb;

}



.card:hover{

    transform:translateY(-15px);
    box-shadow:0 0 30px #00ff88;

}







/* CONTACT */


#contact{

    justify-content:center;
    flex-direction:column;
    align-items:center;

}



#about,
#skills,
#projects{

    flex-direction:column;
    align-items:center;

}







footer{

    text-align:center;
    padding:20px;
    background:#020402;
    color:#aaa;

}







/* MOBILE */


@media(max-width:800px){


header{

    flex-direction:column;

}


nav{

    margin-top:15px;

}


nav button{

    margin:5px;

}



#home{

    flex-direction:column;
    text-align:center;

}


.content{

    width:100%;

}


.content h1{

    font-size:45px;

}


.profile{

    margin-top:40px;

}



}
/* ================= 3D PAGE TRANSITION ================= */


.page{

    transition:0.6s ease;
    transform-style:preserve-3d;

}






/* ================= 3D CARD ================= */


.card{

    transform-style:preserve-3d;
    perspective:800px;
    position:relative;
    overflow:hidden;

}



.card::before{


    content:"";

    position:absolute;

    width:120px;

    height:120px;

    background:#00ff88;

    filter:blur(70px);

    top:-40px;

    right:-40px;

    opacity:0;

    transition:.4s;


}



.card:hover::before{

    opacity:.8;

}



.card:hover{

    border:1px solid #00ff88;

}





/* ================= RIPPLE BUTTON ================= */


button,
.main-btn{

    position:relative;

    overflow:hidden;

}



.ripple{


    position:absolute;

    width:20px;

    height:20px;

    background:white;

    border-radius:50%;

    transform:translate(-50%,-50%);

    animation:rippleEffect .6s linear;

    pointer-events:none;

}



@keyframes rippleEffect{


    from{

        width:0;

        height:0;

        opacity:.8;

    }


    to{

        width:300px;

        height:300px;

        opacity:0;

    }


}







/* ================= CURSOR GLOW ================= */



.cursor-glow{


    position:fixed;

    width:25px;

    height:25px;

    background:#00ff88;

    border-radius:50%;

    pointer-events:none;

    transform:translate(-50%,-50%);

    filter:blur(10px);

    z-index:9999;

}







/* ================= FUTURE BACKGROUND ================= */



body::before{


    content:"";

    position:fixed;

    width:500px;

    height:500px;

    background:#00ff88;

    opacity:.08;

    filter:blur(120px);

    top:10%;

    left:20%;

    z-index:-1;


    animation:moveGlow 8s infinite alternate;


}




@keyframes moveGlow{


    from{

        transform:translate(0,0);

    }


    to{

        transform:translate(200px,150px);

    }


}







/* ================= HERO 3D ================= */


.profile{


    box-shadow:

    0 0 30px #00ff88,

    inset 0 0 30px #00ff88;


}



.profile:hover{


    transform:

    rotateY(15deg)

    rotateX(10deg)

    scale(1.05);


}







/* ================= TEXT ANIMATION ================= */



.content h1{


    animation:titleMove 2s infinite alternate;


}



@keyframes titleMove{


    from{

        text-shadow:0 0 10px #00ff88;

    }


    to{

        text-shadow:0 0 35px #00ff88;

    }


}







/* ================= MOBILE FIX ================= */


@media(max-width:800px){


.cursor-glow{

    display:none;

}


}
/* ================= NEW HOME DESIGN ================= */


#home{

    display:flex;
    justify-content:space-between;
    align-items:center;
    gap:50px;

}




.hero-left{

    max-width:650px;

}



.badge{

    display:inline-block;

    padding:8px 20px;

    border:1px solid #00ff88;

    border-radius:30px;

    color:#00ff88;

    margin-bottom:20px;

    background:#00ff8810;

    animation:pulse 2s infinite;

}



@keyframes pulse{


    50%{

        box-shadow:0 0 25px #00ff88;

    }

}





.hero-left h3{

    font-size:28px;

    color:#aaa;

}



.hero-left h1{


    font-size:75px;

    color:#00ff88;

    letter-spacing:2px;

    animation:titleGlow 2s infinite alternate;

}



@keyframes titleGlow{


from{

text-shadow:0 0 10px #00ff88;

}


to{

text-shadow:0 0 40px #00ff88;

}


}




.hero-left h2{

    color:white;

    min-height:40px;

}





.hero-left p{

    font-size:18px;

    line-height:1.8;

    color:#ccc;

    margin:25px 0;

}







/* BUTTON AREA */


.hero-buttons{

    display:flex;

    gap:20px;

}



.outline-btn{


    padding:12px 30px;

    border-radius:30px;

    background:transparent;

    border:2px solid #00ff88;

    color:#00ff88;

    cursor:pointer;

    font-weight:bold;

    transition:.4s;

}



.outline-btn:hover{


    background:#00ff88;

    color:black;

    transform:translateY(-5px);

}







/* STATS */


.stats{


    display:flex;

    gap:40px;

    margin-top:40px;

}



.stats div{


    background:#101410;

    padding:15px 25px;

    border-radius:15px;

    text-align:center;

    border:1px solid #1d3825;

    transition:.4s;

}



.stats div:hover{


    transform:translateY(-10px);

    box-shadow:0 0 20px #00ff88;

}



.stats h2{

    color:#00ff88;

}



.stats p{

    margin:0;

    font-size:14px;

}







/* 3D PROFILE */


.profile-3d{


    width:360px;

    height:360px;

    border-radius:50%;

    position:relative;

    display:flex;

    justify-content:center;

    align-items:center;

    animation:float 4s infinite;

    transform-style:preserve-3d;


}



.profile-3d img{


    width:320px;

    height:320px;

    border-radius:50%;

    object-fit:cover;

    border:5px solid #00ff88;

    z-index:2;

}




.glow{


    position:absolute;

    width:100%;

    height:100%;

    border-radius:50%;

    background:#00ff88;

    filter:blur(80px);

    opacity:.3;


}





.profile-3d:hover{


    transform:

    rotateY(20deg)

    rotateX(10deg)

    scale(1.05);


}






@media(max-width:900px){


#home{

    flex-direction:column;

    text-align:center;

}



.hero-buttons,
.stats{

    justify-content:center;

}



.hero-left h1{

    font-size:50px;

}


}

/* ================= FOOTER ================= */



