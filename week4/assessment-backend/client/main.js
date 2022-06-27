// don't really get the "Allow the user to ask for things that will inspire, encourage, or help them progress towards their goals." just went with fortunes

const complimentBtn = document.getElementById("complimentButton");
const fortuneBtn = document.getElementById("fortuneButton");
const postfortuneBtn = document.getElementById("new-fortune");
const getAllFortunesBtn = document.getElementById("allfortuneButton");

const getAllFortunesList = document.getElementById("list");

const getCompliment = () => {
  axios.get("http://localhost:4000/api/compliment/").then((res) => {
    const data = res.data;
    alert(data);
  });
};

complimentBtn.addEventListener("click", getCompliment);

const getFortune = () => {
  axios.get("http://localhost:4000/api/fortune/").then((res) => {
    const data = res.data;
    alert(data);
  });
};

fortuneBtn.addEventListener("click", getFortune);

const getAllFortunes = () => {
  axios.get("http://localhost:4000/api/allfortunes/").then((res) => {
    getAllFortunesList.innerHTML = "";
    i = 1;

    res.data.forEach((el) => {
      if (i <= res.data.length) {
        let para = document.createElement("p");
        let delbtn = document.createElement("button");

        para.getAttribute("id", `para${i}`);
        delbtn.getAttribute("id", `del${i}`);

        delbtn.textContent = "delete";
        para.textContent = el;

        delbtn.onclick = () => {
          para.remove();
          axios.get("http://localhost:4000/api/delfortunes/").then((res) => {
            res.data;
            console.log(res.data);
          });
        };

        getAllFortunesList.appendChild(para).appendChild(delbtn);
      }
      i++;
    });
  });
};

getAllFortunesBtn.addEventListener("click", getAllFortunes);

const postFortune = (e) => {
  //this was originally going to take event from an input field but i couldn't get it to work
  axios.post("http://localhost:4000/api/postfortune/").then((res) => {
    const data = res.data;
    alert(data);
  });
};

postfortuneBtn.addEventListener("click", postFortune);
