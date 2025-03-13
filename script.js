var a = 1
const API_KEY = "B3y/pF/gm73ZOfcKU7eFVw==DeGvbJAv1mlvXGF7" // API ninjas
const element = document.getElementById('quotes')



const core = document.getElementById('core');
core.style.backgroundImage = "url('day.jpg')";



const themeMode = document.getElementById('themeMode')
themeMode.addEventListener('change', changeTheme)

function changeTheme() {
    if(themeMode.checked) {
        core.style.backgroundImage = "url('day.jpg')";
    } else {    
        core.style.backgroundImage = "url('night.jpeg')";
    }
}



const butQuotes = document.getElementById('getQuotes')
butQuotes.addEventListener('click', newQuote)


function newQuote() {
    element.innerHTML = 'Loading...'
    fetch('https://api.api-ninjas.com/v1/quotes',
        {
            method: 'GET',
            headers: { "X-Api-Key": API_KEY }
        }
    )
    .then(res => res.json())
    .then(data => {
        if (data.length > 0) {
            element.innerHTML = `${data[0].quote} <br> <b><u>${data[0].author}</u><b>`;
        } else {
            element.innerHTML = "Không có dữ liệu!";
        }
    })
    .catch(err => console.error(err))
}