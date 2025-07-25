const $id = id => document.getElementById(id);
const $queryAll = selector => document.querySelectorAll(selector);
const $class = selector => document.getElementsByClassName(selector);

// $id('start').addEventListener('click', () => {
//   $id('intro').classList.add('intro-up'); 
// });

const apply = {
    margin: (inputMargin, node) => {
        let marginValue = "";
        inputMargin.forEach(val => {
            marginValue += `${/(?<=\d)px\b|\bauto\b(?!\d)/.test(val.value) ? val.value : ' ' } `;
        });
        node.style.margin = marginValue;
    },
    padding: (inputPadding, node) => {
        node.style.padding = inputPadding;
    }
}

const valKotak1 = $queryAll(".val-kotak1");
const valKotak2 = $queryAll(".val-kotak2");
const valKotak3 = $queryAll(".val-kotak3");
const paddingValue = $class("padding-value")[0];

valKotak1.forEach((val) => {
    val.addEventListener('input', ()=>{
        apply.margin(valKotak1, $class("kotak-margin")[0])
    });
});
valKotak2.forEach((val) => {
    val.addEventListener('input', ()=>{
        apply.margin(valKotak2, $class("kotak-margin")[1])
    });
});
valKotak3.forEach((val) => {
    val.addEventListener('input', ()=>{
        apply.margin(valKotak3, $class("kotak-margin")[2])
    });
});

paddingValue.addEventListener('input', e => {
    apply.padding(paddingValue.value, $class("container-padding")[0]);
});