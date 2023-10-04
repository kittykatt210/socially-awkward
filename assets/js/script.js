var generateFactsBt = document.getElementById('generateFacts');
var generateHistoricalBt = document.getElementById('generateHistorical');

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
                var num = i+1;

                var fact = num + ". " + result[i].fact;
                factItem.appendChild(document.createTextNode(fact));
                factList.appendChild(factItem);
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
