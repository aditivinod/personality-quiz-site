# Personality Quiz Site
A website with a fun personality quiz that provides characters & some key characteristics as a result.

Each question of the quiz is on a separate page and users can navigate back to previous questions prior to submission.\
Users can compare against historical scores as well as others' scores.\
Results can be shared via downloading the final graphic.
## Challenges
- Laying out graphics over the background.
- Making the final pages look presentable.
- Creating and updating a SQL database through a front end while maintaining certain constraints (ex: each question should only be added once, storing the answered status of questions, and calculating final results.
- Figuring out how to properly debug the backend-frontend interactions when values were the wrong type or not being sent correctly.
## Usage
### Dependencies
- [React](https://react.dev/)
- [Flask](https://flask.palletsprojects.com/en/3.0.x/)
### Installation Prerequisites
- `pip install Flask`
- `pip install -U Flask-SQLAlchemy`
  
In frontend directory (personality-site)
- `npm install`
- `npm install react-router-dom`
- `npm install axios`
- `npm run build`

In backend directory (flask-server)
- `python3 -m venv venv`
- `source venv/bin/activate`
### Available Scripts
`cd` into `flask-server`, then run `python server.py` - Hosts a Flask app
locally so the React app can make API calls.

`npm start` - Runs the app in development mode. \
Open [http://localhost:3000](http://localhost:3000) to view it in a browser; the
page will reload on changes.



