from flask import Flask

app = Flask(__name__)

# Define a route for the homepage
@app.route('/')
def hello():
    return 'Hello World!'

# Run the app
if __name__ == '__main__':
    app.run(debug=True)
