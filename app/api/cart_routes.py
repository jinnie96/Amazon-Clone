from flask import Blueprint, jsonify
from app.models import Cart, db
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
    