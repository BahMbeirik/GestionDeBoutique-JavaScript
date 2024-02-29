var Titer = document.getElementById('titer');
var Price = document.getElementById('price');
var Taxes = document.getElementById('taxes');
var Ads = document.getElementById('ads');
var Discount = document.getElementById('discount');
var Total = document.getElementById('total');
var Count = document.getElementById('count');
var Catagory = document.getElementById('catagory');
var Submit = document.getElementById('submit');

var ach = document.getElementById('ach');
var vet = document.getElementById('vet');
var TOF = document.getElementById('TOF')


var mood = 'create';
var tmp;

//get total

function getTotal(){
    if(Price.value != ''){
        var result = (+Price.value + +Taxes.value + +Ads.value) - +Discount.value;
        Total.innerHTML = result;
        Total.style.background = '#040'
    }else{
        Total.innerHTML = '';
        Total.style.background = '#a00d02'
    }

    
    
}
//data ventes
let dataV;
if(localStorage.ventes != null){
    dataV = JSON.parse(localStorage.ventes)
}else{
    dataV = [];
}
// creat product
let dataPro ;
if(localStorage.product != null){
    dataPro = JSON.parse(localStorage.product)
}else{
    dataPro = [];
}
Submit.onclick = function(){
    var newPro = {
        Titer:Titer.value.toUpperCase(),
        Price:Price.value,
        Taxes:Taxes.value,
        Ads:Ads. value,
        Discount:Discount.value,
        Total:Total.innerHTML,
        Count:Count.value,
        Catagory:Catagory.value.toUpperCase()
    }

    if(Titer.value != '' && Price.value != '' && Catagory.value != '' && newPro.Count <= 100){
        if(mood === 'create'){
            //count
            if(newPro.Count > 1){
                for(let i =0 ;i < newPro.Count ;i++){
                    dataPro.push(newPro);
                    
                }
            }else{
                dataPro.push(newPro);
            }
        }else{
            dataPro[tmp]= newPro;
            mood = 'create';
            Count.style.display = 'block';
            Submit.innerHTML = 'Create';
        }
        clearData();
    }
    
    
    

    //save localstorage
    localStorage.setItem('product',     JSON.stringify(dataPro));
    window.location.reload();
    
    showData()
}
// clear inputs

function clearData(){
    Titer.value = '';
    Price.value = '';
    Taxes.value = '';
    Ads.value = '';
    Discount.value = '';
    Total.innerHTML = '';
    Count.value = '';
    Catagory.value = '';
}

//read

function showData(){
    getTotal();
    var table = '';
    for(let i=0; i < dataPro.length;i++){
        table += `
        <tr>
            <td>${i+1}</td>
            <td>${dataPro[i].Titer}</td>
            <td>${dataPro[i].Price}</td>
            <td>${dataPro[i].Taxes}</td>
            <td>${dataPro[i].Ads}</td>
            <td>${dataPro[i].Discount}</td>
            <td>${dataPro[i].Total}</td>
            <td>${dataPro[i].Catagory}</td>
            <td><button  onclick="updateData( ${i})" id="update"><i class="fa fa-edit"></i></button>
            <button  onclick="deletData( ${i})" id="delete"><i class="fa fa-trash"></i></td>
        </tr>
        `
    }
    document.getElementById('tbody').innerHTML = table;
    let btnDeleteAll = document.getElementById('deleteAll');
    if(dataPro.length > 0){
        btnDeleteAll.innerHTML = `
        <button class="btn" onclick="deleteAll()">Supprimer tout (${dataPro.length})</button>
        `
    }else{
        btnDeleteAll.innerHTML = '';
    }

}
showData();
function NbCtagory(){
    var table = '';
    for(let i=0; i < dataPro.length;i++){  
        
        if(dataPro[i].Titer == dataPro[0].Titer && i<1) {
            table += `
        <tr>
            <td>${i+1}</td>
            <td>${dataPro[i].Titer}</td>
            <td>${dataPro[i].Price}</td>
            <td>${dataPro[i].Taxes}</td>
            <td>${dataPro[i].Ads}</td>
            <td>${dataPro[i].Discount}</td>
            <td>${dataPro[i].Total}</td>
            <td>${dataPro[i].Catagory}</td>
            <td><button  onclick="updateData( ${i})" id="update"><i class="fa fa-edit"></i></button>
            <button  onclick="deletData( ${i})" id="delete"><i class="fa fa-trash"></i></button>
            <button class="btnV" onclick="vendreData( ${i})" id="vendre">Vendre</button></td>
        </tr>
        `
        }else if(dataPro[i].Titer != dataPro[i-1].Titer || dataPro[i].Catagory != dataPro[i-1].Catagory) {
        table += `
        <tr>
            <td>${i+1}</td>
            <td>${dataPro[i].Titer}</td>
            <td>${dataPro[i].Price}</td>
            <td>${dataPro[i].Taxes}</td>
            <td>${dataPro[i].Ads}</td>
            <td>${dataPro[i].Discount}</td>
            <td>${dataPro[i].Total}</td>
            <td>${dataPro[i].Catagory}</td>
            <td><button  onclick="updateData( ${i})" id="update"><i class="fa fa-edit"></i></button>
            <button  onclick="deletData( ${i})" id="delete"><i class="fa fa-trash"></i></button>
            <button class="btnV" onclick="vendreData( ${i})" id="vendre">Vendre</button></td>
        </tr>
        `
        }else {}
    }
    document.getElementById('tbody2').innerHTML = table;
}
NbCtagory();
//delete

