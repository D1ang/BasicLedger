# BasicLedger
**Milestone project 3: Data Centric Development - Code Institute**

During these strange times with Covid-19 lockdowns, individuals and families
want to know how they are doing financially.
In these times of insucrity I want to provide a tool that is easy to understand and able to provide
a clear overview of the cashflow.

In short:
- A tool for end-users to easily manage their cashflow.
- Providing a clear overview on a dashboard with graphs.

## Demo
A live demo version can be found **[here](https://d1ang.github.io/BasicLedger/)**

![Design]()

## UX
To make the tool as clear as possible to the end-user a basic but very clean design has been chosen.
Options are minimalistic and the end-user won't be overloaded with options to choose from.
The form had been built up in an easy to understand logic.

## User stories
With years of home accounting experience, I have built a well-known form and work ethic in creating a basic accounting sheet in Excel.
I asked my family members and friends what they would like to see in a Ledger app and came up with the following points:

 - As a user, I want to easily fill in the forms for a transaction (**input modals**)
 - As a user, I want a clear overview of my cashflow (**dashboard graphs**)
 - As a user, I want the tool and options to be quick (**options placement**)
 - As a user, I want to use the app everywhere from phone to PC (**Responsiveness**)
 - As a user, I want to have a secure login (**Login modal**)

### Strategy
The goal of the tool is to make it as easy as possible to access, short and informative,
while striving for a minimalist and user-friendly design as possible.

### Scope
For the end-users, I wanted to provide them with an easy to understand (first-view-use) tool.
This way, they would be able to manage their cashflow on their own and have a proper overview.

### Structure
The tool is structured to get the right information as quickly as possible.
The order of the options provided are placed in a logic workflow while the design provided will be always visible
and gives the end-user a straight away no-nonsense feedback.

### Skeleton
By using Figma the following wireframes were created:

[BasicLedger wireframe]()

[Responsive phone wireframe]()

### Surface
The colours are almost non-existent a very clean minimalist design has been chosen to force the attention to the provide design.
Users won't be scared or afraid to use the tool by this easy to understand design.
The font Montserrat had been chosen because of its light thin look that fits perfectly to the field outlines.
Al the buttons are outlined to fit the input fields.
Green is the colour most commonly associated with: Harmony, safety, balanced, and hope.

## Technologies
1.  HTML - *To create the basics*
2.  CSS - *To improve placements and design*
3.  Bootstrap - *To make the design, input fields and buttons responsive*
4.  Figma - *To create a wireframe*
5.  JavaScript - *The engine to create user interaction*
8.  Font Awesome - *Easy icon access for the gender icons*
9.  Flask
10. MongoDB

### JavaScript Libraries
1. jquery - *To improve inputfield feedback*
2. flatpickr - *lightweight, powerful javascript datetimepicker with no dependencies*

## Features
This tool creates input field options based on the chosen options by the end-user.

- Release 1.0 - Ledger with CRUD functionality and a debit/credit overview
- Release 2.0 - Dashboard with graphs overview
- Release 3.0 - Frontpage with contact
- Release 4.0 - Login


### Features Left to Implement
None yet

## Testing
All fields will function, but the send button will not send the design to an email address.
Custom CCS code is written for every button comfort design.

This site was tested across multiple screen sizes on Chrome, Safari and Internet Explorer.
To ensure compatibility and responsiveness it's also tested on an android based mobile device (OnePlus5).

## Bugs:
Jquery not loading on external files

Jquery 3.5 not loading the navbar


### Bug:
Solutuion
I loaded the minified slim version which doesn;t load all the requerements by replacing it with the slim version the bug was fized and external file loading with it.

downgraded Jquery to 3.4.1


The following tests have been used to ensure proper site functionality:

- [GTmetrix](https://gtmetrix.com/): To test on website loading times.
- [W3C HTML Validator](https://validator.w3.org/): This validator checks the mark-up validity of Web documents in HTML.
- [W3C CSS Validator](https://jigsaw.w3.org/css-validator/): This validator checks the mark-up validity of Web documents in CSS.
- [Unicorn Revealer](https://chrome.google.com/webstore/detail/unicorn-revealer/lmlkphhdlngaicolpmaakfmhplagoaln?hl=en-GB): Inspecting on overflow errors.
- [Autoprefixer CSS online](https://autoprefixer.github.io/): Autoprefixer is a PostCSS plugin which parses your CSS and adds vendor prefixes.
- [JSHint](https://jshint.com/): A static code analysis tool for JavaScript.

## Deployment
This site is hosted using GitHub pages, deployed directly from the master branch.
The deployed site will update automatically upon new commits to the master branch.
For the site to deploy correctly on GitHub pages, the landing page must be named `index.html`.

To run locally, you can clone this repository directly into the editor of your choice by entering
`git clone https://github.com/D1ang/DIGIdesigner.git` into your terminal.
To cut ties with this GitHub repository, type `git remote rm origin` into the terminal.

When the code is downloaded as a .zip it can be unzipped and runned by opening the unzipped folder and then execute `index.html`
The code will be executed in the browser that is set as main browser, this can be Chrome or one of the other available browsers.
When executed the main screen will be shown and the options can be chosen.

## Credits

### Content
All text content and input fields on this tool were written by me.
The logo is created by me.

### Media


### Acknowledgements
- Sentdex Pygal tutorial [link](https://www.youtube.com/watch?v=BIttXQO0bXw&list=PLQVvvaa0QuDc_owjTbIY4rbgXOFkUYOUB&index=33)
- Pygal svg charts tutorial [link](https://code.tutsplus.com/tutorials/intro-to-pygal-a-python-svg-charts-creator--cms-27692)
- W3schools.com [link](https://www.w3schools.com/)
- flatpickr [link](https://github.com/flatpickr/flatpickr)
- DataTables [link](https://datatables.net/)