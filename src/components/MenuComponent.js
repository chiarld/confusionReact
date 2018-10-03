import React, {Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import DishDetail from './DishdetailComponent';

class Menu extends Component 
{
    constructor(props)
    {
        super(props); // supplying parameter props to super class.
        this.state = 
        {
            selectedDish : null
        }
    }

    onDishSelect(dish)
    {
        this.setState({selectedDish : dish});
    }

    render()
    {
        const menu = this.props.dishes.map((dish) => { // foreach(var dish in dishes){...}
            return (
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card onClick={() => this.onDishSelect(dish)}>
                        <CardImg width="100%" src={dish.image} alt={dish.name}/>
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div> // key is necessary because we are creating a list of items and that's how react handles it
            );
        }); // iterates over the dish array and maps into schema

        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                <DishDetail dish = {this.state.selectedDish}/>
            </div>
        );
    }
}

export default Menu;