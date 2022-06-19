from app.models import db, Cart

def seed_cart():
    cart1 = Cart(
        user_id=2, product_id=2)
    cart2 = Cart(
        user_id=1, product_id=1)
    cart3 = Cart(
        user_id=3, product_id=3)

    db.session.add(cart1)
    db.session.add(cart2)
    db.session.add(cart3)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_cart():
    db.session.execute('TRUNCATE cart RESTART IDENTITY CASCADE;')
    db.session.commit()
