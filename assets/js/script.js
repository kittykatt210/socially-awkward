var generateFactsBt = document.getElementById('generateFacts');
var generateHistoricalBt = document.getElementById('generateHistorical');
var RandomLocalStorage = JSON.parse(localStorage.getItem("random-fact(s):")) || [];
function SaveTolocalStorage () {
    localStorage.setItem("random-fact(s): ", JSON.stringify(RandomLocalStorage));
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
            console.log(limit);
            document.getElementById('randomFact').innerHTML = '';

            for(var i = 0; i < limit; i++) {
                var factList = document.getElementById('randomFact');
                var factItem = document.createElement('li');
                var factIcon = document.createElement("i")
                factIcon.classList.add("fa", "fa-solid", "fa-gears");

                var factText = document.createTextNode(result[i].fact);

                factItem.appendChild(factIcon);
                factItem.appendChild(document.createTextNode(". "));
                factItem.appendChild(factText);
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
    var text = 'roman empire'

    $.ajax({
        method: 'GET',
        url: 'https://api.api-ninjas.com/v1/historicalevents?text=' + text,
        headers: { 'X-Api-Key': 'r0xgD0GtvJJrEoy6u9/jlg==nkpcvornpjuE0Na7'},
        contentType: 'application/json',
        success: function(result) {
            console.log(result);
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
