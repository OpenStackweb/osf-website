import React from 'react'
import PropTypes from "prop-types";
import AffiliationForm from "./AffiliationForm";
import {formatEpoch} from 'openstack-uicore-foundation/lib/utils/methods'
import {addAffiliation, saveAffiliation, deleteAffiliation, addOrganization} from "../actions/user-actions"
import { connect } from 'react-redux'

const Affiliations = class extends React.Component {

    constructor(props) {
        console.log("Affiliations::constructor");
        super(props);
        this.state = {
            showModal: false,
            selectedAffiliation: null,
        }

        this.onAddHandle = this.onAddHandle.bind(this);
        this.onHandleClose = this.onHandleClose.bind(this);
        this.onHandleSave = this.onHandleSave.bind(this);
        this.onHandleEdit = this.onHandleEdit.bind(this);
        this.onHandleDelete = this.onHandleDelete.bind(this);
    }

    onHandleEdit(ev){
        let id = parseInt(ev.currentTarget.dataset.id);
        let selectedAffiliation = this.props.affiliations.find(a => a.id === id);
        if(!selectedAffiliation) return;
        this.setState({...this.state, showModal : true, selectedAffiliation: selectedAffiliation});
    }

    onHandleDelete(ev){
        let id = parseInt(ev.currentTarget.dataset.id);
        this.props.deleteAffiliation(id);
    }

    onAddHandle() {
        this.setState({...this.state, showModal: !this.state.showModal});
    }

    onHandleClose() {
        this.setState({...this.state, showModal: false, selectedAffiliation: null});
    }

    onHandleSave(entity) {
        this.setState({...this.state, showModal: false, selectedAffiliation: null});
        if(entity.id){
            this.props.saveAffiliation(entity)
            return;
        }
        this.props.addAffiliation(entity);
    }

    render() {
        console.log("Affiliations::render");
        let {affiliations} = this.props;
        return (
            <div className="affiliations">
                {/* <h2>Affiliations</h2> */}
                <button onClick={this.onAddHandle}>Add new Affiliation</button>
                { this.state.showModal &&
                <div className="modal is-active">
                    <div className="modal-background"/>
                    <div className="modal-content" style={{width: 800}}>
                        <AffiliationForm onSave={this.onHandleSave} currentAffiliation={this.state.selectedAffiliation} onAddOrganization={this.props.addOrganization}/>
                    </div>
                    <button className="modal-close is-large" onClick={this.onHandleClose} aria-label="close"/>
                </div>
                }
                {affiliations.length > 0 &&
                <table>
                    <thead>
                    <tr>
                        <th style={{width: '20%'}}>Job Title</th>
                        <th style={{width: '20%'}}>Organization</th>
                        <th style={{width: '15%'}}>Start Date</th>
                        <th style={{width: '15%'}}>End Date</th>
                        <th style={{width: '10%'}}>Is Current ?</th>
                        <th style={{width: '10%'}}>&nbsp;</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        affiliations.map((a, idx) => {
                            return (
                                <tr id={a.id} key={`row_${a.id}`} role="row">
                                    <td key="job_title">{a.job_title ? a.job_title : 'TBD'}</td>
                                    <td key="organization">{a.organization ? a.organization.name : 'TBD'}</td>
                                    <td key="start_date">{formatEpoch(a.start_date, "YYYY-MM-DD")}</td>
                                    <td key="end_date">{formatEpoch(a.end_date, "YYYY-MM-DD")}</td>
                                    <td key="is_current">{a.is_current ? 'Yes' : 'No'}</td>
                                    <td style={{display: 'flex'}}>
                                        <button data-id={a.id} onClick={this.onHandleEdit}>
                                            <i className={`fa fa-pencil`} />
                                        </button>
                                        &nbsp;
                                        <button data-id={a.id} onClick={this.onHandleDelete}>
                                            <i className={`fa fa-trash`} />
                                        </button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
                }
                <p>
                    For our purposes, an affiliation is defined as any company where you are an officer, director or
                    employee, or any person or company that has paid you more than $60,000 USD as an independent
                    contractor in the last 12 months. Please list all affiliations which meet this criteria. If you're
                    not being paid to work on OpenInfra projects please put "Unaffiliated".
                </p>
            </div>
        );
    }
}


Affiliations.propTypes = {
    affiliations: PropTypes.array.isRequired,
    ownerId:PropTypes.number.isRequired
}

export default connect (
    null,
    {
        addAffiliation,
        saveAffiliation,
        deleteAffiliation,
        addOrganization
    }
)(Affiliations);
