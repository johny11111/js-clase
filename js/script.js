let msg = `
1 - update person
2 - exit
`;
let msg2 = `
1 - show person is over specific age,
2 - show person children by search id,
3 - show persons 
    a - born in an even month,  
    b - have mor the 2 children,
    c - name or last name is palindrome
4 - show all person from the city 
5 - exit 
`
let persons = [ // array of persons here  saved all the person
    new ClassPerson("John", "ben", "12345", "12/06/1995", "ptk", "00000"),
    new ClassPerson("avi", "israel", "123456789", "12/03/1998", "holon", "12343"),
    new ClassPerson("John", "ben", "1223453", "12/04/1994", "ptk", "1234543"),
    new ClassPerson("dod", "ben", "1223456", "12/03/1998", "TLV", "1234543"),
    new ClassPerson("david", "comp", "1223457", "12/03/1998", "netanya", "1234543"),
    new ClassPerson("haim", "levi", "1234543", "12/03/1994", "ptk", "00000"),
];

persons.forEach(person => person.render())
