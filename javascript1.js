let predefinedTasks = ["Teljesen az alapoktól haladó szintig végigvezetünk a webfejlesztés fontos fejezetein, közben rengeteg példát mutatunk minden anyagrészre.", "Korszerű HTML5, CSS3, Bootstrap5 technológiák és „best-practice”-ek alapján készítettük el a képzést, minden fejezet végén gyakorló feladatokat biztosítunk megoldásokkal (összesen 35 gyakorló feladat).", "Pörgős, megvágott videókból áll az anyag, így nem kell hosszú, unalmas előadásokat végig ülnöd és az e-learning rendszerünk segítségével saját tempódban haladhatsz.", "Megmutatjuk hogyan készíthetsz látványos, interaktív weboldalakat CSS és JavaScript segítségével.", "Megtanítjuk, hogy hogy lehet hatékonyan létrehozni reszponzív, modern weboldalakat a Flexbox és Bootstrap5 lehetőségeit kihasználva."];
let currentTaskIndex = 0;

document.getElementById("addButton").addEventListener("click", function() {
    addTask(document.getElementById("newItem").value);
});

document.getElementById("newItem").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        addTask(document.getElementById("newItem").value);
    }
});

document.getElementById("addAutomaticButton").addEventListener("click", function() {
    if (currentTaskIndex < predefinedTasks.length) {
        addTask(predefinedTasks[currentTaskIndex]);
        currentTaskIndex++;
    } else {
        alert("Amennyiben további kérdésed van, fordulj a képzési referenshez.");
    }
});

function addTask(taskText) {
    if (taskText.trim()) {
        let listItem = document.createElement("li");
        listItem.className = "list-group-item d-flex justify-content-between align-items-center";
        
        // Listaelem szövegének külön span-ba helyezése
        let taskSpan = document.createElement("span");
        taskSpan.innerText = taskText;
        
        // Törlési gomb létrehozása
        let deleteButton = document.createElement("span");
        deleteButton.innerText = "X";
        deleteButton.className = "deleteButton";
        deleteButton.addEventListener("click", function(event) {
            listItem.remove();
            event.stopPropagation();
        });

        listItem.appendChild(taskSpan);
        listItem.appendChild(deleteButton);
        document.getElementById("todoList").appendChild(listItem);

        document.getElementById("newItem").value = "";

        checkListLength();
    }
}

function checkListLength() {
    let listItems = document.querySelectorAll("#todoList li").length;
    if (listItems >= 5) {
        let limitModal = new bootstrap.Modal(document.getElementById('limitModal'));
        limitModal.show();
    }
}
