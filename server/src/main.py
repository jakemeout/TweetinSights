from flask import Flask
from flask_restful import Resource, Api
from flask_migrate import Migrate
from .config import main_config
from .models import db


def create_app(env_name):
    app = Flask(__name__)
    app.config.from_object(main_config[env_name])
    api = Api(app)
    db.init_app(app)

    class HelloWorld(Resource):
        def get(self):
            return {"hello": "world"}

    api.add_resource(HelloWorld, "/api/")

    return app
