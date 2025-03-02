import React from 'react';

// Define the ProductBoxProps interface
interface ProductBoxProps {
  image: string;
  title: string;
  description: string;
  price: string;
  discount: string;
  link: string;
}

// ProductBox Component
const ProductBox: React.FC<ProductBoxProps> = ({ image, title, description, price, discount, link }) => {
  return (
    <a href={link} rel="noopener noreferrer" className="block">
      <div className="category-box p-4 rounded-lg shadow-md bg-white hover:shadow-lg transition">
        <img src={image} alt={title} className="w-full h-48 object-cover rounded-md" />
        <h2 className="text-lg font-semibold mt-2">{title}</h2>
        <p className="text-sm text-gray-500 mt-1">{description}</p>
        <div className="flex justify-between items-center mt-3">
          <span className="text-xl font-bold text-blue-600">₹{price}</span>
          <span className="text-sm text-red-500">{discount}% Off</span>
        </div>
      </div>
    </a>
  );
};

// Define the product type
interface Product {
  image: string;
  title: string;
  description: string;
  price: string;
  discount: string;
  link: string;
}

// DomeSpotlight Component
const DomeSpotlight: React.FC = () => {
  const products: Product[] = [
    {
      image: 'src/components/home/main/slider-banner/banner1.jpg',
      title: 'Dome Fisheye',
      description: 'Elegant crystal chandelier with modern design',
      price: '29999',
      discount: '-20',
      link: ' /DomSubItem1',
    },
    {
      image: 'src/components/home/main/slider-banner/banner1.jpg',
      title: 'Dome Concealed 12W',
      description: 'Contemporary pendant light set',
      price: '18999',
      discount: '-10',
      link: '/DomSubItem2',
    },
    {
      image: 'src/components/home/main/slider-banner/banner1.jpg',
      title: 'Dome Square',
      description: 'Contemporary pendant light set',
      price: '18999',
      discount: '-10',
      link: '/DomSubItem3',
    },
    {
      image: 'src/components/home/main/slider-banner/banner1.jpg',
      title: 'Dome Gimbal',
      description: 'Contemporary pendant light set',
      price: '18999',
      discount: '-10',
      link: '/DomSubItem4',
    },
    {
      image: 'src/components/home/main/slider-banner/banner1.jpg',
      title: 'Dome Round Surface 12W',
      description: 'Contemporary pendant light set',
      price: '18999',
      discount: '-10',
      link: '/DomSubItem5',
    },
    {
      image: 'src/components/home/main/slider-banner/banner1.jpg',
      title: 'Dome Square Surface 12W',
      description: 'Contemporary pendant light set',
      price: '18999',
      discount: '-10',
      link: '/DomSubItem6',
    },
  ];

  return (
    <div className="bg-gray-100 py-6">
      <img src="src/components/home/main/slider-banner/banner1.jpg" alt="Dome Spotlight Banner" className="w-full h-60 object-cover" />
      <h1 className="text-2xl font-bold text-center mb-6">Dome Spotlight</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto px-4 max-w-7xl">
        {products.map((product, index) => (
          <ProductBox
            key={index}
            image={product.image}
            title={product.title}
            description={product.description}
            price={product.price}
            discount={product.discount}
            link={product.link}
          />
        ))}
      </div>
    </div>
  );
};

export default DomeSpotlight;
