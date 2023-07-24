import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
dotenv.config();
import connectDB from './config/db.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
// need file extension for local imported files
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';
const port = process.env.PORT || 5000;

connectDB(); // connect to MongoDB

// initialize server/express/app
const app = express();

// body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// cookie parser middleware
app.use(cookieParser());

app.get('/', (req, res) => {
  res.send('API is running...');
});

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);

// error handlers
app.use(notFound);
app.use(errorHandler);

// start server?
app.listen(port, () => console.log(`Server running on port ${port}`));
