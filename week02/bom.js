document.addEventListener("DOMContentLoaded", function () {
    const input = document.querySelector("#favchap");
    const button = document.querySelector("#addChapter");
    const list = document.querySelector("#chapterList");

    button.addEventListener("click", function () {
        if (input.value.trim() === "") {
            alert("The answer is void, try again");
            return;
        }

        const li = document.createElement("li");
        li.textContent = input.value;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "❌";
        deleteButton.classList.add("delete-btn");

        li.appendChild(deleteButton);
        list.appendChild(li);

        deleteButton.addEventListener("click", function () {
            list.removeChild(li);
            input.focus();
        });

        input.value = "";
        input.focus();
    });
});