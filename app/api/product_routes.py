from flask import Blueprint, jsonify
from app.models import Product, Review

# import simplejson as json

product_routes = Blueprint('products', __name__)

@product_routes.route('/')
def products():
    print("hi")
    products = Product.query.all()
    productsObj = {}
    for product in products:
        reviews = Review.query.all()
        print("oooooooo", reviews)
        reviewScore = 0
        count = 0
        for review in reviews:
            if review.to_dict()['product_id'] == product.to_dict()['id']:
                print('yyyyyyyy', review.to_dict()['product_id'])
                reviewScore += review.to_dict()['rating']
                count += 1
        print('ddddddd', reviewScore, count, reviewScore)
        temp = {}
        print(product.to_dict(), "HEHEHEHE")
        temp['id'] = (product.to_dict()['id'])
        temp['name'] = (product.to_dict()['name'])
        temp['description'] = (product.to_dict()['description'])
        temp['price'] = str(product.to_dict()['price'])
        print(product.to_dict()['photourl'])
        temp['photourl'] = (product.to_dict()['photourl'])
        temp['category'] = (product.to_dict()['category'])
        temp['author'] = (product.to_dict()['author'])
        if count > 0:
            temp['rating'] = reviewScore/count
        print(product.to_dict()['id'])
        print(temp, "@@@@")
        productsObj[product.to_dict()['id']] = temp
        print(productsObj, "UPDATED")
    print(productsObj)
    return productsObj

@product_routes.route('/search/<string>')
def searchNewTerm(string):
    print("^^^^^^^", string)
    products = Product.query.filter(Product.name.contains(string))
    print(products, "*****")
    productsObj = {}
    for product in products:
        temp = {}
        print(product.to_dict()['id'], "HEHEHEHE")
        temp['id'] = (product.to_dict()['id'])
        temp['name'] = (product.to_dict()['name'])
        temp['description'] = (product.to_dict()['description'])
        temp['price'] = str(product.to_dict()['price'])
        print(product.to_dict()['photourl'])
        temp['photourl'] = (product.to_dict()['photourl'])
        temp['category'] = (product.to_dict()['category'])
        temp['author'] = (product.to_dict()['author'])
        print(product.to_dict()['id'])
        print(temp, "@@@@")
        productsObj[product.to_dict()['id']] = temp
        print(productsObj, "UPDATED")
    print(productsObj, "NEWOBJ")
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
    temp['category'] = (product.to_dict()['category'])
    temp['author'] = (product.to_dict()['author'])
    print(product.to_dict()['id'])
    productsObj[product.to_dict()['id']] = temp
    print(productsObj, "UPDATED")
    print(productsObj)
    return productsObj
