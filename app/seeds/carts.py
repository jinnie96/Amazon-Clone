from app.models import db, Cart

def seed_cart():
    review1 = Cart(
        user_id=2, product_id=2)
    review2 = Cart(
        user_id=1, product_id=1)
    review3 = Cart(
        user_id=3, product_id=3)

    db.session.add(review1)
    db.session.add(review2)
    db.session.add(review3)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_cart():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
