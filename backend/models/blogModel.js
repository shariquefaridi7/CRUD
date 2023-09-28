

const BlogModel = (sequelize, DataTypes) => {
    const Blog = sequelize.define('Blog', {
      author: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      content: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
  
    return Blog;
  };
  
  export default BlogModel;
  