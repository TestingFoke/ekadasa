import React from "react";
import "./ListItems.css";
import Items from "./items";
import Row from "react-bootstrap/Row";

function ListItems() {
  const items = [
    {
      id: 1,
      heading: "Free food",
      detail:
        "Lorem Ipsum is simply dummy text of the printing and typesetting",
      describtion:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took",
      image: "./images/items_1.png",
    },
    {
      id: 2,
      heading: "Free Medicine (Siddha)",
      detail:
        "Lorem Ipsum is simply dummy text of the printing and typesetting",
      describtion:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took",
      image: "./images/items_2.png",
    },
    {
      id: 3,
      heading: "Free Ambulance",
      detail:
        "Lorem Ipsum is simply dummy text of the printing and typesetting",
      describtion:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took",
      image: "./images/items_3.png",
    },
    {
      id: 4,
      heading: "Free Scholarship",
      detail:
        "Lorem Ipsum is simply dummy text of the printing and typesetting",
      describtion:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took",
      image: "./images/items_4.png",
    },
    {
      id: 5,
      heading: "Reiki",
      detail: "Form of energy healing",
      describtion:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took",
      image: "./images/items_5.png",
    },
    {
      id: 6,
      heading: "Lorem Ips",
      detail: "Form of energy healing ",
      describtion:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took",
      image: "./images/items_2.png",
    },
  ];
  return (
    <Row className="itemContainer g-0 px-4 py-2">
      {items.map((obj, index) => (
        <Items key={index} curObj={obj} />
      ))}
    </Row>
  );
}

export default ListItems;
