//modelo authors. generamos los métodos necesarios

const { executeQuery, executeQueryOne } = require("../helpers/utils");

//get all the authors --> GET
const getAll = () => {
  return executeQuery("select * from authors");
};

//get an author by Id

const getById = (idAuthor) => {
  return executeQueryOne("select * from authors where id =?", [idAuthor]);
};

//create an author -->POST
const create = ({ name, email, link }) => {
  return executeQuery("insert into authors (name,email,link) values (?,?,?)", [
    name,
    email,
    link,
  ]);
};

//update an author -->PUT

const update = (idAuthor, { name, email, link }) => {
  return executeQuery(
    "update authors set name = ?, email=?, link=? where id=?",
    [name, email, link, idAuthor]
  );
};

//delete an author -->DELETE

const deleteById = (idAuthor) => {
  return executeQuery("delete from authors where id = ?", [idAuthor]);
};

module.exports = { getAll, getById, create, update, deleteById };
