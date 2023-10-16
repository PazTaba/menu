
import './DropDown.css';

function DropDown(props) {


    const handleSelectChange = (event) => {
        const selectedValue = event.target.value;
        const selectedDish = props.dishes.find((dish) => dish.name === selectedValue);

        props.onDishSelect(selectedDish);
    };

    if (props.dishes.length === 0) {
        return null;
    }

    const filteredDishes = props.dishes.filter((dish) => dish.category === props.title);

    return (
        <div>
            <select className="drop-list" onChange={handleSelectChange}>
                <option   value="" disabled selected>
                    בחר מנה
                </option>
                {filteredDishes.map((dish) => (
                    <option   key={dish.id} value={dish.name}>
                        {dish.name}
                    </option>
                ))}

            </select>
        </div>
    );
}

export default DropDown;
