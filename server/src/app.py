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
            print(response["data"][0]["text"])
            ai_response = openai.Completion.create(
                engine="davinci",
                prompt=response["data"][0]["text"],
                temperature=0.3,
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
