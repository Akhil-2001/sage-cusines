import React, { Component, useEffect, useState, useCallback } from 'react';
import './items.css'
import '../components/ItemCard'
import ItemCard from '../components/ItemCard';
import Details from './details';

function DessertsPage() {
    
    let [responseData, setResponse] = useState('');
    const [isBusy, setBusy] = useState(true)

    useEffect(() => {
        fetch('/testAPI/desserts')
        .then(res => res.text())
        .then(res => {
            setResponse(JSON.parse(res))
            setBusy(false)
        })
        .catch((error) => {
            console.log(error)
          })
    }, []);

    return(
        <div className='item-page'>
            {
                isBusy ? (<span>Loading...</span>) : (
                    responseData.map((item, index) => {
                        return(
                            <div>
                                <ItemCard image={item.Image} name={item.Name} ingredients={item.Ingredients} steps={item.Steps}></ItemCard>
                            </div>
                        )
                    })
                )
            }
        </div>
    )
}

export default DessertsPage;