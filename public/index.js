

function checkboxClicked() {
    let targetElement = event.target.id
    console.log(targetElement)
    var checkbox = document.getElementById(targetElement).checked

    // If checked
    if (checkbox) {
        document.getElementById(targetElement).parentElement.classList.add("text-decoration-line-through")
    }
    else {
        document.getElementById(targetElement).parentElement.classList.remove("text-decoration-line-through")
    }
}
function deleteTask(i) {
    $.ajax({
        type: "post",
        url: "/delete",
        data: {index:i},
        dataType: "json"
    }).done(window.location.href="/");

}
