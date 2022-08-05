# from .db import db
# from sqlalchemy.orm import relationship

# class Product_Cart(db.Model):
#     __tablename__ = 'product_cart'

#     id = db.Column(db.Integer, primary_key=True)
#     product_id = db.Column(db.Integer, db.ForeignKey('products.id'))
#     cart_id = db.Column(db.Integer, db.ForeignKey('cart.id'))

#     cart = relationship("Cart", foreign_keys=[cart_id], back_populates="product_cart")
#     products = relationship("Product", foreign_keys=[product_id], back_populates="product_cart")

#     def to_dict(self):
#         return {
#             'id': self.id,
#             'user_id': self.user_id,
#             'product_id': self.product_id,
#         }
