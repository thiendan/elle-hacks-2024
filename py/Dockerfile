FROM python:3.12

WORKDIR /app

COPY . .
RUN pip install -r requirements.txt

EXPOSE 8080
ENTRYPOINT [ "python", "main.py" ]
# EOF