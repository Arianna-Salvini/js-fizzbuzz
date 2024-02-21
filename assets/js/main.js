console.log("Fizz or Buzz?");

const container = document.getElementById("container")

for (let i = 1; i <= 100; i++) {

    let ul = document.createElement("ul")

    container.append(ul)

    let number = i

    if ((i % 3 == 0) && (i % 5 == 0)) {
        console.log("FizzBUzz")
        number=("FizzBuzz")
    } else if (i % 5 == 0) {
        console.log("Buzz");
        number=("Buzz")

    } else if (i % 3 == 0) {
        console.log("Fizz")
        number=("Fizz")
    } else {
        console.log(i);
        number=i
    }

    ul.insertAdjacentHTML("afterbegin", `<li> ${number} </li>`)
    ul.className="list_item"
};


