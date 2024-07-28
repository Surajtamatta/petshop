

const API_BASE_URL = process.env.API_BASE_URL;

export default async function handler(req, res) {
  const { q } = req.query;

  if (!API_BASE_URL) {
    res.status(500).json({ error: 'API base URL is not defined' });
    return;
  }

  try {
    if (q) {
      const query = encodeURIComponent(q);
      const response = await fetch(`${API_BASE_URL}/pets?breed=${query}`, { timeout: 15000 });
      if (!response.ok) {
        throw new Error(`Error fetching pets: ${response.statusText}`);
      }

      const data = await response.json();
      res.status(200).json(data);
    } else {
      // Handle case when `q` is not provided
      res.status(400).json({ error: 'Query parameter `q` is required' });
    }
  } catch (error) {
    console.error('Error fetching pets:', error);
    res.status(500).json({ error: 'Failed to fetch pets', message: error.message });
  }
}
