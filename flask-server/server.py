from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
import uuid

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///quiz_results.db'
db = SQLAlchemy(app)

# DB model
class QuizResult(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.String(50))
    question_number = db.Column(db.Integer)
    response_type = db.Column(db.String(50))
    answered = db.Column(db.Boolean, default=False)
    organality = db.Column(db.String(50), default='')

    def __init__(self, user_id, question_number, response_type, answered, organality):
        self.user_id = user_id
        self.question_number = question_number
        self.response_type = response_type
        self.answered = answered
        self.organality = organality

    # String representation of db model
    def __repr__(self):
        return '<QuizResult %r>' % self.id

# Create all database tables
with app.app_context():
    db.create_all()

@app.route('/api/start-test', methods=['GET', 'POST'])
def start_test():
    # Create a new id
    id = str(uuid.uuid4())

    # Return the user ID in the response
    return jsonify({"id": id, "message": "New user created successfully."}) 

# Save quiz question results into a row.
@app.route('/api/quiz', methods=['POST'])
def save_quiz_result():
    data = request.json
    user_id = data.get('userID')
    question_number = data.get('questionNumber')
    response = data.get('response')

    # Check if question_number alr exists
    result_exists = QuizResult.query.filter_by(user_id=user_id, question_number = question_number).first()

    if result_exists:
        result_exists.response_type = response
        result_exists.answered = bool(response)
    else: 
        new_result = QuizResult(user_id = user_id, question_number = question_number, response_type = response, answered = bool(response), organality = '')
        db.session.add(new_result)
        db.session.commit()

    db.session.commit()

    return jsonify({"message": "Quiz result saved successfully."}), 200

@app.route('/api/result', methods=['GET'])
def post_result():
    user_id = request.args.get('userID')

    if user_id is None:
        return jsonify({"Error": "User ID not provided."})

    user_results = QuizResult.query.filter_by(user_id=user_id).all()

    if not user_results:
        return jsonify({"Error": "No results found."}), 404

    # Calculate user's result class.
    result_classes = [result.response_type for result in user_results]
    result_class = max(set(result_classes), key=result_classes.count)

    # Update organality each of the user's QuizResults
    for result in user_results:
        result.organality = result_class
    db.session.commit()

    total_users = QuizResult.query.distinct(QuizResult.user_id).count()

    # Calculate the percentage of users with the same result class as the current user
    same_result_class = QuizResult.query.filter_by(response_type=result_class).distinct(QuizResult.user_id).count()
    percentage = round((same_result_class / total_users) * 100 if total_users != 0 else 0, 2)

    return jsonify({
        "result_class": result_class,
        "percentage": percentage,
    })


if __name__ == "__main__":
    app.run(debug=True, port=8080)
