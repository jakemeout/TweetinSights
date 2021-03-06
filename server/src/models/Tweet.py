import datetime
from . import db


class Tweet(db.Model):

    __tablename__ = "tweets"

    id = db.Column(db.BigInteger, primary_key=True)
    twitter_id = db.Column(db.BigInteger, nullable=False)
    text = db.Column(db.String(length=280))

    def __init__(self, data):
        self.twitter_id = data.get("tweet_id")
        self.text = data.get("text")
        self.created_at = datetime.datetime.now()
        self.modified_at = datetime.datetime.now()

    def save(self):
        db.session.add(self)
        db.session.commit()

    def update(self, data):
        for key, item in data.items():
            setattr(self, key, item)
        self.modified_at = datetime.datetime.now()
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()

    @staticmethod
    def get_all_tweets():
        return Tweet.query.all()

    @staticmethod
    def get_one_tweet(id):
        return Tweet.query.get(id)

    def __repr__(self):
        return f"<id {self.id} {self.tweet_id} {self.text}>"
