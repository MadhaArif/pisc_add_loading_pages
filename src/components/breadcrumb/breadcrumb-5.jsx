import React from 'react';
import { motion } from 'framer-motion';
import { useMouseMoveUI } from '../../contexts/mouse-move-context';

const CourseBreadcrumb = ({ course }) => {
    debugger;
    const { title, instructor, language } = course || {};
    const { mouseDirection, mouseReverse } = useMouseMoveUI();
    return (
        <div className="edu-breadcrumb-area breadcrumb-style-3">
            <div className="container">
                <div className="breadcrumb-inner">
                    <ul className="edu-breadcrumb">
                        <li className="breadcrumb-item">
                        </li>
                    </ul>
                    <div className="page-title">
                        <h1 className="title">{title}</h1>
                    </div>
                    <ul className="course-meta">
                        <li><i className="icon-58"></i>by {instructor}</li>
                        <li><i className="icon-59"></i>{language}</li>
                    </ul>
                </div>
            </div>
            <ul className="shape-group">
                <li className="shape-1">
                    <span></span>
                </li>
                <motion.li className="shape-2 scene"
                    animate={ {
                        x: mouseReverse(40).x,
                        y: mouseReverse(40).y
                    } }
                >
                    <img src="/assets/images/about/shape-13.png" alt="shape" />
                </motion.li>
                <motion.li className="shape-3 scene"
                    animate={ {
                        x: mouseDirection(40).x,
                        y: mouseDirection(40).y
                    } }
                >
                    <img src="/assets/images/about/shape-15.png" alt="shape" />
                </motion.li>
                <li className="shape-4">
                    <span></span>
                </li>
                <motion.li className="shape-5 scene"
                    animate={ {
                        x: mouseReverse(40).x,
                        y: mouseReverse(40).y
                    } }
                >
                    <img src="/assets/images/about/shape-07.png" alt="shape" />
                </motion.li>
            </ul>
        </div>
    )
}

export default CourseBreadcrumb;