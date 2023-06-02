const start = document.querySelector(".startBtn");

start.addEventListener("click", () => {
  start.style.display = "none";

  const title = document.createElement("h1");
  title.textContent = "Укажите свое имя";
  document.body.append(title);

  const inpName = document.createElement("input");
  const enterName = document.createElement("button");

  enterName.textContent = "ввод";

  document.body.append(inpName);
  document.body.append(enterName);

  enterName.addEventListener("click", () => {
    let userName = inpName.value;
    console.log(userName);

    enterName.style.display = "none";
    inpName.style.display = "none";

    title.textContent = `Добро пожаловать, ${userName} !`;

    setTimeout(blocks, 1000);
  });
});

function blocks() {
  //создаем текстовое поле и добавляем его в body
  const preTitle = document.createElement("p");

  preTitle.textContent = "Уровень Blocks. Введите число блоков";

  document.body.append(preTitle);

  //создаем поле ввода и добавляем его в body
  const input = document.createElement("input");

  document.body.append(input);

  input.addEventListener("keyup", (element) => {
    if (element.code == "Enter") {
      // Прочитали число, которое ввели в input
      let n = input.value;
      preTitle.textContent = "Удалите блоки для перехода на следующий уровень";

      input.style.display = "none";

      for (let i = 0; i < n; i++) {
        let block = document.createElement("div");
        block.textContent = i;
        block.classList.add("block");
        block.addEventListener("click", () => {
          block.style.display = "none";
        });
        document.body.append(block);
      }

      const lastBlock = document.body.lastChild;
      lastBlock.classList.add("hiddenBlock");
      lastBlock.style.top =
        String(parseInt(Math.random() * (1000 - 500) + 500)) + "px";
      lastBlock.style.left =
        String(parseInt(Math.random() * (1000 - 500) + 500)) + "px";

      lastBlock.addEventListener("click", () => {
        lastBlock.style.display = "none";
        // Ищем все блоки
        // let blocks = document.querySelectorAll(".blocks");

        preTitle.style.display = "none";
        // Переход на новый уровень
        setTimeout(random, 3000);
      });
    }
  });
}

function random() {
  // Генерируем рандомное число и округляем его до целого
  let randNumber = parseInt(Math.random() * (5 - 1) + 1);
  const preTitle = document.createElement("p");
  const input = document.createElement("input");
  preTitle.textContent = "Уровень Random. Угадайте число от 1 до 5";

  document.body.append(preTitle);
  document.body.append(input);

  input.addEventListener("keyup", (element) => {
    if (element.code == "Enter") {
      let myNumber = input.value;
      input.value = "";
      if (myNumber == randNumber) {
        preTitle.textContent = "Вы угадали";

        setTimeout(() => {
          input.style.display = "none";
          preTitle.style.display = "none";
        }, 1000);
        setTimeout(mystery, 1000);
      } else {
        preTitle.textContent = "Попробуйте ещё раз";
      }
    }
  });
}

