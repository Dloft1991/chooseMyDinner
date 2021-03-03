const restraunts = ["Arby's", "McDonalds", "Chic-fil-A", "Chipotle", "Five Guys", "Zaxby's", "Publix", "Pizza", "Cheddars",
"Burger King", "Panda Express", "Firehouse Subs", "Kobe's", "Cheddars", "Bahama Breeze", "Ale House", "King's Wok"];

RandomChoice = () => {
    const random = Math.floor(Math.random() * restraunts.length);
console.log(random, restraunts[random]);
document.getElementById("TheChoice").innerHTML = "How about" + " " + restraunts[random] + "?";
}

