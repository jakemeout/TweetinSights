from flask import Flask, request
from flask.json import jsonify
from dotenv import load_dotenv
from os import environ
from flask_cors import CORS
from flask_restful import Resource, Api
from .config import main_config
from flask_sqlalchemy import SQLAlchemy
import requests
import openai

openai.api_key = environ["OPENAI_API_KEY"]


def create_app(env_name):
    app = Flask(__name__)
    app.config.from_object(main_config["development"])
    api = Api(app)
    cors = CORS(app, resources={r"/api/*": {"origins": "*"}})
    app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
    db = SQLAlchemy(app)
    db.init_app(app)

    load_dotenv()
    bearer_token = environ.get("BEARER")

    headers = {"Authorization": f"Bearer {bearer_token}"}

    class Root(Resource):
        def get(self):
            return {"hello": "world"}

    class Tweets(Resource):
        def post(self):
            print(request.json)
            username = request.json["username"]
            print(username)
            response = requests.get(
                f"https://api.twitter.com/2/tweets/search/recent?query=from:{username}",
                headers=headers,
            ).json()
            print(response)
            tweet = response["data"][0]["text"]
            print(tweet)
            warmup_prompt = "This is a tweet sentiment classifier\n\n\nTweet: \"I loved the new Batman movie!\"\nSentiment: Positive\n###\nTweet: \"I hate it when my phone battery dies.\"\nSentiment: Negative\n###\nTweet: \"My day has been 👍\"\nSentiment: Positive\n###\nTweet: \"This is the link to the article\"\nSentiment: Neutral\n###\n"
            ai_response = openai.Completion.create(
                engine="davinci",
                prompt=f"{warmup_prompt} Tweet:{tweet} Sentiment: ###",
                temperature=0,
                max_tokens=60,
                top_p=1.0,
                frequency_penalty=0.5,
                presence_penalty=0.0,
                stop=["###"],
            )

            print(ai_response)
            # return jsonify(response.json)

    api.add_resource(Root, "/api/")
    api.add_resource(Tweets, "/api/tweets")
    return app
