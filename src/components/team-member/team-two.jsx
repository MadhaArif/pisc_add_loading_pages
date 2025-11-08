const TeamTwo = ({ instructor }) => {
    const [img, name, destination] = instructor;

    return (
        <div className="edu-team-grid team-style-2">
            testing
            {/* <div className="inner">
                <div className="thumbnail-wrap">
                    <div className="thumbnail">
                        <a>
                            <img src={`/assets/images/course/${img}`} alt="team images" />
                        </a>
                    </div>
                </div>

                <div className="content">
                    <h5 className="title">
                        <a>{name || 'name' }</a>
                    </h5>
                    <span className="designation">{destination || 'destination'}</span>
                </div>
            </div> */}
        </div>
    )
}

export default TeamTwo;