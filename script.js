// ! ДЗ 35. Перехід за посиланням

// На сторінці є дві кнопки. - переадресовується на інший сайт
//     (за раніше введеним посиланням).
//     Реалізувати перевірку на http / https.
//     Якщо протокол не вказаний - додаємо

const firstForm = document.querySelector(".first-form");
// const secondForm = document.querySelector(".second-form");
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
    if ((item.indexOf("http://") === 0) || (item.indexOf("https://")) === 0) {
        return item;
    }
    return `https://${item}`;
}

firstButton.addEventListener("click", () => {
    console.log(firstAddress.value);
    console.log(`Наш первый интернет адрес ${hasHttp(firstAddress.value)}`);
});

// secondForm.addEventListener("click", e => {
//     e.preventDefault();
// });

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
//     }
//     return result = `https://${i}`;
// };
// !!!!!!!!!!!!!!!!!!!!!!

// ! ДЗ 36. Shapes ❤️🟢🔷

// на странице находятся элементы:

// div - фигура, которая может принимать какие - то формы

// select - выбрать тип фигуры(квадрат, прямоугольник, круг).При изменении значения в нем, меняется фигура

// input для выбора цвета.При его изменении меняется цвет фигуры

// const form = document.getElementById("form");
// const color = document.getElementById("color");
// const button = document.getElementById("button");
// const div = document.getElementById("div");

// form.addEventListener("click", e => {
//     e.preventDefault();
// });

// button.addEventListener("click", () => {
//     document.querySelector("#div").className = "";

//     if (select.value === "square") div.classList.add("square");
//     if (select.value === "rectangle") div.classList.add("rectangle");
//     if (select.value === "circle") div.classList.add("circle");

//     div.style.backgroundColor = `${color.value}`
// });
