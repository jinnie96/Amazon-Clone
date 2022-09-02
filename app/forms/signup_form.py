from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Email, ValidationError, Length
# from email_validator import validate_email, EmailNotValidError
from app.models import User



def user_exists(form, field):
    # Checking if user exists
    email = field.data
    user = User.query.filter(User.email == email).first()
    if user:
        raise ValidationError('Email address is already in use.')


def username_exists(form, field):
    # Checking if username is already in use
    username = field.data
    # print(username)
    user = User.query.filter(User.username == username).first()
    if user:
        raise ValidationError('Username is already in use.')

def email_format(form, field):
    email = field.data
    # print(email, "EEEEMMMM")
    if not "@" in email:
        raise ValidationError("Invalid Email")

class SignUpForm(FlaskForm):
    fullname = StringField('fullName', validators=[DataRequired()])
    password = StringField('password', validators=[DataRequired()])
    username = StringField(
        'username', validators=[DataRequired(), username_exists, Length(min=2, max=50, message='Must be 2-50 characters.')])
    email = StringField('email', validators=[DataRequired(), user_exists, email_format])
