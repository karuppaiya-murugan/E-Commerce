var productContainer = document.getElementById("product");
var search = document.getElementById("search");
var productList = productContainer.querySelectorAll("div");
search.addEventListener("keyup", function(event) {
    var enteredValue = event.target.value.toUpperCase();

    for (var count = 0; count < productList.length; count++) {
        var productName = productList[count].querySelector("p").textContent;

        if (productName.toUpperCase().indexOf(enteredValue) < 0) {
            productList[count].style.display = "none";
        } else {
            productList[count].style.display = "block";
        }
    }
});

var sidenav=document.querySelector(".side-navbar")


// for open side navbar
function showNavbar(){
    sidenav.style.left="0%"
}

// for close side navbar
function closeNavbar(){
    sidenav.style.left="-40%"
}