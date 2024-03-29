# Markup test
Prepare your thoughts to discuss how you would mark-up the design (`front-end markup-test.pdf`) during the interview.

# Javascript Test: Address lookup
Please complete the following node based exercise. It should take around 1 hour to complete. Once complete, please push to a public GitHub repo and follow the instructions in the email you received.

## Get started
$ `npm install` - install dependencies

$ `DEBUG=frontend-test:* npm start` - run the app in debug mode

## Potential issue on DWP macbook
- both the app and tests may not run with macbook setup
- if you get a message along the lines of 'Error: unable to get local issuer certificate' , you will need to type `export NODE_TLS_REJECT_UNAUTHORIZED=0` into the command line

## Tests
$ `npm test` -  run tests                

## Exercise
- Write routes to render the addresses.njk template in the routes folder, you can also make changes to the template to improve it.
- Create a post handler on the address route that makes a request to the address API using details in provided in the email.
- Display request results in the addresses.njk select element.
- Write suitable unit tests for functionality of the post route.
- If time allows add some markup validation, e.g. what if the input is invalid?

## My comments on the exercise

- I used the https://api.os.uk/search/names endpoint, however, this doesn't return address data. I assume we should have used https://api.os.uk/search/places. Emailed the HR address, but didn't get a reply so went with the endpoint provided and have tried to show how it could work!
