from flask import Blueprint, jsonify
from app.models import Cart, Product, db
from flask_login import current_user
from flask import request

# import simplejson as json

cart_routes = Blueprint('carts', __name__)

@cart_routes.route('/<int:id>')
def getCart(id):
    cart = Cart.query.filter(Cart.user_id == id).first()
    products = Product.query.filter(Product.id == cart.to_dict()['product_id']).all()
    productsObj = {}
    count = 0
    total = 0
    for product in products:
        cart = Cart.query.filter(Cart.user_id == id and Cart.product_id == product.to_dict()['id']).first()
        print("NEWWWWW", cart.to_dict()['quantity'], product.to_dict()['price'])
        temp = {}
        temp['id'] = (product.to_dict()['id'])
        temp['name'] = (product.to_dict()['name'])
        temp['description'] = (product.to_dict()['description'])
        temp['price'] = str(product.to_dict()['price'])
        temp['photourl'] = (product.to_dict()['photourl'])
        temp['quantity'] = cart.to_dict()['quantity']
        count += cart.to_dict()['quantity']
        print(cart.to_dict()['quantity'], '=====================')
        print(product.to_dict()['price'], "---------------------")
        total += (cart.to_dict()['quantity'] * product.to_dict()['price'])
        print('totes', total)
        productsObj['obj'] = temp
    print(count, total, "TOTAL")
    productsObj['total'] = str(total)
    productsObj['count'] = count
    return productsObj

@cart_routes.route('/<int:id>', methods=['DELETE'])
def deleteCart(id):
    print("BOTH", id, current_user.id)
    carts = Cart.query.filter(Cart.product_id == id and Cart.user_id == current_user.id)
    print(carts, 'CARTs')
    for c in carts:
        print(c.to_dict(), "LOOPp")
        # productCart = Product_Cart.query.filter(Product_Cart.product_id == c.to_dict()['product_id'] and Product_Cart.cart_id == c.to_dict()['id'])
        # for product in productCart:
        #     print(product.to_dict(), 'productcart')
        # db.session.delete(productCart)
        db.session.delete(c)
        db.session.commit()
    print(carts, "DELETEEEEE")
    return {
        "carts": [cart.to_dict() for cart in carts]
    }

@cart_routes.route('/all/<int:id>', methods=['DELETE'])
def deleteAllCarts(id):
    print("BOTH", id, current_user.id)
    carts = Cart.query.filter(Cart.user_id == id)
    print(carts, 'CARTs')
    for c in carts:
        print(c.to_dict(), "LOOPp")
        # productCart = Product_Cart.query.filter(Product_Cart.product_id == c.to_dict()['product_id'] and Product_Cart.cart_id == c.to_dict()['id'])
        # for product in productCart:
        #     print(product.to_dict(), 'productcart')
        # db.session.delete(productCart)
        db.session.delete(c)
        db.session.commit()
    print(carts, "DELETEEEEE")
    return {
        "carts": [cart.to_dict() for cart in carts]
    }


@cart_routes.route('/edit/<int:id>', methods=['PUT'])
def editCart(id):
    print("REz", id, request.json['quantity'], current_user.id)
    cart = Cart.query.filter(Cart.product_id == request.json['quantity'] and current_user.id == Cart.user_id).first()
    print((cart.to_dict()), "CAAAAAAR")
    cart.quantity = id
    print(cart.to_dict())
    db.session.commit()
    return cart.to_dict()

@cart_routes.route('/<int:id>', methods=['POST'])
def addTocart(id):
    print("ADDING", id)

    cart = Cart(user_id=current_user.id, product_id=id, quantity=1)
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
