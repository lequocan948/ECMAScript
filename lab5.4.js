var person = {
    firstName : "Albert",
    lastName: "Einstein",
    set lastName(lastName){
        this._lastName = lastName;
    },
    set firstName(firstName){
        this._firstName = firstName;
    },
    get fullName(){
        return this._firstName + " " + this._lastName;
    }
   

    }
    person.lastName ="Newton"
    person.firstName="Isacc"
    console.log(`Tên của ông ấy là: `,person.fullName);
