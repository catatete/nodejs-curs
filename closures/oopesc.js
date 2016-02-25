function Person(firstName, lastName, nickname){
    this.nickname = nickname;

    this.print = function(){
        throw new Error();
        console.log('Person:' + firstName, lastName, "with nickname", this.nickname);
    }
}


var p = new Person("Mos", "Craciun", "Mos Gerila");

p.print();
p.nickname = "Santa Claus";
p.print();