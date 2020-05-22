import React, { useState } from 'react';
import styles from './SelectDropdown.module.css';

const SelectDropdown = React.forwardRef((props, ref) => {
    const [isDisplayed, toggleVisibility] = useState(false);

    const handleDisplay = (event) => {
        console.log(event.target);
        if(!props.waitingOnClick) {
            toggleVisibility(!isDisplayed);
        }
    }

    let dropdownStyle = null;

    if(isDisplayed) {
        dropdownStyle = styles.visible;
    }

    return (
        <div className={styles['select-dropdown']} onClick={handleDisplay} ref={ref}>
            <div className={styles.title}>
                <h3>Select Dropdown</h3>
            </div>
            <p className={dropdownStyle}>{props.children}</p>
        </div>
    );
});

export default SelectDropdown;