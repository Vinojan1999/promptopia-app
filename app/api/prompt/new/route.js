import { connectToDB } from "@/utils/database";
import Prompt from "@/models/prompt";

// Specify the route type(POST) for the route function
export const POST = async (req) => {
    const { userId, prompt, tag } = await req.json();

    try {
        // Connet to the DB, we have to do this everytime bcz this is a lambda function (It's going to die once its job is does)
        // So, everytime that gets the call to connect the DB
        await connectToDB();

        const newPrompt = new Prompt({ 
            creator: userId, 
            prompt,
            tag 
        });

        // Save it to the database
        await newPrompt.save();

        return new Response(JSON.stringify(newPrompt), {status: 201});
    } catch (error) {
        return new Response("Failed to create a new prompt", {status: 500});
    }
}