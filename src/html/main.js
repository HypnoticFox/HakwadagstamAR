document.addEventListener('alpine:init', () => {
    Alpine.store('global', {
        arModeButtonActive: false,
        arModeActive: false,
        activeLocations: [],
        activeQuestion: null,
        selectedAnswerLocationId: null,
        currentPosition: null,
        lastPositionMeasurement: null,
        nearbyLocationId: null,
        points: Alpine.$persist(0).as('hakwadagstamAR-points'),
        visitedLocations: Alpine.$persist([]).as('hakwadagstamAR-visitedLocations'),
        allLocations: LOCATIONS,
        allQuestions: QUESTIONS,

        //#region Questions
        openQuestion(id){
            this.activeQuestion=id;
            Alpine.store('global').setActiveLocationSet(id);
        },

        closeQuestion(){
            this.activeQuestion=null;
            this.selectedAnswerLocationId=null;
            this.activeLocations=[];
            this.arModeButtonActive=false;
        },
        //#endregion

        //#region AR
        toggleArMode() {
            this.arModeActive = ! this.arModeActive

            if (!this.arModeActive) {
                // Everytime AR.js loads it adds a <video> element to the root of the <body> element
                // We don't need it and it blocks input so we remove it
                document.querySelectorAll('body > video').forEach(e => e.remove());
            }
        },

        initArMode() {
            // Everytime AR.js loads it adds a <video> element to the root of the <body> element
            // We don't need it and it blocks input so we remove it
            // document.querySelectorAll('body > video').forEach(e => e.remove());
        
            if(!this.nearbyLocationId){
                alert("Je moet in de buurt zijn van een locatie voordat je in AR gaat");
                return;
            }

            const locationToRender = this.activeLocations.find((x) => x.id === this.nearbyLocationId);
            const newElement = document.createElement('div');
            newElement.innerHTML = locationToRender.html;
            document.querySelector('a-scene').appendChild(newElement.firstElementChild);
        },
        //#endregion

        //#region GPS
        setActiveLocationSet(id) {
            this.activeLocations = this.allLocations.filter((location) => 
                location.locationSet === id
            );
        },

        getLocationUrl(id){
            loc = this.allLocations.find((x)=>x.id===id);

            if (!loc) { return null; }

            return "https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=" + loc.latitude + "," + loc.longitude;
        },

        newPositionMeasurement(loc) {
            if(!this.lastPositionMeasurement){
                this.lastPositionMeasurement = loc;
                this.updateCurrentLocation(loc);
                return;
            }

            const distanceToPreviousPoint = haversineDistanceBetweenPoints(loc.coords.latitude, loc.coords.longitude, this.lastPositionMeasurement.coords.latitude, this.lastPositionMeasurement.coords.longitude);

            if(distanceToPreviousPoint < 25){
                this.lastPositionMeasurement = loc;
                this.updateCurrentLocation(loc);
                return;
            }

            this.lastPositionMeasurement = loc;
        },

        //When user is in range of one of the active locations, the AR button is shown. 
        //When the user is outside the range of any of the active locations, the AR button is hidden and if the AR mode was active, it will be deactivated.
        updateCurrentLocation(loc){
            this.currentPosition = loc;

            if(this.arModeActive) return;

            for(let i = 0; i < this.activeLocations.length; i++){
                const isNearby = this.isInRange(
                    loc.coords, 
                    { latitude: this.activeLocations[i].latitude, longitude: this.activeLocations[i].longitude }, 
                    this.activeLocations[i].viewingDistance);

                if(isNearby){
                    this.nearbyLocationId = this.activeLocations[i].id;
                    
                    Alpine.store('global').arModeButtonActive = true
                    return;
                }
            }

            Alpine.store('global').arModeButtonActive = false;
                this.nearbyLocationId = null;
        },

        isInRange(coordsA, coordsB, maxDistance){
            distance = haversineDistanceBetweenPoints(
                coordsA.latitude, 
                coordsA.longitude, 
                coordsB.latitude, 
                coordsB.longitude);

            return distance < maxDistance;
        },

        showLocationError(error) {
            switch(error.code) {
                case error.PERMISSION_DENIED:
                    alert("Je hebt geen toestemming gegeven voor het delen van je locatie. Deze app werkt helaas niet zonder deze toestemming.");
                    break;
                case error.POSITION_UNAVAILABLE:
                    alert("We kunnen je huidige locatie niet bepalen, deze app zal daardoor niet goed werken.");
                    break;
                case error.TIMEOUT:
                    console.log("GetCurrentPosition Timeout");
                    //alert("Je hebt geen toestemming gegeven voor het delen van je locatie. Deze app werkt helaas niet zonder deze toestemming.");
                    break;
                case error.UNKNOWN_ERROR:
                    alert("Er is een onbekende fout opgetreden.");
                    break;
            }
        },
        //#endregion

    });
})

document.addEventListener('alpine:initialized', () => {
    if (navigator.geolocation){
        const watchPositionOptions = {
            enableHighAccuracy: true,
            maximumAge: 2000,
        }
        navigator.geolocation.watchPosition(
            (loc) => Alpine.store('global').newPositionMeasurement(loc), 
            (error) => Alpine.store('global').showLocationError(error), 
            watchPositionOptions);
    }
    else{
        alert("Je hebt geen toestemming gegeven voor het delen van je locatie. Deze app werkt helaas niet zonder deze toestemming.");
    }

    AFRAME.registerComponent('correct-answer', {
        init: function() {
            this.el.addEventListener('click', e => {
                const locationId = e.target.attributes['location-id'].value;

                if(Alpine.store('global').visitedLocations.includes(locationId)){
                    return;
                }

                Alpine.store('global').points++;

                Alpine.store('global').visitedLocations.push(locationId);
                console.log(Alpine.store('global').visitedLocations);

                alert('You have have found a victory point!');
            });
        }
    });
})

function haversineDistanceBetweenPoints(lat1, lon1, lat2, lon2) {
    const R = 6369087;
    const p1 = lat1 * Math.PI/180;
    const p2 = lat2 * Math.PI/180;
    const deltaLon = lon2 - lon1;
    const deltaLambda = (deltaLon * Math.PI) / 180;
    const d = Math.acos(
      Math.sin(p1) * Math.sin(p2) + Math.cos(p1) * Math.cos(p2) * Math.cos(deltaLambda),
    ) * R;
    return d;
  }

function cosineDistanceBetweenPoints(lat1, lon1, lat2, lon2) {
    const R = 6369087;
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
}