function mystery() {
  const preTitlee = document.createElement("p");
  const inputt = document.createElement("input");
  preTitlee.textContent =
    "Уровень Mystery. Зимой и летом одним цветом, что это?";

  document.body.append(preTitlee);
  document.body.append(inputt);

  inputt.textContent = "Ввод";
  inputt.addEventListener("keyup", (element) => {
    if (element.code == "Enter") {
      let answer = inputt.value;
      inputt.value = "";
      if (answer == "Рояль") {
        preTitlee.textContent = "Вы угадали";
        setTimeout(() => {
          inputt.style.display = "none";
          preTitlee.style.display = "none";
        }, 1000);
        setTimeout(story, 1000);
      } else if (answer == "Ёлка") {
        preTitlee.textContent = "Было бы слишком просто. Вы не угадали";
      } else {
        preTitlee.textContent = "Вы не угадали";
      }
    }
  });
}
function story() {
  const preTitleee = document.createElement("p");
  const inputtt = document.createElement("input");

  preTitleee.textContent =
    "Уровень St-..///... Пого.///......010101..P.s проп..ши[]7 :что это?";

  document.body.append(preTitleee);
  document.body.append(inputtt);

  inputtt.addEventListener("keyup", (element) => {
    if (element.code == "Enter") {
      let dialogue = inputtt.value;
      inputtt.value = "";

      if (dialogue == "что это?") {
        preTitleee.textContent =
          "Мвхахааха, я...ВируS которЫI можеtt запрост0() поглотить вессссь твой.///х[[[ БРАУЗЕ]Р";

        setTimeout(() => {
          preTitleee.textContent =
            "Я люb Лю сперва пому[чать жертву. Пропиши в inputtt: 666";
        }, 4000);
      } else if (dialogue == "666") {
        preTitleee.textContent =
          "Сейчассс теБьЯ перенесЬо]]] на другой уров/.// level ";
        setTimeout(() => {
          inputtt.style.display = "none";
          preTitleee.style.display = "none";
        }, 1000);
        setTimeout(back, 3000);
      } else {
        preTitleee.textContent =
          "Ты sowСЕМ все мозги про/.play/ал?/, Я СКАЗАЛ ПРОПИШИ В INPUT: 666";
      }
    }
  });
}

function back() {
  const preTitlee = document.createElement("p");
  const preTitle = document.createElement("p");
  preTitle.textContent = "Уровень Question. Введите число квадратов на экране";
  document.body.append(preTitle);

  const input = document.createElement("input");
  document.body.append(input);
  input.classList.add("inputNumber");

  let e = document.createElement("div");
  e.classList.add("div1");
  document.body.append(e);

  let a = document.createElement("div");
  a.classList.add("div2");
  document.body.append(a);

  let s = document.createElement("div");
  s.classList.add("div3");
  document.body.append(s);

  input.addEventListener("keyup", (element) => {
    if (element.code == "Enter") {
      if (input.value == 3) {
        preTitle.textContent = "Вы угадали";

        setTimeout(() => {
          input.style.display = "none";
          a.style.display = "none";
          s.style.display = "none";
          e.style.display = "none";
          preTitle.style.display = "none";
        }, 1000);

        setTimeout(preEnd, 3000);
      } else {
        preTitle.textContent = "Попробуйте еще раз";
      }
    }
  });
}

function preEnd() {
  const h1 = document.querySelector("h1");
  const parent = h1.parentNode;
  parent.removeChild(h1);
  const PreTitle1 = document.createElement("p");
  const input1 = document.createElement("input");
  PreTitle1.textContent =
    "Уровень[] PreEnd^%6. Введите число к-квадратов на эк-кране.";

  document.body.append(PreTitle1);
  document.body.append(input1);

  let e = document.createElement("div");
  e.classList.add("div4");
  document.body.append(e);

  let a = document.createElement("div");
  a.classList.add("div5");
  document.body.append(a);

  let s = document.createElement("div");
  s.classList.add("div6");
  document.body.append(s);

  input1.addEventListener("keyup", (element) => {
    if (element.code == "Enter") {
      if (input1.value == 3) {
        PreTitle1.textContent = "=)";
        setTimeout(() => {
          PreTitle1.style.display = "none";
          let img = document.createElement("img");
          img.src =
            "https://static1.colliderimages.com/wordpress/wp-content/uploads/2023/01/analog-horror.jpg";
          document.body.append(img);
          input1.style.display = "none";
          a.style.display = "none";
          s.style.display = "none";
          e.style.display = "none";
        }, 2000);
        setTimeout(finale, 6000);
      } else {
        PreTitle1.textContent = "Нев=-ерно[";
      }
    }
  });
}

function finale() {
  const pretittle = document.createElement("p");
  document.body.append(pretittle);
  pretittle.textContent = "Вы прошли игру.";
  setTimeout(() => {
    pretittle.textContent =
      "1 концовка из 1";
  }, 3000);
}
