from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///quiz_results.db'
db = SQLAlchemy(app)

# DB model
class QuizResult(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    question_1 = db.Column(db.String(100))
    question_2 = db.Column(db.String(100))
    question_3 = db.Column(db.String(100))
    question_4 = db.Column(db.String(100))
    question_5 = db.Column(db.String(100))
    question_6 = db.Column(db.String(100))
    question_7 = db.Column(db.String(100))
    question_8 = db.Column(db.String(100))
    question_9 = db.Column(db.String(100))
    question_10 = db.Column(db.String(100))
    question_11 = db.Column(db.String(100))
    question_12 = db.Column(db.String(100))

    # String representation of db model
    def __repr__(self):
        return '<QuizResult %r>' % self.id

# Create all database tables
with app.app_context():
    db.create_all()

@app.route('/api/quiz', methods=['POST'])
def save_quiz_result():
    data = request.json
    return jsonify({"message": "User result saved successfully."})

if __name__ == "__main__":
    app.run(debug=True, port=8080)
