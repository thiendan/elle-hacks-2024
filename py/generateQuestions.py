from openai import OpenAI
client = OpenAI()

def generate_questions(JOB_ROLE, JOB_DESCRIPTION):

    # making request to GPT
    response = client.chat.completions.create(
    model="gpt-4-turbo-preview",
    messages=[
        {"role": "system", "content": f"{JOB_ROLE}, please generate 10 questions to ask the interviewee. {JOB_DESCRIPTION}"}
    ]
    )

    # returning the GPT response
    return completion.choices[0].message.content
    