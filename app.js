class familyMember {
    constructor(name, parents) {
        this.name = name;
        this.parents = parents;
    }

    childOf() {
        return this.name + ' is a child of ' + this.parents.join(' & ') + "." || "unknown";
    }
}

let queenElizabethII = new familyMember("Queen Elizabeth II", ['King George VI', 'Queen Elizabeth']);

let charles = new familyMember("Charles", ['Prince Phillip', 'Queen Elizabeth II']);

console.log(queenElizabethII.childOf());
console.log(charles.childOf());