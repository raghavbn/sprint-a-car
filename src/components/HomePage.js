import React from 'react';
import Accordion from './Accordion';
import hotelInfo from '../data/hotelInfo';
import IconArrowRight from '../img/icon_arrow_right.js';

class HomePage extends React.Component {
    constructor (props) {
        super(props);
        this.hotelData = hotelInfo;
    }
    render () {
        return (
            <div>
                <h2>Top Destinations</h2>
                {this.hotelData.map(hotel => <Accordion location={hotel.location} hotelList={hotel.hotelList} hotelCount={hotel.hotelCount} />)}
                <a className = "seeAllHotels" href="#">
                    <span className = "color-blue ft-base bold mg-rt-tiny">see all of our destination offers</span>
                    <IconArrowRight/>
                </a>
                <br/>
            </div>
         );
    }
}

export default HomePage;
