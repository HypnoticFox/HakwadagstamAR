document.addEventListener('alpine:init', () => {
    Alpine.store('global', {
        seenIntro: Alpine.$persist(false).as('hakwadagstamAR-seenIntro'),

        arModeButtonActive: false,
        arModeActive: false,
        arModeInteractionActive: false,
        hasDeviceOrientationSensors: false,

        activeLocations: [],

        goldenCoinModeButtonActive: false,
        goldenCoinModeActive: false,
        activeGoldenCoin: null,
        currenGoldenCoinDistance: null,
        closerToGoldenCoin: true,

        defaultActiveLocations: [],
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
            this.activeQuestion = id;
            Alpine.store('global').setActiveLocationSet(id);
        },

        closeQuestion(){
            this.activeQuestion = null;
            this.selectedAnswerLocationId = null;
            this.activeLocations = this.defaultActiveLocations;
            this.arModeButtonActive = false;
        },
        //#endregion

        //#region AR
        toggleArMode() {
            this.arModeActive = !this.arModeActive

            if (!this.arModeActive) {
                this.arModeInteractionActive = false;

                // Everytime AR.js loads it adds a <video> element to the root of the <body> element
                // We don't need it and it blocks input so we remove it
                document.querySelectorAll('body > video').forEach(e => e.remove());
            }
        },

        initArMode() {        
            if(!this.nearbyLocationId){
                alert("Je moet in de buurt zijn van een locatie voordat je in AR gaat");
                return;
            }

            const locationToRender = this.activeLocations.find((x) => x.id === this.nearbyLocationId);
            let htmlToRender = locationToRender.html;

            const sceneEl = document.querySelector('a-scene');

            let newElement = null;

            if(this.hasDeviceOrientationSensors) {
                const newDiv = document.createElement('div');
                newDiv.innerHTML = htmlToRender;
                newElement = newDiv.firstElementChild;
                sceneEl.appendChild(newElement);
            }
            else {
                const re = /gps-new-entity-place='.*?'/i;
                const newDiv = document.createElement('div');
                newDiv.innerHTML = htmlToRender.replace(re, "position='0 0 -30'");
                newElement = newDiv.firstElementChild;
                document.querySelector('a-camera').appendChild(newElement);
            }

            setTimeout(() => {
                if(Alpine.store('global').arModeActive) {
                    Alpine.store('global').arModeInteractionActive = true;
                }
            }, 1000);
        },
        //#endregion

        //#region GoldenCoin

        toggleGoldenCoinMode() {
            this.goldenCoinModeActive = !this.goldenCoinModeActive

            if(this.goldenCoinModeActive){
                this.closeQuestion();
            }
            else {
                this.activeGoldenCoin = null;
                this.currenGoldenCoinDistance = null;
                this.closerToGoldenCoin = true;
            }
        },

        //#endregion

        //#region GPS
        setActiveLocationSet(id) {
            this.activeLocations.push(this.allLocations.filter((location) => 
                location.locationSet === id
            ));
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

            if(this.goldenCoinModeActive){
                this.updateGoldenCoinInfo(loc);
            }

            let noGoldenCoinsNearby = true;

            for(let i = 0; i < this.activeLocations.length; i++){
                if(this.activeLocations[i].locationType === "GoldenCoin"){
                    const isInRange = this.isInRange(
                        loc.coords, 
                        { latitude: this.activeLocations[i].latitude, longitude: this.activeLocations[i].longitude }, 
                        400);
                    
                    if(isInRange){
                        Alpine.store('global').activeGoldenCoin = this.activeLocations[i];
                        Alpine.store('global').goldenCoinModeButtonActive = true;
                        noGoldenCoinsNearby = false;
                    }
                }

                const isNearby = this.isInRange(
                    loc.coords, 
                    { latitude: this.activeLocations[i].latitude, longitude: this.activeLocations[i].longitude }, 
                    this.activeLocations[i].viewingDistance);

                if(isNearby){
                    this.nearbyLocationId = this.activeLocations[i].id;
                    
                    Alpine.store('global').arModeButtonActive = true;
                    return;
                }
            }

            if(noGoldenCoinsNearby){
                Alpine.store('global').goldenCoinModeButtonActive = false;
                Alpine.store('global').activeGoldenCoin = null;
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

        updateGoldenCoinInfo(loc){
            newDistance = haversineDistanceBetweenPoints(
                loc.coords.latitude,
                loc.coords.longitude,
                this.activeGoldenCoin.latitude,
                this.activeGoldenCoin.longitude
            )

            if(this.currenGoldenCoinDistance === null){
                this.currenGoldenCoinDistance = newDistance;
            }

            if (Math.abs(this.currenGoldenCoinDistance - newDistance) < 5) {
                return;
            }

            if(this.currenGoldenCoinDistance > newDistance){
                this.closerToGoldenCoin = true;
            }
            else {
                this.closerToGoldenCoin = false;
            }

            this.currenGoldenCoinDistance = newDistance;
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
    Alpine.store('global').defaultActiveLocations = GOLDENCOINS.filter((x) => !Alpine.store('global').visitedLocations.includes(x.id.toString()));
    Alpine.store('global').activeLocations = Alpine.store('global').defaultActiveLocations;

    if (isIOS()) {
        console.log("Is IOS Device");
        DeviceOrientationEvent.requestPermission()
            .then((response) => {
                if (response === "granted") {
                    window.addEventListener("deviceorientation", (e) => {
                        if(e.webkitCompassHeading !== null && e.alpha !== null && e.beta !== null && e.gamma !== null){
                            Alpine.store('global').hasDeviceOrientationSensors = true;
                        }
                    }, { once: true, capture: true });
                } else {
                    alert("Toestemming voor orientatie sensoren is vereist!");
                }
            })
            .catch(() => console.log("No device orietation sensors found!"));
    // Android devices
    } else {
        window.addEventListener("deviceorientationabsolute", (e) => {
            if(e.absolute === true && e.alpha !== null && e.beta !== null && e.gamma !== null){
                Alpine.store('global').hasDeviceOrientationSensors = true;
            }
        }, { once: true, capture: true });
    }

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
})

document.addEventListener('touchstart', (e) => {
    previousTouches = e.touches;
});
document.addEventListener('touchmove', handleTouchMovement);
document.addEventListener('touchend', (e) => {
    handleTouchMovement(e);
    previousTouches = [];
});

// To center the pivot of models
document.addEventListener('object3dset', function (e) {
    if (e.detail.type === 'mesh'
        && e.target.hasAttribute('text-geometry')
    ){ 
        setTimeout(centerModelPivotXY(e.target), 10);
        return;
    }

    if (e.detail.type === 'mesh'
        && e.target.hasAttribute('center-pivot-y')
    ){ 
        setTimeout(centerModelPivotY(e.target), 10);
        return
    }
});

AFRAME.registerComponent('correct-answer', {
    init: function() {
        this.el.addEventListener('click', e => {
            const locationId = this.el.getAttribute('location-id');

            if(!locationId
                || Alpine.store('global').visitedLocations.includes(locationId)
            ){
                return;
            }

            Alpine.store('global').points++;

            Alpine.store('global').visitedLocations.push(locationId);

            alert('Object geanalyseerd, 1 data-punt verzameld!');
        });
    }
});

AFRAME.registerComponent('golden-coin', {
    init: function() {
        this.el.addEventListener('click', e => {
            const locationId = this.el.getAttribute('location-id');

            if(!locationId
                || Alpine.store('global').visitedLocations.includes(locationId)
            ){
                return;
            }

            Alpine.store('global').points += 3;

            Alpine.store('global').visitedLocations.push(locationId);
            
            Alpine.store('global').defaultActiveLocations = GOLDENCOINS.filter((x) => !Alpine.store('global').visitedLocations.includes(x.id.toString()));
            Alpine.store('global').activeLocations = Alpine.store('global').defaultActiveLocations;

            Alpine.store('global').toggleGoldenCoinMode();

            alert('Object geanalyseerd, 3 data-punten verzameld!');
        });
    }
});

var previousTouches = [];

function handleTouchMovement(e) {
    if(!Alpine.store('global').arModeInteractionActive
        || !getCurrentEntity()
        ) {
            previousTouches = e.touches;
            return;
    }

    if(previousTouches.length !== e.touches.length) {
        previousTouches = e.touches;
        return;
    }

    if(e.touches.length === 1) {
        const distanceX = e.touches[0].clientX - previousTouches[0].clientX;
        const distanceY = e.touches[0].clientY - previousTouches[0].clientY;

        handleRotation(distanceX, -distanceY);
    }
    if(e.touches.length === 2) {
        oldDist = Math.hypot(
            previousTouches[0].pageX - previousTouches[1].pageX,
            previousTouches[0].pageY - previousTouches[1].pageY
        );

        newDist = Math.hypot(
            e.touches[0].pageX - e.touches[1].pageX,
            e.touches[0].pageY - e.touches[1].pageY
        );
        
        handleScale(newDist - oldDist);
    }

    previousTouches = e.touches;
}

function handleRotation(distanceX, distanceY) {
    const el = getCurrentEntity();

    const rotationFactor = 0.01;

    let rotationAxis = new THREE.Vector3(distanceX, distanceY, 0);
    const distance = rotationAxis.length();
    rotationAxis.applyAxisAngle(new THREE.Vector3(0, 0, 1), THREE.MathUtils.degToRad(90));
    rotationAxis.normalize();
    
    el.object3D.rotateOnWorldAxis(rotationAxis, distance * rotationFactor);
}

function handleScale(changeInDistance) {
    const el = getCurrentEntity();

    const scaleFactor = 0.01;
    const minScale = 0.1;
    const maxScale = 10;
    
    let newScale = el.object3D.scale.x + changeInDistance * scaleFactor;
    newScale = Math.min(Math.max(newScale, minScale), maxScale);

    el.object3D.scale.x = newScale;
    el.object3D.scale.y = newScale;
    el.object3D.scale.z = newScale;
}

function getCurrentEntity() {
    return document.querySelector("a-entity[geometry], a-entity[text-geometry], a-entity[gltf-model], a-entity[obj-model]");
}

function centerModelPivotXY(el) {
    const mesh = el.getObject3D('mesh');
    const bbox = new THREE.Box3().setFromObject(el.object3D);
    const offsetX = (bbox.min.x - bbox.max.x) / 2;
    const offsetY = (bbox.min.y - bbox.max.y) / 2;

    if(!Number.isFinite(offsetX) || !Number.isFinite(offsetY)) {
        setTimeout(centerModelPivotXY, 10, el);
        return; 
    }
    
    mesh.position.set(offsetX, offsetY, 0);
}

function centerModelPivotY(el) {
    const mesh = el.getObject3D('mesh');
    const bbox = new THREE.Box3().setFromObject(el.object3D);
    const offsetY = (bbox.min.y - bbox.max.y) / 2;

    if(!Number.isFinite(offsetY)) {
        setTimeout(centerModelPivotY, 10, el);
        return; 
    }
    
    mesh.position.set(0, offsetY, 0);
}

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

  function getHeatColorBasedonDistance(distance, maxDistance) {
        const heatGradient = chroma
            .scale(['0000FF', '00FFFF', 'FFEA00', 'FF6600', 'FF0000'])
            .domain([0, 0.15, 0.4, 0.7, 1]);
        distance = Math.min(distance, maxDistance);

        return heatGradient(1 - distance / maxDistance).hex();
  }

  function isIOS() {
    return [
      'iPad Simulator',
      'iPhone Simulator',
      'iPod Simulator',
      'iPad',
      'iPhone',
      'iPod'
    ].includes(navigator.platform)
  }