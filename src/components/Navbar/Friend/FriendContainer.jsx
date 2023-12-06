import { connect } from 'react-redux';
import Friend from './Friend';

let mapStateToProps = (state) => {
    return {
        state: state
    }
};
const FriendContainer = connect(mapStateToProps)(Friend);

export default FriendContainer;