class FamilyMember {
    constructor(name, parents) {
        this.name = name;
        this.parents = parents;
    }

    childOf() {
        return this.name + ' is a child of ' + this.parents.join(' & ') + ".";
    }
}

let queenElizabethII = new FamilyMember("Queen Elizabeth II", ['King George VI', 'Queen Elizabeth']);

let princeCharles = new FamilyMember("Prince Charles", ['Prince Phillip', 'Queen Elizabeth II']);

let princeHarry = new FamilyMember("Prince Harry", ['Prince Charles', 'Princess Diana']);

let archieHarrison = new FamilyMember("Archie Harrison", ['Prince Harry', 'Meghan']);

console.log(queenElizabethII.childOf());
console.log(princeCharles.childOf());
console.log(princeHarry.childOf());
console.log(archieHarrison.childOf());