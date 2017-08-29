/**
 * --------------------------------------------------------------------------- *
 *
 * @Project: headless-chrome-test-karma
 * @FileName: test
 * @Dependence: --
 * @Description: --
 * @CreatedBy: liao.zhang
 * @CreateDate: 2017/7/9 23:44
 * @LastModifiedBy: liao.zhang
 * @LastModifiedDate: 2017/7/9 23:44
 *
 * --------------------------------------------------------------------------- *
 */


describe('首页加载测试',function(){
    before(function(){
        var link = document.createElement('a');
        link.href = 'https://www.baidu.com';
        link.click();
    });
    // 获取百度搜索按钮的 文本
    describe('按钮文本',function(){
        it('按钮文本必须等于',function(done){
           setTimeout(function(){
               var btn = document.getElementById('su');
               var btnName = btn.getAttribute('value');
               expect(btnName).to.equal('百度一下');
           },5000)
        })

    });

    // 获取百度首页 title
    describe('首页标题',function(){
        it('首页标题应该为',function(done){
           setTimeout(function(){
               var title = document.getElementsByName('title')[0];
               var titleText = title.textContent;
               expect(titleText).to.equal('百度一下，你就知道');
           },5000)
        });
    });

});