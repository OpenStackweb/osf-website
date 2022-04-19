import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { AjaxLoader, CountryInput, LanguageInput, FreeMultiTextInput, TextEditor } from 'openstack-uicore-foundation/lib/components'

import Swal from 'sweetalert2';

import ProfilePopupComponent from './ProfilePopupComponent'

import styles from '../style/modules/edit-profile.module.scss'
import LinkComponent from './LinkComponent';
import { navigate } from 'gatsby';

export const ProfileSpeaker = ({
  user,
  speaker,
  uploadFileProfile,
  uploadFileBigPhoto,
  saveSpeakerProfile }) => {

  const [showProfile, setShowProfile] = useState(false);
  const [speakerProfile, setSpeakerProfile] = useState({
    firstName: '',
    lastName: '',
    title: '',
    company: '',
    phoneNumber: '',
    country: '',
    bio: '',
    irc: '',
    twitter: '',
    availableForBureau: false,
    willingToPresentVideo: false,
    fundedTravel: false,
    willingToTravel: false,
    countriesToTravel: [],
    languages: [],
    expertise: [],
    previousPresentations: new Array(5),
    notes: ''
  });

  const [image, setImage] = useState(null);
  const [bigImage, setBigImage] = useState(null);
  const [editingPicture, setEditingPicture] = useState('');

  useEffect(() => {
    if (speaker) {
      setImage(speaker.pic);
      setBigImage(speaker.big_pic);
      setSpeakerProfile({
        firstName: speaker.first_name || '',
        lastName: speaker.last_name || '',
        title: speaker.title || '',
        company: speaker.company || '',
        phoneNumber: speaker.phone_number || '',
        country: speaker.country || '',
        bio: speaker.bio || '',
        irc: speaker.irc || '',
        twitter: speaker.twitter || '',
        availableForBureau: speaker.available_for_bureau || false,
        willingToPresentVideo: speaker.willing_to_present_video || false,
        fundedTravel: speaker.funded_travel || false,
        willingToTravel: speaker.willing_to_travel || false,
        countriesToTravel: speaker.travel_preferences || [],
        languages: speaker.languages || [],
        expertise: speaker.areas_of_expertise || [],
        previousPresentations: speaker.other_presentation_links || new Array(5),
        notes: speaker.notes || ''
      })
    }
    return () => {
    };
  }, [speaker]);

  const handlePictureUpdate = (image, name) => {
    if(name === 'pic') {
      uploadFileProfile(speakerProfile, image);
    } else {
      uploadFileBigPhoto(speakerProfile, image);
    }
  };

  const handleTogglePopup = (profile, image) => {
    if (profile) {
      document.body.classList.add('is-clipped');
    } else {
      document.body.classList.remove('is-clipped');
    }
    setEditingPicture(image);
    setShowProfile(profile)
  };

  const handleProfileUpdate = (fromPopup) => {
    if (validateSpeakerForm) {
      const newProfile = {
        title: speakerProfile.title,
        first_name: speakerProfile.firstName,
        last_name: speakerProfile.lastName,
        company: speakerProfile.company,
        phone_number: speakerProfile.phoneNumber,
        country: speakerProfile.country,
        bio: speakerProfile.bio,
        irc: speakerProfile.irc,
        twitter: speakerProfile.twitter,
        pic: image,
        big_pic: bigImage,
        available_for_bureau: speakerProfile.availableForBureau,
        willing_to_present_video: speakerProfile.willingToPresentVideo,
        funded_travel: speakerProfile.fundedTravel,
        willing_to_travel: speakerProfile.willingToTravel,
        travel_preferences: speakerProfile.countriesToTravel,
        languages: speakerProfile.languages,
        areas_of_expertise: speakerProfile.expertise,
        notes: speakerProfile.notes,

      };
      saveSpeakerProfile(newProfile);
    }
  };

  const updatePresentations = (field, index) => (event) => {
    let presentations = [...speakerProfile.previousPresentations];
    presentations[index] = { ...presentations[index], [field]: event.target.value };
    setSpeakerProfile({ ...speakerProfile, previousPresentations: presentations })
  }

  const validateSpeakerForm = () => {
    if (
      !speakerProfile.firstName || !speakerProfile.lastName || !speakerProfile.title || !speakerProfile.country ||
      !speakerProfile.bio) {
      const msg = `Required field missing`;
      Swal.fire("Validation error", msg, "warning");
      return false
    }
    return true
  }

  //   let rules = {
  //     title: {required: 'Title is required.'},
  //     first_name: {required: 'First name is required.'},
  //     email: {required: 'Email is required.', email: 'This is not a valid email address.'},
  //     last_name: {required: 'Last name is required.'},
  //     country: { required: 'Please select a Country.'},
  //     bio: { required: 'Please tell us about yourself.', maxLength: {value: 1000, msg: 'Value exeeded max limit of 1000 characters'}},
  //     other_presentation_links: {title_link: 'Links must start with http or https', title: 'Each link must have title'},
  //     company: {required: 'Company is required.'},
  //     phone_number: {required: 'Phone # is required.'},
  // };


  return (
    <>
      {/* <AjaxLoader relative={false} color={'#ffffff'} show={user.loadingIDP} size={120} /> */}
      <div>
        <div className="px-6 py-6 mb-6">
          <div className={`columns ${styles.fullProfile}`} >
            <div className="column">
              <div className={styles.formContainer}>
                <div className={styles.form}>
                  <div className={`columns is-mobile ${styles.inputRow}`}>
                    <div className={`column is-one-third is-mobile ${styles.inputField}`}>
                      <b>Title</b>
                      <input
                        className={`${styles.input} ${!speakerProfile.title ? styles.isDanger : ''}`}
                        type="text"
                        placeholder="Title"
                        onChange={e => setSpeakerProfile({ ...speakerProfile, title: e.target.value })}
                        value={speakerProfile.title}
                      />
                    </div>
                    <div className={`column is-one-third is-mobile ${styles.inputField}`}>
                      <b>First Name</b>
                      <input
                        className={`${styles.input} ${!speakerProfile.firstName ? styles.isDanger : ''}`}
                        type="text"
                        placeholder="First Name"
                        onChange={e => setSpeakerProfile({ ...speakerProfile, firstName: e.target.value })}
                        value={speakerProfile.firstName}
                      />
                    </div>
                    <div className={`column is-one-third ${styles.inputField}`}>
                      <b>Last Name</b>
                      <input
                        className={`${styles.input} ${!speakerProfile.lastName ? styles.isDanger : ''}`}
                        type="text"
                        placeholder="Last Name"
                        onChange={e => setSpeakerProfile({ ...speakerProfile, lastName: e.target.value })}
                        value={speakerProfile.lastName}
                      />
                    </div>
                  </div>
                  <div className={`columns is-mobile ${styles.inputRow}`}>
                    <div className={`column is-half is-mobile ${styles.inputField}`}>
                      <b>Company</b>
                      <input
                        className={`${styles.input} ${!speakerProfile.company ? styles.isDanger : ''}`}
                        type="text"
                        placeholder="Company"
                        onChange={e => setSpeakerProfile({ ...speakerProfile, company: e.target.value })}
                        value={speakerProfile.company}
                      />
                    </div>
                    <div className={`column is-half is-mobile ${styles.inputField}`}>
                      <b>Phone Number</b>
                      <input
                        className={`${styles.input} ${!speakerProfile.phoneNumber ? styles.isDanger : ''}`}
                        type="text"
                        placeholder="Phone Number"
                        onChange={e => setSpeakerProfile({ ...speakerProfile, phoneNumber: e.target.value })}
                        value={speakerProfile.phoneNumber}
                      />
                    </div>
                  </div>
                  <div className={`columns is-mobile ${styles.inputRow}`}>
                    <div className={`column is-full ${styles.inputField}`}>
                      <b>Country of Residence</b>
                      <CountryInput
                        onChange={e => setSpeakerProfile({ ...speakerProfile, country: e.target.value })}
                        className={styles.dropdown}
                        value={speakerProfile.country}
                      />
                    </div>
                  </div>
                  <div className={`columns is-mobile ${styles.inputRow}`}>
                    <div className={`column is-full ${styles.inputField}`}>
                      <b>Bio</b>
                      <TextEditor id="bio"
                        className={styles.textEditor}
                        onChange={e => setSpeakerProfile({ ...speakerProfile, bio: e.target.value })}
                        value={speakerProfile.bio} />
                    </div>
                  </div>
                  <div className={`columns is-mobile ${styles.inputRow}`}>
                    <div className={`column is-half ${styles.inputField}`}>
                      <b>IRC Handle <i>(Optional)</i></b>
                      <input
                        className={`${styles.input}`}
                        type="text"
                        placeholder="IRC"
                        onChange={e => setSpeakerProfile({ ...speakerProfile, irc: e.target.value })}
                        value={speakerProfile.irc}
                      />
                    </div>
                    <div className={`column is-half ${styles.inputField}`}>
                      <b>Twitter Name <i>(Optional)</i></b>
                      <input
                        className={`${styles.input}`}
                        type="text"
                        placeholder="Twitter"
                        onChange={e => setSpeakerProfile({ ...speakerProfile, twitter: e.target.value })}
                        value={speakerProfile.twitter}
                      />
                    </div>
                  </div>
                  <div className={`columns is-mobile ${styles.inputRow}`}>
                    <div className={`column is-full ${styles.inputField} ${styles.speakerPictures}`}>
                      <b>Upload a speaker photo</b>
                      <div className={`${styles.pictureContainer}`} style={{ paddingBottom: 25, border: '0.5px solid black' }}>
                        <div>
                          <button className="link" onClick={() => handleTogglePopup(!showProfile, 'pic')}>
                            <b>Profile Pic</b>
                            <div className={styles.profilePicture}>
                              {image ?
                                <>
                                  <img alt="profile pic" src={image} />
                                  <div className={styles.imageUpload}>
                                    <span>Upload a new picture</span>
                                    <i className={`${styles.pictureIcon} fa fa-2x fa-pencil icon is-large`} />
                                  </div>
                                </>
                                :
                                <div className={styles.uploadPicture}>
                                  <span>Upload a picture</span>
                                  <i className={`${styles.pictureIcon} fa fa-2x fa-upload icon is-large`} />
                                </div>
                              }
                            </div>
                          </button>
                        </div>
                        <div>
                          <button className="link" onClick={() => handleTogglePopup(!showProfile, 'big_pic')}>
                            <b>Large Pic</b>
                            <div className={styles.profilePicture}>
                              {bigImage ?
                                <>
                                  <img alt="profile pic" src={bigImage} />
                                  <div className={styles.imageUpload}>
                                    <span>Upload a new picture</span>
                                    <i className={`${styles.pictureIcon} fa fa-2x fa-pencil icon is-large`} />
                                  </div>
                                </>
                                :
                                <div className={styles.uploadPicture}>
                                  <span>Upload a picture</span>
                                  <i className={`${styles.pictureIcon} fa fa-2x fa-upload icon is-large`} />
                                </div>
                              }
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className={`columns is-mobile ${styles.inputRow}`} style={{ flexDirection: 'column' }}>
                    <div className={`column is-full ${styles.inputField}`}>
                      <label className={styles.checkbox} htmlFor="availableForBureau">
                        <input type='checkbox' id="availableForBureau" checked={speakerProfile.availableForBureau}
                          onChange={e => setSpeakerProfile({ ...speakerProfile, availableForBureau: !speakerProfile.availableForBureau })} />
                        I'd like to be in the speaker bureau.
                      </label>
                    </div>
                    <div className={`column is-full ${styles.inputField}`}>
                      <label className={styles.checkbox} htmlFor="willingToPresentVideo">
                        <input type='checkbox' id="willingToPresentVideo" checked={speakerProfile.willingToPresentVideo}
                          onChange={e => setSpeakerProfile({ ...speakerProfile, willingToPresentVideo: !speakerProfile.willingToPresentVideo })} />
                        Willing to present via video conference.
                      </label>
                    </div>
                    <div className={`column is-full ${styles.inputField}`}>
                      <label className={styles.checkbox} htmlFor="fundedTravel">
                        <input type='checkbox' id="fundedTravel" checked={speakerProfile.fundedTravel}
                          onChange={e => setSpeakerProfile({ ...speakerProfile, fundedTravel: !speakerProfile.fundedTravel })} />
                        My Company would be willing to fund my travel to events.
                      </label>
                    </div>
                    <div className={`column is-full ${styles.inputField}`}>
                      <label className={styles.checkbox} htmlFor="willingToTravel">
                        <input type='checkbox' id="willingToTravel" checked={speakerProfile.willingToTravel}
                          onChange={e => setSpeakerProfile({ ...speakerProfile, willingToTravel: !speakerProfile.willingToTravel })} />
                        I do not have any travel restrictions and am willing to travel to any country.
                      </label>
                    </div>
                  </div>
                  <div className={`columns is-mobile ${styles.inputRow}`}>
                    <div className={`column is-full ${styles.inputField}`}>
                      <b>Select individual countries that you are willing to travel to. If you do not check the box above AND do not select any countries, it will be assumed you are not willing to travel.</b>
                      <CountryInput
                        onChange={e => setSpeakerProfile({ ...speakerProfile, countriesToTravel: e.target.value })}
                        className={styles.dropdown}
                        multi={true}
                        value={speakerProfile.countriesToTravel}
                      />
                    </div>
                  </div>
                  <div className={`columns is-mobile ${styles.inputRow}`}>
                    <div className={`column is-full ${styles.inputField}`}>
                      <b>Spoken Languages (up to 5)</b>
                      <LanguageInput
                        onChange={e => setSpeakerProfile({ ...speakerProfile, languages: e.target.value })}
                        className={styles.dropdown}
                        multi={true}
                        value={speakerProfile.languages}
                      />
                    </div>
                  </div>
                  <div className={`columns is-mobile ${styles.inputRow}`}>
                    <div className={`column is-full ${styles.inputField}`}>
                      <b>Area Of Expertise (up to 5)</b>
                      <FreeMultiTextInput
                        id="areas_of_expertise"
                        limit={5}
                        value={speakerProfile.expertise}
                        onChange={e => setSpeakerProfile({ ...speakerProfile, expertise: e.target.value })} />
                    </div>
                  </div>
                  <div className={`columns is-mobile ${styles.inputRow}`}>
                    <div className={`column is-full ${styles.inputField}`}>
                      <b>Links To Previous Presentations</b>
                      {speakerProfile.previousPresentations.map((presentation, index) => {
                        return (
                          <div className={`column is-full ${styles.inputField}`} key={`presentation-${index}`}>
                            #{index + 1} <br />
                            <label className={styles.checkbox} style={{ fontWeight: 'normal' }}>
                              Link: <input type='text' value={speakerProfile.previousPresentations[index].link}
                                onChange={updatePresentations('link', index)} />
                            </label>
                            <label className={styles.checkbox} style={{ fontWeight: 'normal' }}>
                              Title: <input type='text' value={speakerProfile.previousPresentations[index].title}
                                onChange={updatePresentations('title', index)} />
                            </label>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                  <div className={`columns is-mobile ${styles.inputRow}`}>
                    <div className={`column is-full ${styles.inputField}`}>
                      <b>Notes</b>
                      <TextEditor id="notes"
                        className={styles.textEditor}
                        onChange={e => setSpeakerProfile({ ...speakerProfile, notes: e.target.value })}
                        value={speakerProfile.notes} />
                    </div>
                  </div>
                  <div className={`columns is-mobile ${styles.inputRow}`}>
                    <div className={`column is-full`}>
                      <span>
                        Speakers agree that Open Infrastructure Foundation may record and publish any talks presented
                        during the OpenStack Summit. If you submit a proposal on behalf of a speaker, you represent
                        to Open Infrastructure Foundation that you have the authority to submit the proposal on the
                        speaker's behalf and agree to the recording and publication of their presentation.
                      </span>
                    </div>
                  </div>
                  <div className={`columns is-mobile ${styles.buttons}`}>
                    <div className={`column is-half`}>
                      <button className="button is-large" onClick={() => handleProfileUpdate()}>Update</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {showProfile &&
              <ProfilePopupComponent
                profile={speaker}
                picture={editingPicture}
                showProfile={showProfile}
                fromFullProfile={true}
                title={'Speaker profile picture'}
                changePicture={(pic, name) => handlePictureUpdate(pic, name)}
                closePopup={() => handleTogglePopup(!showProfile)}
              />
            }
          </div>
        </div>
      </div>
    </>
  )
};

ProfileSpeaker.propTypes = {
  user: PropTypes.object,
  getIDPProfile: PropTypes.func,
  getUserProfile: PropTypes.func,
  updateIDPProfile: PropTypes.func,
  updateProfile: PropTypes.func,
  updateProfilePicture: PropTypes.func,
  updatePassword: PropTypes.func
}