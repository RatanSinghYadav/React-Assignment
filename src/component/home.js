import React, { useState, useEffect } from 'react';
import './home.css';

let getLocalItme = (() => {
    let localList = localStorage.getItem('lists');

    if (localList) {
        return JSON.parse(localStorage.getItem('lists'));
    } else {
        return [];
    }
})

function Home() {
    const [data, setData] = useState('');
    const [item, setItem] = useState(getLocalItme());

    function addData() {
        setItem([...item, data]);
        setData('');
    }

    let deleteItem = (id) => {
        let updateItem = item.filter((elem, ind) => {
            return ind !== id;
        });

        setItem(updateItem);
    }

    useEffect(() => {
        localStorage.setItem('lists', JSON.stringify(item));
    }, [item])


    return (
        <div>
            <h1>To Do List App</h1><br />
            <button className='btn1'>Enter the task:</button>
            <input value={data} onChange={(e) => setData(e.target.value)} placeholder='Get groceries' />
            <button className='btn2' onClick={addData}>Add Task</button><br />
            {
                item.map((e, id) => {
                    return (
                        <>
                            <div className='container'>
                                <div className='row'>
                                    <div className='col-11'>
                                        <p>{e}</p>
                                    </div>
                                    <div className='col-1' style={{ marginTop: 18 }}>
                                        <button className='dlt' onClick={() => deleteItem(id)}>Delete</button>
                                    </div>
                                </div>

                            </div>
                        </>
                    )
                })
            }

        </div>
    )
}

export default Home;