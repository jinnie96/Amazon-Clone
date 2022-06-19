from app.models import db, Product_Cart

def seed_product_cart():
    productCart1 = Product_Cart(
        product_id=1, cart_id=1)
    productCart2 = Product_Cart(
        product_id=2, cart_id=2)
    productCart3 = Product_Cart(
        product_id=3, cart_id=3)

    db.session.add(productCart1)
    db.session.add(productCart2)
    db.session.add(productCart3)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_product_cart():
    db.session.execute('TRUNCATE product_cart RESTART IDENTITY CASCADE;')
    db.session.commit()
