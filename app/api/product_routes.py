from flask import Blueprint, jsonify
from app.models import Product
# import simplejson as json

product_routes = Blueprint('products', __name__)

@product_routes.route('/')
def products():
    print("hi")
    products = Product.query.all()
    productsObj = {}
    for product in products:
        temp = {}
        print(product.to_dict(), "HEHEHEHE")
        temp['id'] = (product.to_dict()['id'])
        temp['name'] = (product.to_dict()['name'])
        temp['description'] = (product.to_dict()['description'])
        temp['price'] = str(product.to_dict()['price'])
        print(product.to_dict()['photourl'])
        temp['photourl'] = (product.to_dict()['photourl'])
        print(product.to_dict()['id'])
        print(temp, "@@@@")
        productsObj['obj'] = temp
        print(productsObj, "UPDATED")
    print(productsObj)
    return productsObj


    # return {'products': [(productsObj.to_dict()) for product in productsObj]}
    # print("PROD", products)
    # print(productsObj, "@@@@")
    # return productsObj

@product_routes.route('/<int:id>')
def oneProduct(id):
    print(id,"ID!!!")
    product = Product.query.get(id)
    print(product.to_dict(), "PRODUCT@@@!!!")
    productsObj = {}
    temp = {}
    print(product.to_dict(), "HEHEHEHE")
    temp['id'] = (product.to_dict()['id'])
    temp['name'] = (product.to_dict()['name'])
    temp['description'] = (product.to_dict()['description'])
    temp['price'] = str(product.to_dict()['price'])
    print(product.to_dict()['photourl'])
    temp['photourl'] = (product.to_dict()['photourl'])
    print(product.to_dict()['id'])
    productsObj[product.to_dict()['id']] = temp
    print(productsObj, "UPDATED")
    print(productsObj)
    return productsObj
