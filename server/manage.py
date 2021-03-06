import os
from dotenv import load_dotenv
from flask_migrate import Migrate, MigrateCommand
from flask_script import Manager
from src.main import create_app, db


load_dotenv()

env_name = os.getenv("FLASK_ENV")
app = create_app(env_name)
migrate = Migrate(app=app, db=db)
manager = Manager(app=app)
manager.add_command("db", MigrateCommand)
if __name__ == "__main__":
    manager.run()
