from flask_wtf import FlaskForm
from wtforms import StringField, TextAreaField, IntegerField, SubmitField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import Post

class AddReviewForm(FlaskForm):
    rating = IntegerField('rating')
    description = TextAreaField('description', validators=[DataRequired()])
    title = StringField('title', validators=[DataRequired()])
    submit = SubmitField('Submit')
