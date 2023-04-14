
function menu() {
    let flag = true;
    while (flag) {
        let serchh = prompt(msg)
        if (serchh === "1") {
            document.querySelector("#id_perent").innerHTML = ""
            let id = prompt("Enter id");
            update_person(persons, id);
            document.querySelector("#id_perent").innerHTML += `<h2> the person update in database </h2>`;
            break;
        }
        else if (serchh === "2") {
            document.querySelector("#id_perent").innerHTML = ""
            flag = false;
        }
    }
}



printPerson = persons.forEach(person => person.render())
