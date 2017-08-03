import React, {Component} from 'react';
import axios from 'axios';

import './ViewOrders.css';

class ViewOrders extends Component {

	constructor() {
		super();

		this.state = {
			orders: []
		}
        this.deleteOrder = this.deleteOrder.bind(this);
	}

    deleteOrder(order){
        console.log("deleted");
        console.log(order.order_id);
        var self = this; 
        axios.delete('/api/deleteOrder/' + order.order_id).then(function(response){
            console.log(response);
            axios.get('/api/getOrders').then(function(response) {
                self.setState({'orders': response.data})
                console.log(self.state);
            })
        })
    }

	componentDidMount() {
        var self = this;
        axios.get('/api/getOrders').then(function(response) {
            self.setState({'orders': response.data})
            console.log(self.state);
        })
	}


	render() {
        var self = this;
		return (
			<div className="white-text">
				<h3>Orders Summary</h3>
                <div className="table-responsive">
				<table className="table">
					<thead>
						<tr>
							<th>Order ID</th>
							<th>Dress ID</th>
							<th>Standard Size</th>
                            <th>Bust</th>
                            <th>Chest</th>
                            <th>Hip</th>
                            <th>Shoulder</th>
                            <th>Under Bust</th>
                            <th>Upper Arm</th>
                            <th>Waist</th>
                            <th>Shoulder to Bust</th>
                            <th>Shoulder to Waist</th>
                            <th>Shoulder to Knee</th>
                            <th>Shoulder to Ground</th>
                            <th>Height</th>
                            <th>Country</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Age</th>
                            <th>Phone Number</th>
                            <th></th>
						</tr>
					</thead>
					<tbody>
                        {this.state.orders.map(function(order) {
                            return (
                                <tr>
                                    <td>{order.order_id}</td>
                                    <td>{order.dress_id}</td>
                                    <td>{order.standard_size}</td>
                                    <td>{order.bust}</td>
                                    <td>{order.chest}</td>
                                    <td>{order.hip}</td>
                                    <td>{order.shoulder}</td>
                                    <td>{order.underbust}</td>
                                    <td>{order.upperarm}</td>
                                    <td>{order.waist}</td>
                                    <td>{order.shouldertobust}</td>
                                    <td>{order.shouldertowaist}</td>
                                    <td>{order.shouldertoknee}</td>
                                    <td>{order.shouldertoground}</td>
                                    <td>{order.height}</td>
                                    <td>{order.country}</td>
                                    <td>{order.name}</td>
                                    <td>{order.email}</td>
                                    <td>{order.age}</td>
                                    <td>{order.phone_number}</td>
                                    <td><button onClick={(e) => self.deleteOrder(order)} className="btn btn-danger">Delete</button></td>
                                </tr>
                            )
                        })}

					</tbody>
				</table>
            </div>
			</div>
		)
	}
}

export default ViewOrders;
