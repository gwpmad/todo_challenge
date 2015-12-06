To-Do List Challenge
===============

I have deployed a copy of this project to Heroku. Click [here](https://to-do-list-gm.herokuapp.com/) to use it.

My Week 8 weekend challenge at Makers Academy was to code a single page to-do list application using AngularJS (or another advanced Javascript toolset). This was my submission.

Here are the user stories that I followed:

```
As a forgetful person
I want to store my tasks
So that I don't forget them

As a person with limited time
I want to instantly be able to update my todo list (adding and changing entries)
So that I have more time to think about other things

As a person who actually gets stuff done
I want to mark my tasks as done
So that I don't do them twice

As a person with a lot of tasks
I want to be able to filter my tasks by "All", "Active", "Complete"
So that I only see the relevant tasks

As a person who doesn't like counting by hand
I want to see a total number of tasks
So that I don't have to count

As someone who has done lots of stuff
I want to be able to clear my completed tasks
So I never see them again
```

Approach
--------
I knew this would be a difficult project as I had never touched Angular Javascript until Week 8! It was tough but it was a fantastic learning experience. I wanted to make sure I used a proper model-view-controller setup, and I also created a service (in the `js/customFilters` file) as part of an effort to separate concerns effectively.

I fulfilled each of the user stories. The interface is simple but attractive, enhanced with Bootstrap, and users can easily enter tasks, mark them as complete and filter them as such. A running total of incomplete tasks is clearly visible at the bottom of the screen. The 'Clear all' button removes all tasks. The application runs smoothly on a single page, for maximum ease of use.

I tried to add little experience-enhancing touches: for instance, task rows turn green when they are checked as 'complete', and it is impossible to add an empty task.

After working all weekend on this project I now feel an awful lot more confident about using AngularJS. I expect to be including it in the projects I'll be working on in my final weeks at Makers Academy.

How to use
----------
A working copy of the project, hosted by Heroku, is available [here](https://to-do-list-gm.herokuapp.com/). However, if you'd like to work with it locally, please follow these steps:

1. Fork this repository and then clone it using `git clone <url>`
2. cd into the project
3. Run `npm install` and `bower install`
4. Run `npm start` to host the application locally, using http-server
5. Visit `http://localhost:8080/` to use the application
