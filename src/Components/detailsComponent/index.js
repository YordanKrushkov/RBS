import React from 'react'
import './index.scss'
import { IoIosBed } from "react-icons/io";
import { GiBathtub } from "react-icons/gi";

const DetailsContainer = ({properties}) => {
    let count = 0;

    return (
        <div className="detailsContainer">
            <div id='detailsField'>
                <div id="detailsIconWrapper">
                    <div>
                        <IoIosBed className="iconsPic" />
                        <span>{ properties.bedrooms }</span>
                    </div>
                    <div>
                        <GiBathtub className="iconsPic" />
                        <span>{ properties.bathroom }</span>
                    </div>
                </div>
                <div className="infoBody">
                    <div>
                        <h2>Details</h2>

                    </div>
                    <ul className="moreDetailsList">
                        { properties.details ? (properties.details.map(e => {
                            return <li key={ count++ }>{ e }</li>
                        })) : null }
                    </ul>
                </div>
                <div id="detailDescription">
                    <h2>Description</h2>
                    <div>
                        <p>{ properties.description }</p>
                    </div>
                </div>
            </div>

        </div>
    )

}
export default DetailsContainer