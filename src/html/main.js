document.addEventListener('alpine:init', () => {
    Alpine.store('global', {
        arModeActive: false,
        points: Alpine.$persist(0).as('hakwadagstamAR-points'),
        activeLocations: [],
        visitedLocations: Alpine.$persist([]).as('hakwadagstamAR-visitedLocations'),
        activeQuestion: 0,
        activeLocation: 0,
        arModeButtonActive: false,

        toggleArMode() {
            this.arModeActive = ! this.arModeActive
        },

        setActiveLocationSet(id) {
            this.activeLocations = this.allLocations.filter((location) => 
                location.locationSet === id 
                && !this.visitedLocations.includes(location.id)
            );
        },

        getLocationUrl(id){
            loc = this.allLocations.find((x)=>x.id===id);

            if (!loc) { return null; }

            return "https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=" + loc.latitude + "," + loc.longitude;
        },

        isInRange(lat, long){
            inRange=false;
            this.activeLocations.forEach((activeLoc)=>{
                distance = this.cosineDistanceBetweenPoints(lat, long, activeLoc.latitude, activeLoc.longitude);
                console.log("distance to location id "+ activeLoc.id + ": " + distance + " meters."); //for debugging
                distance < 300 ? inRange = true : '';
            });
            return inRange;
        },

        cosineDistanceBetweenPoints(lat1, lon1, lat2, lon2) {
            const R = 6371e3;
            const p1 = lat1 * Math.PI/180;
            const p2 = lat2 * Math.PI/180;
            const deltaP = p2 - p1;
            const deltaLon = lon2 - lon1;
            const deltaLambda = (deltaLon * Math.PI) / 180;
            const a = Math.sin(deltaP/2) * Math.sin(deltaP/2) +
                      Math.cos(p1) * Math.cos(p2) *
                      Math.sin(deltaLambda/2) * Math.sin(deltaLambda/2);
            const d = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)) * R;
            return Math.round(d);
          },

        //When user is in range of one of the active locations, the AR button is shown. 
        //When the user is outside the range of any of the active locations, the AR button is hidden and if the AR mode was active, it will be deactivated.
        updateCurrentLocation(loc){
            if (Alpine.store('global').isInRange(loc.coords.latitude, loc.coords.longitude)){
                Alpine.store('global').arModeButtonActive = true
            } 
            else { 
                Alpine.store('global').arModeButtonActive = false;
                Alpine.store('global').arModeActive = false;
            }
        },

        showLocationError(error){
            switch(error.code) {
                case error.PERMISSION_DENIED:
                  alert("Je hebt geen toestemming gegeven voor het delen van je locatie. Deze app werkt helaas niet zonder deze toestemming.");
                  break;
                case error.POSITION_UNAVAILABLE:
                  alert("We kunnen je huidige locatie niet bepalen, deze app zal daardoor niet goed werken.");
                  break;
                case error.TIMEOUT:
                  alert("Je hebt geen toestemming gegeven voor het delen van je locatie. Deze app werkt helaas niet zonder deze toestemming.");
                  break;
                case error.UNKNOWN_ERROR:
                  alert("Er is een onbekende fout opgetreden.");
                  break;
            }
        },

        openQuestion(id){
            this.activeQuestion=id;
            Alpine.store('global').setActiveLocationSet(id);
        },

        allLocations: [
            {
                id: 1,
                locationSet: 1,
                latitude: 52.50770893871821,
                longitude: 6.097938843248748,
                html: "<a-entity greenbox material='color: green' geometry='primitive: box' gps-new-entity-place='latitude: 52.50770893871821; longitude: 6.097938843248748' scale='10 10 10'></a-entity>"
            },
            {
                id: 2,
                locationSet: 1,
                latitude: 52.3733762,
                longitude: 6.4591569,
                html: ""
            },
            {
                id: 3,
                locationSet: 1,
                latitude: 52.3499667,
                longitude: 6.5891422,
                html: ""
            },
            {
                id: 4,
                locationSet: 2,
                latitude: 52.50770893871821,
                longitude: 6.097938843248748,
                html: "<a-entity greenbox material='color: green' geometry='primitive: box' gps-new-entity-place='latitude: 52.50770893871821; longitude: 6.097938843248748' scale='10 10 10'></a-entity>"
            },
            {
                id: 5,
                locationSet: 2,
                latitude: 52.3733762,
                longitude: 6.4591569,
                html: ""
            },
            {
                id: 6,
                locationSet: 2,
                latitude: 52.3499667,
                longitude: 6.5891422,
                html: ""
            }
        ],

        allQuestions:[
            {
                id: 1,
                text: "Wat is 1+1?",
                answers: [
                    {text: "1", correct: false, locationId: 1}, 
                    {text: "2", correct: true, locationId: 2},
                    {text: "3", correct: false, locationId: 3}
                ]
            },
            {
                id:2,
                text: "Geef het goede antwoord",
                answers: [
                    {text: "Dit is goed", correct: true, locationId: 4}, 
                    {text: "Deze is fout", correct: false, locationId: 5},
                    {text: "Deze ook", correct: false, locationId: 6}
                ]
            }
        ]
    });

    //Alpine.store('global').setActiveLocationSet(1);

    if (navigator.geolocation){
        navigator.geolocation.watchPosition(Alpine.store('global').updateCurrentLocation, Alpine.store('global').showLocationError);
    }
    else{
        alert("Je hebt geen toestemming gegeven voor het delen van je locatie. Deze app werkt helaas niet zonder deze toestemming.");
    }
})

function enterArMode() {
    // Everytime AR.js loads it adds a <video> element to the root of the <body> element
    // We don't need it and it blocks input so we remove it
    document.querySelectorAll('body > video').forEach(e => e.remove());

    // TODO: Here we should decide which locations we want to show
    Alpine.store('global').activeLocations.forEach( (location) => {
        var newElement = document.createElement('div');
        newElement.innerHTML = location.html;
        document.querySelector('a-scene').appendChild(newElement.firstChild);
    })
}