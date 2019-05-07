import "./ImageList.css";
import React from "react";
import ImageCard from "./ImageCard";

const ImageList = props => {
  const images = props.images.map(image => {
    return <ImageCard key={image.id} image={image} />;
  });

  return <div className="image-list">{images}</div>;
};

export default ImageList;

/*
.map
const numbers = [0,1,2,3,4];

let newNumbers = [];

for (let i = 0; i < numbers.length; i++) {
  newNumbers.push(numbers[i]) * 10);
}
// newNumbers now prints [0,10,20,30,40]
// THIS IS THE SAME AS BELOW


numbers.map( (num) => {
  return num * 10;
})
// Shortened to below

numbers.map(num => num * 10)
// prints [0,10,20,30,40]
numbers;
// prints [0,1,2,3,4]

*/
