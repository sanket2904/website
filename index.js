var buttons = document.getElementById("checkgroup")
var buttonsChild = buttons.children


for (let i = 0; i < buttonsChild.length; i++) {
    const element = buttonsChild[i];
    if (element.type === "checkbox") {
        element.addEventListener("click", (e) => {
            if(e.target.checked){
                var tr = document.querySelectorAll("tr")
                for (let index = 0; index < tr.length; index++) {
                    const elementtr = tr[index];
                    elementtr.childNodes[i + 1].style.display = "table-cell"
                }
            }
            else {
                var tr = document.querySelectorAll("tr")
                for (let index = 0; index < tr.length; index++) {
                    const elementtr = tr[index];
                    elementtr.childNodes[i+1].style.display = "none"
                }
            }
        })
    }
}
var button = document.getElementById("button")
button.addEventListener("click", (e) => {
    
    if (buttons.style.display === "none") {
        buttons.style.display = "flex"
    }
    else {
        buttons.style.display = "none"
    }
})