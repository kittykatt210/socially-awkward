var generateFactsBt = document.getElementById('generateFacts');
var generateHistoricalBt = document.getElementById('generateHistorical');
var clearFactsButton = document.getElementById("clear-facts-facts");
var clearJokesButton = document.getElementById("clear-jokes");
var generateJokesBt = document.getElementById('generateRandomJokes');
var generateDadjokeBt = document.getElementById('generateDadjokes');
var RandomLocalStorage = JSON.parse(localStorage.getItem("favorite-fact(s):")) || [];
var DadjokelocalStorage = JSON.parse(localStorage.getItem("favorite-joke(s):")) || [];


function SaveTolocalStorage () {
    localStorage.setItem("favorite-fact(s):", JSON.stringify(RandomLocalStorage));
    localStorage.setItem("favorite-joke(s):", JSON.stringify(DadjokelocalStorage));
}


function displayRandomFactsFromLocalStorage() {
    var factos = document.getElementById("favortie-facts");
    var favjokes = document.getElementById("favorite-jokes") 



    RandomLocalStorage.forEach(function (factText) {
        var factItem = document.createElement('li');
        var factIcon = document.createElement("i")
        factIcon.classList.add("fa", "fa-solid", "fa-gears", "is-clickable");

        var factTextNode = document.createTextNode(". " + factText);

        factItem.appendChild(factIcon);
        factItem.appendChild(factTextNode);
        factos.appendChild(factItem);

        clearFactsButton.addEventListener("click", function () {
            RandomLocalStorage.length = 0;
            SaveTolocalStorage ();
            factos.removeChild(factItem);
    
        })
    });


    DadjokelocalStorage.forEach(function (jokeText) {
        var jokeli = document.createElement('li');
        var jokeIccon = document.createElement("i")
        jokeIccon.classList.add("fa", "fa-solid", "fa-gears", "is-clickable");

        var jokeTextNode = document.createTextNode(". " + jokeText);

        jokeli.appendChild(jokeIccon);
        jokeli.appendChild(jokeTextNode);
        favjokes.appendChild(jokeli);


        clearJokesButton.addEventListener("click", function () {
            DadjokelocalStorage.length = 0;
            SaveTolocalStorage ();
            favjokes.removeChild(jokeli);
    
        })
    });



}

// Call the function to display facts from local storage when needed
document.addEventListener("DOMContentLoaded", function () {
    displayRandomFactsFromLocalStorage();
    console.log("Page loaded.");
});


function getFacts() {
    // Facts api call
    var limit = document.getElementById('amountInput').value;
    
    $.ajax({
        method: 'GET',
        url: 'https://api.api-ninjas.com/v1/facts?limit=' + limit,
        headers: { 'X-Api-Key': 'r0xgD0GtvJJrEoy6u9/jlg==nkpcvornpjuE0Na7'},
        contentType: 'application/json',
        success: function(result) {
            document.getElementById('randomFact').innerHTML = '';
            console.log(result);

            for(var i = 0; i < limit; i++) {
                var factList = document.getElementById('randomFact');
                var factItem = document.createElement('li');

                var factIcon = document.createElement("i")
                factIcon.classList.add("fa", "fa-solid", "fa-gears");

                var factText = document.createTextNode(result[i].fact);

                factItem.appendChild(factIcon);
                factItem.appendChild(document.createTextNode(". "));
                factItem.appendChild(factText);
                console.log(limit);

                factList.appendChild(factItem);

                factIcon.addEventListener("click", function () {
                    var index = Array.from(factList.children).indexOf(this.parentElement)
                   RandomLocalStorage.push(result[index].fact) 
                   SaveTolocalStorage ();
                } )
            }
        },
        error: function ajaxError(jqXHR) {
            console.error('Error: ', jqXHR.responseText);
        }
    });
}

