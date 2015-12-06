toDoList.controller('TaskController', function() {
  var self = this;

  self.tasks = [];
  self.show = 'All';

  self.addTask = function(entry) {
    self.tasks.unshift({
      name: entry,
      complete: false
    });
  };

  self.returnIncompleteTasks = function() {
    self.incompleteTasks = self.tasks.filter(function(x) {
      return x.complete === false
    });
    return self.incompleteTasks;
  };

  self.returnCompleteTasks = function() {
    self.completeTasks = self.tasks.filter(function(x) {
      return x.complete
    });
    return self.completeTasks;
  };
});
