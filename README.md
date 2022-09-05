# Amazun

Amazun is a semi-clone of the popular e-commerce website, [Amazon](https://www.amazon.com/).

Check out Amazun at the live site: [Amazun](https://amazon-solo-clone.herokuapp.com/).


## Getting Started
To view and use this application, you can either navigate to the [live hosted site](https://amazon-solo-clone.herokuapp.com/) and login as a new or demo user, or download the project locally:
1. Clone this repository ```git clone https://github.com/jinnie96/Amazon-Clone```

2. ```cd``` into ```/python-project``` and install dependencies ```pipenv install```

3. ```cd``` into ```/react-app``` and install dependencies ```npm install```

4.  Create a .env file based on the .env.example given

5.  Setup a PostgresSQL user + database in ```/python-project```
    ```javascript
    psql -c "CREATE USER <username> PASSWORD '<password>' CREATEDB"
    psql -c "CREATE DATABASE <database name> WITH OWNER <username>"
    ```

6. Start shell + migrate database + seed database + run flask ```/python-project```
    ```javascript
    pipenv shell
    flask db upgrade
    flask db migrate
    flask db seed all
    flask run
    ```

6. Keeping flask running, start the app by running ```npm start``` in ```/react-app```

7. Enjoy!

## Libraries Used
<img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" height=40/><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" height=40/><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" height=40/><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" height=40/><img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" height=40/><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlalchemy/sqlalchemy-original.svg" height=40/><img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" height=40/><img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" height=40/><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" height=40/><img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" height=40/>

## Features
### Login + Signup
![login](https://i.ibb.co/V9qD17g/Screen-Shot-2022-09-04-at-8-24-01-PM.png)
![signup](https://i.ibb.co/QbVgTYL/Screen-Shot-2022-09-04-at-8-27-21-PM.png)

### Home
Home feed:
![image](https://i.ibb.co/R754Rzv/Screen-Shot-2022-09-04-at-8-48-38-PM.png)

Book page:
![single post](https://i.ibb.co/jJpRPGz/Screen-Shot-2022-09-04-at-8-52-55-PM.png)

### Create Review/Edit Review
![create review](https://i.ibb.co/kxdRJkS/Screen-Shot-2022-09-04-at-9-11-26-PM.png)
![edit review](https://i.ibb.co/7GNtDR1/Screen-Shot-2022-09-04-at-9-13-46-PM.png)

### Category Page
![category](https://i.ibb.co/SmMvJK2/Screen-Shot-2022-09-04-at-9-15-27-PM.png)

### Cart
Cart:
![cart](https://i.ibb.co/cvz6KJR/Screen-Shot-2022-09-04-at-9-05-32-PM.png)

## Future Features
- Author Pages
   - Users will be able to view books by author
- Book recommendation page
    - Users will be recommended books based on their page visited history
- Profile Page
    - Users will be able to view all reviews by a user on their profile page.
