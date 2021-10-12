import secrets
from typing import Optional, Dict, Any
from pydantic import BaseSettings, PostgresDsn, validator


class Settings(BaseSettings):
    PROJECT_NAME: str = "cx_analytics_tool"
    API_V1_STR: str = "/api/v1"
    SECRET_KEY: str = "pbkdf2_sha256"
    ALGORITHM: str = "HS256"

    # 15 minutes
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 15
    # 2 days
    REFRESH_TOKEN_EXPIRE_MINUTES: int = 2880

    # OpenAI
    OPENAI_API_KEY: str

    # POSTGRES CONFIG
    POSTGRES_SERVER: str
    POSTGRES_USER: str
    POSTGRES_PASSWORD: str
    POSTGRES_DB: str
    POSTGRES_PORT: str
    SQLALCHEMY_PG_DATABASE_URI: Optional[PostgresDsn] = None

    @validator("SQLALCHEMY_DATABASE_URI", pre=True)
    def assemble_db_connection(cls, v: Optional[str], values: Dict[str, Any]) -> Any:
        if isinstance(v, str):
            return v
        return PostgresDsn.build(
            scheme="postgresql",
            user=values.get("POSTGRES_USER"),
            password=values.get("POSTGRES_PASSWORD"),
            host=values.get("POSTGRES_SERVER"),
            port=values.get("POSTGRES_PORT"),
            path=f"/{values.get('POSTGRES_DB') or ''}",
        )

class Config:
    case_sensitive = True
    env_file = ".env"
    env_file_encoding = "utf-8"


settings = Settings()
