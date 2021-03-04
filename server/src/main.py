from flask import Flask
from flask_restful import Resource, Api
from .models import db

import os

app = Flask(__name__, instance_relative_config=True)
api = Api(app)


class HelloWorld(Resource):
    def get(self):
        print(os.getenv("API_KEY"))
        return {"hello": "world"}


api.add_resource(HelloWorld, "/api/")

if __name__ == "__main__":
    app.run(debug=True)
