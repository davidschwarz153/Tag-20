function bmiCalc() {
  const gen = document.querySelector("#male").checked;

  const bodySize = document.querySelector("#size").valueAsNumber;
  const age = document.querySelector("#age").valueAsNumber;
  const weight = document.querySelector("#weight").valueAsNumber;
  const act = document.querySelector("#activity").value;

  const kcal = document.getElementById("kcal");
  const kj = document.getElementById("kj");
  const kcalAct = document.getElementById("kcal-act");
  const kjAct = document.getElementById("kj-act");

  const resultMale = 66.47 + 13.7 * weight + 5 * bodySize - 6.8 * age;
  const resultFemale = 655.1 + 9.6 * weight + 1.8 * bodySize - 4.7 * age;
  const resultMaleAct = resultMale * act;
  const resultFemaleAct = resultFemale * act;

  if (gen == true) {
    kcal.innerText = Math.round(resultMale);
    kj.innerText = Math.round(resultMale / 4.184);
    kcalAct.innerText = Math.round(resultMaleAct);
    kjAct.innerText = Math.round(resultMaleAct / 4.184);
  } else {
    kcal.innerText = Math.round(resultFemale);
    kj.innerText = Math.round(resultFemale / 4.184);
    kcalAct.innerText = Math.round(resultFemaleAct);
    kjAct.innerText = Math.round(resultFemaleAct / 4.184);
  }
}
