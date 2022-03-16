import React, { useState, useEffect } from 'react';

import styles from '../style/modules/edit-profile.module.scss'

const ProfileFoodPreferences = ({ foodPreferences, onPreferencesChange }) => {

    const [selectedPreferences, setSelectedPreferences] = useState([]);

    useEffect(() => {
        // Checking if there's a value to avoid creating an array like this [''] 
        if (foodPreferences) {
            setSelectedPreferences(foodPreferences.split(','));
        }
    }, [foodPreferences])

    useEffect(() => {
        onPreferencesChange(selectedPreferences.join(','));
    }, [selectedPreferences])

    const onPreferenceCheck = (food, value) => {
        if (value) {
            setSelectedPreferences([...selectedPreferences, food])
        } else {
            setSelectedPreferences([...selectedPreferences.filter(p => p !== food)])
        }
    }

    return (
        <div className={`columns is-mobile ${styles.inputRow}`}>
            <div className={`column is-full ${styles.inputField}`}>
                <b>Do you have any food preferences we can help accomodate?</b>
                <label className={styles.checkbox} htmlFor="food-vegan">
                    <input id="food-vegan" type="checkbox" value={'Vegan'}
                        checked={selectedPreferences.some(e => e === 'Vegan')}
                        onChange={(e) => onPreferenceCheck(e.target.value, e.target.checked)} />
                    Vegan
                </label>
                <label className={styles.checkbox} htmlFor="food-vegetarian">
                    <input id="food-vegetarian" type="checkbox" value={'Vegetarian'}
                        checked={selectedPreferences.some(e => e === 'Vegetarian')}
                        onChange={(e) => onPreferenceCheck(e.target.value, e.target.checked)} />
                    Vegetarian
                </label>
                <label className={styles.checkbox} htmlFor="food-gluten">
                    <input id="food-gluten" type="checkbox" value={'Gluten'}
                        checked={selectedPreferences.some(e => e === 'Gluten')}
                        onChange={(e) => onPreferenceCheck(e.target.value, e.target.checked)} />
                    Gluten allergy
                </label>
                <label className={styles.checkbox} htmlFor="food-peanut">
                    <input id="food-peanut" type="checkbox" value={'Peanut'}
                        checked={selectedPreferences.some(e => e === 'Peanut')}
                        onChange={(e) => onPreferenceCheck(e.target.value, e.target.checked)} />
                    Peanut allergy
                </label>
            </div>
        </div>
    )
}

export default ProfileFoodPreferences;


