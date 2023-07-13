// <<<<<<< Bryan
const mysql = require('mysql2');
const pool = require('../sql/connection');

const getActors = (req, res) => {
  pool.query('SELECT * FROM actors', (err, rows) => {
    if (err) {
      console.log(err);
      res.status(500).send('Something went wrong');
      return;
    }
    res.json(rows);
  });
};

const getActorById = (req, res) => {
  const { id } = req.params;
  pool.query('SELECT * FROM actors WHERE id = ?', [id], (err, rows) => {
    if (err) {
      console.log(err);
      res.status(500).send('Something went wrong');
      return;
    }
    if (rows.length === 0) {
      res.status(404).send('Actor not found');
      return;
    }
    res.json(rows[0]);
  });
};

const createActor = (req, res) => {
  const { body } = req;
  const { name, age } = body;
  pool.query(
    'INSERT INTO actors (name, age) VALUES (?, ?)',
    [name, age],
    (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send('Something went wrong');
        return;
      }
      res.json({
        message: `Successfully created actor with ID: ${result.insertId}`,
      });
    }
  );
};

const updateActor = (req, res) => {
  const { id } = req.params;
  const { body } = req;
  const { name, age } = body;
  pool.query(
    'UPDATE actors SET name = ?, age = ? WHERE id = ?',
    [name, age, id],
    (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send('Something went wrong');
        return;
      }
      if (result.affectedRows === 0) {
        res.status(404).send('Actor not found');
        return;
      }
      res.json({ message: 'Actor updated successfully' });
    }
  );
};

const deleteActor = (req, res) => {
  const { id } = req.params;
  pool.query('DELETE FROM actors WHERE id = ?', [id], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send('Something went wrong');
      return;
    }
    if (result.affectedRows === 0) {
      res.status(404).send('Actor not found');
      return;
    }
    res.json({ message: 'Actor deleted successfully' });
  });
};

module.exports = {
  getActors,
  getActorById,
  createActor,
  updateActor,
  deleteActor,
};
=======
const mysql = require('mysql2')
const pool = require('../sql/connection')

const list = (req, res) => {
    // SELECT ALL ACTORS
    pool.query("SELECT * FROM ??", ["actors"], (err, rows) => {
      if (err) return handleSQLError(res, err)
      return res.json(rows);
    })
  }

const show = (req, res) => {
  const {id} = req.params
  pool.query(`SELECT * FROM ?? WHERE ?? = ?`, 
  ["actors", "id", id],
  (err, row, fields) => {
    console.log(err,row)
    res.json(row)
  }) 
}

const create = (req, res) => {
  const {body} = req
  const {first_name, last_name, movie_id} = body

  pool.query(`INSERT INTO ?? (??, ??) VALUES (?, ?)`,
  ["actors", "first_name", "last_name", first_name, last_name],

  (err,row,fields) => {
  console.log(row)
      res.json({
      message: `Successfully inserted actor into id: ${row.insertId}`
      })
  })
}

const updateActor = (req, res) => {
  const foundActor = actors.find((actor) => {
    return actor.id === Number(id)
  })
  if(foundActor){
    const index = actors.indexOf(foundActors)
    const updateActor = {
      ...foundActor,
      ...req.body
    }
    movies.splice(index, 1, updateActor)
    res.json(updateActor)
  } else {
      res.status(400).json({
        msg: `No actor with ID: ${id}`
      })
  }
}

  module.exports = {
    list,
    show,
    create,
    updateActor
  }
// >>>>>>> master
