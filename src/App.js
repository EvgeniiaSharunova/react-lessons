import React, { Suspense } from 'react';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import Friends from './components/Friends/Friends';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { connect } from 'react-redux';
import { inisializeApp } from './redux/appReducer';
import Preloader from './components/common/Preloader/Preloader';
import { Provider } from 'react-redux';
import store from './redux/redux-store';

/* import DialogsContainer from './components/Dialogs/DialogsContainer'; */
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));

/* import ProfileContainer from './components/Profile/ProfileContainer'; */
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

class App extends React.Component {

    componentDidMount() {
        this.props.inisializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader />
        }
        return (
            <BrowserRouter>
                <div className='app-wrapper'>
                    <HeaderContainer />
                    <Navbar state={this.props.appState} />
                    <div className='app-wrapper-content'>
                        <Suspense fallback={<Preloader />}>
                            <Routes>
                                <Route path="/profile/:userId?" element={<ProfileContainer />} />
                                <Route path="/dialogs*" element={<DialogsContainer />} />
                                <Route path="/news" Component={News} />
                                <Route path="/music" Component={Music} />
                                <Route path="/users*" element={<UsersContainer />} />
                                <Route path="/settings" Component={Settings} />
                                <Route path="/friends*" element={<Friends />} />
                                <Route path="/login*" element={<Login />} />
                            </Routes>
                        </Suspense>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

let AppContainer = connect(mapStateToProps, { inisializeApp })(App);

let MainApp = (props) => {
    return (
        <React.StrictMode>
            <Provider store={store}>
                <AppContainer />
            </Provider>
        </React.StrictMode>
    )
}

export default MainApp;

/* HookyQR.beautify *///настройки в в параметрах открыть файл json и исправить обратно "[javascript]": {"editor.defaultFormatter": "dbaeumer.vscode-eslint"} на HookyQR.beautify