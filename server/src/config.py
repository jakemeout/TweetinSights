"""Class-based Flask app configuration."""
from os import environ, path
from dotenv import load_dotenv

basedir = path.abspath(path.dirname(__file__))
load_dotenv(path.join(basedir, '.env'))

pg_db_username = environ.get('DB_DEV_USERNAME')
pg_db_password = environ.get('DB_DEV_PASSWORD')
pg_db_name = environ.get('DB_DEV_NAME')
pg_db_hostname = environ.get('DB_DEV_HOSTNAME')
pg_db_port = environ.get('DB_DEV_PORT')


class Config(object):
    """General configuration for environment variables."""

    DEBUG = False
    TESTING = False
    CSRF_ENABLED = True

    SQLALCHEMY_DATABASE_URI = f"postgresql://{pg_db_username}:{pg_db_password}@localhost:{pg_db_port}/{pg_db_name}"


class ProductionConfig(Config):
    """Production configuration for environment variables."""

    DB_USERNAME = environ.get('DEV_DATABASE_USERNAME')
    DB_USER_PASSWORD = environ.get('DEV_DATABASE_PASSWORD')
    SQLALCHEMY_DATABASE_URI = f"postgresql://{DB_USERNAME}:{DB_USER_PASSWORD}@{environ.get('PROD_DATABASE_URI')}"


class DeveloperConfig(Config):
    """Development configuration for environment variables."""

    DEBUG = True


app_config = {
    'development': DeveloperConfig,
    'production': ProductionConfig
}
