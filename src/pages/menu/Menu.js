import React, {useEffect, useState} from 'react';
import './Menu.css';
import Dishes from '../../components/dishes/Dishes';
import axios from "axios";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router";

function Menu() {
    const navigate = useNavigate();
    const userName = useSelector(state => state.userInfo.name);
    const [dishes, setDishes] = useState([]);
    let total = [];
    let select = [];

    async function addDishesToDB() {
        try {
            const token = localStorage.getItem('token'); // קבלת ה-Token מה-LocalStorage
            const response = await axios.post('http://localhost:3001/addDishesToDB', {
                userName,
                select,
                total,
            }, {
                headers: {
                    'Authorization': token ? `Bearer ${token}` : '', // שליחת ה-Token בכותרת 'Authorization'
                },
            });

        } catch (error) {
            console.error(error);
        }
        console.log(total)
        console.log(select)
        console.log(userName)
    }

    const submit = (e) => {
        e.preventDefault()
        let array = document.getElementsByTagName("p")

        for (let i = 0; i < array.length; i++) {
            if (array[i].textContent.charAt(0) === 'ס') {
                total.push(array[i].textContent)
            } else {

                select.push(array[i].textContent)
            }
        }
        addDishesToDB();
        navigate("/home")
    }

    useEffect(() => {
        async function fetchDishes() {
            try {
                const token = localStorage.getItem('token');
                const response = await fetch('http://localhost:3002/api', {
                    headers: {
                        'Authorization': token ? `Bearer ${token}` : '',
                    },
                });
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setDishes(data);
            } catch (error) {
                console.error(error);
            }
        }

        console.log(total)
        fetchDishes();

    }, []);

    return (
        <div className="App">

                <Dishes className={"meal"} title={"ראשונות"} dishes={dishes}  onSubmit={submit}/>
                <Dishes className={"meal"} title={"עיקריות"} dishes={dishes} onSubmit={submit}/>
                <Dishes className={"meal"} title={"קינוחים"} dishes={dishes} onSubmit={submit}/>
            <form onSubmit={submit}>
                <button type={"submit"} className={"submit-center"} >שמור</button>
            </form>

        </div>
    );
}

export default Menu;

