from app.models import db, Product


# Adds a demo user, you can add other users here if you want
def seed_products():
    GAMEOFTHRONES = Product(
        name='Game of Thrones', description='Winter is coming. Such is the stern motto of House Stark, the northernmost of the fiefdoms that owe allegiance to King Robert Baratheon in far-off Kings Landing. There Eddard Stark of Winterfell rules in Roberts name. There his family dwells in peace and comfort: his proud wife, Catelyn; his sons Robb, Brandon, and Rickon; his daughters Sansa and Arya; and his bastard son, Jon Snow. Far to the north, behind the towering Wall, lie savage Wildings and worse - unnatural things relegated to myth during the centuries-long summer, but proving all too real and all too deadly in the turning of the season. Yet a more immediate threat lurks to the south, where Jon Arryn, the Hand of the King, has died under mysterious circumstances. Now Robert is riding north to Winterfell, bringing his queen, the lovely but cold Cersei, his son, the cruel, vainglorious Prince Joffrey, and the queens brothers Jaime and Tyrion of the powerful and wealthy House Lannister - the first a swordsman without equal, the second a dwarf whose stunted stature belies a brilliant mind.', price='12.99', photourl='https://m.media-amazon.com/images/I/51rDpMtBm5L.jpg')
    THENAMEOFTHEWIND = Product(
        name='Name of the Wind', description='The Name of the Wind, also referred to as The Kingkiller Chronicle: Day One, is a heroic fantasy novel written by American author Patrick Rothfuss. It is the first book in the ongoing fantasy trilogy The Kingkiller Chronicle, followed by The Wise Mans Fear. It was published on March 27, 2007, by DAW Books.', price='9.89', photourl='https://images-na.ssl-images-amazon.com/images/I/91b8oNwaV1L.jpg')
    THELORDOFTHERINGS = Product(
        name='Lord of the Rings', description='Experience total immersion with 3D positional audio, hand tracking and haptic feedback, working together to make virtual worlds feel real.', price='299.99', photourl='https://images-na.ssl-images-amazon.com/images/I/71jLBXtWJWL.jpg')
    COLOROFMAGIC = Product(
        name='Color of Magic', description='The Colour of Magic & The Light Fantastic: This is how the Discworld began... In The Colour of Magic the failed wizard Rincewind burst upon the world and hasn\'t stopped running since. This was the book that started the phenomenally successful fantasy series. Here is the sapient pearwood Luggage, a mobile trunk which launders any clothes put in it and incidentally homicidally defends its owner. Here is Twoflower, an innocent tourist in a world of nightmares and fairy tales gone wrong. Here is Cohen the Barbarian, the world\'s oldest and greatest hero. Here is Death, not such a bad sort when you get to know him... They have adventures. It\'d take to long too explain. Just read it! First published in 1983, The Colour of Magic has been translated into thirty languages, and has sold over two million copies in Corgi editions alone. The Light Fantastic, published in 1986, follows closely behind, and of all the Discworld novels it is the only true sequel to an earlier work. This two-in-one volume was first published in 1999.', price='13.99', photourl='https://images-na.ssl-images-amazon.com/images/I/91u24IHWS8L.jpg')
    EIGHTYFOUR = Product(
        name='NineteenEightyFour', description='“The Party told you to reject the evidence of your eyes and ears. It was their final, most essential command.” Winston Smith toes the Party line, rewriting history to satisfy the demands of the Ministry of Truth. With each lie he writes, Winston grows to hate the Party that seeks power for its own sake and persecutes those who dare to commit thoughtcrimes. But as he starts to think for himself, Winston can’t escape the fact that Big Brother is always watching...A startling and haunting novel, 1984 creates an imaginary world that is completely convincing from start to finish. No one can deny the novel’s hold on the imaginations of whole generations, or the power of its admonitions—a power that seems to grow, not lessen, with the passage of time.', price='14.99', photourl='https://m.media-amazon.com/images/I/61iqsjK1JtL._AC_SX466_.jpg')
    FAHRENHEIT = Product(
        name='Fahrenheit', description='Guy Montag is a fireman. His job is to destroy the most illegal of commodities, the printed book, along with the houses in which they are hidden. Montag never questions the destruction and ruin his actions produce, returning each day to his bland life and wife, Mildred, who spends all day with her television “family.” But when he meets an eccentric young neighbor, Clarisse, who introduces him to a past where people didn’t live in fear and to a present where one sees the world through the ideas in books instead of the mindless chatter of television, Montag begins to question everything he has ever known.', price='8.29', photourl='https://www.arts.gov/sites/default/files/Fahrenheit%20451%20Cover.jpg')
    BRAVENEWWORLD = Product(
        name='Brave New World', description='Aldous Huxley\'s profoundly important classic of world literature, Brave New World is a searching vision of an unequal, technologically-advanced future where humans are genetically bred, socially indoctrinated, and pharmaceutically anesthetized to passively uphold an authoritarian ruling order–all at the cost of our freedom, full humanity, and perhaps also our souls. “A genius [who] who spent his life decrying the onward march of the Machine” (The New Yorker), Huxley was a man of incomparable talents: equally an artist, a spiritual seeker, and one of history’s keenest observers of human nature and civilization. Brave New World, his masterpiece, has enthralled and terrified millions of readers, and retains its urgent relevance to this day as both a warning to be heeded as we head into tomorrow and as thought-provoking, satisfying work of literature. Written in the shadow of the rise of fascism during the 1930s, Brave New World likewise speaks to a 21st-century world dominated by mass-entertainment, technology, medicine and pharmaceuticals, the arts of persuasion, and the hidden influence of elites.', price='10.99', photourl='https://images-na.ssl-images-amazon.com/images/I/81zE42gT3xL.jpg')
    DUNE = Product(
        name='Dune', description='Set on the desert planet Arrakis, Dune is the story of the boy Paul Atreides, who would become the mysterious man known as Maud\'dib. He would avenge the traitorous plot against his noble family - and would bring to fruition humankind\'s most ancient and unattainable dream. A stunning blend of adventure and mysticism, environmentalism and politics, Dune won the first Nebula Award, shared the Hugo Award, and formed the basis of what is undoubtedly the grandest epic in science fiction.Frank Herbert\'s death in 1986 was a tragic loss, yet the astounding legacy of his visionary fiction will live forever.', price='10.99', photourl='https://images-na.ssl-images-amazon.com/images/I/81ym3QUd3KL.jpg')
    MOONSTONE = Product(
        name='Moonstone', description='The Moonstone by Wilkie Collins. Introduction and Notes by David Blair, Rutherford College, University of Kent The Moonstone, a priceless Indian diamond which had been brought to England as spoils of war, is given to Rachel Verrinder on her eighteenth birthday. That very night, the stone is stolen. Suspicion then falls on a hunchbacked housemaid, on Rachel\'s cousin Franklin Blake, on a troupe of mysterious Indian jugglers, and on Rachel herself. The phlegmatic Sergeant Cuff is called in, and with the help of Betteredge, the Robinson Crusoe-reading loquacious steward, the mystery of the missing stone is ingeniously solved.', price='5.99', photourl='https://images-na.ssl-images-amazon.com/images/I/41sxrEkyqdL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg')
    SCARLET = Product(
        name='Lord of the Rings', description='Arthur Conan Doyle’s first ‘Sherlock Homes’ novel introduces the talented detective Holmes to his loyal partner in investigation, Dr. John Watson. A Study in Scarlet is the first of four full length Sherlock Holmes novels written by Arthur Conan Doyle. The novel begins with a war-wounded Watson being introduced to Holmes by a common friend, when looking for a place to stay. Initially wary of Holmes’s eccentricities, Watson gradually starts appreciating Sherlock’s knowledge and exceptional abilities of logical deduction.', price='9.99', photourl='https://www.publicbookshelf.com/images/AStudyInScarlet423x630.jpg')

    db.session.add(GAMEOFTHRONES)
    db.session.add(THENAMEOFTHEWIND)
    db.session.add(THELORDOFTHERINGS)
    db.session.add(COLOROFMAGIC)
    db.session.add(EIGHTYFOUR)
    db.session.add(FAHRENHEIT)
    db.session.add(BRAVENEWWORLD)
    db.session.add(DUNE)
    db.session.add(MOONSTONE)
    db.session.add(SCARLET)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_products():
    db.session.execute('TRUNCATE products RESTART IDENTITY CASCADE;')
    db.session.commit()
