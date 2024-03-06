document.addEventListener('alpine:init', () => {
    Alpine.store('global', {
        arModeActive: false,
        points: Alpine.$persist(0).as('hakwadagstamAR-points'),
        activeLocations: [],
        visitedLocations: Alpine.$persist([]).as('hakwadagstamAR-visitedLocations'),
        activeQuestion: 0,
        activeLocation: 0,

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
    Alpine.store('global').setActiveLocationSet(1);
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