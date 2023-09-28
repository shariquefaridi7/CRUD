

const CommentModel = (sequelize, DataTypes) => {
    const Comment = sequelize.define('Comment', {
      comment: {
        type: DataTypes.STRING,
        allowNull: false,
      }
     
    });
  
    return Comment;
  };
  
  export default CommentModel;
  