import React from 'react';

interface BannerProps {
  imageUrl: string;
  altText: string;
  width?: string;
  height?: string;
}

const Banner: React.FC<BannerProps> = ({ imageUrl, altText, width = "100%", height = "auto" }) => {
  return (
    <div style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <img
        src={imageUrl}
        alt={altText}
        style={{ width, height, objectFit: "cover" }}
      />
    </div>
  );
};

export default Banner;
