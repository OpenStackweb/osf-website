import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { AjaxLoader, CountryInput, TextEditor } from 'openstack-uicore-foundation/lib/components'
import moment from "moment-timezone";

import Swal from 'sweetalert2';

import ProfilePopupComponent from './ProfilePopupComponent'
import ProfilePrograms from './ProfilePrograms'
import ProfileFoodPreferences from './ProfileFoodPreference'
import Affiliations from './Affiliations';

import styles from '../style/modules/edit-profile.module.scss'
import { MEMBERSHIP_TYPE_FOUNDATION, MEMBERSHIP_TYPE_INDIVIDUAL, MEMBERSHIP_TYPE_NONE } from "../actions/user-actions";
import { navigate } from 'gatsby';
import LinkComponent from './LinkComponent';

export const ProfileManagement = ({
  user,
  affiliations,
  ownerId,
  currentMembershipType,
  initialMembershipType,
  getIDPProfile,
  getUserProfile,
  updateIDPProfile,
  updateProfile,
  updateProfilePicture,
  submitApplication }) => {

  const [showProfile, setShowProfile] = useState(false);
  const [publicInformation, setPublicInformation] = useState({
    firstName: '',
    lastName: '',
    identifier: '',
    email: '',
    secondEmail: '',
    thirdEmail: '',
    company: '',
    jobTitle: '',
    birthday: null,
    github: '',
    irc: '',
    linkedin: '',
    twitter: '',
    wechatUser: '',
    language: '',
    bio: '',
    statementOfInterest: '',
    projects: [],
    otherProject: '',
  });

  const [showFullName, setShowFullName] = useState(false);
  const [allowChatWithMe, setAllowChatWithMe] = useState(false)
  const [showEmail, setShowEmail] = useState(false);

  const [privateInformation, setPrivateInformation] = useState({
    gender: '',
    specifyGender: '',
    foodPreference: [],
    otherFoodPreference: '',
    shirtSize: '',
    displayOnSite: null,
    subscribedToNewsletter: null,
    street: '',
    floor: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
  });

  const [image, setImage] = useState(null);

  useEffect(() => {
    handleTogglePopup();
    if (!user.idpProfile) getIDPProfile();
    if (!user.userProfile) getUserProfile();

    setImage(user.idpProfile?.picture);
    let birthdate = user.idpProfile?.birthdate ?
      moment.tz(user.idpProfile?.birthdate.date, user.idpProfile?.birthdate.timezone || 'UTC') : null;
    setPublicInformation({
      firstName: user.idpProfile?.given_name || '',
      lastName: user.idpProfile?.family_name || '',
      identifier: user.idpProfile?.nickname || '',
      email: user.idpProfile?.email || '',
      secondEmail: user.idpProfile?.second_email || '',
      thirdEmail: user.idpProfile?.third_email || '',
      company: user.idpProfile?.company || '',
      jobTitle: user.idpProfile?.job_title || '',
      birthday: birthdate,
      gender: user.idpProfile?.gender || '',
      specifyGender: user.idpProfile?.gender_specify,
      irc: user.idpProfile?.irc || '',
      github: user.idpProfile?.github_user || '',
      twitter: user.idpProfile?.twitter_name || '',
      linkedin: user.idpProfile?.linked_in_profile || '',
      weChatUser: user.idpProfile?.wechat_user || '',
      language: user.idpProfile?.locale || '',
      bio: user.idpProfile?.bio || '',
      statementOfInterest: user.idpProfile?.statement_of_interest || '',
      projects: user.userProfile?.projects || [],
      otherProject: user.userProfile?.other_project || '',
    });
    setShowFullName(user.idpProfile?.public_profile_show_fullname);
    setAllowChatWithMe(user.idpProfile?.public_profile_allow_chat_with_me);
    setShowEmail(user.idpProfile?.public_profile_show_email);
    setPrivateInformation({
      gender: user.idpProfile?.gender || '',
      specifyGender: user.idpProfile?.gender_specify || '',
      foodPreference: user.userProfile?.food_preference || [],
      otherFoodPreference: user.userProfile?.other_food_preference || '',
      shirtSize: user.userProfile?.shirt_size || '',
      displayOnSite: user.userProfile?.display_on_site || false,
      subscribedToNewsletter: user.userProfile?.subscribed_to_newsletter || false,
      street: user.idpProfile?.address1 || '',
      floor: user.idpProfile?.address2 || '',
      city: user.idpProfile?.locality || '',
      state: user.idpProfile?.region || '',
      zipCode: user.idpProfile?.postal_code || '',
      country: user.idpProfile?.country || '',
      phone: user.idpProfile?.phone_number || ''
    });

    return () => {
      setPublicInformation({
        firstName: '',
        lastName: '',
        company: ''
      });
    };
  }, [user]);

  const handlePictureUpdate = (picture) => {
    updateProfilePicture(picture);
  };

  const handleProfileUpdate = () => {
    if (!publicInformation.firstName || !publicInformation.lastName || !publicInformation.identifier || !publicInformation.email) {
      const msg = `Required field missing`;
      Swal.fire("Validation error", msg, "warning");
      return;
    }
    if (affiliations.length === 0) {
      const msg = `You need at least one affiliation`;
      Swal.fire("Validation error", msg, "warning");
      return;
    }
    const newIDPProfile = {
      first_name: publicInformation.firstName,
      last_name: publicInformation.lastName,
      identifier: publicInformation.identifier,
      email: publicInformation.email,
      second_email: publicInformation.secondEmail,
      third_email: publicInformation.thirdEmail,
      company: publicInformation.company,
      job_title: publicInformation.jobTitle,
      birthday: publicInformation.birthday?.unix(),
      github_user: publicInformation.github,
      irc: publicInformation.irc,
      linked_in_profile: publicInformation.linkedin,
      wechat_user: publicInformation.wechatUser,
      twitter_name: publicInformation.twitter,
      language: publicInformation.language,
      public_profile_show_fullname: showFullName,
      public_profile_allow_chat_with_me: allowChatWithMe,
      public_profile_show_email: showEmail,
      bio: publicInformation.bio,
      statement_of_interest: publicInformation.statementOfInterest,
      gender: privateInformation.gender,
      gender_specify: privateInformation.gender === 'Specify' ? privateInformation.specifyGender : null,
      address1: privateInformation.street,
      address2: privateInformation.floor,
      city: privateInformation.city,
      state: privateInformation.state,
      post_code: privateInformation.zipCode,
      country_iso_code: privateInformation.country,
      phone_number: privateInformation.phone,
    };
    const newProfile = {
      projects: publicInformation.projects,
      other_project: publicInformation.otherProject,
      food_preference: privateInformation.foodPreference,
      other_food_preference: privateInformation.otherFoodPreference,
      shirt_size: privateInformation.shirtSize,
      display_on_site: privateInformation.displayOnSite,
      subscribed_to_newsletter: privateInformation.subscribedToNewsletter,
    };
    updateIDPProfile(newIDPProfile)
    .then(() => updateProfile(newProfile).then( () => showSuccessMessage('Profile Updated')))
  }

  const showSuccessMessage = (message) => {
    Swal.fire("Success", message, "success");
  }

  const handleSubmitApplication = () => {
    if (!publicInformation.firstName || !publicInformation.lastName || !publicInformation.identifier || !publicInformation.email) {
      const msg = `Required field missing`;
      Swal.fire("Validation error", msg, "warning");
      return;
    }
    if (affiliations.length === 0) {
      const msg = `You need at least one affiliation`;
      Swal.fire("Validation error", msg, "warning");
      return;
    }
    const newIDPProfile = {
      first_name: publicInformation.firstName,
      last_name: publicInformation.lastName,
      identifier: publicInformation.identifier,
      email: publicInformation.email,
      second_email: publicInformation.secondEmail,
      third_email: publicInformation.thirdEmail,
      company: publicInformation.company,
      job_title: publicInformation.jobTitle,
      birthday: publicInformation.birthday?.unix(),
      github_user: publicInformation.github,
      irc: publicInformation.irc,
      linked_in_profile: publicInformation.linkedin,
      wechat_user: publicInformation.wechatUser,
      twitter_name: publicInformation.twitter,
      language: publicInformation.language,
      public_profile_show_fullname: showFullName,
      public_profile_allow_chat_with_me: allowChatWithMe,
      public_profile_show_email: showEmail,
      bio: publicInformation.bio,
      statement_of_interest: publicInformation.statementOfInterest,
      gender: privateInformation.gender,
      gender_specify: privateInformation.gender === 'Specify' ? privateInformation.specifyGender : null,
      address1: privateInformation.street,
      address2: privateInformation.floor,
      city: privateInformation.city,
      state: privateInformation.state,
      post_code: privateInformation.zipCode,
      country_iso_code: privateInformation.country,
      phone_number: privateInformation.phone,
    };
    const newProfile = {
      projects: publicInformation.projects,
      other_project: publicInformation.otherProject,
      food_preference: privateInformation.foodPreference,
      other_food_preference: privateInformation.otherFoodPreference,
      shirt_size: privateInformation.shirtSize,
      display_on_site: privateInformation.displayOnSite,
      subscribed_to_newsletter: privateInformation.subscribedToNewsletter,
    };

    submitApplication()
      .then(() => updateIDPProfile(newIDPProfile).then( () => updateProfile(newProfile).then(() => showSuccessMessage('Membership Updated') )));
  }

  const handleTogglePopup = (profile) => {
    if (profile) {
      document.body.classList.add('is-clipped');
    } else {
      document.body.classList.remove('is-clipped');
    }
    setShowProfile(profile)
  };

  const handleConvertCommunityMember = () => {
    navigate('/a/profile/membership/community')
  };

  const handleConvertIndividualMember = () => {
    navigate('/a/renew-membership')
  }

  const handleResign = () => {
    navigate('/a/profile/membership/resign')
  }


  return (
    <>
      <AjaxLoader relative={false} color={'#ffffff'} show={user.loadingIDP} size={120} />
      <div>
        <div className="px-6 py-6 mb-6">
          <div className={`columns ${styles.fullProfile}`} >
            <div className={`column is-3 ${styles.pictureWrapper}`}>
              <div className={styles.pictureContainer}>
                <div className={styles.profilePicture} onClick={() => handleTogglePopup(!showProfile)}>
                  <img alt="profile pic" src={image} />
                  <div className={styles.imageUpload}>
                    <i className={`${styles.pictureIcon} fa fa-2x fa-pencil icon is-large`} />
                  </div>
                </div>

                <h3>
                  {user.idpProfile.given_name} {user.idpProfile.family_name}
                </h3>
                <span>
                  Current Member Level <br />
                  <b>{currentMembershipType === MEMBERSHIP_TYPE_INDIVIDUAL ? `OIF ${currentMembershipType} Member` : currentMembershipType}</b>&nbsp;
                  {currentMembershipType === MEMBERSHIP_TYPE_FOUNDATION && <LinkComponent href="/a/renew-membership">(Reestablish Your Membership)</LinkComponent>}
                </span>
                { initialMembershipType !== MEMBERSHIP_TYPE_NONE &&
                <a onClick={() => currentMembershipType?.toLowerCase() === 'community' ? handleConvertIndividualMember() : handleConvertCommunityMember()}>
                  Change to {currentMembershipType?.toLowerCase() === 'community' ? 'OIF Individual Member' : 'Community'} Member
                </a>
                }
                { initialMembershipType !== MEMBERSHIP_TYPE_NONE &&
                  <div className={styles.resignWrapper}>
                    <a onClick={() => handleResign()}>Resign Membership</a>
                  </div>
                }
              </div>
            </div>
            <div className="column">
              <div className={styles.formContainer}>
                <div className={styles.header}>Email Addresses</div>
                <div className={styles.form}>
                  <div className="profile_form">
                    <p className="info"><strong>If you're an active developer on the OpenStack project, please list any
                      email addresses you use to commit code.</strong> (This will really help us avoid duplicates!) If you
                      contributed code ONLY using gerrit, all email addresses you used will be listed on the <a
                        href="https://review.openstack.org/#/settings/web-identities" rel="noreferrer" target="_blank">web identities
                        page</a>. If you have contributed also <em>before</em> gerrit was put in place, please make an
                      effort to remember other email addresses you may have used. Interested in how to <a
                        href="http://wiki.openstack.org/HowToContribute" rel="noreferrer" target="_blank">become a contributor</a>?</p>
                    <div className={`columns is-mobile ${styles.inputRow}`}>
                      <div className={`column is-half ${styles.inputField}`}>
                        <b>Primary Email Address</b>
                        <input
                          className={`${styles.input}`}
                          type="text"
                          placeholder="Primary Email Address"
                          value={publicInformation.email}
                        />
                        <p className="info warning">This email address is also the account name you use to login.</p>
                      </div>
                    </div>
                    <div className={`columns is-mobile ${styles.inputRow}`}>
                      <div className={`column is-half ${styles.inputField}`}>
                        <b>Second Email</b>
                        <input
                          className={`${styles.input}`}
                          type="text"
                          placeholder="Second Email"
                          onChange={e => setPublicInformation({ ...publicInformation, secondEmail: e.target.value })}
                          value={publicInformation.secondEmail}
                        />
                      </div>
                      <div className={`column is-half ${styles.inputField}`}>
                        <b>Third Email</b>
                        <input
                          className={`${styles.input}`}
                          type="text"
                          placeholder="Third Email"
                          onChange={e => setPublicInformation({ ...publicInformation, thirdEmail: e.target.value })}
                          value={publicInformation.thirdEmail}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.header}>Public Information</div>
                <div className={styles.form}>
                  <div className={`columns is-mobile ${styles.inputRow}`}>
                    <div className={`column is-half is-mobile ${styles.inputField}`}>
                      <b>Member ID</b>
                      <input
                        className={`${styles.input} ${styles.disabled}`}
                        type="text"
                        placeholder="Id"
                        readOnly={true}
                        value={user.userProfile.id}
                      />
                    </div>
                  </div>
                  <div className={`columns is-mobile ${styles.inputRow}`}>
                    <div className={`column is-half is-mobile ${styles.inputField}`}>
                      <b>First Name *</b>
                      <input
                        className={`${styles.input} ${!publicInformation.firstName ? styles.isDanger : ''}`}
                        type="text"
                        placeholder="First Name"
                        onChange={e => setPublicInformation({ ...publicInformation, firstName: e.target.value })}
                        value={publicInformation.firstName}
                      />
                    </div>
                    <div className={`column is-half ${styles.inputField}`}>
                      <b>Last Name *</b>
                      <input
                        className={`${styles.input} ${!publicInformation.lastName ? styles.isDanger : ''}`}
                        type="text"
                        placeholder="Last Name"
                        onChange={e => setPublicInformation({ ...publicInformation, lastName: e.target.value })}
                        value={publicInformation.lastName}
                      />
                    </div>
                  </div>
                  <hr />
                  <div className={`columns is-mobile ${styles.inputRow}`}>
                    <div className={`column is-full ${styles.inputField}`}>
                      <b>Statement of Interest</b>
                      <textarea
                        className={`textarea ${styles.textarea}`}
                        placeholder=''
                        rows="6"
                        onChange={e => setPublicInformation({ ...publicInformation, statementOfInterest: e.target.value })}
                        value={publicInformation.statementOfInterest}
                      >
                      </textarea>
                    </div>
                  </div>
                  <hr />
                  <div className={`columns is-mobile ${styles.inputRow}`}>
                    <div className={`column is-half ${styles.inputField}`}>
                      <b>Github User</b>
                      <input
                        className={`${styles.input}`}
                        type="text"
                        placeholder="Github"
                        onChange={e => setPublicInformation({ ...publicInformation, github: e.target.value })}
                        value={publicInformation.github}
                      />
                    </div>
                    <div className={`column is-half ${styles.inputField}`}>
                      <b>IRC Handle</b>
                      <input
                        className={`${styles.input}`}
                        type="text"
                        placeholder="IRC"
                        onChange={e => setPublicInformation({ ...publicInformation, irc: e.target.value })}
                        value={publicInformation.irc}
                      />
                    </div>
                  </div>
                  <div className={`columns is-mobile ${styles.inputRow}`}>
                    <div className={`column is-half ${styles.inputField}`}>
                      <b>Twitter Name</b>
                      <input
                        className={`${styles.input}`}
                        type="text"
                        placeholder="Twitter"
                        onChange={e => setPublicInformation({ ...publicInformation, twitter: e.target.value })}
                        value={publicInformation.twitter}
                      />
                    </div>
                    <div className={`column is-half ${styles.inputField}`}>
                      <b>LinkedIn Profile</b>
                      <input
                        className={`${styles.input}`}
                        type="text"
                        placeholder="LinkedIn"
                        onChange={e => setPublicInformation({ ...publicInformation, linkedin: e.target.value })}
                        value={publicInformation.linkedin}
                      />
                    </div>
                  </div>
                  <div className={`columns is-mobile ${styles.inputRow}`}>
                    <div className={`column is-half ${styles.inputField}`}>
                      <b>Wechat User</b>
                      <input
                        className={`${styles.input}`}
                        type="text"
                        placeholder="Wechat User"
                        onChange={e => setPublicInformation({ ...publicInformation, wechatUser: e.target.value })}
                        value={publicInformation.wechatUser}
                      />
                    </div>
                  </div>
                  <div className={`columns is-mobile ${styles.inputRow}`}>
                    <div className={`column is-full ${styles.inputField}`}>
                      <b>Bio</b>
                      <TextEditor id="bio"
                        className={styles.textEditor}
                        onChange={e => setPublicInformation({ ...publicInformation, bio: e.target.value })}
                        value={publicInformation.bio} />
                    </div>
                  </div>
                  <hr />
                  <ProfilePrograms
                    userPrograms={publicInformation.projects}
                    onProgramChanges={(e) => setPublicInformation({ ...publicInformation, projects: e })} />
                  <br />
                  <div className={`columns is-mobile ${styles.inputRow}`}>
                    <div className={`column is-full ${styles.inputField}`}>
                      <b>Other Project (if one above does not match)</b>
                      <input
                        className={`${styles.input}`}
                        type="text"
                        onChange={e => setPublicInformation({ ...publicInformation, otherProject: e.target.value })}
                        value={publicInformation.otherProject}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.formContainer}>
                <div className={styles.header}>Private Information</div>
                <div className={styles.form}>
                  <div className={`columns is-mobile ${styles.inputRow}`}>
                    <div className={`column is-half ${styles.inputField}`}>
                      <b>Gender</b>
                      <div className={styles.control}>
                        <div className={`${styles.select}`}>
                          {/* eslint-disable-next-line jsx-a11y/no-onchange */}
                          <select
                            onChange={e => setPrivateInformation({ ...privateInformation, gender: e.target.value })}
                            value={privateInformation.gender}
                          >
                            <option>Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Prefer not to say">Prefer not to say</option>
                            <option value="Specify">Let me specify</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    {privateInformation.gender === 'Specify' &&
                      <div className={`column is-half ${styles.inputField}`}>
                        <b>Specify gender</b>
                        <input
                          className={`${styles.input}`}
                          type="text"
                          placeholder="Specify your gender"
                          onChange={e => setPrivateInformation({ ...privateInformation, specifyGender: e.target.value })}
                          value={privateInformation.specifyGender}
                        />
                      </div>
                    }
                  </div>
                  <ProfileFoodPreferences
                    foodPreferences={privateInformation.foodPreference}
                    onPreferencesChange={(e) => setPrivateInformation({ ...privateInformation, foodPreference: e })}
                  />
                  <div className={`columns is-mobile ${styles.inputRow}`}>
                    <div className={`column is-full ${styles.inputField}`}>
                      <b>Other Food Considerations</b>
                      <input
                        className={`${styles.input}`}
                        type="text"
                        placeholder=""
                        onChange={e => setPrivateInformation({ ...privateInformation, otherFoodPreference: e.target.value })}
                        value={privateInformation.otherFoodPreference}
                      />
                    </div>
                  </div>
                  <div className={`columns is-mobile ${styles.inputRow}`}>
                    <div className={`column is-full ${styles.inputField}`}>
                      <b> Choose A Shirt Size </b>
                      <div className={styles.control}>

                        <div className={`${styles.select}`}>
                          <select
                            name="ShirtSize"
                            value={privateInformation.shirtSize}
                            onChange={(e) => setPrivateInformation({ ...privateInformation, shirtSize: e.target.value })}>
                            <option value="Small">Men's Small</option>
                            <option value="Medium">Men's Medium</option>
                            <option value="Large">Men's Large</option>
                            <option value="XL">Men's XL</option>
                            <option value="XXL">Men's XXL</option>
                            <option value="WS">Womens Small</option>
                            <option value="WM">Womens Medium</option>
                            <option value="WL">Womens Large</option>
                            <option value="WXL">Womens XL</option>
                            <option value="WXXL">Womens XXL</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <br />
                  <div className={`columns is-mobile ${styles.inputRow}`} style={{ flexDirection: 'column' }}>
                    <div className={`column is-full ${styles.inputField}`}>
                      <label className={styles.checkbox} htmlFor="subscribedToNewsletter">
                        <input type="checkbox" id="subscribedToNewsletter" checked={privateInformation.subscribedToNewsletter}
                          onChange={e => setPrivateInformation({ ...privateInformation, subscribedToNewsletter: !privateInformation.subscribedToNewsletter })} />
                        I don't mind occasionally receiving updates and communications from the OpenInfra Foundation.
                      </label>
                    </div>
                    <div className={`column is-full ${styles.inputField}`}>
                      <label className={styles.checkbox} htmlFor="displayOnSite">
                        <input type="checkbox" id="displayOnSite" checked={privateInformation.displayOnSite}
                          onChange={e => setPrivateInformation({ ...privateInformation, displayOnSite: !privateInformation.displayOnSite })} />
                        Include this bio on openstack.org.
                      </label>
                    </div>
                  </div>
                  <hr />
                  <div className={styles.form}>
                    <div className={`columns is-mobile ${styles.inputRow}`}>
                      <div className={`column is-half ${styles.inputField}`}>
                        <b>Street Address (Line1)</b>
                        <input
                          className={`${styles.input}`}
                          type="text"
                          placeholder="Complete your address"
                          onChange={e => setPrivateInformation({ ...privateInformation, street: e.target.value })}
                          value={privateInformation.street}
                        />
                      </div>
                      <div className={`column is-half ${styles.inputField}`}>
                        <b>Street Address (Line2)</b>
                        <input
                          className={`${styles.input}`}
                          type="text"
                          placeholder="Complete your address"
                          onChange={e => setPrivateInformation({ ...privateInformation, floor: e.target.value })}
                          value={privateInformation.floor}
                        />
                      </div>
                    </div>
                    <div className={`columns is-mobile ${styles.inputRow}`}>
                      <div className={`column is-half ${styles.inputField}`}>
                        <b>City</b>
                        <input
                          className={`${styles.input}`}
                          type="text"
                          placeholder="Complete your city"
                          onChange={e => setPrivateInformation({ ...privateInformation, city: e.target.value })}
                          value={privateInformation.city}
                        />
                      </div>
                      <div className={`column is-half ${styles.inputField}`}>
                        <b>State</b>
                        <input
                          className={`${styles.input}`}
                          type="text"
                          placeholder="Complete your state"
                          onChange={e => setPrivateInformation({ ...privateInformation, state: e.target.value })}
                          value={privateInformation.state}
                        />
                      </div>
                    </div>
                    <div className={`columns is-mobile ${styles.inputRow}`}>
                      <div className={`column is-half ${styles.inputField}`}>
                        <b>Post Code</b>
                        <input
                          className={`${styles.input}`}
                          type="text"
                          placeholder="Complete your zip code"
                          onChange={e => setPrivateInformation({ ...privateInformation, zipCode: e.target.value })}
                          value={privateInformation.zipCode}
                        />
                      </div>
                      <div className={`column is-half ${styles.inputField}`}>
                        <b>Country</b>
                        <CountryInput
                          onChange={e => setPrivateInformation({ ...privateInformation, country: e.target.value })}
                          className={styles.dropdown}
                          value={privateInformation.country}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.formContainer}>
                <div className={styles.header}>Affiliations</div>
                <div className={styles.form}>
                  <div className={`columns is-mobile ${styles.inputRow}`}>
                    <div className={`column is-full ${styles.inputField}`}>
                      <Affiliations affiliations={affiliations} ownerId={ownerId} />
                    </div>
                  </div>
                </div>
              </div>
              <div className={`columns is-mobile ${styles.buttons}`}>
                <div className={`column is-half`}>
                  {
                    currentMembershipType !== MEMBERSHIP_TYPE_NONE && initialMembershipType === MEMBERSHIP_TYPE_NONE ?
                      <button role="button" className="button is-large" onClick={() => handleSubmitApplication()}>Submit my Application</button>
                      :
                      <button className="button is-large" onClick={() => handleProfileUpdate()}>Update</button>
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
        {showProfile &&
          <ProfilePopupComponent
            profile={user.idpProfile}
            showProfile={showProfile}
            idpLoading={user.loadingIDP}
            fromFullProfile={true}
            changePicture={(pic) => handlePictureUpdate(pic)}
            closePopup={() => handleTogglePopup(!showProfile)}
          />
        }
      </div>
    </>
  )
};

ProfileManagement.propTypes = {
  user: PropTypes.object,
  getIDPProfile: PropTypes.func,
  getUserProfile: PropTypes.func,
  updateIDPProfile: PropTypes.func,
  updateProfile: PropTypes.func,
  updateProfilePicture: PropTypes.func,
};
