//Stem 1 -create onload handler
window.onload = () =>{
    main();
}
function main(){
    const root = document.getElementById("root");
    const btn = document.getElementById("btn");
    btn.addEventListener("click",function () {
        const bgColor = generateRgbColar();
        root.style.backgroundColor = bgColor;
    })
}

//step 2 random color generater function
function generateRgbColar(params) {
    const red = Math.floor(Math.random() * 55);
    const green =Math.floor(Math.random() * 55);
    const blue =Math.floor(Math.random() * 55);
    return `rgb(${red} ${green} ${blue})`
}

//Step 3- collect all necessary referecces
//step 4-handle the click event