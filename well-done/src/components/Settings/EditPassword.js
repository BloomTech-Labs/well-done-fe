import React, { useState, useEffect } from "react";
import axios from "axios";
// import { axiosWithAuth } from "../../utils/axiosWithAuth";
const initialPassword = {
  email: "",
  password: "",
  newPassword: ""
};
const EditPassword = props => {
  const [item, setItem] = useState(initialItem);
  useEffect(() => {
    const id = props.match.params.id;
    const itemInArr = props.items.find(item => `${item.id}` === id);
    if (itemInArr) setItem(itemInArr);
  }, [props.items, props.match.params.id]);

  const changeHandler = ev => {
    ev.persist();
    let value = ev.target.value;
    if (ev.target.name === "price") {
      value = parseInt(value, 10);
    }

    setItem({
      ...item,
      [ev.target.name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios
      .put(`http://localhost:3333/items/${item.id}`, item)
      .then(res => {
        console.log(res);
        setItem(initialItem);
        props.updateItems(res.data);
        props.history.push("/item-list");
      })
      .catch(err => console.log(err.response));
  };

  return (
    <div>
      <h2>Update Item</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          onChange={changeHandler}
          placeholder="name"
          value={item.name}
        />
        <div className="baseline" />

        <input
          type="number"
          name="price"
          onChange={changeHandler}
          placeholder="Price"
          value={item.price}
        />
        <div className="baseline" />

        <input
          type="string"
          name="imageUrl"
          onChange={changeHandler}
          placeholder="Image"
          value={item.imageUrl}
        />
        <div className="baseline" />

        <input
          type="string"
          name="description"
          onChange={changeHandler}
          placeholder="Description"
          value={item.description}
        />
        <div className="baseline" />

        <input
          type="string"
          name="shipping"
          onChange={changeHandler}
          placeholder="Shipping"
          value={item.shipping}
        />
        <div className="baseline" />

        <button className="md-button form-button">Update</button>
      </form>
    </div>
  );
};

export default EditPassword;
