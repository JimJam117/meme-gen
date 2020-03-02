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

    newMeme(e) {
        fetch('https://api.imgflip.com/get_memes')
            .then(response => response.json())
            .then(response => {
                const memes = response.data
                
                this.setState(prevState => {
                        const meme = memes['memes'][Math.floor((Math.random() * 100) + 1)];

                        // if meme is not undefined, upadte the state
                        if (meme !== "undefined") {
                            const url = meme['url'];
                            return {
                                imageUrl : url
                            }
                        }

                        // if meme is undefined, run newMeme again
                        else {
                            return this.newMeme();
                        }
                    }
                )
            })

            // if e is an event, then prevent default
            if (typeof e !== "undefined") {
                e.preventDefault();
            }
    }

    formHandler(e) {
        const {value, name, type} = e.target;
        this.setState({[name] : value});
    }


    render() {
        return (
            <main>
                <form onSubmit={this.newMeme}>
                    <label>
                            Top Text
                        <input value={this.state.topText} type="text" name="topText" onChange={this.formHandler}/>
                    </label>

                    <label>
                            Bottom Text
                        <input value={this.state.bottomText} type="text" name="bottomText" onChange={this.formHandler}/>
                    </label>

                    <button type="submit">New Meme</button>
                </form>

                <div className="meme">
                    <img src={this.state.imageUrl} alt="meme" style={{width: '100%'}}/>
                    <h2 className="top">{this.state.topText}</h2>
                    <h2 className="bottom">{this.state.bottomText}</h2>
                </div>
            </main>
        )
    }
}

export default MemeGenerator;