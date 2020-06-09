# TestAssignment

## Installation

1) npm i
2) ng serve
3) Go to localhost:4200


## Description

- The app consists of two pages: a list of bookmarks and a "new bookmark" form. 
- The state is managed using ngrx.
- Every bookmark has an id, which will be generated from the timestamp for the moment it was created. 
- When the form is submitted, the action is raised, so the reducer can add a new value to the list.
- On the bookmark’s card, there is a "remove" button that will raise the action to the store, so the reducer will remove bookmark from the list by id.
- The filtering feature is executed using a parametrized pipe.
- Each component has an OnPush change detection strategy. 
- bookmarks list’s reducer is a part of the "bookmark" feature meta-reducer for scalability reasons.

## Screenshots

List of bookmarks <br/>
![alt text](https://github.com/mrDima1996/test-assignment/blob/master/screenshots/list.png?raw=true)

Filtered list of bookmarks <br/>
![alt text](https://github.com/mrDima1996/test-assignment/blob/master/screenshots/list_filtered.png?raw=true)

Empty "new bookmark" form <br/>
![alt text](https://github.com/mrDima1996/test-assignment/blob/master/screenshots/empty_form.png?raw=true)

Form with errors <br/>
![alt text](https://github.com/mrDima1996/test-assignment/blob/master/screenshots/incorrect_form.png?raw=true)

Correct Form <br/>
![alt text](https://github.com/mrDima1996/test-assignment/blob/master/screenshots/correct_form.png?raw=true)
