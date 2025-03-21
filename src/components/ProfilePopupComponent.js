import React, { useState, useRef, useEffect } from 'react'
import AvatarEditor from 'react-avatar-editor'
import { AjaxLoader } from "openstack-uicore-foundation/lib/components";
import { create_UUID } from '../utils/uuidGenerator'
import Link from "./LinkComponent";

import styles from '../style/modules/profile-popup.module.scss';


const ProfilePopupComponent = ({ profile, idpLoading, closePopup, showProfile, changePicture, fromFullProfile, title = 'Profile picture', picture }) => {

  const editorRef = useRef(null);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [company, setCompany] = useState("");

  const [image, setImage] = useState(null);
  const [newImage, setNewImage] = useState(false);
  const [position, setPosition] = useState({ x: 0.5, y: 0.5 });
  const [scale, setScale] = useState(1);
  const [rotate, setRotate] = useState(0);
  const width = 200;
  const height = 200;

  useEffect(() => {
    setFirstName(profile.given_name);
    setLastName(profile.family_name);
    setCompany(profile.company);
    setImage(picture ? profile[picture] : profile.picture);
    return () => {
      setFirstName('');
      setLastName('');
      setCompany('');
    };
  }, [profile.given_name, profile.family_name, profile.company, profile.picture]);

  const handleNewImage = (e) => {
    setImage(e.target.files[0]);
    setNewImage(true);
  };

  const urltoFile = (url, filename, mimeType) => {
    mimeType = mimeType || (url.match(/^data:([^;]+);/) || '')[1];
    filename = filename || create_UUID();
    return (fetch(url)
      .then(function (res) { return res.arrayBuffer(); })
      .then(function (buf) { return new File([buf], filename, { type: mimeType }); })
    );
  };

  const handleScale = (e) => {
    const scale = parseFloat(e.target.value);
    setScale(scale);
    setNewImage(true);
  };

  const handlePositionChange = (position) => {
    setPosition(position);
    setNewImage(true);
  };

  const rotateLeft = (e) => {
    e.preventDefault();
    setRotate(rotate - 90);
    setNewImage(true);
  };

  const rotateRight = (e) => {
    e.preventDefault();
    setRotate(rotate + 90);
    setNewImage(true);
  };

  const onClickSave = () => {
    if (editorRef.current && newImage) {
      const canvas = editorRef.current.getImage().toDataURL();
      urltoFile(canvas, image.name)
        .then(file => changePicture(file, picture));
    }
  };

  return (
    <div className={`${styles.modal} ${showProfile ? styles.isActive : ''}`}>
      <div className={`${styles.modalCard} ${styles.profilePopup}`}>
        <AjaxLoader relative={true} color={'#ffffff'} show={idpLoading} size={120} />
        <header className={`${styles.modalCardHead}`}>
          <p className={`${styles.modalCardTitle}`}>Edit profile</p>
          <button className="link" onClick={() => closePopup()}>
            <i className={`${styles.closeIcon} fa fa-times icon`} />
          </button>
        </header>
        <section className={`${styles.modalCardBody}`}>
          <div className={styles.modalCardPicture}>
            <div className={styles.title}>{title}</div>
            <div className={styles.picture}>
              <AvatarEditor
                ref={editorRef}
                image={image}
                width={width}
                height={height}
                border={50}
                color={[0, 0, 0, 0.8]} // RGBA
                position={position}
                onPositionChange={handlePositionChange}
                scale={scale}
                borderRadius={5}
                rotate={parseFloat(rotate)}
              />
              <div className={styles.imageUpload}>
                <label htmlFor="file-input">
                  <i className={`${styles.pictureIcon} fa fa-2x fa-camera icon is-large`} />
                </label>
                <input name="newImage" id="file-input" type="file" accept=".jpg,.jpeg,.png" onChange={handleNewImage} />
              </div>
              <div className={styles.imageControls}>
                <div className={`columns ${styles.inputRow}`}>
                  <div className='column is-one-quarter'>Zoom:</div>
                  <div className='column is-two-thirds'>
                    <input
                      name="scale"
                      type="range"
                      max="2"
                      onChange={(e) => handleScale(e)}
                      step="0.01"
                      defaultValue="1"
                    />
                  </div>
                </div>
                <div className={`columns ${styles.inputRow}`}>
                  <div className='column is-one-quarter'>Rotate:</div>
                  <div className='column is-two-thirds'>
                    <button className={`button ${styles.button}`} onClick={rotateLeft}>
                      <i className={`fa fa-undo icon is-large`} />Left
                    </button>
                    <button className={`button ${styles.button}`} onClick={rotateRight}>
                      <i className={`fa fa-redo icon is-large`} />Right
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </div>
          {!fromFullProfile &&
            <div className={styles.modalCardForm}>
              <div className={styles.title}>Profile Info</div>
              <div className={styles.form}>
                <div className={`columns is-mobile ${styles.inputRow}`}>
                  <div className='column is-one-quarter'>First Name</div>
                  <div className='column is-two-thirds'>
                    <input
                      className={`${styles.input} ${styles.isMedium}`}
                      type="text"
                      placeholder="First Name"
                      onChange={e => setFirstName(e.target.value)}
                      value={firstName} />
                  </div>
                </div>
                <div className={`columns is-mobile ${styles.inputRow}`}>
                  <div className='column is-one-quarter'>Last Name</div>
                  <div className='column is-two-thirds'>
                    <input
                      className={`${styles.input} ${styles.isMedium}`}
                      type="text"
                      placeholder="Last Name"
                      onChange={e => setLastName(e.target.value)}
                      value={lastName} />
                  </div>
                </div>
                <div className={`columns is-mobile ${styles.inputRow}`}>
                  <div className='column is-one-quarter'>Company</div>
                  <div className='column is-two-thirds'>
                    <input
                      className={`${styles.input} ${styles.isMedium}`}
                      type="text"
                      placeholder="Company"
                      onChange={e => setCompany(e.target.value)}
                      value={company}
                    />
                  </div>
                </div>
              </div>
              <Link to="/a/profile" className={styles.linkProfile}>Go to Full Profile</Link>
            </div>
          }
        </section>
        <footer className={`${styles.modalCardFoot}`}>
          <button onClick={() => closePopup()} className="button">Close</button>
          <button onClick={() => onClickSave()} className="button">Update</button>
        </footer>
      </div>
    </div>
  )
};

export default ProfilePopupComponent