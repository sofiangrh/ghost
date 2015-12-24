kaloi.test.root = "http://127.0.0.1:4567"

kaloi.test.add("Test for 3 li's", function() {
  this.get('/', function() {
    this.body.assertCount('li', function(count) { return count == 3 })
  })
  this.succeed();
});
