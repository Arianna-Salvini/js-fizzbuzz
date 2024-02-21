console.log("Fizz or Buzz?");

for (let i = 1; i < 101; i++) {
    console.log(i);

    if (i % 3 == 0){
        console.log("Buzz")
    } else if (i % 5 == 0){
        console.log("Frizz");
    } else if (i % 15 == 0) {
        console.log("FrizzBuzz")
    }
};
