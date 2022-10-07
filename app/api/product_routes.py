from flask import Blueprint, jsonify
from app.models import Product, Review

# import simplejson as json

product_routes = Blueprint('products', __name__)

@product_routes.route('/')
def products():
    products = Product.query.all()
    productsObj = {}
    for product in products:
        reviews = Review.query.all()
        reviewScore = 0
        count = 0
        for review in reviews:
            if review.to_dict()['product_id'] == product.to_dict()['id']:
                reviewScore += review.to_dict()['rating']
                count += 1
        temp = {}
        temp['id'] = (product.to_dict()['id'])
        temp['name'] = (product.to_dict()['name'])
        temp['description'] = (product.to_dict()['description'])
        temp['price'] = str(product.to_dict()['price'])
        temp['photourl'] = (product.to_dict()['photourl'])
        temp['category'] = (product.to_dict()['category'])
        temp['author'] = (product.to_dict()['author'])
        if count > 0:
            temp['rating'] = reviewScore/count
        productsObj[product.to_dict()['id']] = temp
    return productsObj

@product_routes.route('/search/<string>')
def searchNewTerm(string):
    count = 0
    products = Product.query.filter(Product.name.contains(string))
    productsObj = {}
    for product in products:
        if count == 20:
            break
        temp = {}
        temp['id'] = (product.to_dict()['id'])
        temp['name'] = (product.to_dict()['name'])
        temp['description'] = (product.to_dict()['description'])
        temp['price'] = str(product.to_dict()['price'])
        temp['photourl'] = (product.to_dict()['photourl'])
        temp['category'] = (product.to_dict()['category'])
        temp['author'] = (product.to_dict()['author'])
        productsObj[product.to_dict()['id']] = temp
        count += 1
    return productsObj

@product_routes.route('/<int:id>')
def oneProduct(id):
    product = Product.query.get(id)
    productsObj = {}
    temp = {}
    temp['id'] = (product.to_dict()['id'])
    temp['name'] = (product.to_dict()['name'])
    temp['description'] = (product.to_dict()['description'])
    temp['price'] = str(product.to_dict()['price'])
    temp['photourl'] = (product.to_dict()['photourl'])
    temp['category'] = (product.to_dict()['category'])
    temp['author'] = (product.to_dict()['author'])
    productsObj[product.to_dict()['id']] = temp
    return productsObj
