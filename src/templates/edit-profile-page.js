import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { navigate } from 'gatsby'
import { connect } from 'react-redux'
import { AjaxLoader, CountryInput, LanguageInput, DateTimePicker } from 'openstack-uicore-foundation/lib/components'
import moment from "moment-timezone";

import Swal from 'sweetalert2';

import Layout from '../components/Layout';
import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import SEO from '../components/SEO';

import ProfilePopupComponent from '../components/ProfilePopupComponent'
import ProfilePrograms from '../components/ProfilePrograms'
import ProfileFoodPreferences from '../components/ProfileFoodPreference'
import ChangePasswordComponent from '../components/ChangePasswordComponent';

import { updateProfilePicture, updateIDPProfile, updateProfile, getIDPProfile, updatePassword, getUserProfile } from '../actions/user-actions'

import styles from '../style/modules/edit-profile.module.scss'

export const EditProfilePageTemplate = ({ user, isLoggedUser, getIDPProfile, getUserProfile, updateIDPProfile, updateProfile, updateProfilePicture, updatePassword }) => {

  const [showProfile, setShowProfile] = useState(false);
  const [personalProfile, setPersonalProfile] = useState({
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
    foodPreference: '',
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
    setPersonalProfile({
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
      foodPreference: user.userProfile?.food_preference || '',
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
      setPersonalProfile({
        firstName: '',
        lastName: '',
        company: ''
      });
    };
  }, [user]);

  const handlePictureUpdate = (picture) => {
    updateProfilePicture(picture);
  };

  console.log('private information, ', privateInformation)

  const handleProfileUpdate = (fromPopup) => {
    if (fromPopup) {
      updateIDPProfile(fromPopup)
    } else {
      if (!personalProfile.firstName || !personalProfile.lastName || !personalProfile.identifier || !personalProfile.email) {
        const msg = `Required field missing`;
        Swal.fire("Validation error", msg, "warning");
      } else {
        const newIDPProfile = {
          first_name: personalProfile.firstName,
          last_name: personalProfile.lastName,
          identifier: personalProfile.identifier,
          email: personalProfile.email,
          second_email: personalProfile.secondEmail,
          third_email: personalProfile.thirdEmail,
          company: personalProfile.company,
          job_title: personalProfile.jobTitle,
          birthday: personalProfile.birthday?.unix(),
          github_user: personalProfile.github,
          irc: personalProfile.irc,
          linked_in_profile: personalProfile.linkedin,
          wechat_user: personalProfile.wechatUser,
          twitter_name: personalProfile.twitter,
          language: personalProfile.language,
          public_profile_show_fullname: showFullName,
          public_profile_allow_chat_with_me: allowChatWithMe,
          public_profile_show_email: showEmail,
          bio: personalProfile.bio,
          statement_of_interest: personalProfile.statementOfInterest,
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
          projects: personalProfile.projects,
          other_project: personalProfile.otherProject,
          food_preference: privateInformation.foodPreference,
          other_food_preference: privateInformation.otherFoodPreference,
          shirt_size: privateInformation.shirtSize,
          display_on_site: privateInformation.displayOnSite,
          subscribed_to_newsletter: privateInformation.subscribedToNewsletter,
        };
        updateIDPProfile(newIDPProfile);
        updateProfile(newProfile);
      }
    }
  };

  const handleTogglePopup = (profile) => {
    if (profile) {
      document.body.classList.add('is-clipped');
    } else {
      document.body.classList.remove('is-clipped');
    }
    setShowProfile(profile)
  };

  const discardChanges = (state) => {
    switch (state) {
      case 'profile':
        let birthdate = user.idpProfile.birthdate ?
          moment.tz(user.idpProfile.birthdate.date, user.idpProfile.birthdate.timezone || 'UTC') : null;
        setPersonalProfile({
          firstName: user.idpProfile.given_name,
          lastName: user.idpProfile.family_name,
          identifier: user.idpProfile.nickname || '',
          email: user.idpProfile.email || '',
          secondEmail: user.idpProfile.second_email || '',
          thirdEmail: user.idpProfile.third_email || '',
          company: user.idpProfile.company || '',
          jobTitle: user.idpProfile.job_title || '',
          birthday: birthdate,
          gender: user.idpProfile.gender || '',
          specifyGender: user.idpProfile.gender_specify,
          github: user.idpProfile.github_user || '',
          irc: user.idpProfile.irc || '',
          linkedin: user.idpProfile.linked_in_profile || '',
          wechatUser: user.idpProfile.wechat_user || '',
          twitter: user.idpProfile.twitter_user || '',
          language: user.idpProfile.locale || '',
          bio: user.idpProfile.bio || '',
          statementOfInterest: user.idpProfile.statement_of_interest || '',
          projects: user.userProfile.projects || [],
          otherProject: user.userProfile.other_project || '',
        });
        setShowFullName(user.idpProfile.public_profile_show_fullname);
        setAllowChatWithMe(user.idpProfile.public_profile_allow_chat_with_me);
        setShowEmail(user.idpProfile.public_profile_show_email);
        break;
      case 'private-information':
        setPrivateInformation({
          street: user.idpProfile.street_address || '',
          floor: user.idpProfile.street_address2 || '',
          city: user.idpProfile.locality || '',
          state: user.idpProfile.region || '',
          zipCode: user.idpProfile.postal_code || '',
          country: user.idpProfile.country || '',
          phone: user.idpProfile.phone_number || ''
        });
        break;
      default:
        return;
    }
  };
  return (
    <>
      <AjaxLoader relative={false} color={'#ffffff'} show={user.loadingIDP} size={120} />
      <div className="wrapper project-background">
        <TopBar />
        <Navbar isLoggedUser={isLoggedUser} />
        <Header title="Profile" />
      </div>

      <main className="main">
        <div className="content">
          <section className="section about-s1-main">
            <div className="container about-s1-container">
              <div className="px-6 py-6 mb-6">
                <div className={`columns ${styles.fullProfile}`} >
                  <div className={`column is-3 ${styles.pictureContainer}`}>
                    <button className="link" onClick={() => handleTogglePopup(!showProfile)}>
                      <div className={styles.profilePicture}>
                        <img alt="profile pic" src={image} />
                        <div className={styles.imageUpload}>
                          <i className={`${styles.pictureIcon} fa fa-2x fa-pencil icon is-large`} />
                        </div>
                      </div>
                    </button>
                    <span>
                      Hello, <br />
                      {user.idpProfile.given_name} {user.idpProfile.family_name}
                    </span>
                    <span>
                      @{user.idpProfile?.nickname}
                    </span>
                    {/* <ChangePasswordComponent updatePassword={handlePasswordUpdate} /> */}
                  </div>
                  <div className="column">
                    <div className={styles.formContainer}>
                      <div className={styles.header}>Personal Profile</div>
                      <div className={styles.form}>
                        <div className={`columns is-mobile ${styles.inputRow}`}>
                          <div className={`column is-half is-mobile ${styles.inputField}`}>
                            <b>First Name *</b>
                            <input
                              className={`${styles.input} ${!personalProfile.firstName ? styles.isDanger : ''}`}
                              type="text"
                              placeholder="First Name"
                              onChange={e => setPersonalProfile({ ...personalProfile, firstName: e.target.value })}
                              value={personalProfile.firstName}
                            />
                          </div>
                          <div className={`column is-half ${styles.inputField}`}>
                            <b>Last Name *</b>
                            <input
                              className={`${styles.input} ${!personalProfile.lastName ? styles.isDanger : ''}`}
                              type="text"
                              placeholder="Last Name"
                              onChange={e => setPersonalProfile({ ...personalProfile, lastName: e.target.value })}
                              value={personalProfile.lastName}
                            />
                          </div>
                        </div>
                        <div className={`columns is-mobile ${styles.inputRow}`}>
                          <div className={`column is-half ${styles.inputField}`}>
                            <b>Identifier *</b>
                            <input
                              className={`${styles.input} ${!personalProfile.identifier ? styles.isDanger : ''}`}
                              type="text"
                              placeholder="Identifier"
                              onChange={e => setPersonalProfile({ ...personalProfile, identifier: e.target.value })}
                              value={personalProfile.identifier}
                            />
                          </div>
                          <div className={`column is-half ${styles.inputField}`}>
                            <b>Email *</b>
                            <input
                              className={`${styles.input} ${!personalProfile.email ? styles.isDanger : ''}`}
                              type="text"
                              placeholder="Email"
                              onChange={e => setPersonalProfile({ ...personalProfile, email: e.target.value })}
                              value={personalProfile.email}
                            />
                          </div>
                        </div>
                        <div className={`columns is-mobile ${styles.inputRow}`}>
                          <div className={`column is-half ${styles.inputField}`}>
                            <b>Second Email</b>
                            <input
                              className={`${styles.input}`}
                              type="text"
                              placeholder="Second Email"
                              onChange={e => setPersonalProfile({ ...personalProfile, secondEmail: e.target.value })}
                              value={personalProfile.secondEmail}
                            />
                          </div>
                          <div className={`column is-half ${styles.inputField}`}>
                            <b>Third Email</b>
                            <input
                              className={`${styles.input}`}
                              type="text"
                              placeholder="Third Email"
                              onChange={e => setPersonalProfile({ ...personalProfile, thirdEmail: e.target.value })}
                              value={personalProfile.thirdEmail}
                            />
                          </div>
                        </div>
                        <div className={`columns is-mobile ${styles.inputRow}`}>
                          <div className={`column is-half ${styles.inputField}`}>
                            <b>Company</b>
                            <input
                              className={`${styles.input}`}
                              type="text"
                              placeholder="Company"
                              onChange={e => setPersonalProfile({ ...personalProfile, company: e.target.value })}
                              value={personalProfile.company}
                            />
                          </div>
                          <div className={`column is-half ${styles.inputField}`}>
                            <b>Job Title</b>
                            <input
                              className={`${styles.input}`}
                              type="text"
                              placeholder="Job Title"
                              onChange={e => setPersonalProfile({ ...personalProfile, jobTitle: e.target.value })}
                              value={personalProfile.jobTitle}
                            />
                          </div>
                        </div>
                        <div className={`columns is-mobile ${styles.inputRow}`}>
                          <div className={`column is-half ${styles.inputField}`}>
                            <b>Birthday</b>
                            <div className="columns field">
                              <div className={`column ${styles.control}`}>
                                <DateTimePicker
                                  onChange={e => setPersonalProfile({ ...personalProfile, birthday: e.target.value })}
                                  format={{ date: 'MM/DD/YYYY', time: '' }}
                                  className={styles.datepicker}
                                  value={personalProfile.birthday}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={`columns is-mobile ${styles.inputRow}`}>
                          <div className={`column is-half ${styles.inputField}`}>
                            <b>Github</b>
                            <input
                              className={`${styles.input}`}
                              type="text"
                              placeholder="Github"
                              onChange={e => setPersonalProfile({ ...personalProfile, github: e.target.value })}
                              value={personalProfile.github}
                            />
                          </div>
                          <div className={`column is-half ${styles.inputField}`}>
                            <b>IRC</b>
                            <input
                              className={`${styles.input}`}
                              type="text"
                              placeholder="IRC"
                              onChange={e => setPersonalProfile({ ...personalProfile, irc: e.target.value })}
                              value={personalProfile.irc}
                            />
                          </div>
                        </div>
                        <div className={`columns is-mobile ${styles.inputRow}`}>
                          <div className={`column is-half ${styles.inputField}`}>
                            <b>LinkedIn</b>
                            <input
                              className={`${styles.input}`}
                              type="text"
                              placeholder="LinkedIn"
                              onChange={e => setPersonalProfile({ ...personalProfile, linkedin: e.target.value })}
                              value={personalProfile.linkedin}
                            />
                          </div>
                          <div className={`column is-half ${styles.inputField}`}>
                            <b>Twitter</b>
                            <input
                              className={`${styles.input}`}
                              type="text"
                              placeholder="Twitter"
                              onChange={e => setPersonalProfile({ ...personalProfile, twitter: e.target.value })}
                              value={personalProfile.twitter}
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
                              onChange={e => setPersonalProfile({ ...personalProfile, wechatUser: e.target.value })}
                              value={personalProfile.wechatUser}
                            />
                          </div>
                          <div className={`column is-half ${styles.inputField}`}>
                            <b>Language</b>
                            <LanguageInput
                              onChange={e => setPersonalProfile({ ...personalProfile, language: e.target.value })}
                              className={styles.dropdown}
                              value={personalProfile.language}
                            />
                          </div>
                        </div>
                      </div>
                      <div className={`columns is-mobile ${styles.inputRow}`}>
                        <div className={`column is-full ${styles.inputField}`}>
                          <b>Bio</b>
                          <textarea
                            className={`textarea ${styles.textarea}`}
                            placeholder=''
                            rows="6"
                            onChange={e => setPersonalProfile({ ...personalProfile, bio: e.target.value })}
                            value={personalProfile.bio}
                          >
                          </textarea>
                        </div>
                      </div>
                      <div className={`columns is-mobile ${styles.inputRow}`}>
                        <div className={`column is-full ${styles.inputField}`}>
                          <b>Statement of Interest</b>
                          <textarea
                            className={`textarea ${styles.textarea}`}
                            placeholder=''
                            rows="6"
                            onChange={e => setPersonalProfile({ ...personalProfile, statementOfInterest: e.target.value })}
                            value={personalProfile.statementOfInterest}
                          >
                          </textarea>
                        </div>
                      </div>
                      <ProfilePrograms
                        userPrograms={personalProfile.projects}
                        onProgramChanges={(e) => setPersonalProfile({ ...personalProfile, projects: e })} />
                      <div className={`columns is-mobile ${styles.inputRow}`}>
                        <div className={`column is-full ${styles.inputField}`}>
                          <b>Other Project (if one above does not match)</b>
                          <input
                            className={`${styles.input}`}
                            type="text"
                            onChange={e => setPersonalProfile({ ...personalProfile, otherProject: e.target.value })}
                            value={personalProfile.otherProject}
                          />
                        </div>
                      </div>
                      <label className={styles.checkbox}>
                        <input type="checkbox" checked={showFullName} onChange={e => setShowFullName(e.target.checked)} />
                        Show full name on public profile
                      </label>
                      <br />
                      <label className={styles.checkbox}>
                        <input type="checkbox" checked={showEmail} onChange={e => setShowEmail(e.target.checked)} />
                        Show email on public profile
                      </label>
                      <br />
                      <label className={styles.checkbox}>
                        <input type="checkbox" checked={allowChatWithMe} onChange={e => setAllowChatWithMe(e.target.checked)} />
                        Allow people to chat with me ?
                      </label>
                      <div className={`columns is-mobile ${styles.buttons}`}>
                        <div className={`column is-half`}>
                          <button className={`button is-large ${styles.profileButton}`} onClick={() => discardChanges('profile')}>Discard</button>
                        </div>
                        <div className={`column is-half`}>
                          <button className="button is-large" onClick={() => handleProfileUpdate()}>Update</button>
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
                        <label className={styles.checkbox} htmlFor="subscribedToNewsletter">
                          <input type="checkbox" id="subscribedToNewsletter" checked={privateInformation.subscribedToNewsletter}
                            onChange={e => setPrivateInformation({ ...privateInformation, subscribedToNewsletter: !privateInformation.subscribedToNewsletter })} />
                          I don't mind occasionally receiving updates and communications from the Open Infrastructure Foundation.
                        </label>
                        <label className={styles.checkbox} htmlFor="displayOnSite">
                          <input type="checkbox" id="displayOnSite" checked={privateInformation.displayOnSite}
                            onChange={e => setPrivateInformation({ ...privateInformation, displayOnSite: !privateInformation.displayOnSite })} />
                          Include this bio on openstack.org.
                        </label>
                        <br /> <br />
                        <div className={styles.header}>Address</div>
                        <div className={styles.form}>
                          <div className={`columns is-mobile ${styles.inputRow}`}>
                            <div className={`column is-half ${styles.inputField}`}>
                              <b>Address 1</b>
                              <input
                                className={`${styles.input}`}
                                type="text"
                                placeholder="Complete your address"
                                onChange={e => setPrivateInformation({ ...privateInformation, street: e.target.value })}
                                value={privateInformation.street}
                              />
                            </div>
                            <div className={`column is-half ${styles.inputField}`}>
                              <b>Address 2</b>
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
                              <b>Zip Code</b>
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
                          <div className={`columns is-mobile ${styles.inputRow}`}>
                            <div className={`column is-half ${styles.inputField}`}>
                              <b>Phone</b>
                              <input
                                className={`${styles.input}`}
                                type="text"
                                placeholder="Complete your phone"
                                onChange={e => setPrivateInformation({ ...privateInformation, phone: e.target.value })}
                                value={privateInformation.phone}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={`columns is-mobile ${styles.buttons}`}>
                        <div className={`column is-half`}>
                          <button className={`button is-large ${styles.profileButton}`} onClick={() => discardChanges('private-information')}>Discard</button>
                        </div>
                        <div className={`column is-half`}>
                          <button className="button is-large" onClick={() => handleProfileUpdate()}>Update</button>
                        </div>
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
                  changeProfile={(profile) => handleProfileUpdate(profile)}
                  closePopup={() => handleTogglePopup(!showProfile)}
                />
              }


            </div>
          </section>
        </div>
      </main>

    </>
  )
};

