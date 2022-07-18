from flask import Blueprint, jsonify
from app.models import Product
from flask_login import login_required

# import simplejson as json

review_routes = Blueprint('reviews', __name__)

@review_routes.route('/<int:id>')
@login_required
