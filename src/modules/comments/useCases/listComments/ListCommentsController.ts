import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListCommentsUseCase } from "./ListCommentsUseCase";

class ListCommentsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listCommentUseCase = container.resolve(ListCommentsUseCase);

    const comments = await listCommentUseCase.execute();

    return response.status(200).json(comments);
  }
}

export { ListCommentsController };
