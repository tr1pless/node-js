import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("eagle or tails?", (choice) => {
  const game = (choice) => {
    if (choice !== "eagle" || choice !== "tails" || choice === "") {
      console.log("you need to choice eagle or tails");
      rl.close();
    }
    let gameChoice = "";
    let a = 0;
    const getRandomInt = (min, max) => {
      return (a = Math.floor(Math.random() * (max - min + 1) + min));
    };
    const generateAnswer = () => {
      getRandomInt(0, 1);
      if (a != 1) {
        gameChoice = "tails";
      } else {
        gameChoice = "eagle";
      }
      console.log(gameChoice);
    };
    generateAnswer();

    if (choice === gameChoice) {
      console.log("You Win");
    } else {
      console.log("You lose ;( maybe next time ?");
    }
  };
  game(choice);
  rl.close;
});
