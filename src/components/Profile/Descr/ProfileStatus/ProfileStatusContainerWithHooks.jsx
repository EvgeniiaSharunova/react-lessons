import React, { useEffect, useState } from 'react';

const ProfileStatusContainerWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status);
    }, [props.status]);

    let activateEditMode = () => {
        setEditMode(true)
    }

    let deactivateEditMode = () => {
        setEditMode(false)
        props.updateUserStatus(status);
    }

    let onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <>
            {!editMode &&
                <div>
                    <span onDoubleClick={activateEditMode}>{status || '--------'}</span>
                </div>}
            {editMode &&
                <div>
                    <input onChange={onStatusChange} onBlur={deactivateEditMode} autoFocus={true} type='text' value={status} />
                </div>}

        </>
    );

}


export default ProfileStatusContainerWithHooks;