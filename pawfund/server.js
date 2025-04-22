const express = require('express');
const path = require('path');

const app = express();

// Cung cấp các tệp tĩnh từ thư mục dist
app.use(express.static(__dirname + '/dist/pawfund-project'));

// Định tuyến tất cả yêu cầu đến index.html
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/pawfund-project/index.html'));
});

// Lắng nghe trên cổng Heroku hoặc cổng mặc định
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
