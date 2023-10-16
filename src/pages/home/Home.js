import React, { useEffect, useState } from "react";
import './Home.css';
import List from "../../components/list/List";
import axios from 'axios';

function Home() {
    const [saveDishes, setSavedDishes] = useState([]);
    const [saveTotal, setSavedTotal] = useState([]);
    const [saveGuests, setSavedGuests] = useState([]);
    const userName = localStorage.getItem('name');

    useEffect(() => {
        async function fetchSaveDishes() {
            try {
                const response = await axios.post('http://localhost:3002/saveDishes', {
                    userName,
                });
                if (response.data.user.name === userName) {
                    setSavedDishes(response.data.user.dishes);
                    setSavedTotal((response.data.user.total))
                    setSavedGuests((response.data.user.guests))
                    console.log(response.data.user.guests)
                } else {
                    throw new Error('Network response was not ok');
                }
            } catch (error) {
                console.error(error);
            }
        }
        fetchSaveDishes();
    }, [userName]);

    return (
        <div className="homepage">
            <List />
            <div>
                <table className="receipt-table">
                    <thead>
                    <tr>
                        <th>מנות שנבחרו</th>
                        <th>סה"כ לתשלום</th>
                        <th>פירוט מוזמנים</th>
                    </tr>
                    </thead>
                    <tbody>
                    {saveDishes.map((dish, index) => (
                        <tr key={index}>
                            <td>{dish}</td>
                            <td>{saveTotal[index]}</td>
                            <td>{saveGuests[index]}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
export default Home;