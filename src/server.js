import "dotenv/config";
import app from "./app";

const port = 3001;

app.listen(port, () => console.log(`🚀 App is running at port ${port}...`));
