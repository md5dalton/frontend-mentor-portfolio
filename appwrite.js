import { Client, Storage } from "appwrite"

const client = new Client()
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject(process.env.PROJECT_ID)

const storage = new Storage(client)

