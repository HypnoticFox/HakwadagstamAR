import json
import argparse
from types import SimpleNamespace

parser=argparse.ArgumentParser(description="Generate JSON locations from GeoJSON file")
parser.add_argument("input_filepath",
                    help="Path to GeoJSON file")
parser.add_argument('-o', '--output_filepath', dest="output_filepath",
                    help="Path to output JSON file")

args=parser.parse_args()

bad_answer_html_list = [
    """
    <a-entity location-id='{location_id}' gps-new-entity-place='latitude: {latitude}; longitude: {longitude}' look-at='[camera]'>
        <a-entity
            text-geometry='
                value: 404 Not Found; 
                size: 2; 
                font: data/fonts/Orbitron_ExtraBold.typeface.json;
                height: 1; 
                bevelEnabled: true; 
                bevelSize: 0.1; 
                bevelThickness: 0.1
            '
            material='color: #c40000'
        ></a-entity>
        <a-entity light='type: ambient; color: #EEE; intensity: 0.7;'></a-entity>
    </a-entity>
    """,
    """
    <a-entity location-id='{location_id}' gps-new-entity-place='latitude: {latitude}; longitude: {longitude}' look-at='[camera]'>
        <a-entity
            text-geometry='
                value: Wrong Location; 
                size: 2; 
                font: data/fonts/Orbitron_ExtraBold.typeface.json;
                height: 1; 
                bevelEnabled: true; 
                bevelSize: 0.1; 
                bevelThickness: 0.1
            '
            material='color: #c40000'
        ></a-entity>
        <a-entity light='type: ambient; color: #EEE; intensity: 0.7;'></a-entity>
    </a-entity>
    """
]

good_answer_html_list = [
    """
    <a-entity correct-answer 
            location-id='{location_id}' 
            look-at='[camera]' 
            gps-new-entity-place='latitude: {latitude}; longitude: {longitude}'
        >
            <a-entity
                position='0 0 -50'
                rotation='21.139635935982472148 -23.895622466628093861 -2.7799776773372570915'
                obj-model='obj: url(data/models/spaceship_02/StarShip2.obj); mtl: url(data/models/spaceship_02/StarShip2.mtl)'
            ></a-entity>
            <a-entity light='type: ambient; color: #EEE; intensity: 1;'></a-entity>
        </a-entity>
    """,
    """
    <a-entity correct-answer 
            location-id='{location_id}' 
            look-at='[camera]' 
            gps-new-entity-place='latitude: {latitude}; longitude: {longitude}'
        >
        <a-entity
            position='0 0 -3000'
            rotation='21.139635935982472148 -23.895622466628093861 -2.7799776773372570915'
            obj-model='obj: url(data/models/spaceship_01/SciFi_Fighter_AK5.obj); mtl: url(data/models/spaceship_01/SciFi_Fighter_AK5.mtl)'
        ></a-entity>
        <a-entity light='type: ambient; color: #EEE; intensity: 1;'></a-entity>
    </a-entity>
    """,
    """
    <a-entity correct-answer 
            location-id='{location_id}' 
            look-at='[camera]' 
            gps-new-entity-place='latitude: {latitude}; longitude: {longitude}'
        >
            <a-entity
                position='0 0 -50'
                rotation='21.139635935982472148 -23.895622466628093861 -2.7799776773372570915'
                obj-model='obj: url(data/models/spaceship_02/StarShip2.obj); mtl: url(data/models/spaceship_02/StarShip2.blue.mtl)'
            ></a-entity>
            <a-entity light='type: ambient; color: #EEE; intensity: 1;'></a-entity>
        </a-entity>
    """,
    """
    <a-entity correct-answer 
            location-id='{location_id}' 
            look-at='[camera]'
            gps-new-entity-place='latitude: {latitude}; longitude: {longitude}'
        >
            <a-entity
                position='0 0 -3000'
                rotation='21.139635935982472148 -23.895622466628093861 -2.7799776773372570915'
                obj-model='obj: url(data/models/spaceship_03/MK6_OBJ.obj); mtl: url(data/models/spaceship_03/MK6_OBJ.mtl)'
            ></a-entity>
            <a-entity light='type: ambient; color: #EEE; intensity: 1;'></a-entity>
        </a-entity>
    """,
    """
    <a-entity correct-answer 
            location-id='{location_id}' 
            look-at='[camera]' 
            gps-new-entity-place='latitude: {latitude}; longitude: {longitude}'
        >
            <a-entity
                position='0 0 -50'
                rotation='21.139635935982472148 -23.895622466628093861 -2.7799776773372570915'
                obj-model='obj: url(data/models/spaceship_02/StarShip2.obj); mtl: url(data/models/spaceship_02/StarShip2.red.mtl)'
            ></a-entity>
            <a-entity light='type: ambient; color: #EEE; intensity: 1;'></a-entity>
        </a-entity>
    """
]

custom_locations = []

with open(args.input_filepath, 'r') as f:
    data = json.load(f)
    
    bad_answer_html_list_length = bad_answer_html_list.__len__()
    good_answer_html_list_length = good_answer_html_list.__len__()
    
    nBadAnswers = 0
    nGoodAnswers = 0
    
    for i in range(len(data["features"])):
        id = i + 1
        latitude = data["features"][i]["geometry"]["coordinates"][1]
        longitude = data["features"][i]["geometry"]["coordinates"][0]
        
        html = ""
        
        if(i % 3 == 0):
            html = good_answer_html_list[nGoodAnswers %  good_answer_html_list_length].format(location_id=id, latitude=latitude, longitude=longitude)
            nGoodAnswers += 1
        else:
            html = bad_answer_html_list[nBadAnswers % bad_answer_html_list_length].format(location_id=id, latitude=latitude, longitude=longitude)
            nBadAnswers += 1
            
        html = " ".join(html.split())
      
        custom_locations.append(
            SimpleNamespace(
                id=id,
                locationSet=int(data["features"][i]["properties"]["Name"].split()[1]),
                locationType="Question",
                latitude=latitude,
                longitude=longitude,
                viewingDistance=50,
                html=html
            )
        )
  
json_locations = json.dumps(custom_locations, default=lambda o: o.__dict__, indent = 4)

if args.output_filepath:
    with open(args.output_filepath, 'w') as f:
        f.write(json_locations)
    print("JSON locations written to", args.output_filepath)
else:
  print(json_locations)