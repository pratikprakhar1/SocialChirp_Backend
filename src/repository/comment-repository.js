import CrudRepository from "./crud-repository.js";
import Comment from "../models/comments.js";

class CommentRepository extends CrudRepository {
  constructor(){
    super(Comment);   
  }
}

export default CommentRepository;