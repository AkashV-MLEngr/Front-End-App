import React, { useEffect, useState } from 'react'
import CusNavbar from '../components/Navbar'
import SearchForm from '../components/SearchForm'
import { useParams  } from 'react-router-dom'; 
import {Button, Alert} from 'react-bootstrap';
import { AlertProvider } from '../context/AlertContext';
import Alerts from '../components/Alert';
import LoginModal from '../components/LoginModal';
import SellerDashbord from './SellerDadhboard';
import SellerProperties from '../components/seller/SellerProperties';

interface RouteParams{
  id: string;
}

const LandingView: React.FC = () => {
  // const {id} = useParams();

  // useEffect(() => {
  //   // This code prevents the user from navigating back using the back button
  //   window.history.pushState({}, '', window.location.href);
  //   window.onpopstate = function (event) {
  //     history.go(1);
  //   };

  //   // Cleanup function to remove the event listener
  //   return () => {
  //     window.onpopstate = null;
  //   };
  // }, []);

  return (
    <>
    <CusNavbar />
    <SearchForm />
    </>
  )
}

export default LandingView
