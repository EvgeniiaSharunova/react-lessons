import React from 'react';

const ProfileStatus = (props) => {
    return (
        <>
            {!props.editMode &&
                <div>
                    <span onDoubleClick={props.activateEditMode}>{props.status || '--------'}</span>
                </div>}
            {props.editMode &&
                <div>
                    <input onChange={props.onStatusChange} onBlur={props.deactivateEditMode} autoFocus={true} type='text' value={props.value} />
                </div>}

        </>
    )
};

export default ProfileStatus;