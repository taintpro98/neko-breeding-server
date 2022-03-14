import redis
from flask import Flask
from flask_cors import CORS, cross_origin
from rq import Queue

app = Flask(__name__)
CORS(app)

r = redis.Redis.from_url("redis://redis:6379")

q = Queue(connection=r)

from src import views
from src import tasks