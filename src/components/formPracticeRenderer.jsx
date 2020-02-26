import React, { Component } from 'react';
import formPractice from './formPractice';

function formPracticeRenderer(props) {

        return (
            <form>
                <h2>Gender</h2>
                <label>Male
                <input checked={props.data.gender === "male"} name="gender" value="male" type="radio" onChange={props.handleChange}/>
                </label>
                <br/>
                <label>Female
                    <input checked={props.data.gender === "female"} name="gender" value="female" type="radio" onChange={props.handleChange}/>
                </label>
                <br/>

                <h2>Name</h2>
                <label htmlFor="firstName">First Name</label>
                <input value={props.data.firstName} name="firstName" type="text" onChange={props.handleChange}/>

                <br/>

                <label htmlFor="lastName">Last Name</label>
                <input value={props.data.lastName} name="lastName" type="text" onChange={props.handleChange}/>

                <br/>

                <h2>Is Cool?</h2>
                <label htmlFor="isCool">Is Cool?</label>
                <input checked={props.data.isCool} name="isCool" type="checkbox" value="is cool" onChange={props.handleChange}/>

                <br/>


                <h2>Favourite Emoji</h2>
                <label htmlFor="emoji">Favourite Emoji: </label>
                <select value={props.data.emoji} name="emoji" onChange={props.handleChange}>
                    <option value="😃">Smile</option>
                    <option value="😼">Cat</option>
                    <option value="🥁">Drums</option>
                    <option value="🤣">Laughing</option>
                </select>
                
                <br/><br/><br/><hr/><br/>

                <h1>
                    {props.data.gender === "male" ? "Mr. " : "Mrs. " }
                    {props.data.firstName} {props.data.lastName} 
                    {props.data.isCool ? " is cool!" : " is not cool :("}
                    <br/>
                    {props.data.gender === "male" ? "His " : "Her " }
                    favourite emoji is <span>{props.data.emoji}</span>
                </h1>
            </form>
        )
}

export default formPracticeRenderer;