const person = {
    name: "Nabil",
    age: 35,
    getName() {
        return `${this.name}`;
    },
    getAge() {
        return `${this.age}`;
    },
    setName(name) {
        this.name = name;
    },
    setAge(age) {
        this.age = age;
    }
}

console.log(person.getName())
console.log(person.getAge())

person.setName("Ahmed")
person.setAge(30)
console.log(person.getName())
console.log(person.getAge())