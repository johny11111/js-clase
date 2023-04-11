//function to chacking if value is number or is empty string 
const chacking = (rex) => (/^[a-zA-Z]+$/.test(rex) && rex !== "" ? true : false);

//function to chack date 
const chackbirds = (rex) => (/^\d{2}\/\d{2}\/\d{4}$/.test(rex) && rex !== "" ? true : false);

//function to check id
const checkid = (id) => (/^\d{9}$/.test(id) && id !== "" ? true : false);

// valitazia and add person
function valitaziaAddPerson() {
    let firstName, lastName, id, birth, city, idPerent;

    let bool = false;
    while (!bool) {
        firstName = prompt("Please enter your first name");
        bool = chacking(firstName);
    }

    bool = false

    while (!bool) {
        lastName = prompt("Please enter your last name");
        bool = chacking(lastName);
    }

    bool = false;

    while (!bool) {
        id = prompt("Enter your ID");
        bool = checkid(id);
    }
    if (id) {
        let check = persons.some(person => person.id === id)
        if (check) {
            return alert("this user is already in the list")
        }
    }

    bool = false;

    while (!bool) {
        birth = prompt("Enter your birth date (dd/mm/yyyy)");
        bool = chackbirds(birth);
    }

    bool = false;

    while (!bool) {
        city = prompt("Enter your city");
        bool = chacking(city);
    }

    bool = false;


    idPerent = prompt("Enter parent ID");
    if (idPerent === id) {
    alert("id and id parent cannot be same value");
    idPerent = "00000"
    }
    if (idPerent === "") {
        idPerent = "00000";
    }


    persons.push(new ClassPerson(firstName, lastName, id, birth, city, idPerent));
    document.querySelector("#id_perent").innerHTML += `<h2> the person added to database </h2>`;
}

// function to delete a person
const delete_person = (names, ID) => {
    const index = names.findIndex(person => person.id === ID);
    if (index === -1) {
        return "Person not found"
    }
    const isPerent = names.some(person => person.idPerent === ID);
    if (isPerent) {
        const children = names.filter(person => person.idPerent === ID);
        let opcion = prompt(`
        you can delete your children to 
        do you wont delete your children`)
        if (opcion === 'yes') {
            children.forEach(child => delete_person(names, child.id));
        }
    }
    names.splice(index, 1)
    return names

}

// function to update a person
const update_person = (person, id) => {
    let personToUpdate = person.findIndex(names => names.id === id)
    if (personToUpdate === -1) {
        return "person not found"
    }
    let update = prompt("enter value to update")
    if (update === "first name") {
        person[personToUpdate].name = prompt("enter a new first name")
        return person
    }

    if (update === "last name") {
        person[personToUpdate].lastName = prompt("enter a new last name")
        return person
    }

    else if (update === "city") {
        person[personToUpdate].city = prompt("enter a new city")
        return person
    }
}

//function to searchbyid    
function searchById(person, id) {
    let person_arr = person.filter(item => item.id === id);

    return person_arr
}

// function to search by name
const searchByName = (person, name) => {
    let person_arr = person.filter(item => item.name.toLowerCase().includes(name.toLowerCase()) || item.lastName.toLowerCase().includes(name.toLowerCase()));
    return person_arr;
}


// function to menu 2 

//function to show persons over specific age
function showPersonsbyAge(persons, age) {
    let result = persons.filter(item => item.age() >= age);
    console.log(result);
    return result
}

// function to show person children by search id,
const findChild = (persons, id) => {
    let res = persons.filter(person => person.idPerent === id);
    console.log(res);
    return res;
}

//function to check if month is even month
function checkMonth(persons) {

    let res = persons.filter(item => {
        const month = item.birth.split("/")[1]
        return (month % 2 === 0)
    })
    console.log(res)
    return res
}

// function to check if the person has mor the 2 children 
function findmor2child(persons) {
    const mor2child = persons.filter(person => {
        const children = persons.filter(child => child.idPerent === person.id);
        return children.length > 1;
    });
    console.log(mor2child);
    return mor2child;
}



// function to check if the name is palindrome
function isPalindrome(name) {
    if (name === "") {
        return false;
    }
    let reverseName = name.split('').reverse().join('');
    if (reverseName === name) {
        return reverseName;
    }

    return false;
}

function palindrome(persons) {
    const palindromes = persons.filter(item => isPalindrome(item.name));

    if (palindromes.length > 0) {
        console.log(palindromes);
        return palindromes;
    } else {
        return "No palindromes found.";
    }
}

// function to show person by city
function showPersonByCity(names, city) {
    let res = names.filter(item => item.city === city)
    return res
}