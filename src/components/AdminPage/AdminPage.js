import  React, {Component} from 'react';

import './AdminPage.css';
import AddToBlog from './subAdminComponents/AddToBlog/AddToBlog';
import AddToMedia from "./subAdminComponents/AddToMedia/AddToMedia";
import ViewOrders from "./subAdminComponents/ViewOrders/ViewOrders";

class AdminPage extends Component {

    render() {
        return (
            <div>
                <AddToBlog/>
                <hr/>
                <AddToMedia/>
                <hr/>
                <ViewOrders/>
            </div>
        )
    }
}

export default AdminPage