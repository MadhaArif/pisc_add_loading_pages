import React from 'react';
import { BookLibrary, ScholarshipFacility, SkilledLecturers } from '../../../svg';

const categories = [
    {
        icon:<ScholarshipFacility/>,
        title:'Industry-Relevant Courses',
        text: 'Our courses follow industry trends, ensuring you learn in-demand skills.',
        color:'color-primary-style'
    },
    {
        icon:<SkilledLecturers/>,
        title:'Affordable & Flexible Programs',
        text:'We offer budget-friendly courses with flexible timings to fit your schedule.',
        color:'color-secondary-style'
    },
    {
        icon:<BookLibrary/>,
        title:'Career-Oriented Training Programs',
        text:'Our program is industry-oriented and updated to meet market demands.',
        color:'color-extra02-style'
    }
]

const CategoryArea = () => {
    return (
        <div className="features-area-3">
            <div className="container">
                <div className="features-grid-wrap">
                    {categories.map((c,i) => (
                        <div key={i} className={`features-box features-style-3 ${c.color} edublink-svg-animate`}>
                            <div className="icon">
                                {c.icon}
                            </div>
                            <div className="content">
                                <h4 className="title">{c.title}</h4>
                                <p>{c.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CategoryArea;