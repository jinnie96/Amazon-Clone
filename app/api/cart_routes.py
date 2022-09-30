from flask import Blueprint, jsonify
from app.models import Cart, Product, db
from flask_login import current_user
from flask import request

# import simplejson as json

cart_routes = Blueprint('carts', __name__)

@cart_routes.route('/<int:id>')
def getCart(id):
    # cart = Cart.query.filter(Cart.user_id == id).first()
    carts = Cart.query.filter(Cart.user_id == id)
    productsObj = {}
    count = 0
    total = 0
    for cart in carts:
        product = Product.query.filter(Product.id == cart.product_id).first()
        temp = {}
        temp['id'] = (product.to_dict()['id'])
        temp['name'] = (product.to_dict()['name'])
        temp['description'] = (product.to_dict()['description'])
        temp['price'] = str(product.to_dict()['price'])
        temp['photourl'] = (product.to_dict()['photourl'])
        temp['author'] = product.to_dict()['author']
        temp['quantity'] = cart.to_dict()['quantity']
        count += cart.to_dict()['quantity']
        total += (cart.to_dict()['quantity'] * product.to_dict()['price'])
        productsObj[str(product.to_dict()['id'])] = temp
    productsObj['total'] = str(total)
    productsObj['count'] = count
    return productsObj

@cart_routes.route('/<int:id>', methods=['DELETE'])
def deleteCart(id):
    cart = Cart.query.filter(Cart.product_id == id and Cart.user_id == current_user.id).first()
    db.session.delete(cart)
    db.session.commit()
    return {
        "id": id
    }

@cart_routes.route('/all/<int:id>', methods=['DELETE'])
def deleteAllCarts(id):
    carts = Cart.query.filter(Cart.user_id == id)
    for c in carts:
        db.session.delete(c)
        db.session.commit()
    return {
        "carts": [cart.to_dict() for cart in carts]
    }


@cart_routes.route('/edit/<int:id>', methods=['PUT'])
def editCart(id):
    cart = Cart.query.filter(Cart.product_id == id and current_user.id == Cart.user_id).first()
    cart.quantity = int(request.json['quantity'])
    db.session.commit()
    product = Product.query.filter(Product.id == cart.to_dict()['product_id']).first()
    temp = {}
    temp['id'] = (product.to_dict()['id'])
    temp['name'] = (product.to_dict()['name'])
    temp['description'] = (product.to_dict()['description'])
    temp['price'] = str(product.to_dict()['price'])
    temp['photourl'] = (product.to_dict()['photourl'])
    temp['quantity'] = cart.to_dict()['quantity']
    return temp

@cart_routes.route('/<int:id>', methods=['POST'])
def addTocart(id):
    cart = Cart.query.filter(Cart.user_id ==current_user.id, Cart.product_id==id).first()
    temp = {}
    if cart:
        cart.quantity += 1
        db.session.commit()
        product = Product.query.filter(Product.id == cart.to_dict()['product_id']).first()
        temp['id'] = (product.to_dict()['id'])
        temp['name'] = (product.to_dict()['name'])
        temp['description'] = (product.to_dict()['description'])
        temp['price'] = str(product.to_dict()['price'])
        temp['photourl'] = (product.to_dict()['photourl'])
    else:
        cart = Cart(user_id=current_user.id, product_id=id, quantity=1)
        db.session.add(cart)
        db.session.commit()
        product = Product.query.filter(Product.id == cart.to_dict()['product_id']).first()
        temp['id'] = (product.to_dict()['id'])
        temp['name'] = (product.to_dict()['name'])
        temp['description'] = (product.to_dict()['description'])
        temp['price'] = str(product.to_dict()['price'])
        temp['photourl'] = (product.to_dict()['photourl'])
    return temp
