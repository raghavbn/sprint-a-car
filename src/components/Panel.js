import React, {PropTypes} from 'react';
import IconArrowRight from '../img/icon_arrow_right.js';

class Panel extends React.Component {
    constructor (props) {
        super(props);
    }
    ListComponent (item,index) {
        return <li key={index} className = "hotelGrid--lineElement">
            <span className = "color-blue ft-base">{item.hotelName}</span>
        <div className = "floatRight">
            <span className = "color-grayDark ft-base">{item.stars}</span>
            <span className = "color-red mg-rt-tiny ft-base">&#9733;</span>
            <span className = "color-grayDark mg-rt-tiny ft-base">From</span>
            {item.discountedPrice ?
                <span>
                    <strike>{item.originalPrice}</strike>
                    <span className = "mg-lt-tiny color-greenDark ft-base bold">{item.discountedPrice}</span>
                </span>
                :
                <span className = "color-greenDark ft-base bold">{item.originalPrice}</span>
    }
    </div>
        </li>
    }
    render () {
        return (
            <div className = {this.props.showPanel}>
                <ul className = "hotelGrid">
                    {this.props.hotelList.map(this.ListComponent)}
                </ul>
                <a className = "seeEachHotel" href="#">
                    <span className = "color-blue ft-base bold mg-rt-tiny">see all {this.props.hotelCount} hotels in London</span>
                    <IconArrowRight/>
                </a>
            </div>
        );
    }
}

Panel.propTypes = {
    showPanel: PropTypes.string,
    hotelCount: PropTypes.string,
    hotelList: PropTypes.obj
}

export default Panel;
