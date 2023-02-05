import React, { useState } from "react";
import { spicyFoods, getNewRandomSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);
  const [filterBy, setFilterBy] = useState("All");

  function handleAddFood() {
    const newFood = getNewRandomSpicyFood();
    console.log(newFood)
      setFoods(()=>{ //My solution differs slightly from th one on canvas in th sense tht I've used cb function
        console.log(newFood)
        return [...foods, newFood]
      })
    console.log(newFood);
    console.log(foods)
  }

  function handleLiClick(foodId){
    // const newArray = foods.filter((food)=>food.id!==foodId)
    // setFoods(()=>newArray)
    const newArrayIncremented=foods.map((food)=>{
      if (food.id===foodId){
        return {
          ...food,
          heatLevel: food.heatLevel+1
        }
      }else {
        return food
      }
    })
    console.log(newArrayIncremented)
    setFoods(newArrayIncremented)
  }

  const optSelected=foods.filter((food)=>{
    if (filterBy==="All"){
      return true
      } else {
        return food.cuisine===filterBy
      }
    })

  function handleOptClick(event){
    

    //console.log(optSelected)
    setFilterBy(event.target.value)
    
    console.log(foods)
    //setFoods(optSelected)
  }

  const foodList = optSelected.map((food) => (
    <li key={food.id} onClick={() => handleLiClick(food.id)}>
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  ));

  // const foodList = foods.map((food) => (
  //   <li key={food.id} onClick={()=>handleLiClick(food.id)}>
  //     {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
  //   </li>
  // ));

  return (
    <div>
      <select name="filter" onChange={handleOptClick}>
        <option value="All">All</option>
        <option value="American">American</option>
        <option value="Sichuan">Sichuan</option>
        <option value="Thai">Thai</option>
        <option value="Mexican">Mexican</option>
      </select>
      <button onClick={handleAddFood}>Add New Food</button>
      <ul>{foodList}</ul>
    </div>
  );
}

export default SpicyFoodList;
