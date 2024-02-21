console.log("Fizz or Buzz?");

const container = document.getElementById("container")
const ul = document.getElementById("unord_list")


for (let i = 1; i <= 100; i++) {

    let li = document.createElement("li")

    if ((i % 3 == 0) && (i % 5 == 0)) {
        console.log("FizzBUzz")
        li.innerHTML = "FizzBuzz"
      
    } else if (i % 5 == 0) {
        console.log("Buzz");
        li.innerHTML = "Buzz"



    } else if (i % 3 == 0) {
        console.log("Fizz")
        li.innerHTML = "Fizz"
     

    } else {
        console.log(i);
        li.innerHTML = i
    
    }

    ul.append(li)
    ul.className="list_item"
};


