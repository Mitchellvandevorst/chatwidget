import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const PORT = process.env.PORT || 3000;

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// allow CORS
app.use(cors());

// serve static files from /public
app.use(express.static(path.join(__dirname, 'public')));

// fallback for all unknown routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// now listen AFTER all routes are defined
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
