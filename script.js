$(document).ready(function() {
    $("character-form").submit(function(event) {
        event.preventDefault();
        var imeLika = $("#character-name").val();
        var link = "https://swapi.dev/api/people/?search=" + imeLika;
        $.ajax({
            url: link,
            type: "GET",
            dataType: "json",
            success: function(data) {
                if (data.results.length > 0) {
                    var lik = data.results[0];
                    var likInfo = "<h1>Ime: " + lik.name + "</h1>";
                    likInfo += "<p>Godina rođenja: " + lik.birth_year + "</p>";
                    likInfo += "<p>Spol: " + lik.gender + "</p>";
                    likInfo += "<p>Boja kose: " + lik.hair_color + "</p>";
                    likInfo += "<p>Boja očiju: " + lik.eye_color + "</p>";
                    $("#character-info").html(likInfo);
                } else {
                    $("#character-info").html("<p>Podaci o liku nisu pronađeni.</p>");
                }
            },
            error: function() {
                $("#character-info").html("<p>Nešto je pošlo po krivu!</p>");
            }
        });
    });
});