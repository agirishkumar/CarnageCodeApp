from flask import Flask, request, jsonify
from joblib import load
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

# Load models and vectorizers
naive_bayes_count_model = load('backend/naive_bayes_count_model.joblib')
naive_bayes_tfidf_model = load('backend/naive_bayes_tfidf_model.joblib')
logistic_count_model = load('backend/logistic_count_model.joblib')
logistic_tfidf_model = load('backend/logistic_tfidf_model.joblib')
count_vectorizer = load('backend/count_vectorizer.joblib')
tfidf_vectorizer = load('backend/tfidf_vectorizer.joblib')

@app.route('/predict', methods=['POST'])
def predict():
    """
    Predicts the sentiment of a given text based on the specified model and vectorizer types.

    Parameters:
        None

    Returns:
        A JSON response containing the following fields:
        - text (str): The input text.
        - model_type (str): The type of model used for prediction.
        - vectorizer_type (str): The type of vectorizer used for feature extraction.
        - sentiment (str): The predicted sentiment of the input text ('Positive' or 'Negative').

    Raises:
        HTTPException: If the specified model or vectorizer type is invalid.
    """
    data = request.get_json()
    text = data['text']
    model_type = data['model_type']
    vectorizer_type = data['vectorizer_type']

    # Select the appropriate model and vectorizer
    if model_type == 'naive_bayes' and vectorizer_type == 'count':
        vectorizer = count_vectorizer
        model = naive_bayes_count_model
    elif model_type == 'naive_bayes' and vectorizer_type == 'tfidf':
        vectorizer = tfidf_vectorizer
        model = naive_bayes_tfidf_model
    elif model_type == 'logistic' and vectorizer_type == 'count':
        vectorizer = count_vectorizer
        model = logistic_count_model
    elif model_type == 'logistic' and vectorizer_type == 'tfidf':
        vectorizer = tfidf_vectorizer
        model = logistic_tfidf_model
    else:
        return jsonify({"error": "Invalid model or vectorizer type"}), 400

    # Process the input text
    input_vec = vectorizer.transform([text])
    prediction = model.predict(input_vec)
    sentiment = 'Positive' if prediction[0] == 1 else 'Negative'

    return jsonify({
        "text": text,
        "model_type": model_type,
        "vectorizer_type": vectorizer_type,
        "sentiment": sentiment
    })


@app.route('/')
def home():
    user = User(username='Carnage')
    db.session.add(user)
    db.session.commit()
    return 'Welcome to CarnageCode! Users: ' + ', '.join([user.username for user in User.query.all()])


if __name__ == '__main__':
    app.run(port=5001,debug=True, host='0.0.0.0')


