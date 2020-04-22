# EasyLedger
**Milestone project 3: Data Centric Development - Code Institute**

During these strange times with all the global lockdowns, individuals, and families
want to know how they are doing financially.
In these times of insecurity, I want to provide a tool that is easy to understand and able to provide
a clear overview of the cashflow.

In short:
- A tool for end-users to easily manage their cashflow.
- Providing a clear overview on a dashboard with graphs.

## Demo
A live demo version can be found **[here](https://easyledgr.herokuapp.com/)**

![Design](https://github.com/D1ang/EasyLedger/blob/master/mockups/presentation.png)

## UX
To make the tool as clear as possible to the end-user a basic but very clean design has been chosen.
Options are minimalistic and the end-user will not be overloaded with options to choose from.
The form modals have been built with this in mind and have an easy to understand logic.

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

[Responsive phone wireframe](https://github.com/D1ang/EasyLedger/blob/master/mockups/wireframe-sm.pdf)

### Surface
The colours are almost non-existent a very clean minimalist design has been chosen to force the attention to the provide design.
Users will not be scared or afraid to use the tool by this easy to understand design.
The font Quicksand had been chosen because of its light thin look and nice round corners that fits perfectly to the overall design.
The base colour is green which is most associated with: Harmony, safety, balanced, and hope.
For the table buttons the colour blue is used to stand out and grab the end-user’s attention in the data table.

## Technologies
1.  HTML - *To create the basics*
2.  CSS - *To improve placements and design*
3.  JavaScript - *The engine to create user interaction*
4.  Python - *To communicate to the backend*
5.  MongoDB - *Opensource database to save the transactions*
6.  Flask - *Micro web framework in python*
7.  Bootstrap - *To make the design responsive*
8.  Font Awesome - *Easy icon access for the icons*
9.  Figma - *To create a wireframe*

### JavaScript Libraries
1. jQuery - *To improve input field feedback*
2. flatpickr - *lightweight, powerful JavaScript datetimepicker with no dependencies*
3. DataTables - *Adds advanced interaction controls to HTML tables*

### Python Plugins
1. Pygal - *Sexy python charting*
2. Json - *To grab the data from MongoDB in Json format*
3. Locale - *To set proper currency*

## Features
This tool creates graphs based on the inputted transactions by the end-user (Bars and Pie) and show a nice table-based overview of the transactions.
The dashboard gives a clear and easy to understand overview of the: total debit, total credit, and total balance.
The graphs are a bar-based graph with a category overview of all the outgoing transactions and a pie chart with the total balance overview.
On the transactions page the end-user can sort the transactions or search for a specific transaction.
Transactions can be created, read, updated, and deleted (CRUD) The table will take care for the proper pagination to keep the amount of information small and basic.

- Release 1.0 - Ledger with CRUD functionality and a debit/credit overview
- Release 2.0 - Dashboard with graphs overview

### Features Left to Implement
In the future I would like to add a login feature so the ledger can be secured and have multi-user support.
Also, I would like to add some animations to the ledger to make a nicer user experience.
Extra options I would like to add is a separate credit card overview, monthly overview, print to pdf and more graphs.

## Testing
All fields will function, and everything will be properly written to a Mongo database.

This site was tested across multiple screen sizes on Chrome, Safari, and Internet Explorer. To ensure compatibility and responsiveness it is also tested on an android based mobile device (OnePlus5).

The tool has been bug tested by several users with different ages and from different countries. The choice for not using Jasmine has been made. Jasmine is not easy to understand and will not give the understandable feedback that an end-user can provide.

## Bugs

### jQuery not loading on external main.js:
I loaded the minified slim version which does not load all the requirements.
By replacing it with just the slim version the bug was fixed and external file loading with it.

### jQuery 3.5 not loading the navbar
From some reason still unclear the latest version of jQuery has a bug that prevents the bootstrap navbar toggler from working.
It is clickable but I will not do anything an does not provide any errors on the console.
By downgrading jQuery to 3.4.1 the bug is fixed and the Bootstrap navbar toggler functions as it should.

### Locale show improper currency on Heroku server
As functions properly on a local server after deploying the code to Heroku the currency changed to US dollars.
Although the ledger will mostly be used in the EURO region, I changed `locale.setlocale(locale.LC_ALL, '')` to `locale.setlocale(locale.LC_ALL, 'en_IE.utf8')`
to force it to load the EURO currency on Heroku servers. I need to find a different solution for a proper fix eventually.

### The ISOdate adventure
I tried to use ISOdates but with the current knowledge was not successful to properly apply them.
MongoDB would accept the input as an ISOdate but returning them to readable dates in DataTables was a bit problematic.
I do understand that it would be a better use of code, but I went around the problem by using a string for the dates.
By using string-based dates the DataTables library can easily search on the month name, which is an extra bonus in usage.

The following tests have been used to ensure proper site functionality:

- [GTmetrix](https://gtmetrix.com/): To test on website loading times.
- [W3C HTML Validator](https://validator.w3.org/): This validator checks the mark-up validity of Web documents in HTML.
- [W3C CSS Validator](https://jigsaw.w3.org/css-validator/): This validator checks the mark-up validity of Web documents in CSS.
- [Unicorn Revealer](https://chrome.google.com/webstore/detail/unicorn-revealer/lmlkphhdlngaicolpmaakfmhplagoaln?hl=en-GB): Inspecting on overflow errors.
- [Autoprefixer CSS online](https://autoprefixer.github.io/): Autoprefixer is a PostCSS plugin which parses your CSS and adds vendor prefixes.
- [JSHint](https://jshint.com/): A static code analysis tool for JavaScript.
- [Visual Studio Code](https://code.visualstudio.com/): Using the built-in tools to test on proper code.

## Deployment
The example of this tool is hosted by using Heroku and Mongo Atlas, this code is deployed to GitHub directly from the master branch.
The deployed site will update automatically upon new commits to the master branch.

To run locally, you can clone this repository directly into the editor of your choice by entering
`git clone https://github.com/D1ang/EasyLedger.git` into your terminal.
To cut ties with this GitHub repository, type `git remote rm origin` into the terminal.

When the code is downloaded as a .zip it can be unzipped.
To get it up and running some extra steps need to be taken as will be explained in the following text:

- The code will be executed in the browser that is set as main browser, this can be Chrome or one of the other available browsers.
- This tool will use a Mongo database which can be running on a local machine or on Mongo's Atlas platform.
- I advise to use [Mongo Atlas](https://www.mongodb.com/cloud/atlas) As it is quick, easy and `Free`

- When a mongo server has been created the following collection needs to be created: `easyLedger`
- After the collection is created the following databases need to be made: `categories` and `transactions`
- When those are in place some categories need to be added to the categories database, (like example: Creditcard, Income, Other)

Now that Mongo is up and running, we need to create a connection to it.
For running the code on a non-Heroku server the `env.py` file needs to be created in the root folder of the code,
in this file needs to be the following code:

```
import os
os.environ["MONGO_URI"] = 'YOUR MONGODB SERVER URL'
```

Change the **"YOUR MONGODB SERVER URL"** to the URL of your Mongo database and you're good to go.
When using Heroku the `env.py` does **Not** need to be created. On Heroku you can set up Config Vars under the settings option.
The following Config Vars need to be set:

```
IP:         0.0.0.0
MONGO_URI:  "YOUR MONGODB SERVER URL"
PORT:       5000
```

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
- Medale Oluwafemi (Mentor): [link](https://github.com/omedale) (for explaining and helping me to get the data from mongo with Json to an edit modal)