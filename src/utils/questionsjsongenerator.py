import json
from types import SimpleNamespace
import random

custom_questions = []

for i in range(20):
    correct_answer = random.randrange(3)
    
    correct_location = i*3 + 1
    
    incorrect_locations = [
        i*3 + 2,
        i*3 + 3
    ]
    
    answers = []    
    for j in range(3):
        answer_location = correct_location if j == correct_answer else incorrect_locations.pop(0)
        answer_text = "Goed" if j == correct_answer else "Fout"
        answers.append(
            SimpleNamespace(
                text = answer_text,
                correct = j == correct_answer,
                locationId = answer_location
            )
        )
    
    custom_questions.append(
        SimpleNamespace(
            id=i+1,
            text="Question"+str(i+1),
            answers=answers
        )
    )

json_questions = json.dumps(custom_questions, default=lambda o: o.__dict__, indent = 4)

with open("questions.json", 'w') as f:
    f.write(json_questions)
print("JSON question written to questions.json")