/* eslint-disable jsx-a11y/img-redundant-alt */
import {React} from 'react';
import ReviewForm from './ReviewForm';
import '../LandingPage.css';
const LandingPage = () => (
    <div className="container-fuid">
        <img src="banner2.jpg" class="img-fluid" alt="banner photo" />
        <h1 className="text-white text-center">Restaurant Reviews</h1>
        <div className="container row">
            <ReviewForm />
        </div>
    </div>
);
export default LandingPage;
