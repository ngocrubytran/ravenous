import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business';

class BusinessList extends React.Component{
    render(){
        return(
            <div className="BusinessList">
                {this.props.businesses.map((business)=>{
                    return <Business business = {business}/>
                })}
            </div>
        );
    }
}

//this BusinessList Component will be rendered by another component so we need to export it
export default BusinessList;