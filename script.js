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

function hasHttp(item) {
    if ((item[0] === "h" && item[1] === "t" && item[2] === "t" && item[3] === "p"
        && item[4] === ":" && item[5] === "/" && item[6] === "/")) {
        return item;
    } else if ((item[0] === "h" && item[1] === "t" && item[2] === "t" && item[3] === "p" && item[4] === "s"
        && item[5] === ":" && item[6] === "/" && item[7] === "/")) {
        console.log("ok https");
        return item;
    }
    return `https://${item}`;
}

firstButton.addEventListener("click", () => {
    console.log(firstAddress.value);
    console.log(`Наш первый интернет адрес ${hasHttp(firstAddress.value)}`);
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
    console.log(secondAddress.value);
    console.log(`Наш второй интернет адрес ${hasHttp(secondAddress.value)}`);
});

// !!!!!!!!!!!!!! ЖЕКА
// const form = document.getElementById("form");
// const button = document.getElementById("submit");

// const form1 = document.getElementById("form1");
// const button1 = document.getElementById("submit1");

// button.addEventListener("click", (e) => {
//     e.preventDefault();

//     const http = document.getElementById("http").value;
//     console.log(check(http));
// });

// form.addEventListener("input", () => {
//     if (http) {
//         button.removeAttribute("disabled");
//     };
// });

// button1.addEventListener("click", (e) => {
//     e.preventDefault();

//     const http1 = document.getElementById("http1").value;
//     console.log(check(http1));
// });

// form1.addEventListener("input", () => {
//     if (http1) {
//         button1.removeAttribute("disabled");
//     };
// });

// function check(i) {
//     if (i.indexOf("http://") === 0 || i.indexOf("https://") === 0) {
//         return i
//     } else {
//         return result = `https://${i}`;
//     };
// };
// !!!!!!!!!!!!!!!!!!!!!!

// ! ДЗ 36. Shapes ❤️🟢🔷

// на странице находятся элементы:

// div - фигура, которая может принимать какие - то формы

// select - выбрать тип фигуры(квадрат, прямоугольник, круг).При изменении значения в нем, меняется фигура

// input для выбора цвета.При его изменении меняется цвет фигуры

