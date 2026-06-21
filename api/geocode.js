export default async function handler(req, res) {
  const { address } = req.query;
  if (!address) return res.status(400).json({ error: 'Address required' });
  const key = process.env.GOOGLE_GEO_KEY;
  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${key}`;
  try {
    const response = await fetch(url, {
      headers: {
        'Referer': 'https://mechchef.vercel.app'
      }
    });
    const data = await response.json();
    res.status(200).json(data);
  } catch (e) {
    res.status(500).json({ error: 'Geocoding failed' });
  }
}
