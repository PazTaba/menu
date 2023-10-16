import React, {useEffect, useState} from 'react';
import Label from '../label/Label';
import './Dishes.css';
import DropDown from "../drop/DropDown";
import DeleteButton from "../btn/DeleteButton";
import InputDishes from "../input-dishes/InputDishes";


function Dishes(props) {

    const [selectedDishesList, setSelectedDishesList] = useState([]);
    const [amount, setAmount] = useState(new Array(props.dishes.length).fill(1));
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalDishes, setTotalDishes] = useState(0);

    useEffect(() => {
        const newTotalPrice = selectedDishesList.reduce((sum, dish, index) => {
            return sum + dish.price * amount[index];
        }, 0);
        setTotalPrice(newTotalPrice);

        const newTotalDishes = selectedDishesList.reduce((sum, _, index) => {
            return sum + parseInt(amount[index]);
        }, 0);
        setTotalDishes(newTotalDishes);
    }, [selectedDishesList, amount]);

    const handleDishSelection = (dish) => {
        setSelectedDishesList([...selectedDishesList, dish]);
        setAmount([...amount, 1]);
    };

    const handleDeleteDish = (dishToDelete) => {
        const updatedDishesList = [...selectedDishesList];
        const indexOfDishToDelete = updatedDishesList.findIndex((dish) => dish.id === dishToDelete.id);
        if (indexOfDishToDelete !== -1) {
            updatedDishesList.splice(indexOfDishToDelete, 1);
            setSelectedDishesList(updatedDishesList);

            const newAmount = [...amount];
            newAmount.splice(indexOfDishToDelete, 1);
            setAmount(newAmount);
        }
    };

    const handleAmountChange = (index, value) => {
        const newAmount = [...amount];
        newAmount[index] = value;
        setAmount(newAmount);
    };


    return (
        <div className={props.className}>
            <div className={"labels-container"}>
                <Label className={"label-category blue-btn"} title={`סה"כ מנות: ${totalDishes}`}/>
                <DropDown dishes={props.dishes} title={props.title} onDishSelect={handleDishSelection}/>
                <Label className={"label-category red-btn"} title={props.title}/>
            </div>
            <div className={"label-list"} title={"פירוט מנות"}>
                {selectedDishesList.map((dish, index) => (
                    <div key={index} className="dish-item">
                        <InputDishes
                            value={amount[index]}
                            onChange={(value) => handleAmountChange(index, value)}
                        />
                        <p className={"p"}> :{dish.name} | מחיר: ₪{dish.price} | </p>
                        <DeleteButton onDelete={() => handleDeleteDish(dish)}/>
                    </div>
                ))}
            </div>
            <p>סה"כ מחיר: ₪{totalPrice}</p>
        </div>
    );
}

export default Dishes;