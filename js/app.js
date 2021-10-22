let count = 0;

(function initUI() {
    bindButtons();

    updateCounter();
})();



function bindButtons() {
    document.getElementById("upButton").onclick = () => {
        count++;

        updateCounter();
    }

    document.getElementById("downButton").onclick = () => {
        if (count > 0)
        {
            count--;            
        }

        updateCounter();
    }
}

function updateCounter() {
    document.getElementById("counter").innerText = count;
}