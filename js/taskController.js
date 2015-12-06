toDoList.controller('TaskController', function() {
  var self = this;

  self.tasks = [];
  self.incompleteTasks = [];

  self.addTask = function(entry) {
    self.tasks.unshift({
      "name": entry,
      "complete": false
    });
  };

  self.incompleteTasks = function() {
    self.incompleteTasks = self.tasks.filter(function(x) {
      return x.complete === false
    });
    return self.incompleteTasks;
  }
});
