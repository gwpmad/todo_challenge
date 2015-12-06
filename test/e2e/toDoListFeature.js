describe('To Do List', function() {

  var tasks = element.all(by.repeater('task in taskCtrl.tasks'));
  var addTaskBox = element(by.model('entry'));
  var searchButton = element(by.id('addtaskbtn'));
  var checkBox = element(by.id('checkbox'));


  beforeEach(function() {
    browser.get('http://localhost:8080');
  });

  it('has a title', function() {
    expect(browser.getTitle()).toEqual('To-do List');
  });

  describe('Entering tasks', function() {

    beforeEach(function() {
      addTaskBox.sendKeys('my task');
      searchButton.click();
    });

    it('displays a task once it is entered by the user', function() {
      tasks.last().getText().then(function(response) {
        expect(response).toContain('my task');
      });
    });

    it('displays a cross if the task is not marked complete', function() {
        tasks.last().getText().then(function(response) {
          expect(response).toContain('\u2718');
        });
      });

    it('displays a tick if the task is marked complete', function() {
      checkBox.click().then(function(response) {
        tasks.last().getText().then(function(response) {
          expect(response).toContain('\u2713');
        });
      });
    });

  });

});
