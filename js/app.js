let count = 0;
const hasLocalStorage = checkForLocalStorage();

(function initUI() {
    bindButtons();

    if (hasLocalStorage) 
    {
        let value = localStorage.getItem("counter");
        if (!isNaN(value))
        {
            count = value;
        }
    }

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

    if (hasLocalStorage)
    {
        localStorage.setItem("counter", count);
    }
}

/**
 * Check if localStorage exist and is available.
 * https://stackoverflow.com/questions/16427636/check-if-localstorage-is-available/16427747
 * @return {Boolean} localStorageExists
 */
 function checkForLocalStorage(){
    const test = "test";

    try {
        localStorage.setItem(test, test);
        localStorage.removeItem(test);

        return true;
    } catch(e) {
        return false;
    }
}
