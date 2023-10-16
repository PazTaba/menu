import React, { useState } from "react";
import Table from "../../components/table/Table";
import "./ChooseTable.css";
import PlusButton from "../../components/btn/PlusButton";
import axios from "axios";
import {useNavigate} from "react-router";


function ChooseTable() {
    const navigate = useNavigate();
    const userName = localStorage.getItem('name');
    const [tableAmount, setTableAmount] = useState(0);
    let guests = [];
    async function addGuests() {
        try {
            const response = await axios.post('http://localhost:3002/addGuests', {
                userName,
                guests,
            });
            if (response.data.user.name === userName) {
                console.log(response.data.user)
            } else {
                throw new Error('Network response was not ok');
            }
        } catch (error) {
            console.error(error);
        }
    }


    const addTable = () => {
        setTableAmount(tableAmount + 1);
    };


    const tables = [];
    for (let i = 0; i < tableAmount; i++) {
        tables.push(<Table key={i} />);
    }
    const submit = (e)=>{
        e.preventDefault()
        let array = document.getElementsByTagName("input")

        for (let i = 0; i < array.length; i++) {
            guests.push(array[i].value)
        }

        addGuests();
        navigate("/home")
    }
    return (
        <form onSubmit={submit}>
            <div className={"tables"}>
                <PlusButton onClick={addTable} />
                <button type={"submit"} className={"btt"}> שמור</button>
                <div className={"grid"}>{tables}</div>
            </div>
        </form>

    );
}

export default ChooseTable;
