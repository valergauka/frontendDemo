import React from "react";
import Buttons from "../../../UIComponent/buttons/Buttons"


import './Programs.css';

const Review = () => {
    const items = [
        {
            id: 1,
            title: 'instagram',
            text: ' this is a inst this is a inst this is a inst this is a inst this is a inst'

        },
        {
            id: 2,
            title: 'instagram',
            text: 'this is a inst  this is a inst this is a inst this is a inst this is a inst this is a inst'

        },
        {
            id: 3,
            title: 'instagram',
            text: 'this is a inst this is a inst this is a inst this is a inst this is a inst this is a inst'

        },
        {
            id: 4,
            title: 'instagram',
            text: 'this is a inst'

        },
        {
            id: 5,
            title: 'instagram',
            text: 'this is a inst  this is a inst this is a inst this is a inst this is a inst this is a inst'

        },
        {
            id: 6,
            title: 'instagram',
            text: 'this is a inst this is a inst this is a inst this is a inst this is a inst this is a inst'

        },
        {
            id: 7,
            title: 'instagram',
            text: 'this is a inst'

        }

    ];
    return (
        <div>
            Programs
            <Buttons />
        </div>
    );
}

export default Review;