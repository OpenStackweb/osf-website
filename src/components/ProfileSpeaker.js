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
  updateProfilePicture,
  updatePassword }) => {

  const [showProfile, setShowProfile] = useState(false);
  const [speakerProfile, setSpeakerProfile] = useState({
    firstName: '',
    lastName: '',
    title: '',
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
    previousPresentations1: {},
    previousPresentations2: {},
    previousPresentations3: {},
    previousPresentations4: {},
    previousPresentations5: {},
    notes: ''
  });

  console.log('profile speaker', speakerProfile)

  const [image, setImage] = useState(null);

  useEffect(() => {


    return () => {
    };
  }, [user]);

  const handlePictureUpdate = (picture) => {
    updateProfilePicture(picture);
  };

  const handleTogglePopup = (profile) => {
    if (profile) {
      document.body.classList.add('is-clipped');
    } else {
      document.body.classList.remove('is-clipped');
    }
    setShowProfile(profile)
  };

  const handleProfileUpdate = (fromPopup) => {
  };


  return (
    <>
      <AjaxLoader relative={false} color={'#ffffff'} show={user.loadingIDP} size={120} />
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
                        placeholder="First Name"
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
                    <div className={`column is-full ${styles.inputField}`}>
                      <b>Upload a speaker photo</b>
                      <div className={`${styles.pictureContainer}`} style={{ paddingBottom: 25, border: '0.5px solid black' }}>
                        <button className="link" onClick={() => handleTogglePopup(!showProfile)}>
                          <div className={styles.profilePicture}>
                            <img alt="profile pic" src={image} />
                            <div className={styles.imageUpload}>
                              <i className={`${styles.pictureIcon} fa fa-2x fa-pencil icon is-large`} />
                            </div>
                          </div>
                        </button>
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
                      <div className={`column is-full ${styles.inputField}`}>
                        #1 <br />
                        <label className={styles.checkbox} style={{ fontWeight: 'normal' }}>
                          Link: <input type='text' value={speakerProfile.previousPresentations1.link}
                            onChange={e => setShowProfile({ ...speakerProfile, previousPresentations1: { ...speakerProfile.previousPresentations1, link: e.target.value } })} />
                        </label>
                        <label className={styles.checkbox} style={{ fontWeight: 'normal' }}>
                          Title: <input type='text' value={speakerProfile.previousPresentations1.title}
                            onChange={e => setShowProfile({ ...speakerProfile, previousPresentations1: { ...speakerProfile.previousPresentations1, title: e.target.value } })} />
                        </label>
                      </div>
                      <div className={`column is-full ${styles.inputField}`}>
                        #2 <br />
                        <label className={styles.checkbox} style={{ fontWeight: 'normal' }}>
                          Link: <input type='text' value={speakerProfile.previousPresentations2.link}
                            onChange={e => setShowProfile({ ...speakerProfile, previousPresentations2: { ...speakerProfile.previousPresentations2, link: e.target.value } })} />
                        </label>
                        <label className={styles.checkbox} style={{ fontWeight: 'normal' }}>
                          Title: <input type='text' value={speakerProfile.previousPresentations2.title}
                            onChange={e => setShowProfile({ ...speakerProfile, previousPresentations2: { ...speakerProfile.previousPresentations2, title: e.target.value } })} />
                        </label>
                      </div>
                      <div className={`column is-full ${styles.inputField}`}>
                        #3 <br />
                        <label className={styles.checkbox} style={{ fontWeight: 'normal' }}>
                          Link: <input type='text' value={speakerProfile.previousPresentations3.link}
                            onChange={e => setShowProfile({ ...speakerProfile, previousPresentations3: { ...speakerProfile.previousPresentations3, link: e.target.value } })} />
                        </label>
                        <label className={styles.checkbox} style={{ fontWeight: 'normal' }}>
                          Title: <input type='text' value={speakerProfile.previousPresentations3.title}
                            onChange={e => setShowProfile({ ...speakerProfile, previousPresentations3: { ...speakerProfile.previousPresentations3, title: e.target.value } })} />
                        </label>
                      </div>
                      <div className={`column is-full ${styles.inputField}`}>
                        #4 <br />
                        <label className={styles.checkbox} style={{ fontWeight: 'normal' }}>
                          Link: <input type='text' value={speakerProfile.previousPresentations4.link}
                            onChange={e => setShowProfile({ ...speakerProfile, previousPresentations4: { ...speakerProfile.previousPresentations4, link: e.target.value } })} />
                        </label>
                        <label className={styles.checkbox} style={{ fontWeight: 'normal' }}>
                          Title: <input type='text' value={speakerProfile.previousPresentations4.title}
                            onChange={e => setShowProfile({ ...speakerProfile, previousPresentations4: { ...speakerProfile.previousPresentations4, title: e.target.value } })} />
                        </label>
                      </div>
                      <div className={`column is-full ${styles.inputField}`}>
                        #5 <br />
                        <label className={styles.checkbox} style={{ fontWeight: 'normal' }}>
                          Link: <input type='text' value={speakerProfile.previousPresentations5.link}
                            onChange={e => setShowProfile({ ...speakerProfile, previousPresentations5: { ...speakerProfile.previousPresentations5, link: e.target.value } })} />
                        </label>
                        <label className={styles.checkbox} style={{ fontWeight: 'normal' }}>
                          Title: <input type='text' value={speakerProfile.previousPresentations5.title}
                            onChange={e => setShowProfile({ ...speakerProfile, previousPresentations5: { ...speakerProfile.previousPresentations5, title: e.target.value } })} />
                        </label>
                      </div>
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
                userProfile={user.idpProfile}
                showProfile={showProfile}
                idpLoading={user.loadingIDP}
                fromFullProfile={true}
                changePicture={(pic) => handlePictureUpdate(pic)}
                changeProfile={(profile) => handleProfileUpdate(profile)}
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
};