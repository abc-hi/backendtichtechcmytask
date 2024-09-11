import express from 'express';
import cors from 'cors';
import vehicleRoutes from './routes/vehicleRoutes.js';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({

    origin: ['http://localhost:5175', 'http://another-allowed-origin.com'],
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type']
  }));
app.use(express.json());
app.get("/", (req,res)=>{
  console.log("API is working fine")
  res.send("API is working fine");
})
// Routes
app.use('/api', vehicleRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
 