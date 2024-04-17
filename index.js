import inquirer from "inquirer";
const answers = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: "Enter your Sentence to count the words"
    }
]);
const words = answers.Sentence.trim().split(" ");
console.log(words);
console.log(`Your Sentence Words count is ${words.length}`);
