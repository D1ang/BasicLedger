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


@app.route('/get_transactions')
def get_transactions():
    return render_template('transactions.html',
                           transactions = mongo.db.transactions.find())
                           #transactions = mongo.db.transactions.find({"catagory":"Household"}))


@app.route('/add_transaction')
def add_transaction():
    return render_template("add_transaction.html")


@app.route('/insert_transaction', methods=['POST'])
def insert_transaction():
    transactions = mongo.db.transactions
    transactions.insert_one(request.form.to_dict())
    return redirect(url_for('get_transactions'))


if __name__ == '__main__':
    app.run(host=os.environ.get('IP'),
            port=int(os.environ.get('PORT')),
            debug=True)
