from os import environ, path
from dotenv import load_dotenv


class Config(object):
    DEBUG = False
    TESTING = False
    DATABASE_URI = "sqlite:///:memory:"
    API_KEY = os.environ.get("API_KEY")


class ProductionConfig(Config):
    DATABASE_URI = "mysql://user@localhost/foo"


class DevelopmentConfig(Config):
    DEBUG = True


class TestingConfig(Config):
    TESTING = True
