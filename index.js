window.addEventListener('load', (event) => {
    
});
const input = document.getElementsByClassName("search-bar-main")[0];
const searchBarCloseBtn = document.getElementsByClassName("search-bar-close-btn")[0];
input.addEventListener('input', inputCheck);
function inputCheck(e) {
    if (input.value.length >= 1) {
        searchBarCloseBtn.style.visibility = 'visible';
    }
    if (input.value == "") {
        searchBarCloseBtn.style.visibility = 'hidden';
    }
}
function clearSearch() {
    input.value = "";
    inputCheck();
}
function submit(userInput) {
    //https://www.google.com/search?q=test
    //window.open('http://www.google.com'); 
    let url = "https://www.google.com/search?q=".concat(userInput)
    window.location.href = url;
}
function submissionCheck(e) {
    if (e.key === 'Enter' || e.keyCode === 13) {
        if (input.value.trim().length !== 0) {
            let userInput = input.value.trim();
            submit(userInput);
        }
    }
}
$(".search-bar-main").on('keyup', submissionCheck);

/*const headers = new Headers();
headers.append('Cache-Control', 'no-cache');
fetch('https://www.google.com/search?q=test', {
    mode: 'no-cors'
})
    .then((response) => {
        if (response.status != 200) {
            console.log(response)
        }
    }, (err) => {
        console.log('error: ' + err);
    }, 5000);*/