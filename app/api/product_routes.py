from flask import Blueprint, jsonify
from app.models import Product

product_routes = Blueprint('products', __name__)

@product_routes.route('/')
def products():
    products = Product.query.all()
    return {'products': [product.to_dict() for product in products]}

@product_routes.route('/<int:id>')
def oneProduct():
    product = Product.query.filter(id == Product.id)
    return {product}
