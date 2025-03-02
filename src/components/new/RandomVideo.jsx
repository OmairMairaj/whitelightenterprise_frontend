import React, { useState, useEffect } from 'react';

const videoUrls = [
    { id: 1, url: 'video1.mp4' },
    { id: 2, url: 'video2.mp4' },
    { id: 3, url: 'video3.mp4' },
    { id: 4, url: 'video4.mp4' },
    { id: 5, url: 'video5.mp4' },
    { id: 6, url: 'video6.mp4' },
];

const RandomVideo = () => {
    const [videoUrl, setVideoUrl] = useState('');

    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * videoUrls.length);
        const finalUrl = `/videos/${videoUrls[randomIndex].url}`

        setVideoUrl(finalUrl);
    }, []);

    return (
        <div className="w-full">
            {videoUrl &&
                <div className="w-full h-full md:h-[570px] flex items-center justify-center overflow-hidden">
                    <video
                        className="w-full h-full object-cover"
                        autoPlay
                        muted
                        loop
                    >
                        <source src={videoUrl} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            }

        </div>
    );
};

export default RandomVideo;
