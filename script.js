const menu = [
    {
        id: 1,
        title: "Tteokbokki",
        category: "Korea",
        price: 10.99,
        img:
            "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
        desc: `Spicy rice cakes, serving with fish cake.`,
    },
    {
        id: 2,
        title: "Chicken Ramen",
        category: "Japan",
        price: 7.99,
        img:
            "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
        desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
    },
    {
        id: 3,
        title: "Bibimbap",
        category: "Korea",
        price: 8.99,
        img:
            "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
        desc: `Boiling vegetables, serving with special hot sauce`,
    },
    {
        id: 4,
        title: "Dan Dan Mian",
        category: "China",
        price: 5.99,
        img:
            "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
        desc: `Dan dan noodle, serving with green onion `,
    },
    {
        id: 5,
        title: "Yangzhou Fried Rice",
        category: "China",
        price: 12.99,
        img:
            "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
        desc: `Yangzhou style fried rice, serving with bean and pickles `,
    },
    {
        id: 6,
        title: "Onigiri",
        category: "Japan",
        price: 9.99,
        img:
            "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
        desc: `Rice Sandwich, serving with soy sauce`,
    },
    {
        id: 7,
        title: "Jajangmyeon",
        category: "Korea",
        price: 15.99,
        img:
            "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
        desc: `Black bean sauce noodle, serving with green onion `,
    },
    {
        id: 8,
        title: "Ma Yi Shang Shu",
        category: "China",
        price: 12.99,
        img:
            "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
        desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
    },
    {
        id: 9,
        title: "Doroyaki",
        category: "Japan",
        price: 3.99,
        img:
            "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
        desc: `Red bean paste dessert, serving with honey.`,
    },
];
var divim = document.getElementById("menum"); 
function item() { 
    divim.innerHTML=""; 
    for (var i = 0; i < menu.length; i++) { 
        var resim = document.createElement("img"); 
        resim.src = menu[i].img; 
        resim.className = "photo"; 
        resim.alt = menu[i].title; 
        var div = document.createElement("div"); 
        div.className = "menu-items col-lg-6 col-sm-12"; 
        var div2 = document.createElement("div"); 
        div2.className = "menu-info"; 
        var div3 = document.createElement("div"); 
        div3.className = "menu-title"; 
        var baslık = document.createElement("h4"); 
        baslık.textContent = menu[i].title; 
        var fiyat = document.createElement("h4"); 
        fiyat.textContent = menu[i].price; 
        var div4 = document.createElement("div"); 
        div4.className = "menu-text"; 
        div4.textContent = menu[i].desc; 
 
        div3.appendChild(baslık); 
        div3.appendChild(fiyat); 
        div2.appendChild(div3); 
        div2.appendChild(div4); 
        div.appendChild(resim); 
        div.appendChild(div2); 
        divim.appendChild(div); 
    } 
} 
 
item(); 
 
var btn = document.getElementById("buton"); 
var buton = document.createElement("button"); 
buton.className = "btn btn-outline-dark btn-item"; 
buton.textContent = "All"; 
var buton2 = document.createElement("button"); 
buton2.className = "btn btn-outline-dark btn-item"; 
buton2.textContent = "Kore"; 
var buton3 = document.createElement("button"); 
buton3.className = "btn btn-outline-dark btn-item"; 
buton3.textContent = "Japan"; 
var buton4 = document.createElement("button"); 
buton4.className = "btn btn-outline-dark btn-item"; 
buton4.textContent = "China"; 
btn.appendChild(buton); 
btn.appendChild(buton2); 
btn.appendChild(buton3); 
btn.appendChild(buton4); 
 
var korea = []; 
var china = []; 
var japan = []; 
 
