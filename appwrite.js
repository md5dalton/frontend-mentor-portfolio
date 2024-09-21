import { Client, Storage, Databases } from "appwrite"

const client = new Client()
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject(process.env.APPWRITE_PROJECT_ID)

const storage = new Storage(client)
const databases = new Databases(client)


export const getSkills = async () => databases.listDocuments(
    process.env.APPWRITE_DATABASE_ID,
    "66eef22c0032d6d23141",
        // [
        //     Query.equal('title', 'Hamlet')
        // ]
)