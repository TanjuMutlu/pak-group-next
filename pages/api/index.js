import data from "includes/BrandsData";

export default function handler(req, res) {
  return res.status(200).json(data);
}
