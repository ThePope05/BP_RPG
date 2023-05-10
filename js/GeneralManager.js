function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function DisableButtons(state){
    const ActionButtons = document.querySelectorAll("#bottom button");
    ActionButtons.forEach((curBut) => {
        curBut.disabled = state;
    });
}

function SetSliderVal(selector, newVal){
    let slider = document.querySelector(selector);

    slider.style.width = newVal + "%";
}