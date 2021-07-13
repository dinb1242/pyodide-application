const express = require('express');
const app = express();
const port = 3000;

const indexRouter = require('./routes/indexRouter');
app.use('/', indexRouter);

app.use('/pyodide', express.static('public/pyodide_modules'));

app.listen(port, () => {
    console.log(`Server is running at ${port}`);
})