const EditProfilePage = (
  {
    location,
    user,
    isLoggedIn,
    getIDPProfile,
    getUserProfile,
    updateIDPProfile,
    updateProfile,
    updateProfilePicture,
    updatePassword,
  }
) => {
  return (
    <Layout>
      <SEO />
      <EditProfilePageTemplate location={location}
        user={user}
        isLoggedUser={isLoggedIn}
        getIDPProfile={getIDPProfile}
        getUserProfile={getUserProfile}
        updateIDPProfile={updateIDPProfile}
        updateProfile={updateProfile}
        updateProfilePicture={updateProfilePicture}
        updatePassword={updatePassword} />
    </Layout>
  )
};

EditProfilePage.propTypes = {
  user: PropTypes.object,
  getIDPProfile: PropTypes.func,
  getUserProfile: PropTypes.func,
  updateIDPProfile: PropTypes.func,
  updateProfile: PropTypes.func,
  updateProfilePicture: PropTypes.func,
  updatePassword: PropTypes.func
};

EditProfilePageTemplate.propTypes = {
  user: PropTypes.object,
  getIDPProfile: PropTypes.func,
  getUserProfile: PropTypes.func,
  updateIDPProfile: PropTypes.func,
  updateProfile: PropTypes.func,
  updateProfilePicture: PropTypes.func,
  updatePassword: PropTypes.func
};

const mapStateToProps = ({ userState }) => ({
  user: userState,
});

export default connect(mapStateToProps,
  {
    getIDPProfile,
    getUserProfile,
    updateIDPProfile,
    updateProfile,
    updateProfilePicture,
    updatePassword
  }
)(EditProfilePage);