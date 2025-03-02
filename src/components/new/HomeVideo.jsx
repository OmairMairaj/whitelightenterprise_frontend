import React from 'react';

const HomeVideo = ({url}) => {
    return (
        <div className="w-full h-full md:h-[570px] flex items-center justify-center overflow-hidden">
            <video
                className="w-full object-cover"
                autoPlay
                muted
                loop
            >
                <source src={url} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default HomeVideo;
