describe('TaskController', function() {
  beforeEach(module('toDoList'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('TaskController');
  }));

  it('Initialises with an empty tasks array', function() {
    expect(ctrl.tasks).toEqual([]);
  });

  it('Returns the remaining incomplete tasks', function() {
    ctrl.addTask('example');
    expect(ctrl.returnIncompleteTasks()).toEqual([{ name: 'example',
      complete: false }]);
  });

  it('Returns completed tasks', function() {
    ctrl.addTask('example');
    ctrl.tasks[0].complete = true
    expect(ctrl.returnCompleteTasks()).toEqual([{ name: 'example',
      complete: true }]);
  });

});
