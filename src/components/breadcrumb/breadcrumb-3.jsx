const BreadcrumbThree = ({ title, subtitle }) => {
    return (
        <div className="breadcrumb-video-wrapper position-relative">
            <video
                autoPlay
                muted
                loop
                playsInline
                className="w-100 h-100 position-absolute top-0 start-0 object-fit-cover"
            >
                <source src="/assets/images/particle.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div className="edu-breadcrumb-area position-relative text-white py-6">
                <div className="container">
                    <div className="row justify-content-center text-center">
                        <div className="col-lg-8">
                            <h1 className="display-4 fw-bold text-white" style={{fontSize: '45px'}}>{title}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BreadcrumbThree;
