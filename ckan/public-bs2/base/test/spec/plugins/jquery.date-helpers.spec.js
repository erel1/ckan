/*globals describe beforeEach afterEach it assert sinon ckan jQuery */
describe('jQuery.date', function () {
  beforeEach(function () {
    this.now = new Date();
    this.now.setTime(0);

    this.clock = sinon.useFakeTimers(this.now.getTime());
  });

  afterEach(function () {
    this.clock.restore();
  });

  describe('jQuery.date.format()', function () {
    it('should format the date based on the string provided', function () {
      var target = jQuery.date.format('yyyy-MM-dd', this.now);
      assert.equal(target, '1970-01-01');
    });

    it('should use the current time if none provided', function () {
      var target = jQuery.date.format('yyyy/MM/dd');
      assert.equal(target, '1970/01/01');
    });
  });

  describe('jQuery.date.toISOString()', function () {
    it('should output an ISO8601 compatible string', function () {
      var target = jQuery.date.toISOString(this.now);
      assert.equal(target, '1970-01-01T00:00:00.000Z');
    });

    it('should use the current time if none provided', function () {
      var target = jQuery.date.toISOString();
      assert.equal(target, '1970-01-01T00:00:00.000Z');
    });
  });
});
