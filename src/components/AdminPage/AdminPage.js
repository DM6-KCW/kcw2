import  React, {Component} from 'react';

import './AdminPage.css';
import AddToBlog from './subAdminComponents/AddToBlog/AddToBlog';

class AdminPage extends Component {

    render() {
        return (
            <div>
                <AddToBlog/>
            </div>
        )
    }
}

export default AdminPage