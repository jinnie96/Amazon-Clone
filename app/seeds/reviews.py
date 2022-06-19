from app.models import db, Review

def seed_reviews():
    review1 = Review(
        reviewer_id=2, product_id=2, description='Not working!', title='Do not buy!!!', rating=1)
    review2 = Review(
        reviewer_id=1, product_id=1, description='Great product. I have had no problems.', title='Awesome', rating=5)
    review3 = Review(
        reviewer_id=3, product_id=3, description='Fun, but batteries run out too fast.', title='Solid', rating=4)

    db.session.add(review1)
    db.session.add(review2)
    db.session.add(review3)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_reviews():
    db.session.execute('TRUNCATE reviews RESTART IDENTITY CASCADE;')
    db.session.commit()
