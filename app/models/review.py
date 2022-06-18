from .db import db
from sqlalchemy.orm import relationship


class Review(db.Model):
    __tablename__ = 'review'

    id = db.Column(db.Integer, primary_key=True)
    reviewer_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    product_id = db.Column(db.Integer, db.ForeignKey('product.id'), nullable=False)
    description = db.Column(db.String(200), nullable=False)
    title = db.Column(db.String(50), nullable=False)
    rating = db.Column(db.Integer, nullable=False)

    users = relationship("User", foreign_keys=[reviewer_id], back_populates="review")
    products = relationship("Product", foreign_keys=[product_id], back_populates="review")


    def to_dict(self):
        return {
            'id': self.id,
            'reviewer_id': self.reviewer_id,
            'product_id': self.product_id,
            'description': self.description,
            'title': self.title,
            'rating': self.rating
        }
