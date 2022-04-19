import Trailer from "../models/trailer.js";

export const getTrailers = async (req, res) => {
  const trailers = await Trailer.find();
  res.send(trailers);
};
export const createTrailer = async (req, res) => {
  try {
    const { title, director, review, actors, Data, cover } = req.body;

    const newTrailer = new Trailer({
      title,
      director,
      review,
      actors,
      Data,
      cover,
    });
    await newTrailer.save();

    return res.json(newTrailer);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: error.message });
  }
};

export const updateTrailer = async (req, res) => {
  try {
    const updatedTrailer = await Trailer.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    console.log(Trailer);
    return res.send(updatedTrailer);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: error.message });
  }
};

export const deleteTrailer = async (req, res) => {
  try {
    await Trailer.findByIdAndDelete(req.params.id);
    return res.send("Trailer deleted"), res.status(204);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: error.message });
  }
}

export const getTrailer = async (req, res) => {
  try {
    const trailer = await Trailer.findById(req.params.id);
    return res.send(trailer);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: error.message });
  }
}
