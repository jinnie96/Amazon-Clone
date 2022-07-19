from flask_wtf import FlaskForm
from wtforms import StringField, TextAreaField, IntegerField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import Post

class AddReviewForm(FlaskForm):
    description = TextAreaField('description', validators=[DataRequired()])
    title = StringField('title', validators=[DataRequired()])
