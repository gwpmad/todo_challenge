describe('TaskController', function() {
  beforeEach(module('toDoList'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('TaskController');
  }));

  it('Initialises with an empty tasks array', function() {
    expect(ctrl.tasks).toEqual([]);
  });

  it('Returns the number of incomplete tasks left', function() {
    ctrl.addTask('example');
    expect(ctrl.incompleteTasksLeft).toEqual(1);
  })
});
