const fs = require('fs');

// 读取文件内容
fs.readFile('C:/Users/hfll/recycleproject/pages/order/payWay.vue', 'utf8', (err, data) => {
  if (err) {
    console.error('读取文件出错:', err);
    return;
  }

  // 使用正则表达式匹配并替换 px 为 rpx（包括整数和小数）
  const result = data.replace(/(\d+(\.\d+)?)px/g, (match, p1) => {
    return `${(p1 * 1.908).toFixed(2)}rpx`;  // 保留两位小数
  });

  // 将结果写回文件
  fs.writeFile('C:/Users/hfll/recycleproject/pages/order/order.vue', result, 'utf8', (err) => {
    if (err) {
      console.error('写入文件出错:', err);
      return;
    }
    console.log('px 单位转换为 rpx 完成！');
  });
});
