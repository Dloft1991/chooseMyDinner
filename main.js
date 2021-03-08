const restraunts = ["Arby's", "McDonalds", "Chic-fil-A", "Chipotle", "Five Guys", "Zaxby's", "Publix", "Pizza", "Cheddars",
"Burger King", "Panda Express", "Firehouse Subs", "Kobe's", "Cheddars", "Bahama Breeze", "Ale House", "King's Wok"];

const fast = ["Arby's", "McDonalds", "Chic-fil-A", "Chipotle", "Five Guys", "Zaxby's", "Pizza Hut",
"Burger King", "Panda Express", "Firehouse Subs", "Cheddars", "King's Wok"];

const sitdown = [ "Cheddars", "Kobe's", "Cheddars", "Bahama Breeze", "Ale House"];


RandomChoice = () => {
    const random = Math.floor(Math.random() * restraunts.length);
console.log(random, restraunts[random]);
document.getElementById("TheChoice").innerHTML = "How about" + " " + restraunts[random] + "?";
}

RandomFast = () => {
    const random = Math.floor(Math.random() * fast.length);
console.log(random, fast[random]);
document.getElementById("TheChoice").innerHTML = "How about" + " " + fast[random] + "?";
}

RandomSitdown = () => {
    const random = Math.floor(Math.random() * sitdown.length);
console.log(random, sitdown[random]);
document.getElementById("TheChoice").innerHTML = "How about" + " " + sitdown[random] + "?";
}