function deletData(i){
    if (confirm('2nte dore tm7i 4e 7eg 3andek')) {
        dataPro.splice(i,1);
        localStorage.product = JSON.stringify(dataPro);
        showData();
        window.location.reload();
    }
    else {
        alert("Désolé, 2nte 4e maho 7eg 3andek");
    }
    
}

function deleteAll(){
    if (confirm('2nte dore tm7i 4e 7eg 3andek')) {
        localStorage.clear();
        dataPro.splice(0);
        showData();
        window.location.reload();
    }
    else {
        alert("Désolé, 2nte 4e maho 7eg 3andek");
    }
    
}


//update

function updateData(i){
    inputs.style.display='block';
    Titer.value = dataPro[i].Titer;
    Price.value = dataPro[i].Price;
    Taxes.value = dataPro[i].Taxes;
    Ads.value = dataPro[i].Ads;
    Discount.value = dataPro[i].Discount;
    getTotal();
    Count.style.display = 'none'
    Catagory.value = dataPro[i].Catagory;
    Submit.innerHTML = 'Update';
    Submit.style.marginBottom = "20px";

    mood = 'update';
    tmp=i;
    scroll({
        top:0,
        behavior:'smooth',
    })
}

//Search

let searchMood = 'Titer';

function getSearchMode(id){
    let search = document.getElementById('search');
    if(id == 'searchTiter'){
        searchMood = 'Titer';
        search.placeholder = 'Search by Titer';
    }else{
        searchMood = 'Catagory';
        search.placeholder = 'Search by Catagory';
    }
    search.focus();
    search.value = '';
    showData();
    NbCtagory();
}

function searchData(value){
    let table = '';
    if(value ==''){
        window.location.reload();
    }else if(searchMood == 'Titer'){
        for(let i=0;i<dataPro.length;i++){
            if(dataPro[i].Titer.includes(value.toUpperCase())){
                table += `
                        <tr>
                            <td>${i+1}</td>
                            <td>${dataPro[i].Titer}</td>
                            <td>${dataPro[i].Price}</td>
                            <td>${dataPro[i].Taxes}</td>
                            <td>${dataPro[i].Ads}</td>
                            <td>${dataPro[i].Discount}</td>
                            <td>${dataPro[i].Total}</td>
                            <td>${dataPro[i].Catagory}</td>
                            <td><button  onclick="updateData( ${i})" id="update"><i class="fa fa-edit"></i></button><button onclick="deletData( ${i})" id="delete"><i class="fa fa-trash"></i></button></td>
                        </tr>
                `;
            }
        }
    }else{
        for(let i=0;i<dataPro.length;i++){
            if(dataPro[i].Catagory.includes(value.toUpperCase())){
                table += `
                        <tr>
                            <td>${i+1}</td>
                            <td>${dataPro[i].Titer}</td>
                            <td>${dataPro[i].Price}</td>
                            <td>${dataPro[i].Taxes}</td>
                            <td>${dataPro[i].Ads}</td>
                            <td>${dataPro[i].Discount}</td>
                            <td>${dataPro[i].Total}</td>
                            <td>${dataPro[i].Catagory}</td>
                            <td><button  onclick="updateData( ${i})" id="update"><i class="fa fa-edit"></i></button><button  onclick="deletData( ${i})" id="delete"><i class="fa fa-trash"></i></button></td>
                        </tr>
                `;
            }
        }
    }
    document.getElementById('tbody').innerHTML = table;
    document.getElementById('tbody2').innerHTML = table;
}

/*========== dark light mode ==========*/
let darkModeIcon = document.querySelector('#darkMode-icon');

darkModeIcon.onclick = () => {
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
};

// Pagination

