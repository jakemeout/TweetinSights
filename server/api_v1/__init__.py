from fastapi import APIRouter

from api_v1.routes.tweets import router as tweets
from api_v1.routes.twitter_typeahead import router as twitter_typeahead
router = APIRouter()
router.include_router(tweets, tags=["tweets"])
router.include_router(twitter_typeahead, tags=["twitter_typeahead"])
