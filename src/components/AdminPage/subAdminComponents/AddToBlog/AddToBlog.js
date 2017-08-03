import React, {Component} from 'react'
import axios from 'axios';


import './AddToBlog.css';

class AddToBlog extends Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.uploadFile = this.uploadFile.bind(this);
    }


    componentDidMount() {
        let self = this;
        document.getElementById('exampleInputFile').addEventListener('change', function (e) {
                let file = e.target.files[0];
                 axios.get(`/api/s3?file_name=${file.name}`).then( response => {
                    self.setState({image: response.data, file: file});
                })
            }
        )

    }

    uploadFile(file, signed_request){
        return axios.put(signed_request, file);
    }

    handleSubmit(e) {
        let url = '';
        this.uploadFile(this.state.file, this.state.image.signed_request).then(response => {
            url = this.state.image.url;
        });

        e.preventDefault();
        var self = this;
        axios.post('/api/addblog?title=' + this.title.value + '&image=' + self.state.image.url + '&description=' + this.content.value)
            .then(response => {

            })
            .catch((err) => {
                console.log(err);
            })


    }


    render() {
        return (
            <div>
                <form action="#" method="post" id="blogForm" onSubmit={this.handleSubmit}>

                    <div className="form-group">
                        <label for="exampleInputEmail1">Enter Title Name</label>
                        <input type="text" className="form-control" placeholder="Enter title"
                               ref={(title) => this.title = title} required/>
                    </div>

                    <div className="form-group">
                        <label for="exampleInputFile">File input</label>
                        <input type="file" className="form-control-file" id="exampleInputFile"
                               aria-describedby="fileHelp" ref={(image) => this.image = image} required/>
                    </div>

                    <div className="form-group">
                        <label for="exampleTextarea">Enter Content for blog</label>
                        <textarea className="form-control" id="exampleTextarea" rows="5"
                                  ref={(content) => this.content = content} required></textarea>
                    </div>

                    <button type="submit" class="btn btn-primary">Submit blog</button>

                </form>
            </div>
        )
    }
}

export default AddToBlog;
