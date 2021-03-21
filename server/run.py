from os import environ
from dotenv import load_dotenv
from src.app import create_app

load_dotenv()

if __name__ == "__main__":
    env_name = environ.get("FLASK_ENV")
    app = create_app(env_name)
    app.run(debug=True)
