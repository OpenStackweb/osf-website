import React from 'react'
import PropTypes from "prop-types";
import {DateTimePicker, OrganizationInput} from 'openstack-uicore-foundation/lib/components'
import { epochToMomentTimeZone } from "openstack-uicore-foundation/lib/utils/methods";

const AffiliationForm = class extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: this.props.currentAffiliation ? this.props.currentAffiliation.id : 0,
            job_title: this.props.currentAffiliation ? this.defaultVal(this.props.currentAffiliation.job_title, '') : '',
            organization: this.props.currentAffiliation ? this.props.currentAffiliation.organization : null,
            start_date: this.props.currentAffiliation ? this.defaultVal(this.props.currentAffiliation.start_date, '') : '',
            end_date: this.props.currentAffiliation ? this.defaultVal(this.props.currentAffiliation.end_date, '') : '',
            is_current: this.props.currentAffiliation ? this.props.currentAffiliation.is_current : 0,
            validationErrors: {}
        }

        this.onHandleSave = this.onHandleSave.bind(this);
        this.onHandleChangeCell = this.onHandleChangeCell.bind(this);
    }

    defaultVal(val, defaultVal) {
        return val ? val : defaultVal;
    }

    onHandleSave() {
        let currentValidationErrors = {};
        if (this.state.job_title === '') {
            currentValidationErrors.job_title = 'Job title is mandatory.';
        }
        if (this.state.organization === null) {
            currentValidationErrors.organization = 'Organization is mandatory.';
        }
        if (this.state.start_date === '') {
            currentValidationErrors.start_date = 'Start Date is mandatory.';
        }
        if (!this.state.is_current && this.state.end_date === '') {
            currentValidationErrors.start_date = 'End Date is mandatory.';
        }

        this.setState({...this.state, validationErrors: currentValidationErrors});

        if (Object.keys(currentValidationErrors).length > 0) return;

        this.props.onSave({...this.state});
    }

    onHandleChangeCell(ev) {

        let field = ev.target;
        let value = field.value;
        let newState = [];
        if (field.type === 'checkbox') {
            value = field.checked;
            if (value)
                newState['end_date'] = '';
        }

        if (ev.target.type === 'datetime') {
            value = value.valueOf() / 1000;
        }
        let fieldName = field.id;
        newState[`${fieldName}`] = value;

        this.setState({...this.state, ...newState});
    }

    render() {
      const customStyles = {
        control: (provided, state) => ({
          ...provided,
          background: '#fff',
          borderColor: 'black',
          minHeight: '42px',
          height: '42px',
          boxShadow: state.isFocused ? null : null,
        }),

        valueContainer: (provided, state) => ({
          ...provided,
          height: '42px',
          padding: '0 6px'
        }),

        input: (provided, state) => ({
          ...provided,
          margin: '0px',
        }),
        indicatorSeparator: state => ({
          display: 'none',
        }),
        indicatorsContainer: (provided, state) => ({
          ...provided,
          height: '42px',
        }),
      };

        return (
            <div className="affiliation-form">
                <div className="field">
                    <label htmlFor="job_title" >Job title</label>
                    <div className="control">
                        <input type="text" id="job_title" name="job_title" value={this.state.job_title}
                               onChange={this.onHandleChangeCell}/>
                    </div>
                    {this.state.validationErrors.hasOwnProperty('job_title') &&
                    <p className="validation_error">{this.state.validationErrors.job_title}</p>
                    }
                </div>
                <div className="field">
                    <label htmlFor="organization">Organization</label>
                  <OrganizationInput
                    id="organization"
                    placeholder="Type something and select..."
                    value={this.state.organization}
                    onChange={this.onHandleChangeCell}
                    allowCreate
                    onCreate={this.props.onAddOrganization}
                    className={'dropdown-affiliation'}
                    styles={customStyles}
                  />
                    {this.state.validationErrors.hasOwnProperty('organization') &&
                    <p className="validation_error">{this.state.validationErrors.organization}</p>
                    }
                </div>
                <div className="field">
                    <label htmlFor="start_date">Start date</label>
                    <div className="control">
                        <DateTimePicker
                            className="affiliation-datepicker"
                            id="start_date"
                            onChange={this.onHandleChangeCell}
                            format={{date: "YYYY-MM-DD", time: false}}
                            timezone={'UTC'}
                            value={epochToMomentTimeZone(this.state.start_date, "UTC")}
                        />
                    </div>
                    {this.state.validationErrors.hasOwnProperty('start_date') &&
                    <p className="validation_error">{this.state.validationErrors.start_date}</p>
                    }
                </div>
                <div className="field">
                    <label htmlFor="end_date">End date</label>
                    <div className="control">
                        <DateTimePicker
                            className="affiliation-datepicker"
                            id="end_date"
                            onChange={this.onHandleChangeCell}
                            format={{date: "YYYY-MM-DD", time: false}}
                            timezone={'UTC'}
                            value={epochToMomentTimeZone(this.state.end_date, "UTC")}
                        />
                    </div>
                    {this.state.validationErrors.hasOwnProperty('end_date') &&
                    <p className="validation_error">{this.state.validationErrors.end_date}</p>
                    }
                </div>
                <div className="field">
                    <div className="control checkbox-affiliation">
                        <label htmlFor="is_current">
                            <input id="is_current" type="checkbox" checked={this.state.is_current}
                                   onChange={this.onHandleChangeCell}/> Is Current?
                            {this.state.validationErrors.hasOwnProperty('is_current') &&
                            <p className="validation_error">{this.state.validationErrors.is_current}</p>
                            }
                        </label>
                    </div>
                </div>
                <div className="field is-grouped">
                    <div className="control">
                        <button className="button is-link" onClick={this.onHandleSave}>Save</button>
                    </div>
                </div>
            </div>
        );
    }
}

AffiliationForm.propTypes = {
    currentAffiliation: PropTypes.object,
    onSave: PropTypes.func.isRequired,
}

export default AffiliationForm
