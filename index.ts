import inquirer from "inquirer";
interface ansType{
    userId:string,
    userPin:number
}


const answers:ansType=await inquirer.prompt([
    {
        type:"input",
        name:"userId",
        message:"please enter your id:"
    },
    {
        type:"number",
        name:"userpin",
        message:"please enter your PIN:"
    },
    {
        type:"list",
        name:"accountType",
        choices:["current","saving"],
        message:"select your account type",
      
    },
    {
        type:"list",
        name:"transationType",
        choices:["fast cash","withdraw"],
        message:"select your transation",
        when(answers){
            return answers.transationType
        }
    },
    {
        type:"list",
        name:"amount",
        choices:["1000","2000","10000","20000"],
        message:"select your transation",
        when(answers){
            return answers.transationType == "fast cash"
        },
    },
    {
        type:"number",
        name:"amount",

        message:"enter your amount",
        when(answers){
            return answers.transationType == "withdraw"
        },
    },
])

if (answers.userId && answers .userPin){

    const balance = Math.floor(Math.random())*1000000
    console.log(balance)
    const EnteredAmount = answers.amount;
    if (balance >= EnteredAmount){
        const remianing = balance - EnteredAmount;
        console.log("Your remaining balance is",remianing)
    }else {
        console.log("Insuficient balance")
    }
}
console.log(answers)