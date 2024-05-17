let sub = document.getElementById("sub")
let re = document.getElementById("Re")
let rl = document.getElementById("Rl")
let rp = document.getElementById("Rp")
let rf = document.getElementById("Rf")
let f1 = document.getElementById("f1");
let fname = "";
let pass = "";
var msnn = document.getElementById("msnn");
var vsnn = document.getElementById("vsnn");
var idenn = document.getElementById("idenn");
var of = document.getElementById("of");
var cons = document.getElementById("cons");
let y = 0;
var p2 = document.getElementById("p2");
var p1 = document.getElementById("p1");
var abt = document.getElementById("abt");
var nav = document.getElementById("nav");
var nvs = document.querySelectorAll("li");
let nme = document.getElementById("nme")
let pss = document.getElementById("pass")
let login = document.getElementById("login")

if(localStorage.getItem("s",1) == 1){
    fname = localStorage.getItem("fn",rf.value.trim())
    pass = localStorage.getItem("ps",rp.value.trim())
    f1.style.left = "-200%";
}else{
    login.style.left = "-200%";
}

function resett(){
    localStorage.clear();
    login.style.left = "-200%";
    f1.style.left = "30%";
}

function Loginn(){
    if(nme.value == fname && pss.value == pass){
        nvs.forEach(el => {
            el.style.animationPlayState = "running"
        })
        p1.style.left = "0%";
        p2.style.left = "0%";
        abt.style.left = "0%";
        of.style.left = "0%";
        nav.style.height = "60px";
        window.scrollTo(0,0);
        login.style.left = "-200%";
    }else{
        alert("wrong password or username")
    }
}


sub.addEventListener("click",(yes) => {
    yes.preventDefault();
    if(re.value.trim() == "" || rl.value.trim() == "" || rp.value.trim() == "" || rf.value.trim() == ""){
        alert("One or more inputs are blank")
    }else{
        fname = rf.value.trim();
        pass = rp.value.trim();
        nvs.forEach(el => {
            el.style.animationPlayState = "running"
        })
        p1.style.left = "0%";
        p2.style.left = "0%";
        abt.style.left = "0%";
        of.style.left = "0%";
        f1.style.left = "-200%";
        nav.style.height = "60px";
        localStorage.setItem("fn",rf.value.trim())
        localStorage.setItem("ps",rp.value.trim())
        localStorage.setItem("s",1)
        window.scrollTo(0,0);
    }
})

function act(){
    if(y == 0){
        cons.style.top = "2em";
        y++
    }else{
        cons.style.top = "-50em";
        y = 0
    }
}

function abts(){
    window.scrollTo(0,300)
}

function at(){
    window.scrollTo(0,1100)
}

window.addEventListener("scroll",() => {
    console.log(of.getBoundingClientRect().top)
    if(of.getBoundingClientRect().top < 300){
        msnn.style.opacity = "1";
        vsnn.style.opacity = "1";
        idenn.style.opacity = "1";
        msnn.style.top = "0px";
        idenn.style.top = "0px";
        vsnn.style.top = "0px";
        console.log(window.scroll)
    }else{
        msnn.style.opacity = "0";
        vsnn.style.opacity = "0";
        idenn.style.opacity = "0";
        msnn.style.top = "100px";
        idenn.style.top = "100px";
        vsnn.style.top = "100px";
    }
})