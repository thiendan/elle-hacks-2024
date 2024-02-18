from flask import Flask, request
from transcribe import transcribe_audio

app = Flask(__name__)

@app.route("/transcribe", methods=["POST"])
def index():
    if request.method == "POST":
        data = request.json
        transcribe_audio(data["audio"])

    return "Request has been received"

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8080)

# EOF
