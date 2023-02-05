import React from 'react';
import {Icon} from "@chakra-ui/react";

export const BackArrows = () => {
    return (
       <Icon width="35px" height="24px" viewBox="0 0 35 24" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M15 4L7 12L15 20" stroke="#9EAEC7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
               <g opacity="0.5">
                   <path d="M26 4L18 12L26 20" stroke="#9EAEC7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
               </g>
       </Icon>
    );
};

export default BackArrows;
