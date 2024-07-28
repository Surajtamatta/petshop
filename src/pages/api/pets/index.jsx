// src/pages/api/pets/index.js
export default async function handler(req, res) {
  const API_BASE_URL = process.env.API_BASE_URL;

  if (!API_BASE_URL) {
    res.status(500).json({ error: 'API_BASE_URL is not defined' });
    return;
  }

  try {
    const response = await fetch(`${API_BASE_URL}/pets`, { timeout: 15000 }); // 15 seconds timeout

    if (!response.ok) {
      throw new Error(`Error fetching pets: ${response.statusText}`);
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching pets:', error);
    res.status(500).json({ error: 'Failed to fetch pets', message: error.message });
  }
}
