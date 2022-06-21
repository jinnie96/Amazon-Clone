from flask import Blueprint, jsonify
from app.models import Product
# import simplejson as json

product_routes = Blueprint('products', __name__)

@product_routes.route('/')
def products():
    print("hi")
    products = Product.query.all()
    return {'products': [str(product.to_dict()) for product in products]}
    # print("PROD", products)
    # productsObj = {}
    # for product in products:
    #     print(product.to_dict(), "HEHEHEHE")
    #     product.to_dict()['price'] = str(product.to_dict()['price'])
    #     productsObj[product.to_dict()["id"]] = (product.to_dict())
    # print(productsObj, "@@@@")
    # return productsObj

@product_routes.route('/<int:id>')
def oneProduct():
    product = Product.query.filter(id == Product.id)
    return {product}
