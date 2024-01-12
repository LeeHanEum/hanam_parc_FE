import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineRestartAlt, AiOutlineDashboard, PiNotebookDuotone, PiBellSimpleRinging, GoCreditCard, LiaFileInvoiceDollarSolid, CgLogOff } from '../assets/icons/icons'
import {IoSettingsOutline} from 'react-icons/io5'
export default function AccpontTab(){
    return(
      <div className="border-t border-gray-100 dark:border-gray-700">
        <ul className="list-none sidebar-nav mb-0 mt-3" id="navmenu-nav">
          <li className="navbar-item account-menu">
            <Link to="/user-profile" className={`${window.location.pathname === "/user-profile" ? "text-indigo-600" : "text-slate-400"} navbar-link  flex items-center py-2 rounded`}>
              <span className="me-2 text-[18px] mb-0"><AiOutlineDashboard/></span>
              <h6 className="mb-0 font-semibold">Profile</h6>
            </Link>
          </li>

          <li className="navbar-item account-menu">
            <Link to="/user-billing" className={`${window.location.pathname === "/user-billing" ? "text-indigo-600" : "text-slate-400"} navbar-link  flex items-center py-2 rounded`}>
              <span className="me-2 text-[18px] mb-0"><PiNotebookDuotone/></span>
              <h6 className="mb-0 font-semibold">Billing Info</h6>
            </Link>
          </li>

          <li className="navbar-item account-menu">
            <Link to="/user-payment" className={`${window.location.pathname === "/user-payment" ? "text-indigo-600" : "text-slate-400"} navbar-link  flex items-center py-2 rounded`}>
              <span className="me-2 text-[18px] mb-0"><GoCreditCard/></span>
              <h6 className="mb-0 font-semibold">Payment</h6>
            </Link>
          </li>

          <li className="navbar-item account-menu">
            <Link to="/user-invoice" className={`${window.location.pathname === "/user-invoice" ? "text-indigo-600" : "text-slate-400"} navbar-link  flex items-center py-2 rounded`}>
              <span className="me-2 text-[18px] mb-0"><LiaFileInvoiceDollarSolid/></span>
              <h6 className="mb-0 font-semibold">Invoice</h6>
            </Link>
          </li>

          <li className="navbar-item account-menu">
            <Link to="/user-social" className={`${window.location.pathname === "/user-social" ? "text-indigo-600" : "text-slate-400"} navbar-link  flex items-center py-2 rounded`}>
              <span className="me-2 text-[18px] mb-0"><MdOutlineRestartAlt className="h-5 w-5"/></span>
              <h6 className="mb-0 font-semibold">Social Profile</h6>
            </Link>
          </li>

          <li className="navbar-item account-menu">
            <Link to="/user-notification" className={`${window.location.pathname === "/user-notification" ? "text-indigo-600" : "text-slate-400"} navbar-link  flex items-center py-2 rounded`}>
              <span className="me-2 text-[18px] mb-0"><PiBellSimpleRinging/></span>
              <h6 className="mb-0 font-semibold">Notifications</h6>
            </Link>
          </li>

          <li className="navbar-item account-menu">
            <Link to="/user-setting" className={`${window.location.pathname === "/user-setting" ? "text-indigo-600" : "text-slate-400"} navbar-link  flex items-center py-2 rounded`}>
              <span className="me-2 text-[18px] mb-0"><IoSettingsOutline className ="w-5 h-5"/></span>
              <h6 className="mb-0 font-semibold">Settings</h6>
            </Link>
          </li>

          <li className="navbar-item account-menu">
            <Link to="/auth-lock-screen" className={`${window.location.pathname === "/auth-lock-screen" ? "text-indigo-600" : "text-slate-400"} navbar-link  flex items-center py-2 rounded`}>
              <span className="me-2 text-[18px] mb-0"><CgLogOff/></span>
              <h6 className="mb-0 font-semibold">Sign Out</h6>
            </Link>
          </li>
        </ul>
      </div>
    )
}