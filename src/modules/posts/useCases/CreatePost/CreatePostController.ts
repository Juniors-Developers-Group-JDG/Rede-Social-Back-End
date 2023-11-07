import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreatePostUseCase } from "./CreatePostUseCase";

class CreatePostController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { content, midia, user_id, title, likes } = request.body;
    const createPostUseCase = container.resolve(CreatePostUseCase);

    const post = await createPostUseCase.execute({
      user_id,
      content,
      midia,
      title,
      likes
    });

    return response.status(201).json(post);
  }
}

export { CreatePostController };
