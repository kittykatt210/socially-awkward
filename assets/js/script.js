var generateFactsBt = document.getElementById('generateFacts');
var generateHistoricalBt = document.getElementById('generateHistorical');
var RandomLocalStorage = JSON.parse(localStorage.getItem("random-fact(s):")) || [];
function SaveTolocalStorage () {
    localStorage.setItem("random-fact(s):", JSON.stringify(RandomLocalStorage));
}

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

                var num = i+1;
                var fact = num + ". " + result[i].fact;

                console.log(limit);
                factItem.appendChild(document.createTextNode(fact));

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

function displayRandomFactsFromLocalStorage() {
    var factList = document.getElementById('randomFact');
    factList.innerHTML = ''; // Clear any existing content

    var RandomLocalStorage = JSON.parse(localStorage.getItem("random-fact(s):")) || [];

    RandomLocalStorage.forEach(function (factText) {
        var factItem = document.createElement('li');
        var factIcon = document.createElement("i")
        factIcon.classList.add("fa", "fa-solid", "fa-gears");

        var factTextNode = document.createTextNode(". " + factText);

        factItem.appendChild(factIcon);
        factItem.appendChild(factTextNode);
        factList.appendChild(factItem);
    });
}

// Call the function to display facts from local storage when needed
document.addEventListener("DOMContentLoaded", function () {
    displayRandomFactsFromLocalStorage();
    console.log("Page loaded.");
});




function getHistFacts() {
    // Historical facts api call
    var limit = document.getElementById('amountInput2').value;
    var date = document.getElementById('date').value;
    var year = parseInt(date);
    var month = parseInt(date.split('-')[1]);
    var day = parseInt(date.split('-')[2]);

    $.ajax({
        method: 'GET',
        url: 'https://api.api-ninjas.com/v1/historicalevents?year=' + year + '&month=' + month + '&day=' + day,
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
                var num = i+1;
                var histFact = num + '. ' + result[0].event;
                console.log(histFact);

                histItem.appendChild(document.createTextNode(histFact));
                histList.appendChild(histItem);
            }} else {
                var histList = document.getElementById('historicalFact');
                var histItem = document.createElement('li');
                histFact = 'Nothing of historical interest happened on this day. Pick another day.';

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
    var limit = 3

    $.ajax({
        method: 'GET',
        url: 'https://api.api-ninjas.com/v1/jokes?limit=' + limit,
        headers: { 'X-Api-Key': 'DB4FieOP94WOQIx2LOBzoA==mCMWVRWRDZLdKPcD'},
        contentType: 'application/json',
        success: function(result) {
            console.log(result);
        },
        error: function ajaxError(jqXHR) {
            console.error('Error: ', jqXHR.responseText);
        }
    });
}

function getDadJokes() {
    // Dad jokes api call
    var limit = 3

    $.ajax({
        method: 'GET',
        url: 'https://api.api-ninjas.com/v1/dadjokes?limit=' + limit,
        headers: { 'X-Api-Key': 'DB4FieOP94WOQIx2LOBzoA==mCMWVRWRDZLdKPcD'},
        contentType: 'application/json',
        success: function(result) {
        console.log(result);
        },
        error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
        }
    });
}


generateFactsBt.addEventListener('click', getFacts);
generateHistoricalBt.addEventListener('click', getHistFacts);
