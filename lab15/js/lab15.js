/* lab.js
using input from pokemonapi for endpoint and utilization of jquery

requirements: jquery must be loaded, pokeapi must be loaded

author: savvy burch
date: 2024 */


$(document).ready(function() {
    $('#activate').click(function() {
        // value from the input field
        var pokemonId = $('#pokemonId').val().toLowerCase().trim();

        //generates a random id number if no number is given
        if (!pokemonId) {
            var randomId = Math.floor(Math.random() * 898) + 1;
            pokemonId = randomId.toString();
        }



// Using the core $.ajax() method
$.ajax({
    // The URL for the request (from the api docs)
    url: "https://pokeapi.co/api/v2/pokemon/" + pokemonId,
    //data variable
    data: {},
    // Whether this is a POST or GET request
    type: "GET",
    // The type of data we expect back
    dataType : "json",
    // What do we do when the api call is successful
    //   all the action goes in here
    success: function(data) {
        // do stuff]
        //assigns variable output to data related to pokemonId
        var output = $("#output");

        //takes name from data
        var name = data.name;

        //takes abilities from data and sorts them
        var abilities = data.abilities.map(function(ability) {
            return ability.ability.name;
        }).join(", ");

        //variable for species
        var types = data.types.map(function(typeEntry) {
            return typeEntry.type.name;
        }).join(",");

        //species url
        var speciesUrl = data.species.url;
        
        // fetches cries (chatGPT used for this section)
        $.ajax({
            url: speciesUrl,
            type: "GET",
            datatype: "json",
            success: function(speciesData) {
                var speciesName = speciesData.name;

                //takes an id to get audio file
                var cryUrl = `https://play.pokemonshowdown.com/audio/cries/${name}.mp3`;

                //audio element for cry
                var cryAudio = `<audio controls><source src="${cryUrl}" type="audio/mpeg">Your browser does not support the audio element.</audio>`;
            
        //writes html into output
        output.html(`
            <p><b>name:</b> ${name}</p>
            <p><b>abilities:</b> ${abilities}</p>
            <p><b>type(s):</b> ${types}</p>
            <p><b>cry:</b> ${cryAudio}</p>
            `);
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log("error:", textStatus, errorThrown);
        }
    }),
    console.log(data);
},    
    

// What we do if the api call fails
   
    error: function (jqXHR, textStatus, errorThrown) { 
        // do stuff
        console.log("Error:", textStatus, errorThrown);
    }
});

});
});

