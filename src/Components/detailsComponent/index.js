import Loader from '../Loader';
import { IoIosBed } from "react-icons/io";
import { GiBathtub } from "react-icons/gi";
import './index.scss';

const DetailsContainer = ({ properties, loading }) => {

    return (
        <div id="detailsContainer">
            {loading && <Loader id="detailsContainerLoader" /> }
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
                            return <li key={ e }>{ e }</li>
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
            <div id="date">
                <h6>Last updated at: { properties.updatedAt ? properties.updatedAt.split('T')[0] : '' }</h6>
            </div>
        </div>
    )

}
export default DetailsContainer