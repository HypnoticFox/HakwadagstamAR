var LOCATIONS = [
    {
        "id": 1,
        "locationSet": 1,
        "latitude": 52.3646163,
        "longitude": 6.4549291,
        "viewingDistance": 50,
        "html": "<a-entity correct-answer location-id='1' look-at='[camera]' gps-new-entity-place='latitude: 52.3646163; longitude: 6.4549291' > <a-entity position='0 0 -50' rotation='21.139635935982472148 -23.895622466628093861 -2.7799776773372570915' obj-model='obj: url(data/models/spaceship_02/StarShip2.obj); mtl: url(data/models/spaceship_02/StarShip2.mtl)' ></a-entity> <a-entity light='type: ambient; color: #EEE; intensity: 1;'></a-entity> </a-entity>"
    },
    {
        "id": 2,
        "locationSet": 1,
        "latitude": 52.3608785,
        "longitude": 6.4506238,
        "viewingDistance": 50,
        "html": "<a-entity location-id='2' gps-new-entity-place='latitude: 52.3608785; longitude: 6.4506238' look-at='[camera]'> <a-entity text-geometry=' value: 404 Not Found; size: 2; font: data/fonts/Orbitron_ExtraBold.typeface.json; height: 1; bevelEnabled: true; bevelSize: 0.1; bevelThickness: 0.1 ' material='color: #c40000' ></a-entity> <a-entity light='type: ambient; color: #EEE; intensity: 0.7;'></a-entity> </a-entity>"
    },
    {
        "id": 3,
        "locationSet": 1,
        "latitude": 52.3618106,
        "longitude": 6.4621246,
        "viewingDistance": 50,
        "html": "<a-entity location-id='3' gps-new-entity-place='latitude: 52.3618106; longitude: 6.4621246' look-at='[camera]'> <a-entity text-geometry=' value: Wrong Location; size: 2; font: data/fonts/Orbitron_ExtraBold.typeface.json; height: 1; bevelEnabled: true; bevelSize: 0.1; bevelThickness: 0.1 ' material='color: #c40000' ></a-entity> <a-entity light='type: ambient; color: #EEE; intensity: 0.7;'></a-entity> </a-entity>"
    },
    {
        "id": 4,
        "locationSet": 2,
        "latitude": 52.3592526,
        "longitude": 6.4713527,
        "viewingDistance": 50,
        "html": "<a-entity correct-answer location-id='4' look-at='[camera]' gps-new-entity-place='latitude: 52.3592526; longitude: 6.4713527' > <a-entity position='0 0 -3000' rotation='21.139635935982472148 -23.895622466628093861 -2.7799776773372570915' obj-model='obj: url(data/models/spaceship_01/SciFi_Fighter_AK5.obj); mtl: url(data/models/spaceship_01/SciFi_Fighter_AK5.mtl)' ></a-entity> <a-entity light='type: ambient; color: #EEE; intensity: 1;'></a-entity> </a-entity>"
    },
    {
        "id": 5,
        "locationSet": 2,
        "latitude": 52.3548043,
        "longitude": 6.4746625,
        "viewingDistance": 50,
        "html": "<a-entity location-id='5' gps-new-entity-place='latitude: 52.3548043; longitude: 6.4746625' look-at='[camera]'> <a-entity text-geometry=' value: 404 Not Found; size: 2; font: data/fonts/Orbitron_ExtraBold.typeface.json; height: 1; bevelEnabled: true; bevelSize: 0.1; bevelThickness: 0.1 ' material='color: #c40000' ></a-entity> <a-entity light='type: ambient; color: #EEE; intensity: 0.7;'></a-entity> </a-entity>"
    },
    {
        "id": 6,
        "locationSet": 2,
        "latitude": 52.3560021,
        "longitude": 6.4666144,
        "viewingDistance": 50,
        "html": "<a-entity location-id='6' gps-new-entity-place='latitude: 52.3560021; longitude: 6.4666144' look-at='[camera]'> <a-entity text-geometry=' value: Wrong Location; size: 2; font: data/fonts/Orbitron_ExtraBold.typeface.json; height: 1; bevelEnabled: true; bevelSize: 0.1; bevelThickness: 0.1 ' material='color: #c40000' ></a-entity> <a-entity light='type: ambient; color: #EEE; intensity: 0.7;'></a-entity> </a-entity>"
    },
    {
        "id": 7,
        "locationSet": 3,
        "latitude": 52.3566222,
        "longitude": 6.4574997,
        "viewingDistance": 50,
        "html": "<a-entity correct-answer location-id='7' look-at='[camera]' gps-new-entity-place='latitude: 52.3566222; longitude: 6.4574997' > <a-entity position='0 0 -50' rotation='21.139635935982472148 -23.895622466628093861 -2.7799776773372570915' obj-model='obj: url(data/models/spaceship_02/StarShip2.obj); mtl: url(data/models/spaceship_02/StarShip2.blue.mtl)' ></a-entity> <a-entity light='type: ambient; color: #EEE; intensity: 1;'></a-entity> </a-entity>"
    },
    {
        "id": 8,
        "locationSet": 3,
        "latitude": 52.3545462,
        "longitude": 6.4620227,
        "viewingDistance": 50,
        "html": "<a-entity location-id='8' gps-new-entity-place='latitude: 52.3545462; longitude: 6.4620227' look-at='[camera]'> <a-entity text-geometry=' value: 404 Not Found; size: 2; font: data/fonts/Orbitron_ExtraBold.typeface.json; height: 1; bevelEnabled: true; bevelSize: 0.1; bevelThickness: 0.1 ' material='color: #c40000' ></a-entity> <a-entity light='type: ambient; color: #EEE; intensity: 0.7;'></a-entity> </a-entity>"
    },
    {
        "id": 9,
        "locationSet": 3,
        "latitude": 52.3598476,
        "longitude": 6.4611002,
        "viewingDistance": 50,
        "html": "<a-entity location-id='9' gps-new-entity-place='latitude: 52.3598476; longitude: 6.4611002' look-at='[camera]'> <a-entity text-geometry=' value: Wrong Location; size: 2; font: data/fonts/Orbitron_ExtraBold.typeface.json; height: 1; bevelEnabled: true; bevelSize: 0.1; bevelThickness: 0.1 ' material='color: #c40000' ></a-entity> <a-entity light='type: ambient; color: #EEE; intensity: 0.7;'></a-entity> </a-entity>"
    },
    {
        "id": 10,
        "locationSet": 4,
        "latitude": 52.3629401,
        "longitude": 6.4728974,
        "viewingDistance": 50,
        "html": "<a-entity correct-answer location-id='10' look-at='[camera]' gps-new-entity-place='latitude: 52.3629401; longitude: 6.4728974' > <a-entity position='0 0 -3000' rotation='21.139635935982472148 -23.895622466628093861 -2.7799776773372570915' obj-model='obj: url(data/models/spaceship_03/MK6_OBJ.obj); mtl: url(data/models/spaceship_03/MK6_OBJ.mtl)' ></a-entity> <a-entity light='type: ambient; color: #EEE; intensity: 1;'></a-entity> </a-entity>"
    },
    {
        "id": 11,
        "locationSet": 4,
        "latitude": 52.3615158,
        "longitude": 6.4760546,
        "viewingDistance": 50,
        "html": "<a-entity location-id='11' gps-new-entity-place='latitude: 52.3615158; longitude: 6.4760546' look-at='[camera]'> <a-entity text-geometry=' value: 404 Not Found; size: 2; font: data/fonts/Orbitron_ExtraBold.typeface.json; height: 1; bevelEnabled: true; bevelSize: 0.1; bevelThickness: 0.1 ' material='color: #c40000' ></a-entity> <a-entity light='type: ambient; color: #EEE; intensity: 0.7;'></a-entity> </a-entity>"
    },
    {
        "id": 12,
        "locationSet": 4,
        "latitude": 52.3595365,
        "longitude": 6.4777336,
        "viewingDistance": 50,
        "html": "<a-entity location-id='12' gps-new-entity-place='latitude: 52.3595365; longitude: 6.4777336' look-at='[camera]'> <a-entity text-geometry=' value: Wrong Location; size: 2; font: data/fonts/Orbitron_ExtraBold.typeface.json; height: 1; bevelEnabled: true; bevelSize: 0.1; bevelThickness: 0.1 ' material='color: #c40000' ></a-entity> <a-entity light='type: ambient; color: #EEE; intensity: 0.7;'></a-entity> </a-entity>"
    },
    {
        "id": 13,
        "locationSet": 5,
        "latitude": 52.3562937,
        "longitude": 6.4860247,
        "viewingDistance": 50,
        "html": "<a-entity correct-answer location-id='13' look-at='[camera]' gps-new-entity-place='latitude: 52.3562937; longitude: 6.4860247' > <a-entity position='0 0 -50' rotation='21.139635935982472148 -23.895622466628093861 -2.7799776773372570915' obj-model='obj: url(data/models/spaceship_02/StarShip2.obj); mtl: url(data/models/spaceship_02/StarShip2.red.mtl)' ></a-entity> <a-entity light='type: ambient; color: #EEE; intensity: 1;'></a-entity> </a-entity>"
    },
    {
        "id": 14,
        "locationSet": 5,
        "latitude": 52.3548325,
        "longitude": 6.4820024,
        "viewingDistance": 50,
        "html": "<a-entity location-id='14' gps-new-entity-place='latitude: 52.3548325; longitude: 6.4820024' look-at='[camera]'> <a-entity text-geometry=' value: 404 Not Found; size: 2; font: data/fonts/Orbitron_ExtraBold.typeface.json; height: 1; bevelEnabled: true; bevelSize: 0.1; bevelThickness: 0.1 ' material='color: #c40000' ></a-entity> <a-entity light='type: ambient; color: #EEE; intensity: 0.7;'></a-entity> </a-entity>"
    },
    {
        "id": 15,
        "locationSet": 5,
        "latitude": 52.3547515,
        "longitude": 6.4887096,
        "viewingDistance": 50,
        "html": "<a-entity location-id='15' gps-new-entity-place='latitude: 52.3547515; longitude: 6.4887096' look-at='[camera]'> <a-entity text-geometry=' value: Wrong Location; size: 2; font: data/fonts/Orbitron_ExtraBold.typeface.json; height: 1; bevelEnabled: true; bevelSize: 0.1; bevelThickness: 0.1 ' material='color: #c40000' ></a-entity> <a-entity light='type: ambient; color: #EEE; intensity: 0.7;'></a-entity> </a-entity>"
    },
    {
        "id": 16,
        "locationSet": 6,
        "latitude": 52.3517786,
        "longitude": 6.4629117,
        "viewingDistance": 50,
        "html": "<a-entity correct-answer location-id='16' look-at='[camera]' gps-new-entity-place='latitude: 52.3517786; longitude: 6.4629117' > <a-entity position='0 0 -50' rotation='21.139635935982472148 -23.895622466628093861 -2.7799776773372570915' obj-model='obj: url(data/models/spaceship_02/StarShip2.obj); mtl: url(data/models/spaceship_02/StarShip2.mtl)' ></a-entity> <a-entity light='type: ambient; color: #EEE; intensity: 1;'></a-entity> </a-entity>"
    },
    {
        "id": 17,
        "locationSet": 6,
        "latitude": 52.3555361,
        "longitude": 6.4577059,
        "viewingDistance": 50,
        "html": "<a-entity location-id='17' gps-new-entity-place='latitude: 52.3555361; longitude: 6.4577059' look-at='[camera]'> <a-entity text-geometry=' value: 404 Not Found; size: 2; font: data/fonts/Orbitron_ExtraBold.typeface.json; height: 1; bevelEnabled: true; bevelSize: 0.1; bevelThickness: 0.1 ' material='color: #c40000' ></a-entity> <a-entity light='type: ambient; color: #EEE; intensity: 0.7;'></a-entity> </a-entity>"
    },
    {
        "id": 18,
        "locationSet": 6,
        "latitude": 52.3556029,
        "longitude": 6.4643524,
        "viewingDistance": 50,
        "html": "<a-entity location-id='18' gps-new-entity-place='latitude: 52.3556029; longitude: 6.4643524' look-at='[camera]'> <a-entity text-geometry=' value: Wrong Location; size: 2; font: data/fonts/Orbitron_ExtraBold.typeface.json; height: 1; bevelEnabled: true; bevelSize: 0.1; bevelThickness: 0.1 ' material='color: #c40000' ></a-entity> <a-entity light='type: ambient; color: #EEE; intensity: 0.7;'></a-entity> </a-entity>"
    },
    {
        "id": 19,
        "locationSet": 7,
        "latitude": 52.351455,
        "longitude": 6.4771444,
        "viewingDistance": 50,
        "html": "<a-entity correct-answer location-id='19' look-at='[camera]' gps-new-entity-place='latitude: 52.351455; longitude: 6.4771444' > <a-entity position='0 0 -3000' rotation='21.139635935982472148 -23.895622466628093861 -2.7799776773372570915' obj-model='obj: url(data/models/spaceship_01/SciFi_Fighter_AK5.obj); mtl: url(data/models/spaceship_01/SciFi_Fighter_AK5.mtl)' ></a-entity> <a-entity light='type: ambient; color: #EEE; intensity: 1;'></a-entity> </a-entity>"
    },
    {
        "id": 20,
        "locationSet": 7,
        "latitude": 52.3545261,
        "longitude": 6.4680535,
        "viewingDistance": 50,
        "html": "<a-entity location-id='20' gps-new-entity-place='latitude: 52.3545261; longitude: 6.4680535' look-at='[camera]'> <a-entity text-geometry=' value: 404 Not Found; size: 2; font: data/fonts/Orbitron_ExtraBold.typeface.json; height: 1; bevelEnabled: true; bevelSize: 0.1; bevelThickness: 0.1 ' material='color: #c40000' ></a-entity> <a-entity light='type: ambient; color: #EEE; intensity: 0.7;'></a-entity> </a-entity>"
    },
    {
        "id": 21,
        "locationSet": 7,
        "latitude": 52.3575263,
        "longitude": 6.4766239,
        "viewingDistance": 50,
        "html": "<a-entity location-id='21' gps-new-entity-place='latitude: 52.3575263; longitude: 6.4766239' look-at='[camera]'> <a-entity text-geometry=' value: Wrong Location; size: 2; font: data/fonts/Orbitron_ExtraBold.typeface.json; height: 1; bevelEnabled: true; bevelSize: 0.1; bevelThickness: 0.1 ' material='color: #c40000' ></a-entity> <a-entity light='type: ambient; color: #EEE; intensity: 0.7;'></a-entity> </a-entity>"
    },
    {
        "id": 22,
        "locationSet": 8,
        "latitude": 52.360255,
        "longitude": 6.4599736,
        "viewingDistance": 50,
        "html": "<a-entity correct-answer location-id='22' look-at='[camera]' gps-new-entity-place='latitude: 52.360255; longitude: 6.4599736' > <a-entity position='0 0 -50' rotation='21.139635935982472148 -23.895622466628093861 -2.7799776773372570915' obj-model='obj: url(data/models/spaceship_02/StarShip2.obj); mtl: url(data/models/spaceship_02/StarShip2.blue.mtl)' ></a-entity> <a-entity light='type: ambient; color: #EEE; intensity: 1;'></a-entity> </a-entity>"
    },
    {
        "id": 23,
        "locationSet": 8,
        "latitude": 52.3627839,
        "longitude": 6.4637684,
        "viewingDistance": 50,
        "html": "<a-entity location-id='23' gps-new-entity-place='latitude: 52.3627839; longitude: 6.4637684' look-at='[camera]'> <a-entity text-geometry=' value: 404 Not Found; size: 2; font: data/fonts/Orbitron_ExtraBold.typeface.json; height: 1; bevelEnabled: true; bevelSize: 0.1; bevelThickness: 0.1 ' material='color: #c40000' ></a-entity> <a-entity light='type: ambient; color: #EEE; intensity: 0.7;'></a-entity> </a-entity>"
    },
    {
        "id": 24,
        "locationSet": 8,
        "latitude": 52.3601543,
        "longitude": 6.4648856,
        "viewingDistance": 50,
        "html": "<a-entity location-id='24' gps-new-entity-place='latitude: 52.3601543; longitude: 6.4648856' look-at='[camera]'> <a-entity text-geometry=' value: Wrong Location; size: 2; font: data/fonts/Orbitron_ExtraBold.typeface.json; height: 1; bevelEnabled: true; bevelSize: 0.1; bevelThickness: 0.1 ' material='color: #c40000' ></a-entity> <a-entity light='type: ambient; color: #EEE; intensity: 0.7;'></a-entity> </a-entity>"
    },
    {
        "id": 25,
        "locationSet": 9,
        "latitude": 52.3631468,
        "longitude": 6.4535864,
        "viewingDistance": 50,
        "html": "<a-entity correct-answer location-id='25' look-at='[camera]' gps-new-entity-place='latitude: 52.3631468; longitude: 6.4535864' > <a-entity position='0 0 -3000' rotation='21.139635935982472148 -23.895622466628093861 -2.7799776773372570915' obj-model='obj: url(data/models/spaceship_03/MK6_OBJ.obj); mtl: url(data/models/spaceship_03/MK6_OBJ.mtl)' ></a-entity> <a-entity light='type: ambient; color: #EEE; intensity: 1;'></a-entity> </a-entity>"
    },
    {
        "id": 26,
        "locationSet": 9,
        "latitude": 52.3605927,
        "longitude": 6.4567102,
        "viewingDistance": 50,
        "html": "<a-entity location-id='26' gps-new-entity-place='latitude: 52.3605927; longitude: 6.4567102' look-at='[camera]'> <a-entity text-geometry=' value: 404 Not Found; size: 2; font: data/fonts/Orbitron_ExtraBold.typeface.json; height: 1; bevelEnabled: true; bevelSize: 0.1; bevelThickness: 0.1 ' material='color: #c40000' ></a-entity> <a-entity light='type: ambient; color: #EEE; intensity: 0.7;'></a-entity> </a-entity>"
    },
    {
        "id": 27,
        "locationSet": 9,
        "latitude": 52.3579821,
        "longitude": 6.4547809,
        "viewingDistance": 50,
        "html": "<a-entity location-id='27' gps-new-entity-place='latitude: 52.3579821; longitude: 6.4547809' look-at='[camera]'> <a-entity text-geometry=' value: Wrong Location; size: 2; font: data/fonts/Orbitron_ExtraBold.typeface.json; height: 1; bevelEnabled: true; bevelSize: 0.1; bevelThickness: 0.1 ' material='color: #c40000' ></a-entity> <a-entity light='type: ambient; color: #EEE; intensity: 0.7;'></a-entity> </a-entity>"
    },
    {
        "id": 28,
        "locationSet": 10,
        "latitude": 52.3543093,
        "longitude": 6.4729217,
        "viewingDistance": 50,
        "html": "<a-entity correct-answer location-id='28' look-at='[camera]' gps-new-entity-place='latitude: 52.3543093; longitude: 6.4729217' > <a-entity position='0 0 -50' rotation='21.139635935982472148 -23.895622466628093861 -2.7799776773372570915' obj-model='obj: url(data/models/spaceship_02/StarShip2.obj); mtl: url(data/models/spaceship_02/StarShip2.red.mtl)' ></a-entity> <a-entity light='type: ambient; color: #EEE; intensity: 1;'></a-entity> </a-entity>"
    },
    {
        "id": 29,
        "locationSet": 10,
        "latitude": 52.3534227,
        "longitude": 6.4688455,
        "viewingDistance": 50,
        "html": "<a-entity location-id='29' gps-new-entity-place='latitude: 52.3534227; longitude: 6.4688455' look-at='[camera]'> <a-entity text-geometry=' value: 404 Not Found; size: 2; font: data/fonts/Orbitron_ExtraBold.typeface.json; height: 1; bevelEnabled: true; bevelSize: 0.1; bevelThickness: 0.1 ' material='color: #c40000' ></a-entity> <a-entity light='type: ambient; color: #EEE; intensity: 0.7;'></a-entity> </a-entity>"
    },
    {
        "id": 30,
        "locationSet": 10,
        "latitude": 52.351328,
        "longitude": 6.4752997,
        "viewingDistance": 50,
        "html": "<a-entity location-id='30' gps-new-entity-place='latitude: 52.351328; longitude: 6.4752997' look-at='[camera]'> <a-entity text-geometry=' value: Wrong Location; size: 2; font: data/fonts/Orbitron_ExtraBold.typeface.json; height: 1; bevelEnabled: true; bevelSize: 0.1; bevelThickness: 0.1 ' material='color: #c40000' ></a-entity> <a-entity light='type: ambient; color: #EEE; intensity: 0.7;'></a-entity> </a-entity>"
    },
    {
        "id": 31,
        "locationSet": 11,
        "latitude": 52.3534049,
        "longitude": 6.4857771,
        "viewingDistance": 50,
        "html": "<a-entity correct-answer location-id='31' look-at='[camera]' gps-new-entity-place='latitude: 52.3534049; longitude: 6.4857771' > <a-entity position='0 0 -50' rotation='21.139635935982472148 -23.895622466628093861 -2.7799776773372570915' obj-model='obj: url(data/models/spaceship_02/StarShip2.obj); mtl: url(data/models/spaceship_02/StarShip2.mtl)' ></a-entity> <a-entity light='type: ambient; color: #EEE; intensity: 1;'></a-entity> </a-entity>"
    },
    {
        "id": 32,
        "locationSet": 11,
        "latitude": 52.3554961,
        "longitude": 6.4837438,
        "viewingDistance": 50,
        "html": "<a-entity location-id='32' gps-new-entity-place='latitude: 52.3554961; longitude: 6.4837438' look-at='[camera]'> <a-entity text-geometry=' value: 404 Not Found; size: 2; font: data/fonts/Orbitron_ExtraBold.typeface.json; height: 1; bevelEnabled: true; bevelSize: 0.1; bevelThickness: 0.1 ' material='color: #c40000' ></a-entity> <a-entity light='type: ambient; color: #EEE; intensity: 0.7;'></a-entity> </a-entity>"
    },
    {
        "id": 33,
        "locationSet": 11,
        "latitude": 52.3558975,
        "longitude": 6.4882328,
        "viewingDistance": 50,
        "html": "<a-entity location-id='33' gps-new-entity-place='latitude: 52.3558975; longitude: 6.4882328' look-at='[camera]'> <a-entity text-geometry=' value: Wrong Location; size: 2; font: data/fonts/Orbitron_ExtraBold.typeface.json; height: 1; bevelEnabled: true; bevelSize: 0.1; bevelThickness: 0.1 ' material='color: #c40000' ></a-entity> <a-entity light='type: ambient; color: #EEE; intensity: 0.7;'></a-entity> </a-entity>"
    },
    {
        "id": 34,
        "locationSet": 12,
        "latitude": 52.3626431,
        "longitude": 6.462808,
        "viewingDistance": 50,
        "html": "<a-entity correct-answer location-id='34' look-at='[camera]' gps-new-entity-place='latitude: 52.3626431; longitude: 6.462808' > <a-entity position='0 0 -3000' rotation='21.139635935982472148 -23.895622466628093861 -2.7799776773372570915' obj-model='obj: url(data/models/spaceship_01/SciFi_Fighter_AK5.obj); mtl: url(data/models/spaceship_01/SciFi_Fighter_AK5.mtl)' ></a-entity> <a-entity light='type: ambient; color: #EEE; intensity: 1;'></a-entity> </a-entity>"
    },
    {
        "id": 35,
        "locationSet": 12,
        "latitude": 52.3645808,
        "longitude": 6.4640778,
        "viewingDistance": 50,
        "html": "<a-entity location-id='35' gps-new-entity-place='latitude: 52.3645808; longitude: 6.4640778' look-at='[camera]'> <a-entity text-geometry=' value: 404 Not Found; size: 2; font: data/fonts/Orbitron_ExtraBold.typeface.json; height: 1; bevelEnabled: true; bevelSize: 0.1; bevelThickness: 0.1 ' material='color: #c40000' ></a-entity> <a-entity light='type: ambient; color: #EEE; intensity: 0.7;'></a-entity> </a-entity>"
    },
    {
        "id": 36,
        "locationSet": 12,
        "latitude": 52.3633049,
        "longitude": 6.4679233,
        "viewingDistance": 50,
        "html": "<a-entity location-id='36' gps-new-entity-place='latitude: 52.3633049; longitude: 6.4679233' look-at='[camera]'> <a-entity text-geometry=' value: Wrong Location; size: 2; font: data/fonts/Orbitron_ExtraBold.typeface.json; height: 1; bevelEnabled: true; bevelSize: 0.1; bevelThickness: 0.1 ' material='color: #c40000' ></a-entity> <a-entity light='type: ambient; color: #EEE; intensity: 0.7;'></a-entity> </a-entity>"
    },
    {
        "id": 37,
        "locationSet": 13,
        "latitude": 52.3562328,
        "longitude": 6.4677359,
        "viewingDistance": 50,
        "html": "<a-entity correct-answer location-id='37' look-at='[camera]' gps-new-entity-place='latitude: 52.3562328; longitude: 6.4677359' > <a-entity position='0 0 -50' rotation='21.139635935982472148 -23.895622466628093861 -2.7799776773372570915' obj-model='obj: url(data/models/spaceship_02/StarShip2.obj); mtl: url(data/models/spaceship_02/StarShip2.blue.mtl)' ></a-entity> <a-entity light='type: ambient; color: #EEE; intensity: 1;'></a-entity> </a-entity>"
    },
    {
        "id": 38,
        "locationSet": 13,
        "latitude": 52.3583928,
        "longitude": 6.4690982,
        "viewingDistance": 50,
        "html": "<a-entity location-id='38' gps-new-entity-place='latitude: 52.3583928; longitude: 6.4690982' look-at='[camera]'> <a-entity text-geometry=' value: 404 Not Found; size: 2; font: data/fonts/Orbitron_ExtraBold.typeface.json; height: 1; bevelEnabled: true; bevelSize: 0.1; bevelThickness: 0.1 ' material='color: #c40000' ></a-entity> <a-entity light='type: ambient; color: #EEE; intensity: 0.7;'></a-entity> </a-entity>"
    },
    {
        "id": 39,
        "locationSet": 13,
        "latitude": 52.3581364,
        "longitude": 6.4651879,
        "viewingDistance": 50,
        "html": "<a-entity location-id='39' gps-new-entity-place='latitude: 52.3581364; longitude: 6.4651879' look-at='[camera]'> <a-entity text-geometry=' value: Wrong Location; size: 2; font: data/fonts/Orbitron_ExtraBold.typeface.json; height: 1; bevelEnabled: true; bevelSize: 0.1; bevelThickness: 0.1 ' material='color: #c40000' ></a-entity> <a-entity light='type: ambient; color: #EEE; intensity: 0.7;'></a-entity> </a-entity>"
    },
    {
        "id": 40,
        "locationSet": 14,
        "latitude": 52.3608945,
        "longitude": 6.4782477,
        "viewingDistance": 50,
        "html": "<a-entity correct-answer location-id='40' look-at='[camera]' gps-new-entity-place='latitude: 52.3608945; longitude: 6.4782477' > <a-entity position='0 0 -3000' rotation='21.139635935982472148 -23.895622466628093861 -2.7799776773372570915' obj-model='obj: url(data/models/spaceship_03/MK6_OBJ.obj); mtl: url(data/models/spaceship_03/MK6_OBJ.mtl)' ></a-entity> <a-entity light='type: ambient; color: #EEE; intensity: 1;'></a-entity> </a-entity>"
    },
    {
        "id": 41,
        "locationSet": 14,
        "latitude": 52.362045,
        "longitude": 6.4737324,
        "viewingDistance": 50,
        "html": "<a-entity location-id='41' gps-new-entity-place='latitude: 52.362045; longitude: 6.4737324' look-at='[camera]'> <a-entity text-geometry=' value: 404 Not Found; size: 2; font: data/fonts/Orbitron_ExtraBold.typeface.json; height: 1; bevelEnabled: true; bevelSize: 0.1; bevelThickness: 0.1 ' material='color: #c40000' ></a-entity> <a-entity light='type: ambient; color: #EEE; intensity: 0.7;'></a-entity> </a-entity>"
    },
    {
        "id": 42,
        "locationSet": 14,
        "latitude": 52.3601889,
        "longitude": 6.4751648,
        "viewingDistance": 50,
        "html": "<a-entity location-id='42' gps-new-entity-place='latitude: 52.3601889; longitude: 6.4751648' look-at='[camera]'> <a-entity text-geometry=' value: Wrong Location; size: 2; font: data/fonts/Orbitron_ExtraBold.typeface.json; height: 1; bevelEnabled: true; bevelSize: 0.1; bevelThickness: 0.1 ' material='color: #c40000' ></a-entity> <a-entity light='type: ambient; color: #EEE; intensity: 0.7;'></a-entity> </a-entity>"
    },
    {
        "id": 43,
        "locationSet": 15,
        "latitude": 52.3543447,
        "longitude": 6.461996,
        "viewingDistance": 50,
        "html": "<a-entity correct-answer location-id='43' look-at='[camera]' gps-new-entity-place='latitude: 52.3543447; longitude: 6.461996' > <a-entity position='0 0 -50' rotation='21.139635935982472148 -23.895622466628093861 -2.7799776773372570915' obj-model='obj: url(data/models/spaceship_02/StarShip2.obj); mtl: url(data/models/spaceship_02/StarShip2.red.mtl)' ></a-entity> <a-entity light='type: ambient; color: #EEE; intensity: 1;'></a-entity> </a-entity>"
    },
    {
        "id": 44,
        "locationSet": 15,
        "latitude": 52.3536574,
        "longitude": 6.4579134,
        "viewingDistance": 50,
        "html": "<a-entity location-id='44' gps-new-entity-place='latitude: 52.3536574; longitude: 6.4579134' look-at='[camera]'> <a-entity text-geometry=' value: 404 Not Found; size: 2; font: data/fonts/Orbitron_ExtraBold.typeface.json; height: 1; bevelEnabled: true; bevelSize: 0.1; bevelThickness: 0.1 ' material='color: #c40000' ></a-entity> <a-entity light='type: ambient; color: #EEE; intensity: 0.7;'></a-entity> </a-entity>"
    },
    {
        "id": 45,
        "locationSet": 15,
        "latitude": 52.3520354,
        "longitude": 6.4647359,
        "viewingDistance": 50,
        "html": "<a-entity location-id='45' gps-new-entity-place='latitude: 52.3520354; longitude: 6.4647359' look-at='[camera]'> <a-entity text-geometry=' value: Wrong Location; size: 2; font: data/fonts/Orbitron_ExtraBold.typeface.json; height: 1; bevelEnabled: true; bevelSize: 0.1; bevelThickness: 0.1 ' material='color: #c40000' ></a-entity> <a-entity light='type: ambient; color: #EEE; intensity: 0.7;'></a-entity> </a-entity>"
    },
    {
        "id": 46,
        "locationSet": 16,
        "latitude": 52.3588811,
        "longitude": 6.4554383,
        "viewingDistance": 50,
        "html": "<a-entity correct-answer location-id='46' look-at='[camera]' gps-new-entity-place='latitude: 52.3588811; longitude: 6.4554383' > <a-entity position='0 0 -50' rotation='21.139635935982472148 -23.895622466628093861 -2.7799776773372570915' obj-model='obj: url(data/models/spaceship_02/StarShip2.obj); mtl: url(data/models/spaceship_02/StarShip2.mtl)' ></a-entity> <a-entity light='type: ambient; color: #EEE; intensity: 1;'></a-entity> </a-entity>"
    },
    {
        "id": 47,
        "locationSet": 16,
        "latitude": 52.3608146,
        "longitude": 6.4524452,
        "viewingDistance": 50,
        "html": "<a-entity location-id='47' gps-new-entity-place='latitude: 52.3608146; longitude: 6.4524452' look-at='[camera]'> <a-entity text-geometry=' value: 404 Not Found; size: 2; font: data/fonts/Orbitron_ExtraBold.typeface.json; height: 1; bevelEnabled: true; bevelSize: 0.1; bevelThickness: 0.1 ' material='color: #c40000' ></a-entity> <a-entity light='type: ambient; color: #EEE; intensity: 0.7;'></a-entity> </a-entity>"
    },
    {
        "id": 48,
        "locationSet": 16,
        "latitude": 52.3580182,
        "longitude": 6.459349,
        "viewingDistance": 50,
        "html": "<a-entity location-id='48' gps-new-entity-place='latitude: 52.3580182; longitude: 6.459349' look-at='[camera]'> <a-entity text-geometry=' value: Wrong Location; size: 2; font: data/fonts/Orbitron_ExtraBold.typeface.json; height: 1; bevelEnabled: true; bevelSize: 0.1; bevelThickness: 0.1 ' material='color: #c40000' ></a-entity> <a-entity light='type: ambient; color: #EEE; intensity: 0.7;'></a-entity> </a-entity>"
    },
    {
        "id": 49,
        "locationSet": 17,
        "latitude": 52.3540749,
        "longitude": 6.4830987,
        "viewingDistance": 50,
        "html": "<a-entity correct-answer location-id='49' look-at='[camera]' gps-new-entity-place='latitude: 52.3540749; longitude: 6.4830987' > <a-entity position='0 0 -3000' rotation='21.139635935982472148 -23.895622466628093861 -2.7799776773372570915' obj-model='obj: url(data/models/spaceship_01/SciFi_Fighter_AK5.obj); mtl: url(data/models/spaceship_01/SciFi_Fighter_AK5.mtl)' ></a-entity> <a-entity light='type: ambient; color: #EEE; intensity: 1;'></a-entity> </a-entity>"
    },
    {
        "id": 50,
        "locationSet": 17,
        "latitude": 52.3560696,
        "longitude": 6.4842744,
        "viewingDistance": 50,
        "html": "<a-entity location-id='50' gps-new-entity-place='latitude: 52.3560696; longitude: 6.4842744' look-at='[camera]'> <a-entity text-geometry=' value: 404 Not Found; size: 2; font: data/fonts/Orbitron_ExtraBold.typeface.json; height: 1; bevelEnabled: true; bevelSize: 0.1; bevelThickness: 0.1 ' material='color: #c40000' ></a-entity> <a-entity light='type: ambient; color: #EEE; intensity: 0.7;'></a-entity> </a-entity>"
    },
    {
        "id": 51,
        "locationSet": 17,
        "latitude": 52.35455,
        "longitude": 6.4879332,
        "viewingDistance": 50,
        "html": "<a-entity location-id='51' gps-new-entity-place='latitude: 52.35455; longitude: 6.4879332' look-at='[camera]'> <a-entity text-geometry=' value: Wrong Location; size: 2; font: data/fonts/Orbitron_ExtraBold.typeface.json; height: 1; bevelEnabled: true; bevelSize: 0.1; bevelThickness: 0.1 ' material='color: #c40000' ></a-entity> <a-entity light='type: ambient; color: #EEE; intensity: 0.7;'></a-entity> </a-entity>"
    },
    {
        "id": 52,
        "locationSet": 18,
        "latitude": 52.3595416,
        "longitude": 6.4660818,
        "viewingDistance": 50,
        "html": "<a-entity correct-answer location-id='52' look-at='[camera]' gps-new-entity-place='latitude: 52.3595416; longitude: 6.4660818' > <a-entity position='0 0 -50' rotation='21.139635935982472148 -23.895622466628093861 -2.7799776773372570915' obj-model='obj: url(data/models/spaceship_02/StarShip2.obj); mtl: url(data/models/spaceship_02/StarShip2.blue.mtl)' ></a-entity> <a-entity light='type: ambient; color: #EEE; intensity: 1;'></a-entity> </a-entity>"
    },
    {
        "id": 53,
        "locationSet": 18,
        "latitude": 52.3611162,
        "longitude": 6.4640673,
        "viewingDistance": 50,
        "html": "<a-entity location-id='53' gps-new-entity-place='latitude: 52.3611162; longitude: 6.4640673' look-at='[camera]'> <a-entity text-geometry=' value: 404 Not Found; size: 2; font: data/fonts/Orbitron_ExtraBold.typeface.json; height: 1; bevelEnabled: true; bevelSize: 0.1; bevelThickness: 0.1 ' material='color: #c40000' ></a-entity> <a-entity light='type: ambient; color: #EEE; intensity: 0.7;'></a-entity> </a-entity>"
    },
    {
        "id": 54,
        "locationSet": 18,
        "latitude": 52.3620941,
        "longitude": 6.4674447,
        "viewingDistance": 50,
        "html": "<a-entity location-id='54' gps-new-entity-place='latitude: 52.3620941; longitude: 6.4674447' look-at='[camera]'> <a-entity text-geometry=' value: Wrong Location; size: 2; font: data/fonts/Orbitron_ExtraBold.typeface.json; height: 1; bevelEnabled: true; bevelSize: 0.1; bevelThickness: 0.1 ' material='color: #c40000' ></a-entity> <a-entity light='type: ambient; color: #EEE; intensity: 0.7;'></a-entity> </a-entity>"
    },
    {
        "id": 55,
        "locationSet": 19,
        "latitude": 52.3532977,
        "longitude": 6.4698744,
        "viewingDistance": 50,
        "html": "<a-entity correct-answer location-id='55' look-at='[camera]' gps-new-entity-place='latitude: 52.3532977; longitude: 6.4698744' > <a-entity position='0 0 -3000' rotation='21.139635935982472148 -23.895622466628093861 -2.7799776773372570915' obj-model='obj: url(data/models/spaceship_03/MK6_OBJ.obj); mtl: url(data/models/spaceship_03/MK6_OBJ.mtl)' ></a-entity> <a-entity light='type: ambient; color: #EEE; intensity: 1;'></a-entity> </a-entity>"
    },
    {
        "id": 56,
        "locationSet": 19,
        "latitude": 52.3554141,
        "longitude": 6.4736147,
        "viewingDistance": 50,
        "html": "<a-entity location-id='56' gps-new-entity-place='latitude: 52.3554141; longitude: 6.4736147' look-at='[camera]'> <a-entity text-geometry=' value: 404 Not Found; size: 2; font: data/fonts/Orbitron_ExtraBold.typeface.json; height: 1; bevelEnabled: true; bevelSize: 0.1; bevelThickness: 0.1 ' material='color: #c40000' ></a-entity> <a-entity light='type: ambient; color: #EEE; intensity: 0.7;'></a-entity> </a-entity>"
    },
    {
        "id": 57,
        "locationSet": 19,
        "latitude": 52.3518337,
        "longitude": 6.4742387,
        "viewingDistance": 50,
        "html": "<a-entity location-id='57' gps-new-entity-place='latitude: 52.3518337; longitude: 6.4742387' look-at='[camera]'> <a-entity text-geometry=' value: Wrong Location; size: 2; font: data/fonts/Orbitron_ExtraBold.typeface.json; height: 1; bevelEnabled: true; bevelSize: 0.1; bevelThickness: 0.1 ' material='color: #c40000' ></a-entity> <a-entity light='type: ambient; color: #EEE; intensity: 0.7;'></a-entity> </a-entity>"
    },
    {
        "id": 58,
        "locationSet": 20,
        "latitude": 52.3608174,
        "longitude": 6.4532124,
        "viewingDistance": 50,
        "html": "<a-entity correct-answer location-id='58' look-at='[camera]' gps-new-entity-place='latitude: 52.3608174; longitude: 6.4532124' > <a-entity position='0 0 -50' rotation='21.139635935982472148 -23.895622466628093861 -2.7799776773372570915' obj-model='obj: url(data/models/spaceship_02/StarShip2.obj); mtl: url(data/models/spaceship_02/StarShip2.red.mtl)' ></a-entity> <a-entity light='type: ambient; color: #EEE; intensity: 1;'></a-entity> </a-entity>"
    },
    {
        "id": 59,
        "locationSet": 20,
        "latitude": 52.3641857,
        "longitude": 6.4562954,
        "viewingDistance": 50,
        "html": "<a-entity location-id='59' gps-new-entity-place='latitude: 52.3641857; longitude: 6.4562954' look-at='[camera]'> <a-entity text-geometry=' value: 404 Not Found; size: 2; font: data/fonts/Orbitron_ExtraBold.typeface.json; height: 1; bevelEnabled: true; bevelSize: 0.1; bevelThickness: 0.1 ' material='color: #c40000' ></a-entity> <a-entity light='type: ambient; color: #EEE; intensity: 0.7;'></a-entity> </a-entity>"
    },
    {
        "id": 60,
        "locationSet": 20,
        "latitude": 52.3611773,
        "longitude": 6.4589333,
        "viewingDistance": 50,
        "html": "<a-entity location-id='60' gps-new-entity-place='latitude: 52.3611773; longitude: 6.4589333' look-at='[camera]'> <a-entity text-geometry=' value: Wrong Location; size: 2; font: data/fonts/Orbitron_ExtraBold.typeface.json; height: 1; bevelEnabled: true; bevelSize: 0.1; bevelThickness: 0.1 ' material='color: #c40000' ></a-entity> <a-entity light='type: ambient; color: #EEE; intensity: 0.7;'></a-entity> </a-entity>"
    }
];