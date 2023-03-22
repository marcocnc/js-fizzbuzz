const container = document.querySelector('.container');
console.log(container);


for (let i = 1; i <= 100; i++) {

    const box = document.createElement('div');
    console.log(box);
    box.classList.add('box');

    if (i % 15 == 0){
        console.log("FizzBuzz");
        const fizzBuzz = document.createTextNode('FizzBuzz');
        box.append(fizzBuzz);
        box.classList.add('bg-yellow');
        
    }else if (i % 5 == 0){
        console.log("Buzz");
        const buzz = document.createTextNode('Buzz');
        box.append(buzz);
        box.classList.add('bg-green');
    } 
    else if (i % 3 == 0){
        console.log("Fizz");
        const fizz = document.createTextNode('Fizz');
        box.append(fizz);
        box.classList.add('bg-blue');
    }else{
        console.log(i);
        box.append(i);
    } 
    container.append(box);
}

