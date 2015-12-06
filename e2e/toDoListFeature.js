describe('To Do List', function() {

  var tasks = element.all(by.repeater('task in taskCtrl.tasks'));
  var addTaskBox = element(by.model('entry'));
  var addTaskButton = element(by.id('addtaskbtn'));
  var allButton = element(by.id('all'));
  var activeButton = element(by.id('active'));
  var completeButton = element(by.id('complete'));
  var clearAllButton = element(by.id('clearall'));
  var checkBox = element(by.id('checkbox'));
  var outstanding = element(by.id('numberoutstanding'))


  beforeEach(function() {
    browser.get('http://localhost:8080');
  });

  it('has a title', function() {
    expect(browser.getTitle()).toEqual('To-do List');
  });

  it ('will not allow user to add empty tasks', function() {
    expect(addTaskButton.isEnabled()).toBe(false);
  })

  describe('Entering tasks', function() {

    beforeEach(function() {
      addTaskBox.sendKeys('my task');
      addTaskButton.click();
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

    it('displays the number of incomplete taskts', function() {
      outstanding.getText().then(function(response) {
        expect(response).toContain('1 task outstanding');
      });
    });
  });

  describe('Filtering tasks', function() {

    beforeEach(function() {
      addTaskBox.sendKeys('my task');
      addTaskButton.click();
      addTaskBox.sendKeys('my 2nd task');
      addTaskButton.click();
      addTaskBox.sendKeys('my 3rd task');
      addTaskButton.click();
      addTaskBox.sendKeys('my 4th task');
      addTaskButton.click();
    });

    it('filters correctly with the All button', function() {
      allButton.click().then(function(response) {
        tasks.last().getText().then(function(response) {
          expect(response).toContain('my task');
        });
      });
    });

    it('filters correctly with the Active button', function() {
      activeButton.click().then(function(response) {
        tasks.last().getText().then(function(response) {
          expect(response).toContain('my task');
        });
      });
    });

    it('filters correctly with the Complete button', function() {
      checkBox.click().then(function(response) {
        activeButton.click().then(function(response) {
          tasks.get(0).getText().then(function(response) {
            expect(response).toContain('my 3rd task');
          });
        });
      });
    });

    it('filters correctly with the Clear All button', function() {
      checkBox.click().then(function(response) {
        clearAllButton.click().then(function(response) {
            expect(tasks).toEqual([]);
        });
      });
    });

  });

});
