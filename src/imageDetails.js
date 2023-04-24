const mongoose = require("mongoose");

const ImageDetailsSchema = new mongoose.Schema(
    {
        image:String
    },
    {
        collation: "ImageDetails",
    }
);

mongoose.model("ImageDetails",ImageDetailsSchema);