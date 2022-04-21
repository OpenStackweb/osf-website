import React, { useState, useEffect } from "react"
import { connect } from 'react-redux'
import { navigate } from "gatsby"
import Layout from '../components/Layout'
import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import SEO from "../components/SEO";
import MembershipType from "../components/MembershipType";
import URI from "urijs";
import { MEMBERSHIP_TYPE_NONE } from "../actions/user-actions";
import 'openstack-uicore-foundation/lib/css/components.css';
import {
    addAffiliation,
    saveAffiliation,
    deleteAffiliation,
    addOrganization,
    updateMembershipType,
    updateProfilePicture,
    updateIDPProfile,
    updateProfile,
    getIDPProfile,
    getUserProfile
} from "../actions/user-actions"
import { getMemberProfile } from '../actions/member-actions';
import {
    updateUserInfo
} from "openstack-uicore-foundation/lib/methods";
import { ProfileManagement } from "../components/ProfileManagementComponent";
import ProfileSubNav from "../components/ProfileSubNav";

export const ProfilePageTemplate = ({
    currentMember,
    initialMembershipType,
    currentAffiliations,
    idpProfile,
    isLoggedUser,
    location,
    updateMembershipType,
    user,
    updateProfilePicture,
    updateIDPProfile,
    updateProfile,
    getIDPProfile,
    getUserProfile,
}) => {

    let query = URI.parseQuery(location.search);

    let initialCurrentMemberShipType = initialMembershipType;

    if (query.hasOwnProperty("membership_type") && initialMembershipType === MEMBERSHIP_TYPE_NONE) {
        initialCurrentMemberShipType = query["membership_type"];
    }

    const [currentMembershipType, setCurrentMembershipType] = useState(initialCurrentMemberShipType);
    const [validationError, setValidationError] = useState(null);

    const handleConvertCommunityMember = () => {
        navigate('/a/profile/membership/community')
    };

    const handleConvertFoundationMember = () => {
        navigate('/a/profile/membership/foundation')
    }

    const handleResign = () => {
        navigate('/a/profile/membership/resign')
    }

    const onSelectMembershipType = (type) => {
        console.log(`selected type ${type}`);
        setCurrentMembershipType(type);
    }

    const onSubmitApplication = () => {
        if (currentAffiliations.length === 0) {
            setValidationError('* You need at least one affiliation');
            return;
        }
        setValidationError(null);
        return updateMembershipType(currentMembershipType);
    }

    return (
        <div>
            <div className="wrapper project-background">
                <TopBar />
                <Navbar isLoggedUser={isLoggedUser} />
                <ProfileSubNav activePage='profile-details' pageName='Your Details' />
                <Header title="Profile" subTitle="My Details" />
            </div>

            <main className="main">
                <div className="content">
                    <section className="section about-s1-main">
                        <div className="container about-s1-container">
                            <div className="columns">
                                <div className="column">
                                    <MembershipType currentType={currentMembershipType}
                                        userName={`${idpProfile.given_name} ${idpProfile.family_name}`}
                                        initialType={initialMembershipType}
                                        handleConvertCommunityMember={() => handleConvertCommunityMember()}
                                        handleConvertFoundationMember={() => handleConvertFoundationMember()}
                                        handleResign={() => handleResign()}
                                        onSelectMembershipType={(type) => onSelectMembershipType(type)}
                                    />
                                    {
                                        currentMembershipType !== MEMBERSHIP_TYPE_NONE &&
                                        <React.Fragment>
                                            <hr />
                                            <ProfileManagement
                                                user={user}
                                                currentMembershipType={currentMembershipType}
                                                initialMembershipType={initialMembershipType}
                                                submitApplication={() => onSubmitApplication()}
                                                affiliations={currentAffiliations}
                                                ownerId={currentMember.id}
                                                updateProfilePicture={updateProfilePicture}
                                                updateIDPProfile={updateIDPProfile}
                                                updateProfile={updateProfile}
                                                getIDPProfile={getIDPProfile}
                                                getUserProfile={getUserProfile} />
                                        </React.Fragment>
                                    }
                                    {validationError &&
                                        <p className="validation_error">{validationError}</p>
                                    }
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    )
}

const ProfilePage = ({
    currentMember,
    initialMembershipType,
    currentAffiliations,
    idpProfile,
    isLoggedUser,
    location,
    updateMembershipType,
    updateUserInfo,
    user,
    updateProfilePicture,
    updateIDPProfile,
    updateProfile,
    getIDPProfile,
    getUserProfile,
}) => {

    useEffect(() => {
        getUserProfile();
        getIDPProfile();
    }, [])

    return (
        <Layout>
            <SEO />
            <ProfilePageTemplate
                currentMember={currentMember}
                initialMembershipType={initialMembershipType}
                currentAffiliations={currentAffiliations}
                idpProfile={idpProfile}
                location={location}
                isLoggedUser={isLoggedUser}
                updateMembershipType={updateMembershipType}
                user={user}
                updateProfilePicture={updateProfilePicture}
                updateIDPProfile={updateIDPProfile}
                updateProfile={updateProfile}
                getIDPProfile={getIDPProfile}
                getUserProfile={getUserProfile}
            />
        </Layout>
    )
}

export default connect(state => ({
    isLoggedUser: state.loggedUserState.isLoggedUser,
    currentMember: state.loggedUserState.member,
    initialMembershipType: state.userState.currentMembershipType,
    currentAffiliations: state.userState.currentAffiliations,
    idpProfile: state.userState.idpProfile,
    user: state.userState,
}),
    {
        addAffiliation,
        saveAffiliation,
        deleteAffiliation,
        addOrganization,
        updateMembershipType,
        getMemberProfile,
        updateUserInfo,
        getIDPProfile,
        getUserProfile,
        updateIDPProfile,
        updateProfile,
        updateProfilePicture,
    })(ProfilePage)