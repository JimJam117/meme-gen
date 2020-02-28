import React, {Component} from 'react';

class MemeGenerator extends Component {

    constructor() {
        super();

        this.state = {
            image : {},
            imageUrl : "",
            topText : "Top Text",
            bottomText : "Bottom Text",
            memeImgs : []
        }

        this.formHandler = this.formHandler.bind(this);
        this.newMeme = this.newMeme.bind(this);
    }

    componentDidMount() {
        this.newMeme();
    }

    newMeme() {
        fetch('https://api.imgflip.com/get_memes')
            .then(response => response.json())
            .then(response => {
                const memes = response.data

                
                this.setState(prevState => {
                        return {imageUrl : memes['memes'][Math.floor((Math.random() * 100) + 1)]['url']}
                    }
                    )
            })
    }

    formHandler(e) {
        const {value, name, type} = e.target;
        this.setState({[name] : value});
    }


    render() {
        return (
            <main>
                <form>
                    <label>
                            Top Text
                        <input value={this.state.topText} type="text" name="topText" onChange={this.formHandler}/>
                    </label>

                    <label>
                            Bottom Text
                        <input value={this.state.bottomText} type="text" name="bottomText" onChange={this.formHandler}/>
                    </label>

                    <button onSubmit={this.newMeme}>New Meme</button>
                </form>

                <div className="meme" style={{ backgroundImage : `url(${this.state.imageUrl})`}}>
                    <h2 className="top">{this.state.topText}</h2>
                    <h2 className="bottom">{this.state.bottomText}</h2>
                </div>
            </main>
        )
    }
}

export default MemeGenerator;