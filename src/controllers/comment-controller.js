import CommentService from "../services/comment-service.js";

const commentService = new CommentService();

export const createComment = async (req , res) => {
    try {
        const response = await commentService.create(req.query.modelId , req.query.modelType, req.user.id, req.body.content);
        return res.status(201).json({
            success: true,
            message: "Successfully created a new Comment",
            data: response,
            error: {}
        });
    } catch (error) {
        console.log("Hi");
        return res.status(500).json({
            success: false,
            message: "Something went wrong in side",
            data: {},
            error: error
        });
    }
}