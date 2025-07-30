import Link from 'next/link';
import React from 'react';

const TeamTwo = ({ instructor, image_location_path='02' }) => {
    return (
        <div className="edu-team-grid team-style-2">
            <div className="inner">
                <div className="thumbnail-wrap">
                    <div className="thumbnail">
                        <Link href={`/team-details/${instructor.id}`}>
                            <a>
                                <img src={`/assets/images/team/team-${image_location_path}/${instructor.img}`} alt="team images" />
                            </a>
                        </Link>
                    </div>
                </div>
                <div className="content">
                    <h5 className="title">
                        <Link href={`/team-details/${instructor.id}`}>
                            <a>{instructor.name}</a>
                        </Link>
                    </h5>
                    <span className="designation">{instructor.title}</span>
                </div>
            </div>
        </div>
    )
}

export default TeamTwo;