menu.map(function (value, index) { 
    if (menu[index].category == "Korea") { 
        korea[index] = value; 
    } 
}); 
menu.map(function (value, index) { 
    if (menu[index].category == "China") { 
        china[index] = value; 
    } 
}); 
menu.map(function (value, index) { 
    if (menu[index].category == "Japan") { 
        japan[index] = value; 
    } 
}); 
 
 
buton2.addEventListener("click", kore); 
buton4.addEventListener("click", cin); 
buton3.addEventListener("click", japonya); 
buton.addEventListener("click", item); 
function kore() { 
    divim.innerHTML = ""; 
    for (var i = 0; i < korea.length; i++) { 
        if (korea[i] == null) { 
            korea.slice(i, 1); 
        } 
        else { 
            var resim = document.createElement("img"); 
            resim.src = korea[i].img; 
            resim.className = "photo"; 
            resim.alt = korea[i].title; 
            var div = document.createElement("div"); 
            div.className = "menu-items col-lg-6 col-sm-12"; 
            var div2 = document.createElement("div"); 
            div2.className = "menu-info"; 
            var div3 = document.createElement("div"); 
            div3.className = "menu-title"; 
            var baslık = document.createElement("h4"); 
            baslık.textContent = korea[i].title; 
            var fiyat = document.createElement("h4"); 
            fiyat.textContent = korea[i].price; 
            var div4 = document.createElement("div"); 
            div4.className = "menu-text"; 
            div4.textContent = korea[i].desc; 
 
            div3.appendChild(baslık); 
            div3.appendChild(fiyat); 
            div2.appendChild(div3); 
            div2.appendChild(div4); 
            div.appendChild(resim); 
            div.appendChild(div2); 
            divim.appendChild(div); 
        } 
    } 
 
 
 
} 
function cin() { 
    divim.innerHTML = ""; 
    for (var i = 0; i < china.length; i++) { 
        if (china[i] == null) { 
            china.slice(i, 1); 
        } 
        else { 
            var resim = document.createElement("img"); 
            resim.src = china[i].img; 
            resim.className = "photo"; 
            resim.alt =china[i].title; 
            var div = document.createElement("div"); 
            div.className = "menu-items col-lg-6 col-sm-12"; 
            var div2 = document.createElement("div"); 
            div2.className = "menu-info"; 
            var div3 = document.createElement("div"); 
            div3.className = "menu-title"; 
            var baslık = document.createElement("h4"); 
            baslık.textContent = china[i].title; 
            var fiyat = document.createElement("h4"); 
            fiyat.textContent = china[i].price; 
            var div4 = document.createElement("div"); 
            div4.className = "menu-text"; 
            div4.textContent = china[i].desc; 
 
            div3.appendChild(baslık); 
            div3.appendChild(fiyat); 
            div2.appendChild(div3); 
            div2.appendChild(div4); 
            div.appendChild(resim); 
            div.appendChild(div2); 
            divim.appendChild(div); 
        } 
    } 
 
} 
 
function japonya() { 
    divim.innerHTML = ""; 
    for (var i = 0; i < japan.length; i++) { 
        if (japan[i] == null) { 
            japan.slice(i, 1); 
        } 
        else { 
            var resim = document.createElement("img"); 
            resim.src = japan[i].img; 
            resim.className = "photo"; 
            resim.alt = japan[i].title; 
            var div = document.createElement("div"); 
            div.className = "menu-items col-lg-6 col-sm-12"; 
            var div2 = document.createElement("div"); 
            div2.className = "menu-info"; 
            var div3 = document.createElement("div"); 
            div3.className = "menu-title"; 
            var baslık = document.createElement("h4"); 
            baslık.textContent = japan[i].title; 
            var fiyat = document.createElement("h4"); 
            fiyat.textContent = japan[i].price; 
            var div4 = document.createElement("div"); 
            div4.className = "menu-text"; 
            div4.textContent = japan[i].desc; 
 
            div3.appendChild(baslık); 
            div3.appendChild(fiyat); 
            div2.appendChild(div3); 
            div2.appendChild(div4); 
            div.appendChild(resim); 
            div.appendChild(div2); 
            divim.appendChild(div); 
        } 
    } 
 
}