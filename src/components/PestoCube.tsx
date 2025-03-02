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
const ProductBox: React.FC<ProductBoxProps> = ({ image, title,    link }) => {
  return (
    <a href={link}   rel="noopener noreferrer" className="block">
      <div className="category-box p-4 rounded-lg shadow-md bg-white hover:shadow-lg transition">
        <img src={image} alt={title} className="w-full h-48 object-cover rounded-md" />
        <h2 className="text-lg font-semibold mt-2">{title}</h2> 
        <div className="flex justify-between items-center mt-3"> 
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

// PestoCubeComponent
const PestoCube: React.FC = () => {
  const products: Product[] = [
    {
      image: 'path/to/duplex.png',
      title: 'dome fisheye',
      description: 'Elegant crystal chandelier with modern design',
      price: '29999',
      discount: '-20',
      link: ' ',
    },
    {
      image: 'path/to/product2.png',
      title: ' dome concealed 12w',
      description: 'Contemporary pendant light set',
      price: '18999',
      discount: '-10',
      link: 'https://example.com/pendant-light-collection-1',
    },
    {
      image: 'path/to/product3.png',
      title: 'dome square',
      description: 'Contemporary pendant light set',
      price: '18999',
      discount: '-10',
      link: 'https://example.com/pendant-light-collection-2',
    },
    {
      image: 'dome gimbal',
      title: 'dome gimbal',
      description: 'Contemporary pendant light set',
      price: '18999',
      discount: '-10',
      link: 'https://example.com/pendant-light-collection-2',
    },
    {
      image: 'path/to/product3.png',
      title: 'dome round surface 12w',
      description: 'Contemporary pendant light set',
      price: '18999',
      discount: '-10',
      link: 'https://example.com/pendant-light-collection-2',
    },
    {
      image: 'path/to/product3.png',
      title: 'dome square surface 12w',
      description: 'Contemporary pendant light set',
      price: '18999',
      discount: '-10',
      link: 'https://example.com/pendant-light-collection-2',
    }, 
  ];

  return (
    <div className="bg-gray-100 py-6">
      <h1 className="text-2xl font-bold text-center mb-6">pesto cube series</h1>
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

export default PestoCube;
