import React, { useState, useEffect } from 'react';

import styles from '../style/modules/edit-profile.module.scss'

const ProfileFoodPreferences = ({ foodPreferences, onPreferencesChange }) => {

    const [selectedPreferences, setSeletedPreferences] = useState(foodPreferences ? [...foodPreferences?.split(',')] : []);

    useEffect(() => {
        onPreferencesChange(selectedPreferences.join(','));
    }, [selectedPreferences])

    const onPreferenceCheck = (food, value) => {
        if (value) {
            setSeletedPreferences([...selectedPreferences, food])
        } else {
            setSeletedPreferences([...selectedPreferences.filter(p => p !== food)])
        }
    }

    return (
        <div className={`columns is-mobile ${styles.inputRow}`}>
            <div className={`column is-full ${styles.inputField}`}>
                <b>Do you have any food preferences we can help accomodate?</b>
                <label className={styles.checkbox} htmlFor="food-vegan">
                    <input id="food-vegan" type="checkbox" value={'Vegan'} onChange={(e) => onPreferenceCheck(e.target.value, e.target.checked)} />
                    Vegan
                </label>
                <label className={styles.checkbox} htmlFor="food-vegetarian">
                    <input id="food-vegetarian" type="checkbox" value={'Vegetarian'} onChange={(e) => onPreferenceCheck(e.target.value, e.target.checked)} />
                    Vegetarian
                </label>
                <label className={styles.checkbox} htmlFor="food-gluten">
                    <input id="food-gluten" type="checkbox" value={'Gluten'} onChange={(e) => onPreferenceCheck(e.target.value, e.target.checked)} />
                    Gluten allergy
                </label>
                <label className={styles.checkbox} htmlFor="food-peanut">
                    <input id="food-peanut" type="checkbox" value={'Peanut'} onChange={(e) => onPreferenceCheck(e.target.value, e.target.checked)} />
                    Peanut allergy
                </label>
            </div>
        </div>
    )
}

export default ProfileFoodPreferences;


