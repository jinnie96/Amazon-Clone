from flask.cli import AppGroup
from .users import seed_users, undo_users
from .carts import seed_cart, undo_cart
# from .product_carts import seed_product_cart, undo_product_cart
from .products import seed_products, undo_products
from .reviews import seed_reviews, undo_reviews

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
    seed_products()
    seed_reviews()
    seed_cart()
    # seed_product_cart()
    # Add other seed functions here


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    undo_products()
    undo_reviews()
    undo_cart()
    # undo_product_cart()
    # Add other undo functions here
