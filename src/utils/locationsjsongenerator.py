import json
import argparse
from types import SimpleNamespace

parser=argparse.ArgumentParser(description="Generate JSON locations from GeoJSON file")
parser.add_argument("input_filepath",
                    help="Path to GeoJSON file")
parser.add_argument('-o', '--output_filepath', dest="output_filepath",
                    help="Path to output JSON file")

args=parser.parse_args()

answer_html_list = [
    "<a-entity correct-answer location-id='{location_id}' material='color: green' geometry='primitive: box' gps-new-entity-place='latitude: {latitude}; longitude: {longitude}' scale='10 10 10'></a-entity>",
    """
    <a-entity location-id='{location_id}' gps-new-entity-place='latitude: {latitude}; longitude: {longitude}' look-at='[camera]'>
        <a-entity
            text-geometry='value: 404 Not Found; size: 5; font: #OrbitronExtraBoldFont; height: 1; bevelEnabled: true; bevelSize: 0.1; bevelThickness: 0.1'
            material='color: #c40000'
            rotation='0 -45 0'
        ></a-entity>
    </a-entity>
    """,
    """
    <a-entity location-id='{location_id}' gps-new-entity-place='latitude: {latitude}; longitude: {longitude}' look-at='[camera]'>
        <a-entity
            text-geometry='value: Wrong Location; size: 5; font: #OrbitronExtraBoldFont; height: 1; bevelEnabled: true; bevelSize: 0.1; bevelThickness: 0.1'
            material='color: #c40000'
            rotation='0 -45 0'
        ></a-entity>
    </a-entity>
    """
]

custom_locations = []

with open(args.input_filepath, 'r') as f:
    data = json.load(f)
    
    for i in range(len(data["features"])):
        id = i + 1
        latitude = data["features"][i]["geometry"]["coordinates"][1]
        longitude = data["features"][i]["geometry"]["coordinates"][0]
        html = answer_html_list[i % 3].format(location_id=id, latitude=latitude, longitude=longitude)
      
        custom_locations.append(
            SimpleNamespace(
                id=id,
                locationSet=int(data["features"][i]["properties"]["Name"].split()[1]),
                latitude=latitude,
                longitude=longitude,
                viewingDistance=30,
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