import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { AjaxLoader, CountryInput, LanguageInput, FreeMultiTextInput, TextEditor } from 'openstack-uicore-foundation/lib/components'

import Swal from 'sweetalert2';

import ProfilePopupComponent from './ProfilePopupComponent'

import styles from '../style/modules/edit-profile.module.scss'

export const ProfileSpeaker = ({
  speaker,
  idpProfile,
  loading,
  uploadFileProfile,
  uploadFileBigPhoto,
  saveSpeakerProfile }) => {

  const [showProfile, setShowProfile] = useState(false);
  const [speakerProfile, setSpeakerProfile] = useState({
    speakerId: null,
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
    setImage(speaker?.pic);
    setBigImage(speaker?.big_pic);
    setSpeakerProfile({
      speakerId: speaker?.id || null,
      firstName: speaker?.id && speaker.first_name !== '' ? speaker.first_name : idpProfile.given_name || '',
      lastName: speaker?.id && speaker.last_name !== '' ? speaker.last_name : idpProfile.family_name || '',
      title: speaker?.title || '',
      company: speaker?.company || '',
      phoneNumber: speaker?.phone_number || '',
      country: speaker?.id && speaker.country !== '' ? speaker.country : idpProfile.country || '',
      bio: speaker?.id && speaker.bio !== '' ? speaker.bio : idpProfile.bio || '',
      irc: speaker?.id && speaker.irc !== '' ? speaker.irc : idpProfile.irc || '',
      twitter: speaker?.id && speaker.twitter !== '' ? speaker.twitter : idpProfile.twitter || '',
      availableForBureau: speaker?.available_for_bureau || false,
      willingToPresentVideo: speaker?.willing_to_present_video || false,
      fundedTravel: speaker?.funded_travel || false,
      willingToTravel: speaker?.willing_to_travel || false,
      countriesToTravel: speaker?.travel_preferences || [],
      languages: speaker?.languages || [],
      expertise: speaker?.areas_of_expertise || [],
      previousPresentations: speaker?.other_presentation_links || new Array(5),
      notes: speaker?.notes || ''
    })
    return () => {
    };
  }, [speaker]);

  const validateSpeakerForm = () => {
    if (
      !speakerProfile.firstName || !speakerProfile.lastName || !speakerProfile.title || !speakerProfile.country ||
      !speakerProfile.bio) {
      const msg = `Required field missing`;
      Swal.fire("Validation error", msg, "warning");
      return false
    }
    if (speakerProfile.previousPresentations.filter(p => p.link).some(presentation => {
      const httpRegex = new RegExp(/^http(s)?\:\/\//i)
      return !httpRegex.test(presentation.link);
    })) {
      const msg = `Links must start with http or https`;
      Swal.fire("Validation error", msg, "warning");
      return false
    }
    if (speakerProfile.previousPresentations.filter(p => p.link).some(presentation => !presentation.title)) {
      const msg = `Each link must have title`;
      Swal.fire("Validation error", msg, "warning");
      return false
    }
    return true;
  }

  const handlePictureUpdate = (image, name) => {
    if (name === 'pic') {
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

  const handleProfileUpdate = () => {
    const formIsValid = validateSpeakerForm();
    if (formIsValid) {
      const newProfile = {
        id: speakerProfile.speakerId,
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
        other_presentation_links: speakerProfile.previousPresentations
      };
      saveSpeakerProfile(newProfile);
    }
  };

  const updatePresentations = (field, index) => (event) => {
    let presentations = [...speakerProfile.previousPresentations];
    presentations[index] = { ...presentations[index], [field]: event.target.value };
    setSpeakerProfile({ ...speakerProfile, previousPresentations: presentations })
  }



  return (
    <>
      <AjaxLoader relative={false} color={'#ffffff'} show={loading} size={120} />
      <div>
        <div className="px-6 py-6 mb-6">
          <div className={`columns ${styles.fullProfile}`} >
            <div className="column">
              <div className={styles.formContainer}>
                <div className={styles.form}>
                  <div className={`columns is-mobile ${styles.inputRow}`}>
                    <div className={`column is-one-third is-mobile ${styles.inputField}`}>
                      <b>Title *</b>
                      <input
                        className={`${styles.input} ${!speakerProfile.title ? styles.isDanger : ''}`}
                        type="text"
                        placeholder="Title"
                        onChange={e => setSpeakerProfile({ ...speakerProfile, title: e.target.value })}
                        value={speakerProfile.title}
                      />
                    </div>
                    <div className={`column is-one-third is-mobile ${styles.inputField}`}>
                      <b>First Name *</b>
                      <input
                        className={`${styles.input} ${!speakerProfile.firstName ? styles.isDanger : ''}`}
                        type="text"
                        placeholder="First Name"
                        onChange={e => setSpeakerProfile({ ...speakerProfile, firstName: e.target.value })}
                        value={speakerProfile.firstName}
                      />
                    </div>
                    <div className={`column is-one-third ${styles.inputField}`}>
                      <b>Last Name *</b>
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
                      <b>Company *</b>
                      <input
                        className={`${styles.input} ${!speakerProfile.company ? styles.isDanger : ''}`}
                        type="text"
                        placeholder="Company"
                        onChange={e => setSpeakerProfile({ ...speakerProfile, company: e.target.value })}
                        value={speakerProfile.company}
                      />
                    </div>
                    <div className={`column is-half is-mobile ${styles.inputField}`}>
                      <b>Phone Number *</b>
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
                      <b>Country of Residence *</b>
                      <CountryInput
                        onChange={e => setSpeakerProfile({ ...speakerProfile, country: e.target.value })}
                        className={styles.dropdown}
                        value={speakerProfile.country}
                      />
                    </div>
                  </div>
                  <div className={`columns is-mobile ${styles.inputRow}`}>
                    <div className={`column is-full ${styles.inputField}`}>
                      <b>Bio *</b>
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
                  {!speakerProfile.willingToTravel &&
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
                  }
                  <div className={`columns is-mobile ${styles.inputRow}`}>
                    <div className={`column is-full ${styles.inputField}`}>
                      <b>Spoken Languages (up to 5)</b>
                      <LanguageInput
                        onChange={e => setSpeakerProfile({ ...speakerProfile, languages: e.target.value })}
                        className={styles.dropdown}
                        multi={true}
                        value={speakerProfile.languages}
                        shouldUseId={true}
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
                        Speakers agree that OpenInfra Foundation may record and publish any talks presented
                        during the OpenInfra Summit. If you submit a proposal on behalf of a speaker, you
                        represent to OpenInfra Foundation that you have the authority to submit the proposal
                        on the speaker's behalf and agree to the recording and publication of their presentation.
                      </span>
                    </div>
                  </div>
                  <div className={`columns is-mobile ${styles.buttons}`}>
                    <div className={`column is-half`}>
                      <button className="button is-large" onClick={() => handleProfileUpdate()}>{speakerProfile.speakerId ? 'Update' : 'Save'}</button>
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
  updateProfile: PropTypes.func,
  updateProfilePicture: PropTypes.func,
}