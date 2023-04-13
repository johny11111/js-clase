// חתכים, שאילתות ודו"חות
function menu2() {
    let flag = true;
    while (flag) {
        let opcion = prompt(msg2)
        if (opcion === "1") {
            document.querySelector("#id_perent").innerHTML = ""
            let age = parseInt(prompt('enter age to search'))
            let res = showPersonsbyAge(persons, age)
            res.forEach(element => element.render());
            break
        }
        if (opcion === "2") {
            document.querySelector("#id_perent").innerHTML = ""
            let id = prompt("enter id");
            let res = findChild(persons, id)
            res.forEach(element => element.render());
            break
        }
        if (opcion === "3") {
            document.querySelector("#id_perent").innerHTML = ""
            let serch = prompt("enter option")
            if (serch === "a") {
                let res = checkMonth(persons)
                res.forEach(element => element.render());
                break;
            }
            else if (serch === "b") {
                let mor2child = findmor2child(persons);
                mor2child.forEach(element => element.render())
                break;
            }
            else if (serch === "c") {
                let res = palindrome(persons)
                res.forEach(element => element.render());
                break
            }
        }
        if (opcion === "4") {
            document.querySelector("#id_perent").innerHTML = ""
            let city = prompt("enter city")
            let PBC = showPersonByCity(persons, city)
            PBC.forEach(element => element.render());
            break

        }
        if (opcion === "5") {
            document.querySelector("#id_perent").innerHTML = ""
            flag = false;
        }

    }
}

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
