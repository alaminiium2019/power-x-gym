import { Button } from '@material-ui/core';
import React from 'react';
import Iframe from 'react-iframe';
import './HeaderMain.css';

const HeaderMain = () => {
   
    return (
        <div className="d-flex container mainHeader">
            <div className="pl-3">
                <h1 className="Heading">THE BEST FITNESS STUDIO IN TOWN</h1>
                <p className="text-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                <Button style={{backgroundColor:'yellow', paddingLeft:'20px', paddingRight:'20px'}}>JOIN US</Button>
            </div>
            <div className="pr-4">
                <Iframe url="http://www.youtube.com/embed/xDMP3i36naA"
                    width="450px"
                    height="450px"
                    id="myId"
                    className="myClassname"
                    display="initial"
                    position="relative" />
            </div>
            
        </div>
    );
};

export default HeaderMain;