
função = (num) => {
     if (num === String) {return num }
     else if ((num % 3) === 0 && (num % 5) === 0){return num = 'FizzBuzz'}
     else if((num % 3) === 0){return num = 'Fizz'}
     else if((num % 5) === 0){return num = 'Buzz' }
     else return num
}
for (let i = 0; i <= 1000; i++){
    console.log(função(i));
}