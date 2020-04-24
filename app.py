import os
import pymongo
import pygal
import json
import locale
from flask import Flask, render_template, redirect, request, url_for
from flask_pymongo import PyMongo
from pygal.style import Style
from bson.objectid import ObjectId
from bson import json_util

from os import path
if path.exists('env.py'):
    import env

app = Flask(__name__)

app.config['MONGO_URI'] = os.environ.get('MONGO_URI')

mongo = PyMongo(app)

locale.setlocale(locale.LC_ALL, 'en_IE.utf8')


# Loads the Bar- and Piechart for the dashboard
def bar_chart():
    credit_data = list(mongo.db.transactions.aggregate([
        {'$match': {'transition': 'credit'}},
        {'$group': {'_id': '$category_name', 'subtotal': {'$sum': '$amount'}}}
    ]))

    custom_style = Style(plot_background='transparent')
    chart = pygal.Bar(style=custom_style, title=u'Transactions', show_legend=True)

    credit_subtotals = [record['subtotal'] for record in credit_data]

    chart.x_labels = [record['_id'] for record in credit_data]
    chart.add('credit', credit_subtotals)
    chart_data = chart.render_data_uri()
    return chart_data


def pie_chart():
    custom_style = Style(plot_background='transparent')
    chart = pygal.Pie(style=custom_style, title=u'Total balance', inner_radius=.65, show_legend=True)

    chart.add('Credit', credit_total())
    chart.add('Debit', debit_total())
    chart_data = chart.render_data_uri()
    return chart_data


# Page views
@app.route('/')
def get_dashboard():
    return render_template('dashboard.html',
                           debit=locale.currency(debit_total(), grouping = True),
                           credit=locale.currency(credit_total(), grouping = True),
                           total=locale.currency(grand_total(), grouping = True),
                           bar_chart=bar_chart(),
                           pie_chart=pie_chart())


@app.route('/get_transactions')
def get_transactions():
    return render_template('transactions.html',
                           transactions=mongo.db.transactions.find(),
                           categories=mongo.db.categories.find(),
                           editCategories=mongo.db.categories.find())


# Calculates the totals for the dashboard view
def debit_total():
    transaction_amount = []

    for record in mongo.db.transactions.find({'transition': 'debit'}):
        transaction_amount.append(float(record['amount']))
    return sum(transaction_amount)


def credit_total():
    transaction_amount = []

    for record in mongo.db.transactions.find({'transition': 'credit'}):
        transaction_amount.append(float(record['amount']))
    return sum(transaction_amount)


def grand_total():
    calc = float(debit_total() - credit_total())
    return calc


# CRUD functionality for the transactions page
@app.route('/insert_transaction', methods=['POST'])
def insert_transaction():
    transactions = mongo.db.transactions
    transactions.insert_one({'transition': request.form.get('transition'),
                             'category_name': request.form.get('category'),
                             'details': request.form.get('description'),
                             'date': request.form.get('date'),
                             'amount': round(float(request.form.get('amount')), 2)})

    return redirect(url_for('get_transactions'))



@app.route('/edit_transaction/<transaction_id>')
def edit_transaction(transaction_id):
    # Search for the transaction by ID and create a Json
    the_transaction = mongo.db.transactions.find_one({'_id': ObjectId(transaction_id)})
    return json.dumps(the_transaction, default=json_util.default)


@app.route('/update_transaction/<transaction_id>', methods=['POST'])
def update_transaction(transaction_id):
    transactions = mongo.db.transactions
    transactions.update({'_id': ObjectId(transaction_id)},
                        {'transition': request.form.get('editTransition'),
                         'category_name': request.form.get('editCategory'),
                         'details': request.form.get('editDescription'),
                         'date': request.form.get('editDate'),
                         'amount': round(float(request.form.get('editAmount')), 2)})

    return redirect(url_for('get_transactions'))


@app.route('/delete_transaction/<transaction_id>', methods=['POST'])
def delete_transaction(transaction_id):
    mongo.db.transactions.remove({'_id': ObjectId(transaction_id)})
    return redirect(url_for('get_transactions'))


if __name__ == '__main__':
    app.run(host=os.environ.get('IP'),
            port=int(os.environ.get('PORT')),
            debug=False)