import React from 'react';
import RegistrationForm from './RegistrationForm';
import UsersList from './components/UsersList';
import 'bootstrap/dist/css/bootstrap.min.css';
import PropertiesList from './components/buyer/PropertiesList';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CusNavbar from './components/Navbar';
import SearchForm from './components/SearchForm';
import LandingView from './pages/LandingView';
import SellerDashbord from './pages/SellerDadhboard';
import BuyerDashboard from './pages/BuyerDashboard';
const App: React.FC = () => {
  return (
    <div className="container-fluid">
      <Router>
        <Routes>
          <Route path="/" element={<LandingView />} />
          <Route path="/api/properties" element={<BuyerDashboard />} />
          <Route path="/api/seller-dashboard" element={<SellerDashbord />} />

        </Routes>
      </Router>
      
        {/* <CusNavbar /> */}
        {/* <h1 className="mt-5">Registration Form</h1> */}
        {/* <RegistrationForm /> */}
        {/* <h1 className="mt-5">Users List</h1> */}
        {/* <UsersList /> */}
        {/* <PropertiesList /> */}
      </div>
    
  );
};
export default App;