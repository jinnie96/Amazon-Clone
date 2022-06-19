from app.models import db, Product


# Adds a demo user, you can add other users here if you want
def seed_products():
    XBOX = Product(
        name='XBOX Series X', description='Introducing Xbox Series X, the fastest, most powerful Xbox ever. Play thousands of titles from four generations of consoles-all games look and play best on Xbox Series X.', price='399.99')
    PS5 = Product(
        name='PS5', description='Stunning Games - Marvel at incredible graphics and experience new PS5 features.', price='399.99')
    OCULUS = Product(
        name='Oculus Rift', description='Experience total immersion with 3D positional audio, hand tracking and haptic feedback, working together to make virtual worlds feel real.', price='299.99')

    db.session.add(XBOX)
    db.session.add(PS5)
    db.session.add(OCULUS)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_products():
    db.session.execute('TRUNCATE products RESTART IDENTITY CASCADE;')
    db.session.commit()
