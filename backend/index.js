import express from "express";
import { PORT, mongDBURL } from "./config.js";
import mongoose from "mongoose";
import profilesRoute from "./routes/profilesRoute.js";
import cors from "cors";

const app = express();

// Middleware for parsing request body
app.use(express.json());

//Option 1: Allow all origins with default of cors(*)
app.use(cors());

// Option 2: Allow Custom Origins
// app.use(cors({
//     origin: "http://localhost:3000",
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     allowedHeaders: ["Content-Type"],
// }))

app.get("/", (request, response) => {
    console.log(request)
    return response.status(234).send("Welcome to Code Cave")
});

// // Serve static files from the Vite build directory
// app.use(express.static(path.join(__dirname, 'dist')));

// // Catch-all route to serve index.html for all paths
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'dist', 'index.html'));
// });

app.use("/profiles", profilesRoute);

mongoose.connect(mongDBURL).then(() => {
    console.log("App connected to database");
    app.listen(PORT, () => {
        console.log(`App is listening to port: ${PORT}`);
    })
}).catch((error) => {
    console.log(error);
})
