let checked = document.getElementsByClassName("link")
let checkbox = document.getElementById("checkbox")

function isChecked() {

    console.log(checkbox.checked)

    if (checkbox.checked === true) {
        checkbox.checked = false
    }
}

for (var i = 0 ; i < checked.length; i++) {
    checked[i].addEventListener('click', isChecked, false)
}
