import React from "react";
import "./adminTable.scss";
import { FaRegTrashAlt } from "react-icons/fa";
import { AiOutlineEdit } from "react-icons/ai";
import { useState } from "react";
import axios from "axios";
import BASE_URL from "../../../API/tourUrl";
import { useEffect } from "react";
import { FormScheme } from "../../../scheme/FormScheme";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
const AdminTable = () => {
  const [tours, setTours] = useState([]);
  const [state, setState] = useState({
    name: "",
    price: null,
    percentage: null,
    time: null,
    image: "",
    category: "",
    title: "",
    description: "",
  });
  const [id, setId] = useState("");
  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  //get tours
  const getTours = async () => {
    const res = await axios.get(BASE_URL);
    setTours(res.data);
  };
  useEffect(() => {
    getTours();
  }, []);

  //delete tour
  const deleteTour = async (id) => {
    await axios.delete(`${BASE_URL}/${id}`);
    getTours();
  };

  //edit tour
  const handleEditClick = (data) => {
    setState({
      name: data.name,
      price: data.price,
      time: data.time,
      percentage: data.percentage,
      title: data.title,
      image: data.image,
      category: data.category,
      description: data.description,
    });
    setId(data._id);
  };
  //update
  const updateTour = async (id) => {
    await axios.put(`${BASE_URL}/${id}`);
    getTours();
  };
  //add tour
  const addTour = async () => {
    await axios.post(BASE_URL, state);
    setState({
      name: "",
      price: null,
      image: "",
    });
  };

  //yup
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(FormScheme) });
  const formSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="container admin-table">
      <table>
        <tr>
          <th>TOUR NAME</th>
          <th>PRICE</th>
          <th>TOUR TIME</th>
          <th>PERCENTAGE</th>
          <th>DELETE</th>
          <th>EDIT</th>
        </tr>
        {tours?.map((tour) => (
          <tr key={tour._id}>
            <td>{tour.name}</td>
            <td>${tour.price}.00</td>
            <td>{tour.time} hours </td>
            {tour.percentage ? <td>{tour.percentage}%</td> : <td>UNDEFINED</td>}
            <td>
              <button id="delete" onClick={() => deleteTour(tour._id)}>
                <FaRegTrashAlt />
              </button>
            </td>
            <td>
              <button onClick={() => handleEditClick(tour)} id="edit">
                <AiOutlineEdit />
              </button>
            </td>
          </tr>
        ))}
      </table>
      <form onSubmit={handleSubmit(formSubmit)} action="">
        <input
          type="text"
          {...register("name")}
          onChange={handleChange}
          value={state.name}
          name="name"
          placeholder="name"
        />
        {errors.name ? <span id="error">{errors.name.message}</span> : <></>}
        <input
          type="number"
          {...register("price")}
          onChange={handleChange}
          value={state.price}
          name="price"
          placeholder="price"
        />
        {errors.price ? <span id="error">{errors.price.message}</span> : <></>}
        <input
          type="number"
          {...register("time")}
          onChange={handleChange}
          value={state.time}
          name="time"
          placeholder="time"
        />
        {errors.time ? <span id="error">{errors.time.message}</span> : <></>}
        <input
          type="number"
          onChange={handleChange}
          value={state.percentage}
          name="percentage"
          placeholder="percentage"
        />
        <input
          type="text"
          {...register("title")}
          onChange={handleChange}
          value={state.title}
          name="title"
          placeholder="title"
        />
        {errors.title ? <span id="error">{errors.title.message}</span> : <></>}
        <input
          type="text"
          {...register("category")}
          onChange={handleChange}
          value={state.category}
          name="category"
          placeholder="category"
        />
        {errors.category ? (
          <span id="error">{errors.category.message}</span>
        ) : (
          <></>
        )}
        <input
          type="text"
          {...register("desc")}
          onChange={handleChange}
          value={state.description}
          name="description"
          placeholder="description"
        />
        {errors.desc ? <span id="error">{errors.desc.message}</span> : <></>}
        <input
          type="text"
          {...register("image")}
          onChange={handleChange}
          value={state.image}
          name="image"
          placeholder="image"
        />
        {errors.image ? <span id="error">{errors.image.message}</span> : <></>}
        <button id="update" onClick={() => updateTour(id)}>
          UPDATE
        </button>
        <button id="add" onClick={() => addTour(id)}>
          ADD TOUR
        </button>
      </form>
    </div>
  );
};

export default AdminTable;