function getHistFacts() {
    // Historical facts api call
    var limit = document.getElementById('amountInput2').value;
    var text = document.getElementById('topic').value;

    $.ajax({
        method: 'GET',
        url: 'https://api.api-ninjas.com/v1/historicalevents?text=' + text + '&offset=' + limit,
        headers: { 'X-Api-Key': 'r0xgD0GtvJJrEoy6u9/jlg==nkpcvornpjuE0Na7'},
        contentType: 'application/json',
        success: function(result) {
            document.getElementById('historicalFact').innerHTML = '';
            // console.log(limit);
            console.log(result);
            // var histFact = result[0].event;
            if(result.length != 0) { 
            for(var i = 0; i < limit; i++) {
                var histList = document.getElementById('historicalFact');
                var histItem = document.createElement('li');
                var date = result[i].year + '-' + result[i].month + '-' + result[i].day;
                console.log(date);
                var histFact = dayjs(date).format('D-MMM-YYYY') +': ' + result[i].event;
                console.log(histFact);
                var HistoricalIcon = document.createElement("i")
                HistoricalIcon.classList.add("fa", "fa-solid", "fa-book-skull");

                histItem.appendChild(HistoricalIcon);
                histItem.appendChild(document.createTextNode(histFact));
                histList.appendChild(histItem);

                HistoricalIcon.addEventListener("click", function () {
                    var histText = this.parentElement.textContent.trim();
                    RandomLocalStorage.push(histText);
                   SaveTolocalStorage ();
                } )
            }} else {
                var histList = document.getElementById('historicalFact');
                var histItem = document.createElement('li');
                histFact = 'There are no historical facts associated with this topic. Pick another topic.';

                histItem.appendChild(document.createTextNode(histFact));
                histList.appendChild(histItem);
            }

        },
        error: function ajaxError(jqXHR) {
            console.error('Error: ', jqXHR.responseText);
        }
    });
}


function getJokes() {
    // Jokes api call
    var limit = document.getElementById('amountInput3').value;
    console.log(limit);

    $.ajax({
        method: 'GET',
        url: 'https://api.api-ninjas.com/v1/jokes?limit=' + limit,
        headers: { 'X-Api-Key': 'DB4FieOP94WOQIx2LOBzoA==mCMWVRWRDZLdKPcD'},
        contentType: 'application/json',
        success: function(result) {
            document.getElementById('randomJoke').innerHTML = '';
            console.log(result);

            for(var i = 0; i < limit; i++) {
                var jokeList = document.getElementById('randomJoke');
                var jokeItem = document.createElement('li');
                var jokeIcon = document.createElement("i")
                jokeIcon.classList.add("fa", "fa-solid", "fa-masks-theater");
                var jokeText = document.createTextNode(result[i].joke);

                jokeList.appendChild(jokeItem)
                jokeItem.appendChild(jokeIcon)
                jokeItem.appendChild(jokeText)
           
                jokeIcon.addEventListener("click", function () {
                    var jokeTxt = this.parentElement.textContent.trim();
                    DadjokelocalStorage.push(jokeTxt);

                   SaveTolocalStorage ();
                } )

        }
    },
        error: function ajaxError(jqXHR) {
            console.error('Error: ', jqXHR.responseText);
        }
    });
}



function getDadJokes() {
    // Dad jokes api call
    var limit = document.getElementById('amountInput4').value;

    $.ajax({
        method: 'GET',
        url: 'https://api.api-ninjas.com/v1/dadjokes?limit=' + limit,
        headers: { 'X-Api-Key': 'DB4FieOP94WOQIx2LOBzoA==mCMWVRWRDZLdKPcD'},
        contentType: 'application/json',
        success: function(result) {
        document.getElementById('dadJoke').innerHTML = '';
        console.log(result);

        for(var i = 0; i < limit; i++) {
            var dadList = document.getElementById('dadJoke');
            var dadItem = document.createElement('li');

            var dadIcon = document.createElement("i")
            dadIcon.classList.add("fa", "fa-solid", "fa-face-grin-squint-tears");

            var dadText = document.createTextNode(result[i].joke);

            dadItem.appendChild(dadIcon);
            dadItem.appendChild(dadText);
            dadList.appendChild(dadItem);

            
            dadIcon.addEventListener("click", function () {
                var dadjokeTxt = this.parentElement.textContent.trim();
                DadjokelocalStorage.push(dadjokeTxt);
               SaveTolocalStorage ();
            } )

    }

        },
        error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
        }
    });
}




generateFactsBt.addEventListener('click', getFacts);
generateHistoricalBt.addEventListener('click', getHistFacts);

// modal




