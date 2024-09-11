
import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';  // Import fileURLToPath
import { dirname } from 'path';       // Import dirname

const __filename = fileURLToPath(import.meta.url); // Get the current file URL
const __dirname = dirname(__filename);            // Get the directory name

const router = express.Router();
router.get('/location', (req, res) => {
    const day = req.query.day.toLowerCase().replace(/ /g, '_');  // Replace spaces with underscores
    const filePath = path.join(__dirname, `../data/${day}.json`);
  

fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      if (err.code === 'ENOENT') {
        console.error(`File not found: ${filePath}`);
        return res.status(404).json({ error: 'File not found' });
      }
      console.error(`Error reading file from path ${filePath}`, err);
      return res.status(500).json({ error: 'Error reading data' });
    }
    res.json(JSON.parse(data));
  });
});
  export default router;
  