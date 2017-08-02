import  React, {Component} from 'react';

import './AdminPage.css';
import AddToBlog from './subAdminComponents/AddToBlog/AddToBlog';
import AddToMedia from "./subAdminComponents/AddToMedia/AddToMedia";
import ViewOrders from "./subAdminComponents/ViewOrders/ViewOrders";
import RemoveBlog from "./subAdminComponents/RemoveFromBlog/removeblog";
class AdminPage extends Component {

    render() {
        return (
            <div>
                <AddToBlog/>
                <hr/>
                <AddToMedia/>
                <hr/>
                <ViewOrders/>
                <hr/>
                <RemoveBlog/>
            </div>
        )
    }
}

export default AdminPage
