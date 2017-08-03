import React, {Component} from 'react';
import axios from 'axios'


import './AddToMedia.css';

class AddToMedia extends Component {
    constructor() {
        super();
    }
    componentDidMount() {
        let self = this;
        document.getElementById('exampleInputFile').addEventListener('change', function(e) {
            let file = e.target.files[0];
            axios.get(`/api/s3?file_name=${file.name}&file_type=${file.type}`).then(response => {
                self.setState({image: response.data, file: file});
            })
        })
    }

    uploadFile(file, signed_request) {
        return axios.put(signed_request, file);
    }

    handleSubmit(e) {
        let url = '';
        this.uploadFile(this.state.file, this.state.image.signed_request).then(response => {
            url = this.state.image.url;
        });

        e.preventDefault();
        var self = this;
        axios.post('/api/addmedia?image=' + self.image.value + '&media=' + this.media.value + '&url=' + this.url.value)
            .then(response => {

            })
            .catch( err => {
                console.log(err);
            })
    }

    render() {
        return (
            <div>
                <form action="#" method="post" id="mediaForm" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label for="exampleInputFile">File input</label>
                        <input type="file" className="form-control-file" id="exampleInputFile" aria-describedby="fileHelp"
                                ref={(image) => this.image = image}/>
                    </div>
                    <div className="form-group">
                        <label for="exampleTextarea">Example textarea</label>
                        <textarea className="form-control" id="exampleTextarea" rows="3" ref={(media) => this.media = media}>write content</textarea>
                    </div>
                    <div className="form-group">
                        <label for="text">Enter Link</label>
                        <input  type='text' className="form-control" id="text" ref={(url) => this.url = url}/>
                    </div>
                </form>
            </div>
        )
    }
}

export default AddToMedia