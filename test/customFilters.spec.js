describe('filter', function() {

  beforeEach(module('toDoList'));

  describe('checkmark', function() {

    it('should return tick for true and cross for false',
      inject(function(checkmarkFilter) {
        expect(checkmarkFilter(true)).toBe('\u2713');
        expect(checkmarkFilter(false)).toBe('\u2718');
      }));

  });

});
