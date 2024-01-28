import React from 'react'
import './NewCollections.css'
import new_collections from '../Assets/new_collections'
import Item from '../Item/Item'

const NewCollections = () => {
    return (
        <>
            <h1>NEW COLLECTIONS</h1>
            <div className='newcollections'>
                <div className="collections">
                    {new_collections.map((item, i) => {
                        return <Item className="images" key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                    })}
                </div>
            </div>
        </>
    )
}

export default NewCollections