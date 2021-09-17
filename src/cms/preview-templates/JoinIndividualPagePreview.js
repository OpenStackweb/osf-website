import React from 'react'
import PropTypes from 'prop-types'
import { JoinIndividualPageTemplate } from '../../templates/join-individual-page'

const JoinIndividualPagePreview = ({ entry, getAsset }) => {
    const data = entry.getIn(['data']).toJS()

    if (data) {
        return (
            <JoinIndividualPageTemplate
                header={data.header || {}}
                individualMember={data.individualMember || {}}
                additional={data.additional || {}}                
                content={data.content || {}}
            />
        )
    } else {
        return <div>Loading...</div>
    }
}

JoinIndividualPagePreview.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func,
    }),
    getAsset: PropTypes.func,
}

export default JoinIndividualPagePreview
