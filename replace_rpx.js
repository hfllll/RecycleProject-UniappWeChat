const fs = require('fs');

// 读取文件内容
fs.readFile('C:/Users/hfll/recycleproject/pages/my/myAddress.vue', 'utf8', (err, data) => {
  if (err) {
    console.error('读取文件出错:', err);
    return;
  }

  // 使用正则表达式匹配并替换
  const result = data.replace(/(\d+)px/g, (match, p1) => {
    return `${p1 * 2}rpx`;  // 数值翻倍
  });

  // 将结果写回文件
  fs.writeFile('C:/Users/hfll/recycleproject/pages/my/my.vue', result, 'utf8', (err) => {
    if (err) {
      console.error('写入文件出错:', err);
      return;
    }
    console.log('替换完成！');
  });
});
