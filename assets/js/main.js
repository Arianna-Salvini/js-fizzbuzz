console.log("Fizz or Buzz?");

for (let i = 1; i <= 100; i++) {

    if ((i % 3 == 0) && (i % 5 == 0)){
        console.log("BuzzFizz")

    } else if (i % 5 == 0){
        console.log("Buzz");
              
    } else if (i % 3 == 0) {
          console.log("Fizz")
    } else {
        console.log(i);
    }
};

const container = document.getElementById("container")
let ul = document.createElement("ul")
let il = document.createElement("il")


container.append(ul)
ul.append(il)



