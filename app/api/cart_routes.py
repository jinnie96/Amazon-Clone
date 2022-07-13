from flask import Blueprint, jsonify
from app.models import Cart, db
from flask_login import current_user
# import simplejson as json

cart_routes = Blueprint('carts', __name__)

@cart_routes.route('/<int:id>')
def getCart(id):
    cart = Cart.filter(Cart.id == id)
    return cart.to_dict()

@cart_routes.route('/<int:id>', methods='DELETE')
def deleteCart(id):
    cart = Cart.filter(Cart.id == id)
    db.session.delete(cart)
    db.session.commit()
    return cart.to_dict()

@cart_routes.route('/<int:id>', methods='POST')
def addTocart(id):
    cart = Cart(user_id=current_user.id, product_id={id})
    db.session.add(cart)
    db.session.commit()
