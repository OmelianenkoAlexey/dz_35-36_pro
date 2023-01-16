// ! ДЗ 35. Перехід за посиланням

// На сторінці є дві кнопки. - переадресовується на інший сайт
//     (за раніше введеним посиланням).
//     Реалізувати перевірку на http / https.
//     Якщо протокол не вказаний - додаємо


const firstForm = document.querySelector(".first-form");
const secondForm = document.querySelector(".second-form");
const firstButton = document.querySelector(".first-button");
const secondButton = document.querySelector(".second-button");
const firstAddress = document.getElementById("first-input");
const secondAddress = document.getElementById("second-input");

firstForm.addEventListener("click", e => {
    e.preventDefault();
});

firstAddress.addEventListener("input", () => {
    if (firstAddress.value) {
        firstButton.removeAttribute("disabled");
    }
})

firstButton.addEventListener("click", () => {
    if ((firstAddress.value[0] === "h" && firstAddress.value[1] === "t" && firstAddress.value[2] === "t" && firstAddress.value[3] === "p"
        && firstAddress.value[4] === ":" && firstAddress.value[5] === "/" && firstAddress.value[6] === "/")) {
        console.log("ok http");
    } else if ((firstAddress.value[0] === "h" && firstAddress.value[1] === "t" && firstAddress.value[2] === "t" && firstAddress.value[3] === "p" && firstAddress.value[4] === "s"
        && firstAddress.value[5] === ":" && firstAddress.value[6] === "/" && firstAddress.value[7] === "/")) {
        console.log("ok https");
    } else {
        firstAddress.value = `https://${firstAddress.value}`;
    }
    console.log(firstAddress.value);
    console.log(`Наш первый интернет адрес ${firstAddress.value}`);
});

secondForm.addEventListener("click", e => {
    e.preventDefault();
});

secondAddress.addEventListener("input", () => {
    if (secondAddress.value) {
        secondButton.removeAttribute("disabled");
    }
})

secondButton.addEventListener("click", () => {
    if ((secondAddress.value[0] === "h" && secondAddress.value[1] === "t" && secondAddress.value[2] === "t" && secondAddress.value[3] === "p"
        && secondAddress.value[4] === ":" && secondAddress.value[5] === "/" && secondAddress.value[6] === "/")) {
        console.log("ok http");
    } else if ((secondAddress.value[0] === "h" && secondAddress.value[1] === "t" && secondAddress.value[2] === "t" && secondAddress.value[3] === "p" && secondAddress.value[4] === "s"
        && secondAddress.value[5] === ":" && secondAddress.value[6] === "/" && secondAddress.value[7] === "/")) {
        console.log("ok https");
    } else {
        secondAddress.value = `https://${secondAddress.value}`;
    }

    console.log(secondAddress.value);
    console.log(`Наш второй интернет адрес ${secondAddress.value}`);
});


// ! ДЗ 36. Shapes ❤️🟢🔷

// на странице находятся элементы:

// div - фигура, которая может принимать какие - то формы

// select - выбрать тип фигуры(квадрат, прямоугольник, круг).При изменении значения в нем, меняется фигура

// input для выбора цвета.При его изменении меняется цвет фигуры

