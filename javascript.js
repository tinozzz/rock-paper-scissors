
function computerPlay(){
play = Math.floor(Math.random() * 4);
if (play === 1){
    return "Rock"
}
else if (play === 2){
    return "Paper"
}
else {
    return "Scissors"
}
}

for (let i = 0; i < 20; i++){
console.log(computerPlay());
}
