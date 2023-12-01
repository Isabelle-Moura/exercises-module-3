export class Post {
   constructor(props: PostProps) {
      this.author = props.author;
      this.content = props.content;
      this.likes = 0;
      this.createdAt = new Date();
      this.updatedAt = new Date();
      this.deletedAt = null;
   }

   author: string;
   content: string;
   likes: number;
   createdAt: Date;
   updatedAt: Date;
   deletedAt: Date | null;
}

export interface PostProps {
   author: string;
   content: string;
}
