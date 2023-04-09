import React, { useState, useEffect, Fragment } from "react";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

const CRUD = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const[name, setName]= useState('')
  const[age, setAge]= useState('')
  const[isActive, setIsActive]= useState(0)

  const[editID, setEditid]=useState('');
   const [editName, setEditName] = useState("");
   const [editAge, setEditAge] = useState("");
   const [editIsActive, setEditIsActive] = useState(0);

  const empdata = [
    {
      id: 1,
      name: "Dini",
      age: 29,
      isActive: 1,
    },

    {
      id: 2,
      name: "Rohit",
      age: 34,
      isActive: 1,
    },

    {
      id: 3,
      name: "Virat",
      age: 30,
      isActive: 0,
    },
  ];
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(empdata);
  }, []);

  const handleEdit = (id) => {
    handleShow();
    //alert(id);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure to delete employee") == true) {
      alert(id);
    }
  };

  const handleUpdate = () => {};
  return (
    <Fragment>
      <Container>
        <Row>
          <Col>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Col>
          <Col>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </Col>
          <Col>
            <input type="checkbox" />
            checked={isActive === 1 ? true : false}
            onChange={(e) => handleEdit(e)} value={isActive}
            <label>isActive</label>
          </Col>
          <Col>
            <button className="btn btn-primary">Submit</button>
          </Col>
        </Row>
      </Container>
      <br></br>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Age</th>
            <th>isActive</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data && data.length > 0
            ? data.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.age}</td>
                    <td>{item.isActive}</td>
                    <td colSpan={2}>
                      <button
                        className="btn btn-primary"
                        onClick={() => handleEdit(item.id)}
                      >
                        Edit
                      </button>
                      &nbsp;
                      <button
                        className="btn btn-danger"
                        onClick={() => handleDelete(item.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })
            : "Loading..."}
        </tbody>
      </Table>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modify / Update Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Name"
                value={editName}
                onChange={(e) => setEditName(e.target.value)}
              />
            </Col>
            <Col>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Age"
                value={editAge}
                onChange={(e) => setEditAge(e.target.value)}
              />
            </Col>
            <Col>
              <input type="checkbox" />
              checked={editIsActive === 1 ? true : false}
              onChange={(e) => handleEdit(e)} value={editIsActive}
              <label>isActive</label>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleUpdate}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
};

export default CRUD;
