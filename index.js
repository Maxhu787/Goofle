window.addEventListener('load', (event) => {
    
});
const input = document.getElementsByClassName("search-bar-main")[0];
const searchBarCloseBtn = document.getElementsByClassName("search-bar-close-btn")[0];
input.addEventListener('input', checkInput);
function checkInput(e) {
    if (input.value.length >= 1) {
        searchBarCloseBtn.style.visibility = 'visible';
    }
    if (input.value == "") {
        searchBarCloseBtn.style.visibility = 'hidden';
    }
}
function clearSearch() {
    input.value = "";
    checkInput();
}