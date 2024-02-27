const mongoose = require('mongoose');

const ImageShema = new mongoose.Schema(
    {
        id: string,
        image: string
    },
    {
        collection: "Image"
    }
)

mongoose.mode1("Image", ImageShema);    