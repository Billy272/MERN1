//Module caching
class person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    getName(){
        return this.name;
    }

    getAge(){
        return this.age;
    }

    setName(name){
        this.name = name;
    }

    setAge(age){
        this.age = age;
    }
}

const me = new person("Billy", 21);
console.log(me.getName());
console.log(me.getAge());

module.exports = person;
