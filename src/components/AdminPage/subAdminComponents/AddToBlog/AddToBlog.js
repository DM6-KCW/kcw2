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
                self.title.value = "";
                self.image.value = "";
                self.content.value = "";
                alert('completed adding blog');
            })
            .catch((err) => {
                console.log(err);
            });

    }


    render() {
        return (
            <div>
                <form action="#" method="post" id="blogForm" onSubmit={this.handleSubmit}>
                    <h3 id="blogtitles">Add to Blog Page</h3>
                    <div className="form-group">

                        <input type="text" className="form-control" placeholder="Enter title"
                               ref={(title) => this.title = title} required/>
                    </div>

                    <div className="form-group">
                        <label id="blogimage">Add blog image</label>
                        <input type="file" className="form-control-file form-control" id="exampleInputFile"
                               aria-describedby="fileHelp" ref={(image) => this.image = image} required/>
                    </div>

                    <div className="form-group">

                        <textarea className="form-control" id="exampleTextarea" rows="5"
                                  ref={(content) => this.content = content}
                                  placeholder="enter blog content here" required>

                        </textarea>
                    </div>

                    <button type="submit" className="btn btn-success center-block">Submit blog</button>

                </form>
            </div>
        )
    }
}

export default AddToBlog;
