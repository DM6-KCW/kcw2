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

            let file = e.target.files[0];
            axios.get(`/api/s3?file_name=${file.name}&file_type=${file.type}`).then(response => {
                self.setState({image: response.data, file: file});
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
            url = this.state.image.url;
        });

        e.preventDefault();
        var self = this;
        axios.post('/api/addmedia?imgurl=' + self.state.image.url + '&description=' + this.media.value + '&url=' + this.url.value)
            .then(response => {
                self.image.value = "";
                self.media.value = "";
                self.url.value = "";
                alert('completed addition to media page');
            })
            .catch(err => {
                console.log(err);
            })


    }


    render() {
        return (
            <div>
                <form action="#" method="post" id="mediaForm" onSubmit={this.handleSubmit}>
                    <h3 id="mediatitle">Add to Media Page</h3>
                    <div className="form-group">
                        <label htmlFor="" id="mediaimage">attach media image</label>
                        <input type="file" className="form-control-file form-control" id="mediaInputFile" aria-describedby="fileHelp"
                               ref={(image) => this.image = image} required />
                    </div>

                    <div className="form-group">

                        <textarea className="form-control" id="exampleTextarea" rows="3"
                                  ref={(media) => this.media = media} placeholder="Enter figure caption here" required></textarea>
                    </div>

                    <div className="form-group">

                        <input type='text' className="form-control" id="text" ref={(url) => this.url = url} placeholder="Enter URL Example: https://www.example.com/" required/>
                    </div>

                    <button type="submit" className="btn btn-success center-block">Submit Media Post</button>

                </form>
            </div>
        )
    }
}

export default AddToMedia
