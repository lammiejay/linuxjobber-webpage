// First Range
const slider1 = document.getElementById("myRange1");
const output1 = document.getElementById("value-1");

output1.innerHTML = slider1.value;

slider1.oninput = function() {
    output1.innerHTML = this.value; 
}

slider1.addEventListener("input", function(){
    const x1 = slider1.value * 10;
    console.log(x1)
    const color1 = `linear-gradient(90deg, #800165${x1}%, #F1F3FD${x1}%)`;
    slider1.style.backgroundColor = color1;
})

// 2nd Range
const slider2 = document.getElementById("myRange2");
const output2 = document.getElementById("value-2");

output2.innerHTML = slider2.value;

slider2.oninput = function() {
    output2.innerHTML = this.value; 
}

slider2.addEventListener("input", function(){
    const x2 = slider2.value;
    console.log(x2)
    const color2 = 'linear-gradient(90deg, #800165' + x2 + '%, #F1F3FD' + x2 + '%)';
    slider2.style.backgroundColor = color2;
})

// 3rd Range
const slider3 = document.getElementById("myRange3");
const output3 = document.getElementById("value-3");

output3.innerHTML = slider3.value;

slider3.oninput = function() {
    output3.innerHTML = this.value; 
}

slider3.addEventListener("input", function(){
    const x3 = slider3.value;
    console.log(x3)
    const color3 = 'linear-gradient(90deg, #800165' + x3 + '%, #F1F3FD' + x3 + '%)';
    slider3.style.backgroundColor = color3;
})

// 4th Range
const slider4 = document.getElementById("myRange4");
const output4 = document.getElementById("value-4");

output4.innerHTML = slider4.value;

slider4.oninput = function() {
    output4.innerHTML = this.value; 
}

slider4.addEventListener("input", function(){
    const x4 = slider4.value;
    console.log(x4)
    const color4 = 'linear-gradient(90deg, #800165' + x4 + '%, #F1F3FD' + x4 + '%)';
    slider4.style.backgroundColor = color4;
})

// 5nd Range
const slider5 = document.getElementById("myRange5");
const output5 = document.getElementById("value-5");

output5.innerHTML = slider5.value;

slider5.oninput = function() {
    output5.innerHTML = this.value; 
}

slider5.addEventListener("input", function(){
    const x5 = slider5.value;
    console.log(x5)
    const color5 = 'linear-gradient(90deg, #800165' + x5 + '%, #F1F3FD' + x5 + '%)';
    slider5.style.backgroundColor = color5;
})
// 6nd Range
const slider6 = document.getElementById("myRange6");
const output6 = document.getElementById("value-6");

output6.innerHTML = slider6.value;

slider6.oninput = function() {
    output6.innerHTML = this.value; 
}

slider6.addEventListener("input", function(){
    const x6 = slider6.value;
    console.log(x6)
    const color6 = 'linear-gradient(90deg, #800165' + x6 + '%, #F1F3FD' + x6 + '%)';
    slider6.style.backgroundColor = color6;
})

// 7nd Range
const slider7 = document.getElementById("myRange7");
const output7 = document.getElementById("value-7");

output7.innerHTML = slider7.value;

slider7.oninput = function() {
    output7.innerHTML = this.value; 
}

slider7.addEventListener("input", function(){
    const x7 = slider7.value;
    console.log(x7)
    const color7 = 'linear-gradient(90deg, #800165' + x7 + '%, #F1F3FD' + x7 + '%)';
    slider7.style.backgroundColor = color7;
})

// 8nd Range
const slider8 = document.getElementById("myRange8");
const output8 = document.getElementById("value-8");

output8.innerHTML = slider8.value;

slider8.oninput = function() {
    output8.innerHTML = this.value; 
}

slider8.addEventListener("input", function(){
    const x8 = slider8.value;
    console.log(x8)
    const color8 = 'linear-gradient(90deg, #800165' + x8 + '%, #F1F3FD' + x8 + '%)';
    slider8.style.backgroundColor = color8;
})

// error message
let sliderValue = [slider1.value, slider2.value, slider3.value, slider4.value, slider5.value, slider6.value, slider7.value, slider8.value];

for (let i = 0; i < sliderValue.length; i++){
    sliderValue.forEach(index => {
        if (sliderValue.filter(index) === sliderValue.filter(index)) {
            console.log("try another range")
        }
    });
}


// BUTTONS LIST 