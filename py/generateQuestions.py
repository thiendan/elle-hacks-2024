from openai import OpenAI
client = OpenAI()

def generate_questions(JOB_ROLE, JOB_DESCRIPTION):

    # making request to GPT
    response = client.chat.completions.create(
        model="gpt-4-turbo-preview",
        messages=[
            {
                "role": "system",
                "content": "You are a helpful assistant to a hiring manager designed to help generate questions based on job descriptions and to evaluate the responses to those questions."
            },
            {
                "role": "User", 
                "content": f"I'm hiring for the role of a {JOB_ROLE}, please generate 10 questions based on the following job description. {JOB_DESCRIPTION}"
            }
        ]
    )
    
    return response.choices[0].message.content
    