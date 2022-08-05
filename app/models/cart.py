from .db import db
from sqlalchemy.orm import relationship

class Cart(db.Model):
    __tablename__ = 'cart'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    product_id = db.Column(db.Integer, db.ForeignKey('products.id'), nullable=False)
    quantity = db.Column(db.Integer, nullable=False)
    cascade="all, delete-orphan"

    users = relationship("User", foreign_keys=[user_id], back_populates="cart")
    products = relationship("Product", foreign_keys=[product_id], back_populates="cart", single_parent=True)
    # product_cart = relationship("Product_Cart", foreign_keys="Product_Cart.cart_id", back_populates='cart', single_parent=True)

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'product_id': self.product_id,
        }
