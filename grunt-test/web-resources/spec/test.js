describe("Hello Test", function() {

  it("test", function() {
    var a = 'test1';//actual �e�X�g����l
    var e = 'test';//expect ���Ғl
    expect(a).toEqual(e);
  });

  it("test2", function() {
    expect(src.hoge()).toEqual('return-hoge');
  });

});