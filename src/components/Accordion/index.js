import React, {PropTypes}from 'react';
import Panel from '../Panel'
import IconArrowClosed from '../../img/icon_arrow.js';
import IconArrowOpened from '../../img/icon_arrow_open.js';


class Accordion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };
    }
    onToggleAccordion(){
        this.setState((prevState) => {
            return { isOpen: !prevState.isOpen }
        });
    }
    render () {
        return (
            <div onClick={this.onToggleAccordion()}>
                <button className="accordion">
                    <div>{this.state.isOpen ? <IconArrowOpened/> : <IconArrowClosed/> }
                        <span className = "color-blue txt-lg bold">{this.props.location}</span>
                    </div>
                    <span className = "color-gray txt-lg bold mg-lt-md" >over {this.props.hotelCount} hotels</span>
                </button>
                <Panel hotelCount = {this.props.hotelCount} hotelList = {this.props.hotelList} showPanel = {this.state.isOpen ? '' : 'hidden'}/>
            </div>
        );
    }
}

Accordion.propTypes = {
    location: PropTypes.string,
    hotelCount: PropTypes.string,
    hotelList: PropTypes.obj
}
export default Accordion;
