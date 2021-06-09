import React from 'react'
import { Link } from 'react-router-dom'

export const SideNav = () =>
{
    return (
        <div className="dashboard-nav bg-white rounded-lg shadow-xs">
            <a href="." className="dash-menu d-none d-block-md"><i className="ti-package font-sm mr-2"></i> Menu <i className="ti-angle-down font-xsss float-right "></i></a>
            <ul className="dash-menu-ul">
                <li className="d-block rounded-lg active"><Link to="/"><i className="ti-package font-sm"></i><span> Teams</span></Link></li>
                <li className="d-block rounded-lg"><Link to="/profile"><i className="ti-user font-sm"></i><span> Profile</span></Link></li>
                <li className="d-block rounded-lg "><Link to="/password"><i className="ti-lock font-sm"></i><span> Password</span></Link></li>
                <li className="d-block rounded-lg"><Link to="."><i className="ti-power-off font-sm"></i><span> Logout</span></Link></li>
            </ul>
        </div>
    )
}
