import React from 'react';
import ProfileStatus from './ProfileStatus';

class ProfileStatusContainer extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }
    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateUserStatus(this.state.status);
    }
    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }
    render() {
        return (
            <>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status || '--------'}</span>
                    </div>}
                {this.state.editMode &&
                    <div>
                        <input onChange={this.onStatusChange} onBlur={this.deactivateEditMode} autoFocus={true} type='text' value={this.state.status} />
                    </div>}
                {/* <ProfileStatus {...this.props}
                    status={this.props.status}
                    activateEditMode={this.activateEditMode}
                    deactivateEditMode={this.deactivateEditMode}
                    editMode={this.state.editMode}
                    value={this.state.status}
                    onStatusChange={this.onStatusChange} /> */}

            </>
        )
    };
}


export default ProfileStatusContainer;