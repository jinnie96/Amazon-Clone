from .db import db
from sqlalchemy.orm import relationship

class Product(db.Model):
    __tablename__ = 'products'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)
    description = db.Column(db.String(500), nullable=False)
    price = db.Column(db.Numeric(4,2), nullable=False)
    category = db.Column(db.String(500), nullable=False)
    author = db.Column(db.String(500), nullable=False)
    photourl = db.Column(db.String(500), nullable=False)

    reviews = relationship("Review", foreign_keys="Review.product_id", back_populates='products')
    cart = relationship("Cart", foreign_keys="Cart.product_id", back_populates='products')
    # product_cart = relationship("Product_Cart", foreign_keys="Product_Cart.product_id", back_populates='products')


    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'price': self.price,
            'category': self.category,
            'author': self.author,
            'photourl': self.photourl
        }
