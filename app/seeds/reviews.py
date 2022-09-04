from app.models import db, Review

def seed_reviews():
    review1 = Review(
        reviewer_id=2, product_id=2, description='It took me a couple of chapters to really get into it but once I did I couldn\'t put it down. Very happy to have gotten the recommendation from friends. Now, the author needs to go on ahead and finish the serious. Reading the second book now, and plan to read the side novella. But, the main storyline remains unfinished after a decade since the second book.', title=' A Delight! ...now he needs to get on with finishing it.', rating=5)
    review2 = Review(
        reviewer_id=1, product_id=1, description='Excellent read only took me three days I loved it so much. The shows are different but I don’t care. I read all of them in 2015 but decided to read them all again. WORTH THE TIME', title='Read twice', rating=4)
    review3 = Review(
        reviewer_id=3, product_id=3, description='Great story. Better than the movies!', title='Awesome', rating=4)
    review4 = Review(
        reviewer_id=2, product_id=4, description='This is a solid book; however the plot falls flat. Not as good as advertised.', title='Bit Overrated', rating=3)
    review5 = Review(
        reviewer_id=3, product_id=5, description='I first read this book in middle school, and re-read as a now 30 year old. This book is still as applicable as ever!', title='All Time Classic', rating=5)
    review6 = Review(
        reviewer_id=2, product_id=6, description='Fahrenheit 451 is a truly impactful book, that explains the dangers of censorship through book burning. I highly reccommend this book!', title='Symbolic', rating=5)
    review7 = Review(
        reviewer_id=3, product_id=7, description='Good book! I could\'nt put it down', title='Good', rating=4)
    review8 = Review(
        reviewer_id=3, product_id=8, description='It deserves its spot as a science fiction icon. At times dense, but eminently readable. It’s characters come to life. I loved every page!', title=' Vivid, beautiful.', rating=4)
    review9 = Review(
        reviewer_id=2, product_id=9, description='One of the all time great sci-fi books', title='Great', rating=5)
    review10 = Review(
        reviewer_id=3, product_id=10, description='Painfully boring novel. The pace is sooo slow that. I skipped to the end. Could have been a good mystery', title='Sleeper', rating=2)
    review11 = Review(
        reviewer_id=2, product_id=11, description='I found this book extremely slow. The story takes too long to develop. I couldn\'t finish the book.', title='Bad', rating=1)
    review12 = Review(
        reviewer_id=3, product_id=12, description='If you have knowledge of French, you will enjoy and possibly figure out the murder. Loved all the ways Agatha put it all together', title='Murder mystery', rating=4)
    review13 = Review(
        reviewer_id=3, product_id=13, description='This was just okay for me. The setup of a club of sleuths being handed a case by Scotland Yard to figure out seemed like just the thing I\'d enjoy. Alas, the format of the story with each sleuth giving recitation on whom they suspected and the method they used to reach their conclusion wore very quickly. The first two were interesting, the middle three were a real slog and the last was a very good finish. There was a good bit of wit along the way in the form of jibs and jibes from the club members at one another and descriptions of their quirks and conceits. I wish I\'d liked this more but that ultimately didn\'t save this for me. I have others by Berkeley and will happily read them as I generally like his writing style, this just wasn\'t the one for me.', title='okay book', rating=1)
    review14 = Review(
        reviewer_id=2, product_id=14, description='I purchased the hardback version of this book and play the audio version as I read each chapter. The book is very funny, and it is a delight to read. The narrator of the audiobook is perfect for the task. I could not be happier with these purchases.', title='Excellent in Every Respect', rating=5)
    review15 = Review(
        reviewer_id=3, product_id=15, description='The book was ok, but the narrator was horrible. It sounded at times like it was a computer program or a robot reading the book. I completely lost interest after a couple of hours, so I just ended up reading the book and discarding the audio book. Unfortunately, I wasted a credit on this book.', title='Horrible narrator!', rating=2)
    review16 = Review(
        reviewer_id=2, product_id=16, description='I was expecting the reading of the book by a nice voice - but instead - it\'s an audio play, which I did not like.', title='Treasure Island is a play - not a read', rating=1)
    review17 = Review(
        reviewer_id=3, product_id=17, description='I do not doubt the literary importance of this book. But heavens to murgatroyd this book drags ON. The author devotes CHAPTERS upon CHAPTERS on the whaling industry. CHAPTERS upon CHAPTERS on the types of whales. At least 20 pages describing the color of the dammed whale. I appreciate the author\'s unhealthy obsession with unnecessary details as a parallel to ahab\'s with the whale, but for me, this book was a TASK to read.', title='SLOOOOOW', rating=1)
    review18 = Review(
        reviewer_id=2, product_id=18, description='This book shows why Elon is today\'s Einstein. The smartest person of our generation.', title='Demonstrates Elon\'s intelligence', rating=4)
    review19 = Review(
        reviewer_id=3, product_id=19, description='Could have been better, very repetitive. We get it Steve Jobs to get something done/ Apple, Pixar, iPod- would get extremely passionate and be more focused on product and was rude to many. But reading about it on repeat for more than half of the book was not a fine tribute to such a legend!', title='repetitive', rating=3)
    review20 = Review(
        reviewer_id=2, product_id=20, description='Too much technical terms. Better for those who are really into physical sciences', title='Too confusing', rating=1)
    review21 = Review(
        reviewer_id=3, product_id=21, description='This book does a great job at showing the impacts of Edison\'s inventions.', title='Genius', rating=5)
    review22 = Review(
        reviewer_id=2, product_id=22, description='Funny book! I read it with my son and he laughed a ton.', title='Funny', rating=4)
    # review23 = Review(
    #     reviewer_id=3, product_id=23, description='Not my favorite treehouse book, but solid!', title='Good', rating=4)
    # review24 = Review(
    #     reviewer_id=2, product_id=24, description='Highly recommend.', title='Great', rating=5)
    review25 = Review(
        reviewer_id=3, product_id=25, description='Great plot! Could not put the book down', title='Great plot', rating=4)
    review26 = Review(
        reviewer_id=3, product_id=26, description='Awesome recipes! Easy to make', title='Great recipes', rating=4)
    review27 = Review(
        reviewer_id=3, product_id=27, description='I wanted fast and easy to make recipes. This book did not give me that.', title='Too many ingredients', rating=2)
    review28 = Review(
        reviewer_id=2, product_id=28, description='None of the recipes worked. Did not taste good.', title='Terrible', rating=1)
    review29 = Review(
        reviewer_id=3, product_id=29, description='Delicious, authentic Indian food recipes!', title='Yummy', rating=4)
    # review30 = Review(
    #     reviewer_id=3, product_id=30, description='Scary book! Read in the dark.', title='Spooky', rating=4)
    review31 = Review(
        reviewer_id=2, product_id=31, description='This book does such a good job at being a horror book; that I could barely finish it! I had nightmares but pushed through and finished it. Recommend!', title='Could not finish!', rating=5)
    review32 = Review(
        reviewer_id=2, product_id=32, description='Relatively boring book. The movie is much better.', title='Boring', rating=2)
    review33 = Review(
        reviewer_id=3, product_id=33, description='Not really scary. Solid storyline.', title='Okay', rating=3)
    review34 = Review(
        reviewer_id=2, product_id=34, description='Great book. A lot of details about the events that happened leading up to America\s Independence.', title='Detailed', rating=4)
    review35 = Review(
        reviewer_id=3, product_id=35, description='This book does a great job summarizing 200 years worth of events, all while keeping it fast paced and engaging. Really great read for persons wanting to ‘dip their toes’ so to speak in this historical topic.', title='Very informative, reads like an adventure novel', rating=4)
    review36 = Review(
        reviewer_id=3, product_id=36, description='Ever have a professor that droned on, asked far more questions than gave answers, self contradicted, and just vomited a word salad? Well, this is that guy.', title='Horrible', rating=1)
    review37 = Review(
        reviewer_id=3, product_id=37, description='Informative book! Learned a ton about Europe\'s involvement and impact of the worlds issues.', title='Informative!', rating=4)
    review38 = Review(
        reviewer_id=3, product_id=38, description='Sad book! Shows a lot about racism in America in the late 1900s.', title='Heartwrenching book', rating=4)
    review39 = Review(
        reviewer_id=2, product_id=39, description='This book is a masterpiece! I remember reading it in high school and remember how much I loved it. Still as good as I first read it!', title='Wonderful book!', rating=5)
    review40 = Review(
        reviewer_id=3, product_id=40, description='Enjoyed the book. Short and concise, but conveys message well', title='DONT BUY', rating=4)
    review41 = Review(
        reviewer_id=2, product_id=41, description='Book has missing pages. Had to return. Don\'t buy.', title='DONT BUY', rating=1)
    review42 = Review(
        reviewer_id=3, product_id=42, description='This is one of my favorite animes. I enjoyed the book, but the TV show is much better', title='Better as a TV show', rating=3)
    review43 = Review(
        reviewer_id=3, product_id=43, description='This book is great for anyone who\'s just getting into manga!', title='Classic manga!', rating=5)
    review44 = Review(
        reviewer_id=2, product_id=44, description='The book doesn\'t do this manga justice. I recommend watching the anime over reading this book.', title='Decent, but not great', rating=2)
    review45 = Review(
        reviewer_id=2, product_id=45, description='The only bad thing I can say about this book is how short it is! I could\'t put it down. Highly recommend reading and watching this anime!', title='Short', rating=5)
    review46 = Review(
        reviewer_id=3, product_id=46, description='Raw and authentic poetry', title='Felt deeply!', rating=5)
    review47 = Review(
        reviewer_id=3, product_id=47, description='Meaningful poetry. Wish there were more variations of poetry.', title='Beautiful', rating=4)
    # review48 = Review(
    #     reviewer_id=2, product_id=48, description='Beautiful read!', title='Impactful', rating=5)
    review49 = Review(
        reviewer_id=3, product_id=49, description='Great read. The poetry is beautifully written', title='Amazing', rating=5)

    db.session.add(review1)
    db.session.add(review2)
    db.session.add(review3)
    db.session.add(review4)
    db.session.add(review5)
    db.session.add(review6)
    db.session.add(review7)
    db.session.add(review8)
    db.session.add(review9)
    db.session.add(review10)
    db.session.add(review11)
    db.session.add(review12)
    db.session.add(review13)
    db.session.add(review14)
    db.session.add(review15)
    db.session.add(review16)
    db.session.add(review17)
    db.session.add(review18)
    db.session.add(review19)
    db.session.add(review20)
    db.session.add(review21)
    db.session.add(review22)
    db.session.add(review22)
    # db.session.add(review23)
    # db.session.add(review24)
    db.session.add(review25)
    db.session.add(review26)
    db.session.add(review27)
    db.session.add(review28)
    db.session.add(review29)
    # db.session.add(review30)
    db.session.add(review31)
    db.session.add(review32)
    db.session.add(review33)
    db.session.add(review34)
    db.session.add(review35)
    db.session.add(review36)
    db.session.add(review37)
    db.session.add(review38)
    db.session.add(review39)
    db.session.add(review40)
    db.session.add(review41)
    db.session.add(review42)
    db.session.add(review43)
    db.session.add(review44)
    db.session.add(review44)
    db.session.add(review45)
    db.session.add(review46)
    db.session.add(review47)
    # db.session.add(review48)
    db.session.add(review49)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_reviews():
    db.session.execute('TRUNCATE reviews RESTART IDENTITY CASCADE;')
    db.session.commit()
