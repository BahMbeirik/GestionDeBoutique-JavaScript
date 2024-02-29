const logout = document.getElementById( 'logout' );
const ventes = document.getElementById('ventes');
const stockes = document.getElementById('stockes');
const acceil = document.getElementById('acceil');
const finance = document.getElementById("finance");
const outputs = document.getElementById('outputs')
const inputs = document.getElementById('inputs')
const tb = document.getElementById('tb')
const destination = document.getElementById("destination")

const of = document.getElementById("of");
//Main Toggle
const toggle = document.querySelector(".toggle");
const navigation = document.querySelector(".navigation");
const main = document.querySelector(".main");

outputs.style.display="none"
destination.style.display="none"
inputs.style.display='block';
of.style.display="none"

let list = document.querySelectorAll(".navigation li");

function activeLink(){
    list.forEach((item)=>{
        item.classList.remove("hovered");
    });
    this.classList.add("hovered");
}

list.forEach((item)=> item.addEventListener("mouseover",activeLink));


toggle.onclick = function(){
    navigation.classList.toggle("active");
    main.classList.toggle("active");
}
logout.onclick = function(){
    self.location="index.html";
}
ventes.onclick = function(){
    // self.location="ventes.html";
    outputs.style.display='none';
    destination.style.display="block"
    tb.style.display = 'none'
    inputs.style.display='none';
    of.style.display="none"

}
stockes.onclick = function(){
    // self.location="stockes.html";
    outputs.style.display='block';
    tb.style.display= 'none';
    inputs.style.display='none';
    destination.style.display="none"
    of.style.display="none"

}
acceil.onclick = function(){
    // location.reload();
    tb.style.display= 'block';
    inputs.style.display='block';
    outputs.style.display='none';
    destination.style.display="none"
    of.style.display="none"
}
finance.onclick = function(){
    tb.style.display= 'none';
    inputs.style.display='none';
    outputs.style.display='none';
    destination.style.display="none"
    of.style.display="block"
}

