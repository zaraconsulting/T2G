import React from 'react'
import { Route, Switch } from 'react-router'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { LoginModal } from '../components/LoginModal'
import { RegisterModal } from '../components/RegisterModal'
import { SideNav } from '../components/SideNav'
import { Home } from './Home'
import { Password } from './Password'
import { Profile } from './Profile'

export const Main = () =>
{
    return (
        <React.Fragment>
            <div className="preloader"></div>

            <div className="main-wrapper">
                {/* <!-- header wrapper --> */}
                <Header />
                {/* <!-- header wrapper --> */}

                <div className="dashboard-wrapper bg-greylight">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3">
                                <SideNav />
                            </div>

                            <div className="col-lg-9">
                                <Switch>
                                    <Route exact path='/' render={() => <Home />} />
                                    <Route exact path='/password' render={() => <Password />} />
                                    <Route exact path='/profile' render={() => <Profile />} />
                                </Switch>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- footer wrapper --> */}
                <Footer />
                {/* <!-- footer wrapper --> */}

            </div>

            {/* Modal Register */}
            <RegisterModal />
            {/* Modal Register */}

            {/* <!-- Modal Login --> */}
            <LoginModal />
            {/* <!-- Modal Login --> */}
        </React.Fragment>
    )
}
