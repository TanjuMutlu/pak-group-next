import data from "includes/BrandsData";

export default function handler(req, res) {
  const slug = req.query.slug;
  if (!slug) {
    return res.status(400).json({ error: "Bad Request" });
  }
  const found = data.find((x) => x.name === slug);
  if (!found) {
    return res.status(404).json({ error: "not found" });
  }
  res.status(200).json(found);
}
