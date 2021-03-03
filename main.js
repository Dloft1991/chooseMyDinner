const restraunts = ["Arby's", "McDonalds", "Chic-fil-A", "Chipotle", "Five Guys"];

RandomChoice = () => {
    const random = Math.floor(Math.random() * restraunts.length);
console.log(random, restraunts[random]);
document.getElementById("TheChoice").innerHTML = "How about" + " " + restraunts[random] + "?";
}


