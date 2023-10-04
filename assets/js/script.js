var startBtn = document.getElementById('generate1');


function getFacts() {
    // Facts api call
    var limit = document.getElementById('amountInput').value;

    $.ajax({
        method: 'GET',
        url: 'https://api.api-ninjas.com/v1/facts?limit=' + limit,
        headers: { 'X-Api-Key': 'r0xgD0GtvJJrEoy6u9/jlg==nkpcvornpjuE0Na7'},
        contentType: 'application/json',
        success: function(result) {
            var fact = result[0].fact;
            document.getElementById('randomFact').innerHTML = fact;

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

startBtn.addEventListener('click', getFacts);