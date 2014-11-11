describe("Hello Test", function() {

  it("test", function() {
    var a = 'test1';//actual テストする値
    var e = 'test';//expect 期待値
    expect(a).toEqual(e);
  });

  it("test2", function() {
    expect(src.hoge()).toEqual('return-hoge');
  });

});