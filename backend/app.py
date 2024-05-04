from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://asuran:530041@localhost/carnage_db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)

    def __repr__(self):
        return '<User %r>' % self.username

with app.app_context():
    db.create_all()

@app.route('/')
def home():
    user = User(username='Carnage')
    db.session.add(user)
    db.session.commit()
    return 'Welcome to CarnageCode! Users: ' + ', '.join([user.username for user in User.query.all()])


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')


