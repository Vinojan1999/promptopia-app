import { Schema, model, models } from "mongoose";

const PromptSchema = new Schema({
    creator: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    prompt: {
        type: String,
        required: [true, 'Prompt is required.'],
    },
    tag: {
        type: String,
        required: [true, 'Tag is required.'],
    }
});

// The "Prompt" is already exist on the model's object by saying models.Prompt
// OR, If doesn't exist, Create a new model that's going to be called "Prompt" based on the "PromptSchema"
const Prompt = models.Prompt || model('Prompt', PromptSchema);

export default Prompt;