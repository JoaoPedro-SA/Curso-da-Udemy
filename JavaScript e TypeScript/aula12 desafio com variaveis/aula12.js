let VarA = `A`; //B
let VarB = `B`; //C
let VarC = `C`; //A

Var = VarA;
VarA =  VarB;
VarB =  VarC;
VarC =  Var;




// OUTRO METRODO 

[VarA, VarB, VarC] = [VarB , VarC , VarA]


console.log(VarA, VarB, VarC);