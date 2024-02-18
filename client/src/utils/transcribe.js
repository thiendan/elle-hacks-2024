import axios from "axios";

async function blobToBase64(blob) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
}

export const sendAudioToBeTranscribed = async (audio) => {

    try {
        const audioBlob = await blobToBase64(audio);
        const body = {
            "audio": audioBlob.split('base64,')[1]
        }

        console.log(body)
    
        axios.post("https://curly-space-spoon-7xgxqx6wj542rr4j-8080.app.github.dev/api/transcribe", body).then( response => {
            console.log(response.data)
        }).catch(err => {
            console.error("ERROR: ", err)
        })
        
    } catch (error) {
    console.error("Conversion to Base64 failed: ", error);
    }
};