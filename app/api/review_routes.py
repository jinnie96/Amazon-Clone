from ast import Add
from flask import Blueprint, jsonify
from app.models import Review, User, db
from flask_login import login_required, current_user
from flask import request
from app.forms.review_form import AddReviewForm
from app.forms.edit_review_form import EditReviewForm
import json
# import simplejson as json

review_routes = Blueprint('reviews', __name__)

@review_routes.route('/<int:id>')
@login_required
def getReviews(id):
    reviews = Review.query.filter(Review.product_id == id).all()
    reviewsObj = {}
    reviewsArr = []
    for review in reviews:
        user = User.query.filter(User.id == review.reviewer_id).first()
        temp = {}
        temp['id'] = review.to_dict()['id']
        temp['reviewer_id'] = review.to_dict()['reviewer_id']
        temp['product_id'] = review.to_dict()['product_id']
        temp['description'] = review.to_dict()['description']
        temp['title'] = review.to_dict()['title']
        temp['rating'] = review.to_dict()['rating']
        temp['username'] = user.to_dict()['username']
        reviewsArr.append(temp)
    reviewsObj["reviews"] = reviewsArr
    return reviewsObj

@review_routes.route('/single/<int:id>')
@login_required
def getSingleReview(id):
    reviews = Review.query.filter(Review.id == id).first()
    return reviews.to_dict()

@review_routes.route('/new/<int:id>', methods=['POST'])
@login_required
def newReview(id):
    form = AddReviewForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    review = Review(reviewer_id=current_user.id, product_id=id, description=request.json['form']['description'], title=request.json['form']['title'], rating=request.json['form']['rating'])
    db.session.add(review)
    db.session.commit()
    return review.to_dict()

@review_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def deleteReview(id):
    review = Review.query.get(id)
    db.session.delete(review)
    db.session.commit()
    return {
        'id':id
        }

@review_routes.route('/edit/<int:id>', methods=['PUT'])
@login_required
def editReview(id):
    form = EditReviewForm()
    data= request.json
    review = Review.query.get(id)
    if request.json['form']['rating']:
        review.rating = request.json['form']['rating']
    if request.json['form']['description']:
        review.description = request.json['form']['description']
    if request.json['form']['title']:
        review.title = request.json['form']['title']
    db.session.commit()
    return review.to_dict()
