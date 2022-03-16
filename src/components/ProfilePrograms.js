import React, { useState, useEffect } from 'react';

import release from '../content/profile_settings.json';

import styles from '../style/modules/edit-profile.module.scss'

const ProfilePrograms = ({ userPrograms, onProgramChanges }) => {

    const [selectedPrograms, setSelectedPrograms] = useState(userPrograms);

    useEffect(() => {
        setSelectedPrograms(userPrograms);
    }, [userPrograms])

    useEffect(() => {
        onProgramChanges(selectedPrograms);
    }, [selectedPrograms])

    const onProgramCheck = (program, value) => {
        if (value) {
            setSelectedPrograms([...selectedPrograms, program.component.code_name])
        } else {
            setSelectedPrograms([...selectedPrograms.filter(p => p !== program.component.code_name)])
        }
    }

    return (
        <div>
            <b>What programs are you involved with? (Optional) </b>
            <ul className={styles.progamList}>
                {release.components.map((program, index) => {
                    return (
                        <li key={`program-${index}`}>
                            <input type='checkbox' id={`program-${program.id}`}
                                checked={selectedPrograms.some(e => e === program.component.code_name)}
                                onChange={(e) => onProgramCheck(program, e.target.checked)} />
                            <label htmlFor={`program-${program.id}`}>{program.component.name} ({program.component.code_name})</label>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default ProfilePrograms;