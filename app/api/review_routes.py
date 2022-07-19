from flask import Blueprint, jsonify
from app.models import Review, db
from flask_login import login_required, current_user

# import simplejson as json

review_routes = Blueprint('reviews', __name__)

@review_routes.route('/<int:id>')
@login_required
def getReviews(id):
    print("in review")
    reviews = Review.query.filter(Review.product_id == id).all()
    return {
            "reviews": [review.to_dict() for review in reviews]
        }

# @review_routes.route('/<int:id>', methods=['POST'])
# @login_required
# def newReview(id):
    # review = Review(reviewer_id=current_user.id, product_id=id, description=description, title=title, rating=rating)
    # db.session.add(review)
    # db.session.commit()
    # return review.to_dict()

@review_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def deleteReview(id):
    review = Review.query.get(id)
    db.session.delete(review)
    db.session.commit()
    return "Comment deleted"

@review_routes.route('/<int:id>', methods=['PUT'])
@login_required
def editReview(id):
    review = Review.query.get(id)
