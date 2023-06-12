import { ICreateCommentDTO } from "../dtos/ICreateCommentDTO";
import { Comment } from "../infra/typeorm/entities/Comment";

interface ICommentsRepository {
  create(data: ICreateCommentDTO): Promise<Comment>;
  findById(id: string): Promise<Comment>;
}

export { ICommentsRepository };
