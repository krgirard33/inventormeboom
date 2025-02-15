import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./UpdateItem.css"

export default function UpdateItem({ id, item }) {
  const navigate = useNavigate();
  const [editItem, setEditItem] = useState({
    itemName: item.itemName,
    itemQuantity: item.itemQuantity,
    description: item.description,
    itemCategory: item.itemCategory,
    location: item.location,
  });
  const handleSubmit = async (e) => {
    try {
      await axios.put(`/item/${id}`, editItem, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      alert("Item updated successfully");
      navigate("/items");
    } catch (err) {
      alert(`Error updating item: ${err.message}`);
    }
  };

  return (
    <div id="update-item-form">
      <h1 className="text-center">Update Item</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName" className="m-5">
          <Form.Label>Item Name: </Form.Label>
          <Form.Control
            type="text"
            value={editItem.itemName}
            onChange={(e) =>
              setEditItem({ ...editItem, itemName: e.target.value })
            }
            required
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="formQuantity" className="m-5">
          <Form.Label>Quantity: </Form.Label>
          <Form.Control
            type="text"
            value={editItem.itemQuantity}
            onChange={(e) =>
              setEditItem({ ...editItem, itemQuantity: e.target.value })
            }
            required
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="formDescription" className="m-5">
          <Form.Label>Description: </Form.Label>
          <Form.Control
            type="text"
            value={editItem.description}
            onChange={(e) =>
              setEditItem({ ...editItem, description: e.target.value })
            }
            required
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="formDescription" className="m-5">
          <Form.Label>Category: </Form.Label>
          <Form.Control
            type="text"
            value={editItem.itemCategory}
            onChange={(e) =>
              setEditItem({ ...editItem, itemCategory: e.target.value })
            }
            required
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="formLocation" className="m-5">
          <Form.Label>Location: </Form.Label>
          <Form.Control
            type="text"
            value={editItem.location}
            onChange={(e) =>
              setEditItem({ ...editItem, location: e.target.value })
            }
            required
          ></Form.Control>
        </Form.Group>
        <Button className="mx-5" variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}