var current_page = 1;
var records_per_page = 5;
var l = document.getElementById("contentTable").rows.length

function prevPage()
{

    if (current_page > 1) {
        current_page--;
        changePage(current_page);
    }
    
}

function nextPage()
{
    if (current_page < numPages()) {
        current_page++;
        changePage(current_page);
    }
}
    
function changePage(page)
{
    var btn_next = document.getElementById("btn_next");
    var btn_prev = document.getElementById("btn_prev");
    var contentTable = document.getElementById("contentTable");
    var page_span = document.getElementById("page");
    
    // Validate page
    if (page < 1) page = 1;
    if (page > numPages()) page = numPages();

    [...contentTable.getElementsByTagName('tr')].forEach((tr)=>{
        tr.style.display='none'; // reset all to not display
    });
    contentTable.rows[0].style.display = ""; // display the title row

    for (var i = (page-1) * records_per_page + 1; i < (page * records_per_page) + 1; i++) {
        if (contentTable.rows[i]) {
            contentTable.rows[i].style.display = ""
        } else {
            continue;
        }
    }
    
    page_span.innerHTML = page + "/" + numPages();

    if (page == 1) {
        btn_prev.style.visibility = "hidden";
    } else {
        btn_prev.style.visibility = "visible";
        btn_prev.style.margin = "0 20px 0 20px"
    }

    if (page == numPages()) {
        btn_next.style.visibility = "hidden";
    } else {
        btn_next.style.visibility = "visible";
    }
}

function numPages()
{
    return Math.ceil((l - 1) / records_per_page);
}

window.onload = function() {
    changePage(current_page);
};

// =============================ventes ==================
function vendreData(i){
    //on supprime le bouton de la dernière cellule 
    var vendre = document.getElementById("vendre");
    vendre.parentNode.removeChild(vendre);

    //on ajoute la ligne précédemment supprimée dans le tableau destination 
    dataV.push(dataPro[i]);
    localStorage.ventes = JSON.stringify(dataV);

    //on supprime la ligne du tableau source 
    dataPro.splice(i,1);
    localStorage.product = JSON.stringify(dataPro);
    window.location.reload();
    
    //save localstorage
    localStorage.setItem('ventes',     JSON.stringify(dataV));

}
 
function showDataV(){
    var table = '';
    for(let i=0; i < dataV.length;i++){
        table += `
        <tr>
            <td>${i+1}</td>
            <td>${dataV[i].Titer}</td>
            <td>${dataV[i].Price}</td>
            <td>${dataV[i].Taxes}</td>
            <td>${dataV[i].Ads}</td>
            <td>${dataV[i].Discount}</td>
            <td>${dataV[i].Total}</td>
            <td>${dataV[i].Catagory}</td>
            <td><button  onclick="updateDataV( ${i})" id="update"><i class="fa fa-edit"></i></button>
            <button  onclick="deletDataV( ${i})" id="delete"><i class="fa fa-trash"></i></td>
        </tr>
        `
    }
    document.getElementById('tbody3').innerHTML = table;

    
}
showDataV();
function deletDataV(i){
    if (confirm('2nte dore tm7i 4e 7eg 3andek')) {
        dataV.splice(i,1);
        localStorage.ventes = JSON.stringify(dataV);
        showData();
        window.location.reload();
    }
    else {
        alert("Désolé, 2nte 4e maho 7eg 3andek");
    }
    
}
function updateDataV(i){
    inputs.style.display='block';
    Titer.value = dataV[i].Titer;
    Price.value = dataV[i].Price;
    Taxes.value = dataV[i].Taxes;
    Ads.value = dataV[i].Ads;
    Discount.value = dataV[i].Discount;
    getTotal();
    Count.style.display = 'none'
    Catagory.value = dataV[i].Catagory;
    Submit.innerHTML = 'Update';

    mood = 'update';
    tmp=i;
    scroll({
        top:0,
        behavior:'smooth',
    })
}

//   ============================ Opérations financiéres ======================= 
var T_NA =0;
var NA = 0;
for(let i=0; i < dataPro.length;i++){
    NA =NA + parseInt(dataPro[i].Total);
    T_NA = parseInt(NA)
    document.getElementById('ach').innerHTML ="Les achats : "+T_NA;
}

var T_NV =0;
var NV = 0;
for(let i=0; i < dataV.length;i++){
    NV =NV + parseInt(dataV[i].Total);
    T_NV = parseInt(NV)
    document.getElementById('vet').innerHTML ="Les ventes : "+T_NV;
}

var TOF =  parseInt(T_NA) - parseInt(T_NV);
document.getElementById('TOF').innerHTML = "TOTAL d'operation : "+TOF;