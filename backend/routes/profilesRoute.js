import express from "express";
import { Profile } from "../models/profileModel.js";

const router = express.Router()

// Route for Save a new profile
router.post('/', async (request, response) => {
    try {
        if (
            !request.body.name ||
            !request.body.title ||
            !request.body.skill
        ) {
            return response.status(400).send({
                message: "Send all required fields: name, title, skill"
            });
        }

        const newProfile = {
            name: request.body.name,
            title: request.body.title,
            skill: request.body.skill
        };

        const profile = await Profile.create(newProfile);
        return response.status(201).send(profile);

    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message })
    }
})

// Route to Get all profiles
router.get('/', async (request, response) => {
    try {
        const profiles = await Profile.find({});

        return response.status(200).json(profiles);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
})

// Route for get one profile from database by id
router.get('/:id', async (request, response) => {
    try {

        const { id } = request.params;

        const profile = await Profile.findById(id);

        return response.status(200).json(profile);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
})

//Route for update a profile
router.put('/:id', async (request, response) => {
    try {
        if (
            !request.body.name ||
            !request.body.title ||
            !request.body.skill
        ) {
            return response.status(400).send({
                message: "Send all required fields: name, title, skill"
            });
        }
        const { id } = request.params;
        const result = await Profile.findByIdAndUpdate(id, request.body);
        if (!result) {
            return response.status(404).json({ message: "Profile not found" });
        }
        return response.status(200).send({ message: "Profile updated successfully" });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
})

// Route for delete a book
router.delete("/:id", async (request, response) => {
    try {
        const { id } = request.params;
        const result = await Profile.findByIdAndDelete(id);
        if (!result) {
            return response.status(404).json({ message: "Profile not found" });
        }
        return response.status(200).send({ message: "Profile successfully deleted." });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
})

export default router;