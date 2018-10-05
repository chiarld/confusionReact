import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

function RenderDish({dish})
{
    return(
        <Card>
            <CardImg width ="100%" src={dish.image} alt={dish.name}/>
            <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
            </CardBody>
        </Card>
    );
}
function RenderComments({comments})
{   
    return(
        comments.map((comment) => {
            return(
                <div key={comment.id}>
                    <li>{comment.comment}</li>
                    <br></br>
                    <li> -- {comment.author}, 
                        {Intl.DateTimeFormat('en-US', {
                        year: 'numeric',
                        day: '2-digit',
                        month: 'short'
                        }).format(new Date(comment.date))} 
                    </li>
                    <br></br>
                </div>
            );
        })
    );
}
const DishDetail = (props) => {
    if(props.dish == null)
    {
        return(
            <div>
            </div>
        );
    }
    else
    {
        return(
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish = {props.dish}/>
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <h4>Comments</h4>
                        <ul className="list-unstyled">
                            <RenderComments comments={props.dish.comments} />
                        </ul>
                    </div>
                </div> 
            </div>
        );
    }
}


export default DishDetail;