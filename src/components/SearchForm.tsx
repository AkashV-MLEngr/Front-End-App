import React, { useState } from 'react'
import {Form, Button, InputGroup} from 'react-bootstrap';
import { SearchData } from '../types/types';
import { linkSearchProperties } from './api_links';
import axios from 'axios';

const SearchForm = () => {
    const [searchFormData, setSearchFormData] = useState<SearchData>({
        location: '',
        bedrooms: '',
        search_data: ''
      });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const { name, value } = e.target;
      setSearchFormData({
        ...searchFormData,
        [name]: value,
      });
    };


    const handleSearch = async (e: React.FormEvent) => {
        e.preventDefault();
        
        
    
        // fetching the search properties using axios
        const fetchSearchProperties = () =>{
                axios.get(linkSearchProperties)
                .then((response) => {
                    console.log(response.data)
                    setSearchFormData(response.data)
                })
                .catch((error) =>{
                    console.error("somthing went wrong", error)
                })
            }
        };
  return (
    <>
    <form onSubmit={handleSearch} className="container mt-5">
        <InputGroup className="mb-3">
                <select
                    className="form-select"
                    aria-label="location"
                    id="location"
                    name="location"
                    value={searchFormData.location}
                    onChange={handleChange}
                    required
                    >
                        <option value="">City</option>
                        <option value="">Patna</option>
                        <option value="">Chennai</option>
                        <option value="">Mumbai</option>
                        <option value="">Bengaluru</option>
                        <option value="">Kolkata</option>
                        <option value="">Hyderabad</option>
                        <option value="">Delhi</option>
                        <option value="">Thiruvananthapuram</option>
                        <option value="">Pune</option>
                        <option value="">Kochi</option>
                        <option value="">Madurai</option>
                        <option value="">Coimbatore</option>
                        <option value="">Puducherry</option>
                </select>
                <select
                    className="form-select"
                    aria-label="bedrooms"
                    id="bedrooms"
                    name="bedrooms"
                    value={searchFormData.bedrooms}
                    onChange={handleChange}
                    required
                    >   
                        <option value="">BHK</option>
                        <option value="1BHK">1BHK</option>
                        <option value="2BHK">2BHK</option>
                        <option value="3BHK">3BHK</option>
                        <option value="4BHK">4BHK</option>
                        <option value="5BHK">5BHK</option>
                        <option value="6BHK">6BHK</option>
                </select>
            
        </InputGroup>
        <InputGroup className="mb-3">
            <input
                placeholder="Search"
                aria-label="Search"
                type="text"
                className="form-control"
                id="firstName"
                name="firstName"
                value={searchFormData.search_data}
                onChange={handleChange}
                required />
            <Button variant="outline-secondary" onClick={handleSearch}>
              Search
            </Button>
        </InputGroup>
    </form>
    </>
  )
}

export default SearchForm