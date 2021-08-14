import React from 'react'
import PropTypes from 'prop-types'
import { JoinPageTemplate } from '../../templates/join-page'

const JoinPagePreview = ({ entry, getAsset }) => {
    const data = entry.getIn(['data']).toJS()

    if (data) {
        return (
            <JoinPageTemplate
                header={data.header || {}}
                weAreOpenInfra={data.weAreOpenInfra || {}}
                communities={data.communities || {}}
                contact={data.contact || {}}
                involved={data.involved || {}}
                content={data.content || {}}
            />
        )
    } else {
        return <div>Loading...</div>
    }
}

JoinPagePreview.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func,
    }),
    getAsset: PropTypes.func,
}

export default JoinPagePreview
