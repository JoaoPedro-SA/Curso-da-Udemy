/*
&& ->
|| ->
*/

console.log(`João` && 0 && `Pedro`);
console.log(`João` && null && `Pedro`);
console.log(`João` && undefined && `Pedro`);
console.log(`João` && false && `Pedro`);


console.log(`João` && 1 && `Pedro`);
let b = (`João` && true && `Pedro`);
console.log(b)

console.log(0 || !null && !undefined || false);


falaOi = () => {
    return 'OI';
}

let vai = false;
console.log(vai && falaOi());

vai = true;
console.log(vai && falaOi());

vai = false;
console.log(vai || falaOi());

vai = true;
console.log(vai || falaOi());
