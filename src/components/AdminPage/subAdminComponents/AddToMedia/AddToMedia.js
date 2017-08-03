import React, {Component} from 'react';
import axios from 'axios'


import './AddToMedia.css';

class AddToMedia extends Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.uploadFile = this.uploadFile.bind(this);
    }


    componentDidMount() {
        let self = this;
        document.getElementById('mediaInputFile').addEventListener('change', function (e) {
            console.log(e.target.files);

            let file = e.target.files[0];
            axios.get(`/api/s3?file_name=${file.name}&file_type=${file.type}`).then(response => {
                console.log(response.data);
                self.setState({image: response.data, file: file});
                console.log(self.state);
            })
        }
        )

    }

    uploadFile(file, signed_request) {
        return axios.put(signed_request, file);
    }

    handleSubmit(e) {
        let url = '';
        this.uploadFile(this.state.file, this.state.image.signed_request).then(response => {
            console.log(response);
            url = this.state.image.url;
        });

        e.preventDefault();
        var self = this;
        axios.post('/api/addmedia?imgurl=' + self.state.image.url + '&description=' + this.media.value + '&url=' + this.url.value)
            .then(response => {

            })
            .catch(err => {
                console.log(err);
            })


    }


    render() {
        return (
            <div>
                <form action="#" method="post" id="mediaForm" onSubmit={this.handleSubmit}>

                    <div className="form-group">
                        <label>File input</label>
                        <input type="file" className="form-control-file" id="mediaInputFile" aria-describedby="fileHelp"
                               ref={(image) => this.image = image} required/>
                    </div>

                    <div className="form-group">
                        <label>Example textarea</label>
                        <textarea className="form-control" id="exampleTextarea" rows="3"
                                  ref={(media) => this.media = media} required>write content</textarea>
                    </div>

                    <div className="form-group">
                        <label>Enter Link</label>
                        <input type='text' className="form-control" id="text" ref={(url) => this.url = url} required/>
                    </div>

                    <button type="submit" class="btn btn-primary">Submit Media Post</button>

                </form>
            </div>
        )
    }
}

export default AddToMedia