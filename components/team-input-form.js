'use strict'

import React, {Component, PropTypes} from 'react'

export default class TeamForm extends Component {

    constructor(props) {
        super(props);
        let dt = new Date();
        this.timeString = dt.toISOString().split("Z")[0];
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault()
        const name = this.refs.name.value.trim()
        const slug = this.refs.slug.value.trim()
        const imageUrl = this.refs.imageUrl.value.trim()
        const domains = this.refs.domains.value.trim()
        const verifyEmail = this.refs.verifyEmail.value.trim()
        const sections = this.refs.sections.value.trim()
        const adminEmail = this.refs.adminEmail.value.trim()
        const cap = this.refs.cap.value.trim()
        const termsAndConditions = this.refs.termsAndConditions.value.trim()
        const endDate = this.refs.endDate.value.trim()


        // TODO: send request to the server
        this.props.onTeamSubmit({
            "name": name,
            "slug": slug,
            "imageUrl": imageUrl,
            "domains": domains,
            "verifyEmail": verifyEmail,
            "sections": sections,
            "adminEmail": adminEmail,
            "cap": cap,
            "termsAndConditions": termsAndConditions,
            "endDate": endDate
        });
        return
    }

    render() {
        return (
            <div>
                <form className='team-form' onSubmit={this.handleSubmit}>
                    <span>Team Name: </span>
                    <input type='text' placeholder='team name' ref='name' /><br/>
                    <span>Team Slug: </span>
                    <input type='text' placeholder='slug' ref='slug' /><br/>
                    <span>Image URL: </span>
                    <input type='text' placeholder='image url' ref='imageUrl'/><br/>
                    <span>Domains: </span>
                    <input type='text' placeholder='comma separated domains' ref='domains' /><br/>
                    <span>Verify Email: </span>
                    <input type='text' placeholder='verify email' ref='verifyEmail' defaultValue="false"/><br/>
                    <span>Sections: </span>
                    <input type='text' placeholder='sections, comma separated' ref='sections'
                           defaultValue="yoga,mindfulness,grow,search-inside-yourself"/><br/>
                    <span>Admin Email: </span>
                    <input type='text' placeholder='admin email' ref='adminEmail'/><br/>
                    <span>Cap: </span>
                    <input type='text' placeholder='Cap' ref='cap' /><br/>
                    <span>Terms & Conditions: </span>
                    <input type='text' placeholder='Terms & ConditionsC' ref='termsAndConditions' defaultValue="true"/><br/>
                    <span>End Date: </span>
                    <input type='datetime-local' ref='endDate' defaultValue={this.timeString}/><br/>
                    <div><input type='submit' className="team-submit" value='Post'/></div>
                </form>
            </div>
        )
    }
}

TeamForm.propTypes = {
    onTeamSubmit: PropTypes.func.isRequired
}
