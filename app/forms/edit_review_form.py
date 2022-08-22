from flask_wtf import FlaskForm
from wtforms import StringField, TextAreaField, IntegerField, SubmitField
from wtforms.validators import DataRequired, Email, ValidationError, Length
# from app.models import Post

class EditReviewForm(FlaskForm):
    rating = IntegerField('rating', validators=[DataRequired()])
    description = TextAreaField('description', validators=[DataRequired()])
    title = StringField('title', validators=[DataRequired(), Length(max=50), Length(min=1)])
    submit = SubmitField('Submit')
