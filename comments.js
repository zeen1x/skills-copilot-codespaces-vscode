// Create web server
import express from 'express';
const app = express();
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log('Server is running at http://localhost:3000');
});