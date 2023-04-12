//?function to chacking if value is number or is empty string 
function chacking(name) {
    if (name ===  ""){
        return alert("invalid input (name/last name)")
    }
    let regex = /^[a-z A-Z א-ת]+$/;
    return regex.test(name);
}

//!function to chack date 
const chackbirds = (rex) => (/^\d{2}\/\d{2}\/\d{4}$/.test(rex) && rex !== "" ? true : false);


//?function to check id 
function checkid(id) {
    let regex = /^\d{9}$/
   
    if (id ===  "" ||  !regex.test(id) ){
        return alert("invalid input (id)")
    }
    
    return regex.test(id);
}
        
// !valitazia and add person

let btn = document.querySelector("#btn2").addEventListener("click", (event) => {
    event.preventDefault();

let firstName = document.querySelector("#fn");
let lastName = document.querySelector("#ln");
let id = document.querySelector("#id");
let birth = document.querySelector("#date");
let city = document.querySelector("#city");
let idPerent = document.querySelector("#id_perentt");

    // ?receive the input

    let firstNameVal = firstName.value;
    let lastNameVal = lastName.value;
    let idVal = id.value;
    let birthVal = birth.value;
    let cityVal = city.value;
    let idPerentVal = idPerent.value;
    
    // ! check if exict person in database
    let p = persons.forEach (person => {
        if (person.id === id )
        alert("the person is already exist")

    })

    if(idPerentVal === ""){
        idPerentVal = "00000"
    }
     // ?check if the inputs are valid
    let validInputs = chacking(firstNameVal) && chacking(lastNameVal) && checkid(idVal) && chacking(cityVal) && chackbirds(birthVal); 
    if (validInputs) {
        let personExists = persons.find(person => person.id === idVal);
        if (personExists) {
           alert("The person already exists");
        }
        else if (!personExists){
            persons.push(new ClassPerson(firstNameVal, lastNameVal, idVal, birthVal, cityVal, idPerentVal));
            let list = document.querySelector("#id_perent");
            list.innerHTML = "";
            persons.forEach(person => person.render());
        }   
    }
});

// !function to delete a person
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

// ?function to update a person
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

//!function to searchbyid    
function searchById(person, id) {
    let person_arr = person.filter(item => item.id === id);

    return person_arr
}

// ?function to search by name
const searchByName = (person, name) => {
    let person_arr = person.filter(item => item.name.toLowerCase().includes(name.toLowerCase()) || item.lastName.toLowerCase().includes(name.toLowerCase()));
    return person_arr;
}


// function to menu 2 

//!function to show persons over specific age
function showPersonsbyAge(persons, age) {
    let result = persons.filter(item => item.age() >= age);
    console.log(result);
    return result
}

// ?function to show person children by search id,
const findChild = (persons, id) => {
    let res = persons.filter(person => person.idPerent === id);
    console.log(res);
    return res;
}

//!function to check if month is even month
function checkMonth(persons) {

    let res = persons.filter(item => {
        const month = item.birth.split("/")[1]
        return (month % 2 === 0)
    })
    console.log(res)
    return res
}

// ?function to check if the person has mor the 2 children 
function findmor2child(persons) {
    const mor2child = persons.filter(person => {
        const children = persons.filter(child => child.idPerent === person.id);
        return children.length > 1;
    });
    console.log(mor2child);
    return mor2child;
}



// !function to check if the name is palindrome
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

// ?function to show person by city
function showPersonByCity(names, city) {
    let res = names.filter(item => item.city === city)
    return res
}