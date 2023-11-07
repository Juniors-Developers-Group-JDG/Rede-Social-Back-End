import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
} from "typeorm";
import { v4 as uuidV4 } from "uuid";

import { User } from "../../../../accounts/infra/typeorm/entities/User";
import { Comment } from "../../../../comments/infra/typeorm/entities/Comment";

@Entity("posts")
class Post {
  @PrimaryColumn()
  id: string;

  @Column()
  user_id: string;

  @Column()
  title: string;

  @Column()
  content: string;

  @Column()
  midia: string;

  @Column()
  likes: number;

  @CreateDateColumn()
  created_at: Date;

  @ManyToOne(() => User)
  @JoinColumn({ name: "user_id" })
  user: User;

  @OneToMany(() => Comment, comment => comment.post)
  comments: Comment[];

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Post };
