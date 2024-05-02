from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///quiz_results.db'
db = SQLAlchemy(app)

# DB model
class QuizResult(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    question_number = db.Column(db.Integer)
    response_type = db.Column(db.String(50))
    answered = db.Column(db.Boolean, default=False)

    def __init__(self, question_number, response_type, answered):
        self.question_number = question_number
        self.response_type = response_type
        self.answered = answered

    @classmethod
    def calculate_totals(cls):
        totals = db.session.query(cls.response_type, db.func.count()).group_by(cls.response_type).all()
        return totals

    # String representation of db model
    def __repr__(self):
        return '<QuizResult %r>' % self.id

# Create all database tables
with app.app_context():
    db.create_all()

# Save quiz question results into a row.
@app.route('/api/quiz', methods=['POST'])
def save_quiz_result():
    data = request.json
    question_number = data.get('questionNumber')
    response = data.get('response')

    # Check if question_number alr exists
    result_exists = QuizResult.query.filter_by(question_number = question_number).first()

    if result_exists:
        result_exists.response_type = response
        result_exists.answered = bool(response)
    else: 
        new_result = QuizResult(question_number=question_number, response_type=response, answered=bool(response))
        db.session.add(new_result)

    db.session.commit()

    return jsonify({"message": "Quiz result saved successfully."})

@app.route('/api/result', methods=['GET'])
def post_result():
    totals = QuizResult.calculate_totals()
    result = max(totals, key=lambda x: x[1])
    result_class = result[0]
    result_qs_selected = result[1]
    return jsonify({
        "result_class": result_class,
        "result_qs_selected": result_qs_selected
        })

if __name__ == "__main__":
    app.run(debug=True, port=8080)
