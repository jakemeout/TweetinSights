from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from functools import lru_cache
from api_v1.routes import router as api_router
from core import config


app = FastAPI()

# Get .env config and app name ( -- LRU-Fast-- )
@lru_cache()
def get_settings():
    return config.Settings()


# CORS
origins = [
    "http://localhost",
    "http://localhost:3001",
    "http://localhost:3000",
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(
    api_router,
)
