from flask import Blueprint, jsonify
from app.models import Cart, Product, db
from flask_login import current_user
# import simplejson as json

cart_routes = Blueprint('carts', __name__)

@cart_routes.route('/<int:id>')
def getCart(id):
    cart = Cart.query.filter(Cart.user_id == id).first()
    products = Product.query.filter(Product.id == cart.to_dict()['product_id']).all()
    productsObj = {}
    for product in products:
        temp = {}
        temp['id'] = (product.to_dict()['id'])
        temp['name'] = (product.to_dict()['name'])
        temp['description'] = (product.to_dict()['description'])
        temp['price'] = str(product.to_dict()['price'])
        temp['photourl'] = (product.to_dict()['photourl'])
        productsObj['obj'] = temp
    return productsObj

@cart_routes.route('/<int:id>', methods=['DELETE'])
def deleteCart(id):
    print("BOTH", id, current_user.id)
    carts = Cart.query.filter(Cart.product_id == id and Cart.user_id == current_user.id)
    print(carts, 'CARTs')
    for c in carts:
        print(c.to_dict(), "LOOPp")
        db.session.delete(c)
        db.session.commit()
    print(carts, "DELETEEEEE")
    return {
        "carts": [cart.to_dict() for cart in carts]
    }

@cart_routes.route('/<int:id>', methods=['POST'])
def addTocart(id):
    print("ADDING", id)
    cart = Cart(user_id=current_user.id, product_id=id)
    db.session.add(cart)
    print("ZZZ", cart.to_dict())
    db.session.commit()
    product = Product.query.filter(Product.id == cart.to_dict()['product_id']).first()
    print("ADDED", product.to_dict())
    # productsObj = {}
    temp = {}
    temp['id'] = (product.to_dict()['id'])
    temp['name'] = (product.to_dict()['name'])
    temp['description'] = (product.to_dict()['description'])
    temp['price'] = str(product.to_dict()['price'])
    temp['photourl'] = (product.to_dict()['photourl'])
    # productsObj['obj'] = temp
    return temp
