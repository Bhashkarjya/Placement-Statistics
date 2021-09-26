import '../css/year.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'

function Year(){
    return(
        <div>
            <div class="jumbotron text-center">
                <div class="container">
                    <h1>NITW Placements Statistics</h1>
                    <h3>Welcome to The Centre for Career Planning and Development (CCPD), NIT Warangal.</h3>
                    <h5></h5>
                </div>
            </div>
            <div class="container"> 
                <div class="row">
                    <div class="col-md-12 text-center">
                        <h2>Placement Stats</h2>
                    </div>
                </div>
  
                <div class="row">
                    <div class="col-md-6 col-sm-6 col-xs-6"> <a href="/2020-21" class="btn btn-sm animated-button victoria-one">2015-16</a> </div>
                    <div class="col-md-6 col-sm-6 col-xs-6"> <a href="/2019-20" class="btn btn-sm animated-button victoria-two">2016-17</a> </div>
                </div>
                <div class="row">
                    <div class="col-md-6 col-sm-6 col-xs-6"> <a href="#" class="btn btn-sm animated-button victoria-one">2017-18</a> </div>
                    <div class="col-md-6 col-sm-6 col-xs-6"> <a href="#" class="btn btn-sm animated-button victoria-two">2018-19</a> </div>
                </div>
                <div class="row">
                    <div class="col-md-6 col-sm-6 col-xs-6"> <a href="#" class="btn btn-sm animated-button victoria-one">2019-20</a> </div>
                    <div class="col-md-6 col-sm-6 col-xs-6"> <a href="#" class="btn btn-sm animated-button victoria-two">2020-21</a> </div>
                </div>
                {/* <div class="row">
                    <p>
                        National Institute of Technology, Warangal is one of the premier engineering schools of India, maintaining an excellent academic record. 
                        The Institute's Centre for Career Planning and Developement (CCPD) provides a launch pad for students to make it to the best organizations 
                        in the fields of software, core industries, management, etc. The biggest names in the corporate world visit the campus on a regular basis, 
                        with enviable recruitment offers.
                        Our students have lived up to the expectations of organizations that visit the campus, looking for bright candidates to take up important 
                        and challenging responsibilities at their workplace. The CCPD boasts of maintaining an excellent rapport with a wide spectrum of companies 
                        spread across various industry sectors. Over the years, the section has maintained good and strong relationship with Industries across the 
                        country and as a result, has built up an impressive placement record both in terms of percentage of registered students placed, as well as 
                        the number of companies visiting the campus.
                        The CCPD assists the departments in placement of students at major industries. About 150 - 180 companies visit the campus every year. 
                        We truly appreciate the faith bestowed on us from several organizations and we look forward to continuing our relationship with them.
                    </p>
                </div> */}
            </div>
        </div>
    );
}

export default Year;