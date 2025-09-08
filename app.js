
const asciiHeart = [
    "⣠⣤⣶⣶⣦⣄⡀  ⠀⢀⣤⣴⣶⣶⣤⣀",
    "⣼⣿⣿⣿⣿⣿⣿⣷⣤⣾⣿⣿⣿⣿⣿⣿⣧",
    "⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿",
    "⠹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠏",
    " ⠙⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠋ ",
    "   ⠙⢿⣿⣿⣿⣿⣿⣿⣿⡿⠛⠁⠀",
    "     ⠉⢿⣿⣿⣿⠟⠋⠀",
    "⠀      ⠙⠻⠁"
];

function printByLine(time) {
    asciiHeart.forEach((line, index) => {
        setTimeout(() => {
            process.stdout.write(line + "\n");
        }, index * time);
    });
}





function printByChart(time) {
    let delay = 0;

    for (let i = 0; i < asciiHeart.length; i++) {
        const chars = asciiHeart[i].split("");

        chars.forEach((char, index) => {

            setTimeout(() => {
                process.stdout.write(char);
                
                if (asciiHeart[i].length - 1 === index) {
                    console.log("")
                }

            }, delay);
            delay += time;
        });




    }
}


printByChart(50);