# EasyLedger
**Milestone project 3: Data Centric Development - Code Institute**

During these strange times with all the global lockdowns, individuals and families
want to know how they are doing financially.
In these times of insucrity I want to provide a tool that is easy to understand and able to provide
a clear overview of the cashflow.

In short:
- A tool for end-users to easily manage their cashflow.
- Providing a clear overview on a dashboard with graphs.

## Demo
A live demo version can be found **[here](https://easyledgr.herokuapp.com/)**

![Design](https://github.com/D1ang/EasyLedger/blob/master/mockups/presentation.png)

## UX
To make the tool as clear as possible to the end-user a basic but very clean design has been chosen.
Options are minimalistic and the end-user won't be overloaded with options to choose from.
The form modals have been built up in an easy to understand logic.

## User stories
With years of home accounting experience, I have built a well-known form and work ethic in creating a basic accounting sheet in Excel.
I asked my family members and friends what they would like to see in a Ledger app and came up with the following points:

 - As a user, I want to easily fill in the forms for a transaction (**input modals**)
 - As a user, I want a clear overview of my cashflow (**dashboard graphs**)
 - As a user, I want the tool and options to be quick (**options placement**)
 - As a user, I want to use the app everywhere from phone to PC (**Responsiveness**)

### Strategy
The goal of the tool is to make it as easy as possible to access, short and informative,
while striving for a minimalist and user-friendly design as possible.

### Scope
For the end-users, I wanted to provide them with an easy to understand (first-view-use) tool.
This way, they would be able to manage their cashflow on their own and have a proper overview.

### Structure
The tool is structured to get the right information as quickly as possible.
The order of the options provided are placed in a logic workflow while the design provided will use modals to be easy to understand
and gives the end-user a straight away no-nonsense feedback.

### Skeleton
By using Figma the following wireframes were created:

[BasicLedger wireframe](https://github.com/D1ang/EasyLedger/blob/master/mockups/wireframe.pdf)

[Responsive phone wireframe](https://github.com/D1ang/DIGIdesigner/blob/master/mockups/wireframe-sm.pdf)

### Surface
The colours are almost non-existent a very clean minimalist design has been chosen to force the attention to the provide design.
Users won't be scared or afraid to use the tool by this easy to understand design.
The font Quicksand had been chosen because of its light thin look and nice round corners that fits perfectly to the overall design.
The base colour is green which is most commonly associated with: Harmony, safety, balanced, and hope.
For the table buttons the colour blue is used to stand out and grab the end users attention in the table.

## Technologies
1.  HTML - *To create the basics*
2.  CSS - *To improve placements and design*
3.  JavaScript - *The engine to create user interaction*
4.  Python - *To communicate to the backend*
5.  MongoDB - *Opensource database to save the transactions*
6.  Flask - *Microwebframework in python*
7.  Bootstrap - *To make the design responsive*
8.  Font Awesome - *Easy icon access for the gender icons*
9.  Figma - *To create a wireframe*

### JavaScript Libraries
1. jquery - *To improve inputfield feedback*
2. flatpickr - *lightweight, powerful javascript datetimepicker with no dependencies*
3. DataTables - *Adds advanced interaction controlsto to HTML tables*

### Python Plugins
1. Pygal - *Sexy python charting*
2. Json - *To grab the data from MongoDB in Json format*
3. Locale - *To set proper currency*

## Features
This tool creates graphs based on the inputted transactions by the end-user (Bars and Pie) and show a nice table based overview of the transactions.
The dashboard gives a clear and easy to understand overview of the: total debit, total credit and total balance.
The graphs are a bar based graph with a categorie overview of all the outgoing transactions and a pi chart with the total balance overview.
On the transactions page the end-user can sort the transactions or search for a specific transaction.
Transactions can be: created, read, updated and deleted (CRUD) The table will take care for the proper pagination to keep the amount of information small and basic.

- Release 1.0 - Ledger with CRUD functionality and a debit/credit overview
- Release 2.0 - Dashboard with graphs overview


### Features Left to Implement
In the future I would like to add a login feauture so the Ledger can be secured and have multi-user support.
Also, we would like to add some animations to the ledger to make a nicer user experience.
Extra options I would liek to add is: a seperate creditcard overview, monthly overview, print to pdf and more graphs.

## Testing
All fields will function and everything will be properly written to a Mongo database.

This site was tested across multiple screen sizes on Chrome, Safari and Internet Explorer. To ensure compatibility and responsiveness it's also tested on an android based mobile device (OnePlus5). When the webpage is visited on larger screens the shirt sample will be shown on the right side, but will be placed on the bottom on smaller screens.

The tool has been bug tested by several user on different ages and countries. The choice for not using Jasmine has been made. Jasmine is not easy to understand and won't give the understandable feedback that an end-user can provide.

## Bugs:

### Jquery not loading on external main.js:
I loaded the minified slim version which doesn't load all the requerements.
By replacing it with just the slim version the bug was fixed and external file loading with it.

### Jquery 3.5 not loading the navbar
From some reason still unclear the latest version of Jquery has a bug that the bootstap navbar toggler stops working.
It is clickable but I won't do anything or provides any errors on the console.
By downgrading Jquery to 3.4.1 the bug is fixed and the Bootstrap navbar toggler functions as it should.

### Locale show improper currence on Heroku server
As functions properly on a local server after deploying the code to Heroku the currency changed to US dollar.
Although the ledger will mostly be used in the EURO region I changed `locale.setlocale(locale.LC_ALL, '')` to `locale.setlocale(locale.LC_ALL, 'en_IE.utf8')`
To force it to load the EURO currency on the Heroku server. I need to find a different solutions for a proper fix eventually.

### The ISOdate adventure
I tried to use IsoDates but with the current knowledge wasn't succesfull to properly apply them.
MongoDB would accept the input as an IsoDate but returning them to readable dates in DataTables was a bit problematic.
I do understand that it would be a better use of code but I went around the problem by using a string for the dates.
By using string based dates the DataTables library can easily search on the month name, which would be a extra bonus in usage.

The following tests have been used to ensure proper site functionality:

- [GTmetrix](https://gtmetrix.com/): To test on website loading times.
- [W3C HTML Validator](https://validator.w3.org/): This validator checks the mark-up validity of Web documents in HTML.
- [W3C CSS Validator](https://jigsaw.w3.org/css-validator/): This validator checks the mark-up validity of Web documents in CSS.
- [Unicorn Revealer](https://chrome.google.com/webstore/detail/unicorn-revealer/lmlkphhdlngaicolpmaakfmhplagoaln?hl=en-GB): Inspecting on overflow errors.
- [Autoprefixer CSS online](https://autoprefixer.github.io/): Autoprefixer is a PostCSS plugin which parses your CSS and adds vendor prefixes.
- [JSHint](https://jshint.com/): A static code analysis tool for JavaScript.
- [Visual Studio Code](https://code.visualstudio.com/): Using the built-in tools to test on proper code.

## Deployment
This site is hosted using Heroku and Mongo Atlas, this code is deployed to Github directly from the master branch.
The deployed site will update automatically upon new commits to the master branch.

To run locally, you can clone this repository directly into the editor of your choice by entering
`git clone https://github.com/D1ang/EasyLedger.git` into your terminal.
To cut ties with this GitHub repository, type `git remote rm origin` into the terminal.

When the code is downloaded as a .zip it can be unzipped To get is up and running some extra steps need to be taken as will be explained in the following text.
The code will be executed in the browser that is set as main browser, this can be Chrome or one of the other available browsers.
As this code will use Mongo a Mongo database needs to be used. this cna be a installed Database, one running on a local server or one provided on Mongo's Atlas platform. It's up to you there are allot of guides on the intertnet on creating a MongoDB I advise to use MongoDB Atlas[link](https://www.mongodb.com/cloud/atlas) As it is quick, easy and `FREE`

When a mongo server has been created the following collection needs to be created: `easyLedger`
After the database is created the following databases need to be made: `categories` and `transactions`
When those are in place some categies need to be addded to the categories.
Now that Mongo is up and runnign we need to create a conenction to it.
For running the code on a non Heroku server the `env.py` file needs to be created in the root of the code, in this file needs to be the following:
`import os`
`os.environ["MONGO_URI"] = 'YOUR MONGODB SERVER URL'`

Change the "YOUR MONGODB SERVER URL" to the url of your Mongo database.
I kept the .vscode available to so the code can be runned in debug mode easily and tested. It is advisable to create a virtual enviroment in VS code.

## Credits

### Content
All text content on this tool were written by me.
The logo is created by me.

### Media
For building this Ledger the basics of the Tasker mini project provided by Code Institute has been used.


### Acknowledgements
- Sentdex Pygal tutorial [link](https://www.youtube.com/watch?v=BIttXQO0bXw&list=PLQVvvaa0QuDc_owjTbIY4rbgXOFkUYOUB&index=33)
- Pygal svg charts tutorial [link](https://code.tutsplus.com/tutorials/intro-to-pygal-a-python-svg-charts-creator--cms-27692)
- W3schools.com [link](https://www.w3schools.com/)
- flatpickr [link](https://github.com/flatpickr/flatpickr)
- DataTables [link](https://datatables.net/)
- Medale oluwafemi (Mentor): [link](https://github.com/omedale) For explaining and helping me to get the data from mongoDB with Json to an edit modal.
