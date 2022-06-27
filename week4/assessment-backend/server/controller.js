let fortunes = [
  "A beautiful, smart, and loving person will be coming into your life.",
  "A dubious friend may be an enemy in camouflage.",
  "A faithful friend is a strong defense.",
  "A fresh start will put you on your way.",
  "A friend asks only for your time not your money.",
];

module.exports = {
  getCompliment: (req, res) => {
    const compliments = [
      "Gee, you're a smart cookie!",
      "Cool shirt!",
      "Your Javascript skills are stellar.",
    ];

    // choose random compliment
    let randomIndex = Math.floor(Math.random() * compliments.length);
    let randomCompliment = compliments[randomIndex];

    res.status(200).send(randomCompliment);
  },

  getFortune: (req, res) => {
    // choose random fortune
    let randomIndex = Math.floor(Math.random() * fortunes.length);
    let randomFortune = fortunes[randomIndex];

    res.status(200).send(randomFortune);
  },

  getAllFortunes: (req, res) => {
    // get all fortunes
    res.status(200).send(fortunes);
  },

  postFortune: (req, res) => {
    //append 1 of these pre-defined fortunes to the list
    let appendFortunes = [
      "A lifetime friend shall soon be made.",
      "A lifetime of happiness lies ahead of you.",
      "A light heart carries you through all the hard times.",
      "All your hard work will soon pay off.",
    ];

    let randomIndex = Math.floor(Math.random() * appendFortunes.length);
    let randomFortune = appendFortunes[randomIndex];

    fortunes.push(randomFortune);
    console.log(fortunes);

    res.status(200).send(`sent "${randomFortune}" to fortunes`);
  },

  delFortune: (req, res) => {
    res.status(200).send(fortunes);
  },
};
