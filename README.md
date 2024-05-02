# Personality Quiz Site
A website with a fun personality quiz that provides characters & some key characteristics as a result.

Each question of the quiz is on a separate page and users can navigate back to previous questions prior to submission.\
Users can compare against historical scores as well as others' scores.\
Results can be shared via downloading the final graphic.
## Challenges
- The most interesting challenges you encountered
## Usage
How to bundle & run code.
### Dependencies
- [React](https://react.dev/)
- [Flask](https://flask.palletsprojects.com/en/3.0.x/)
### Installation Prerequisites
In frontend directory (personality-site)
- `npm install`
- `npm install react-router-dom`
- `npm install axios`
- `npm run build`

In root directory
- `pip install Flask`
- `pip install -U Flask-SQLAlchemy`

In backend directory (flask-server)
- `python3 -m venv venv`
- `source venv/bin/activate`
### Available Scripts
`npm start` - Runs the app in development mode. \
Open [http://localhost:3000](http://localhost:3000) to view it in a browser; the
page will reload on changes.

`cd` into `flask-server`, then run `python server.py` - Hosts a Flask app
locally so the React app can make API calls.

