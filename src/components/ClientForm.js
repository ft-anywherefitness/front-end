import React from 'react' 
import {Link} from 'react-router-dom'


export default function Client(props){
    const{
        values,
        submit,
        change,
        disabled,
        errors,
    } = props


    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }


    const onChange = evt => {
        const {name, value} = evt.target
        change(name,value)
    }


    return(
        <form className = 'client-container' onSubmit = {onSubmit}>
            <h2>Create Your Own Custom Workout Class</h2>

            <Link to ='/'>
                <button>Home</button>
            </Link>

            <div className = 'errors'>
                <div>{errors.classTime}</div>
                <div>{errors.classDate}</div>
                <div>{errors.classDuration}</div>
                <div>{errors.classType}</div>
                <div>{errors.intensityLevel}</div>
                <div>{errors.classLocation}</div>
            </div>


        <h2>Class Time</h2>
        {/* ////////// DROPDOWN ////////// */}
        {/* ////////// DROPDOWN ////////// */}
        {/* ////////// DROPDOWN ////////// */}
        <label htmlFor = 'classTime'>
            <select
            name = 'classTime'
            onChange = {onChange}
            value = {values.classTime}
            >
                <option value = ''> -- Select a Time --</option>
                <option value = 'morning'> 8:00am - 10:00am</option>
                <option value = 'afternoon'> 1:00pm - 3:00pm</option>
                <option value = 'night'> 7:00pm - 9:00pm</option>
            </select>
        </label>


        <h2>Class Date</h2>
        <label htmlFor = 'classDate'>
            <select
            name = 'classDate'
            onChange = {onChange}
            value = {values.classDate}
            >
                <option value = ''> -- Select a Date --</option>
                <option value = 'monday'> Monday </option>
                <option value = 'tuesday'> Tuesday</option>
                <option value = 'wednsday'> Wednsday</option>
                <option value = 'thursday'> Thursday</option>
                <option value = 'friday'> Friday</option>
                <option value = 'saturday'> Saturday</option>
                <option value = 'sunday'> Sunday</option>
            </select>
        </label>

        <h2>Class Duration</h2>
        <label htmlFor = 'classDuration'>
            <select
            name = 'classDuration'
            onChange = {onChange}
            value = {values.classDuration}
            >
                <option value = ''> -- Select a Duration --</option>
                <option value = 'thirty'> 30 minuets</option>
                <option value = 'hour'> 1 hour</option>
                <option value = 'twoHours'> 2 hours</option>
            </select>
        </label>

        <h2>Class Type</h2>
        <label htmlFor = 'classType'>
            <select
            name = 'classType'
            onChange = {onChange}
            value = {values.classType}
            >
                <option value = ''> -- Select a Type --</option>
                <option value = 'yoga'> Yoga</option>
                <option value = 'weights'> Weights</option>
                <option value = 'cycling'> Cycling</option>
                <option value = 'dance'> Dance</option>
                <option value = 'boxing'> Boxing</option>
            </select>
        </label>

        <h2>Intensity Level</h2>
        <label htmlFor = 'intensityLevel'>
            <select
            name = 'intensityLevel'
            onChange = {onChange}
            value = {values.intensityLevel}
            >
                 <option value = ''> -- Select a Intensity Level --</option>
                 <option value = 'easy'> Easy</option>
                 <option value = 'normal'> Normal</option>
                 <option value = 'hard'> Hard</option>
                 <option value = 'intense'> Intense</option>
                 <option value = 'extreme'> Extreme</option>
            </select>
        </label>

        <h2>Class Location</h2>
        <label htmlFor = 'classLocation'>
            <select
            name = 'classLocation'
            onChange = {onChange}
            value = {values.classLocation}
            >
                <option value = ''> -- Select a Location --</option>
                <option value = 'california'> California</option>
                <option value = 'arizona'> Arizona</option>
                <option value = 'sandiego'> San Diego</option>
                <option value = 'utah'> Utah</option>
                <option value = 'newyork'> New York</option>
                <option value = 'florida'> Florida</option>
                <option value = 'texas'> Texas</option>
            </select>
        </label>
        <button disabled = {disabled}>Create</button>
        </form>
    )
}

