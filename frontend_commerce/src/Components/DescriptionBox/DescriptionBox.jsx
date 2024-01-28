import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
    return (
        <div className='descriptionbox'>
            <div className="descriptionbox-navigator">
                <div className="descriptionbox-nav-box">Description</div>
                <div className="descriptionbox-nav-box fade">Review (122)</div>
            </div>
            <div className="descriptionbox-description">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut aliquam ea perspiciatis magni laborum, deleniti provident reprehenderit in fugiat nobis! Vitae consequatur perferendis dicta mollitia dolor laudantium alias, totam magni.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam dolores iure ad libero rem vel quae iusto quis molestiae recusandae laudantium molestias velit amet ipsum ipsam, quod, pariatur magnam! Corrupti.</p>
            </div>
        </div>
    )
}

export default DescriptionBox