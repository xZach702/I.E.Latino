const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 8080;

app.use(cors());
app.use(express.json());

// Usamos las rutas del routers
const alumnoRoutes = require('./routes/alumnoRoutes');
app.use('/api',alumnoRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});