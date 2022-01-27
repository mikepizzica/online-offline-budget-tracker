# Online/Offline Budget Tracker
## Description
The purpose of this project was to add functionality to an existing Budget Tracker application to allow for offline access and functionality.

## User Story
```
AS AN avid traveller
I WANT to be able to track my withdrawals and deposits with or without a data/internet connection
SO THAT my account balance is accurate when I am traveling
```

## Acceptance Criteria
```
GIVEN a user is on Budget App without an internet connection
WHEN the user inputs a withdrawal or deposit
THEN that will be shown on the page, and added to their transaction history when their connection is back online.
The transaction history should be replayed in order.
The history should be kept in either IndexDB or browser cache.
If the server is up, the current transactions should still be sent to the server without being added to the failure cache.
The initial list of cache_files should include all static assets.
```

## Link
https://budget-tracker-mike-pizzica.herokuapp.com/

## Screenshot
![Screenshot of budget tracker](./assets/screenshot-workout-tracker.png)