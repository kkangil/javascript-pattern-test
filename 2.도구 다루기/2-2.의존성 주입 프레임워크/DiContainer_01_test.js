describe('DiContainer', function () {
  var container;
  beforeEach(function () {
    container = new DiContainer();
  });

  describe('register(name,dependencies,func)', function () {
    it('인자가 하나라도 빠졌거나 타입이 잘못되면 예외를 던진다.', function () {
      var badArgs = [
        // 인자가 아예 없는 경우
        [],
        ['Name'],
        ['Name', ['Dependency1', 'Dependency2']],
        ['Name', function () { }],
        // 타입이 잘못된 경우
        [1, ['a', 'b'], function () { }],
        ['Name', [1, 2], function () { }],
        ['Name', ['a', 'b'], 'should be a function']
      ];

      badArgs.forEach(function (args) {
        expect(function () {
          container.register.apply(container, args);
        }).toThrowError(container.messages.registerRequiresArgs);
      });
    })
  });
})

