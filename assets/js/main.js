console.log("Fizz or Buzz?");

const container = document.getElementById("container")
let ul = document.createElement("ul")
let il = document.createElement("il")

container.append(ul)
ul.append(il)


for (let i = 1; i <= 100; i++) {

    let ul = document.createElement("ul")
    let il = document.createElement("il")

    container.append(ul)
    ul.append(il)

    let number = i

    if ((i % 3 == 0) && (i % 5 == 0)) {
        console.log("BuzzFizz")
        number=i
    } else if (i % 5 == 0) {
        console.log("Buzz");
        number=i

    } else if (i % 3 == 0) {
        console.log("Fizz")
        number=i
    } else {
        console.log(i);
        number=i
    }

    il.append(number)
};



