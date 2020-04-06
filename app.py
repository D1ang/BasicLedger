import os
from flask import Flask, render_template, redirect, request, url_for
from flask_pymongo import PyMongo
from bson.objectid import ObjectId

from os import path
if path.exists("env.py"):
    import env

app = Flask(__name__)

app.config["MONGO_DBNAME"] = 'database'
app.config["MONGO_URI"] = os.environ.get('MONGO_URI')


mongo = PyMongo(app)


@app.route("/")
@app.route('/get_dashboard')
def get_dashboard():
    return render_template("dashboard.html")


"""Creates the route to the add transaction page and creates a find for the catagories list"""
@app.route('/get_transactions')
def get_transactions():
    return render_template('transactions.html',
                           transactions = mongo.db.transactions.find(),
                           categories=mongo.db.categories.find())
                           #transactions = mongo.db.transactions.find({"catagory":"Household"}))


"""Creates a transaction to the database after the button is pressed"""
@app.route('/insert_transaction', methods=['POST'])
def insert_transaction():
    transactions = mongo.db.transactions
    transactions.insert_one(request.form.to_dict())
    return redirect(url_for('get_transactions'))


if __name__ == '__main__':
    app.run(host=os.environ.get('IP'),
            port=int(os.environ.get('PORT')),
            debug=True)
