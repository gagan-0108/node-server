import express from "express";
const app = express();

app.use(express.json());

const port = 3000;

app.get("/", (_, res) => {
	res.json({ message: "server is up an running" , status: "mst"});
});

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
