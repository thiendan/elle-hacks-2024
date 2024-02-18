from flask import Flask, request
from transcribe import transcribe_audio
from generateQuestions import generate_questions

app = Flask(__name__)

@app.route("/transcribe", methods=["POST"])
def index():
    if request.method == "POST":
        data = request.json
        if "audio" in data:
            return transcribe_audio(data["audio"])

    return "Error - Something went wrong."


@app.route("/generateQuestions", methods=["POST"])
def getQuestions():
    if request.method == "POST":
        data = request.json
        if "job_description" in data and "role" in "data":
            role = data["role"]
            job_description = data["job_description"]
            return generate_questions(role, job_description)

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8080)

# EOF
