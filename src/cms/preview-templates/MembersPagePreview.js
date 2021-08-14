import React from 'react'
import PropTypes from 'prop-types'
import { MembersPageTemplate } from '../../templates/members-page'

const MembersPagePreview = ({ entry, getAsset }) => {
    const data = entry.getIn(['data']).toJS()

    if (data) {
        return (
            <MembersPageTemplate
                header={data.header || {}}                
                whyJoin={data.whyJoin || {}}
                memberBenefits={data.memberBenefits || {}}
                quote={data.quote || {}}
                companyTier={data.companyTier || {}}
                help={data.help || {}}                
                content={data.content || {}}
            />
        )
    } else {
        return <div>Loading...</div>
    }
}

MembersPagePreview.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func,
    }),
    getAsset: PropTypes.func,
}

export default MembersPagePreview
