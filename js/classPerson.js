
// !class to add persons to the database 
class ClassPerson {
    constructor(_name, _lastName, _id, _birth, _city, id_perent) {
        this.name = _name,
            this.lastName = _lastName,
            this.id = _id,
            this.birth = _birth,
            this.city = _city,
            this.idPerent = id_perent

    };
    age() {
        return new Date().getFullYear() - this.birth.split("/")[2]
    }
    
    render() {
        let div = document.createElement("div");
        div.className = "container bg-primary border 2px solid p-2 m-2 col-5"
        div.id = "divCard"
        div.innerHTML = `
 name : ${this.name}<br> 
 last name : ${this.lastName}<br>
 id : ${this.id}<br>
 birthdate : ${this.birth}<br>
 city : ${this.city}<br>
 id perent: ${this.idPerent}`
 let btn = document.createElement('button');
 btn.className = 'btn btn-primary';
 btn.id = `${this.id}`
 btn.innerHTML = "del"
 

        document.querySelector("#id_perent").append(div);
        document.querySelector("#id_perent").appendChild(btn);
      
    }
}   
