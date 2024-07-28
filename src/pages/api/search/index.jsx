

const API_BASE_URL = process.env.API_BASE_URL;

const fetchPets = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/pets?`, { timeout: 15000 }); // 15 seconds timeout
    if (!response.ok) {
      throw new Error(`Error fetching pets: ${response.statusText}`);
    }
    const data = await response.json();
    return data.pets;
  } catch (error) {
    console.error('Error fetching pets:', error);
    throw new Error('Failed to fetch pets');
  }
};

export default async function handler(req, res) {
  const { q } = req.query;

  try {
    const pets = await fetchPets();

    const filteredPets = pets.filter(pet => {
      return (
        (!q || pet.animal.toLowerCase().includes(q.toLowerCase())) ||
        (!q || pet.breed.toLowerCase().includes(q.toLowerCase())) ||
        (!q || pet.city.toLowerCase().includes(q.toLowerCase())) ||
        (!q || pet.state.toLowerCase().includes(q.toLowerCase()))
      );
    });

    res.status(200).json({
      numberOfResults: filteredPets.length,
      startIndex: 0,
      endIndex: filteredPets.length - 1,
      hasNext: false,
      pets: filteredPets,
    });
  } catch (error) {
    console.error('Error fetching pets:', error);
    res.status(500).json({ error: 'Failed to fetch pets', message: error.message });
  }
}

