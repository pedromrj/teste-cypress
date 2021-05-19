import express from "express";
const PORT = 8080;
const app = express();

app.get("/exemplo", (request, response) => {
    return response.json(
        {
            "name" : "Lucas",
            "email" : "lucas@gmail.com"
        }
    )
});

app.listen(PORT, () => {
    console.log(`Listening in port: ${PORT}`);
});
