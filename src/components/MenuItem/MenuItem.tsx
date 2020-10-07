import React, {Component} from 'react';
import './MenuItem.scss'

interface IMenuItemProps {
    title: string
    imageUrl: string
    id?: string
    size: string
}

function MenuItem({title, imageUrl, size}: IMenuItemProps) {
        return (
            <div className={`${size} menu-item`}>
                <div
                    className='background-image'
                    style={{
                        backgroundImage: `url(${imageUrl})`
                    }}
                />
                <div className="content">
                    <h1 className="title">{title}</h1>
                    <span className="subtitle">SHOP NOW</span>
                </div>
            </div>
        );
}

export default MenuItem;