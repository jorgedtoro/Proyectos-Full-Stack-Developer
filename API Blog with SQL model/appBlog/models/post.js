//modelo de los post. generamos los métodos necesarios

const { executeQuery, executeQueryOne } = require("../helpers/utils");

//get todos los posts de la bbdd
const getAllPosts = () => {
  return executeQuery(
    "SELECT * FROM posts JOIN authors on posts.id = authors.id"
  );
};

//get un post en concreto
const getPostById = (postId) => {
  return executeQueryOne(
    "SELECT * FROM posts JOIN authors on posts.id = authors.id WHERE posts.id= ?",
    [postId]
  );
};

//get los post de un autor en concreto

const getAuthorPosts = (idAuthor) => {
  return executeQuery(
    "SELECT * FROM posts JOIN authors on authors.id = ? WHERE idAuthor = ?",
    [idAuthor, idAuthor]
  );
};

//crear un nuevo post
const createPost = ({ title, description, start_date, category, idAuthor }) => {
  return executeQuery(
    "insert into posts (title,description,start_date,category,idAuthor) values (?,?,?,?,?)",
    [title, description, start_date, category, idAuthor]
  );
};

//actualizar un post

const updatePost = (
  postId,
  { title, description, start_date, category, idAuthor }
) => {
  return executeQuery(
    "update posts set title=?, description=?, start_date=?, category = ?, idAuthor=? where id=?",
    [title, description, start_date, category, idAuthor, postId]
  );
};

//borrar un post
const deletePost = (postId) => {
  return executeQuery("delete from posts where id=?", [postId]);
};

module.exports = {
  getAllPosts,
  getPostById,
  getAuthorPosts,
  createPost,
  updatePost,
  deletePost,
};
