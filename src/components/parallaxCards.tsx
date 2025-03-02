// import React, { useEffect } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import "../styles/ParallaxComponent.css";

// gsap.registerPlugin(ScrollTrigger);

// interface Product {
//   id: number;
//   name: string;
//   brand: string;
//   originalPrice?: string;
//   price: string;
//   description: string;
//   image: string;
//   hoverImage: string;
// }

// const ParallaxPage: React.FC = () => {
//   const products: Product[] = [
//     {
//       id: 1,
//       name: "Product 1",
//       brand: "",
//       originalPrice: "1000",
//       price: "700",
//       description: "Description for Product 1",
//       image: " main/category/HD IMAGES 24/DOME SERIES/12W DOME SURFACE/12W DOME ROUND SURFACE  FISH EYE.png",
//       hoverImage: "https://via.placeholder.com/300/0000FF",
//     },
//     {
//       id: 2,
//       name: "Product 2",
//       brand: "",
//       originalPrice: "1000",
//       price: "700",
//       description: "Description for Product 2",
//       image: "https://via.placeholder.com/300",
//       hoverImage: "https://via.placeholder.com/300/FF0000",
//     },
//   ];

//   useEffect(() => {
//     const tl = gsap.timeline();
//     tl.fromTo(
//       ".image-container",
//       { x: -200, opacity: 0 },
//       { x: 0, opacity: 1, duration: 1.2, ease: "power4.out" }
//     ).fromTo(
//       ".text-section",
//       { x: 200, opacity: 0 },
//       { x: 0, opacity: 1, duration: 1.2, ease: "power4.out" }
//     );

//     const scrollTrigger = gsap.timeline({
//       scrollTrigger: {
//         trigger: ".page-container",
//         start: "top top",
//         end: "+100%",
//         scrub: true,
//         pin: ".bannerS",
//       },
//     });

//     const screenWidth = window.innerWidth;

//     scrollTrigger
//       .to(".bannerS", {
//         y: () => {
//           const bannerElement = document.querySelector(".bannerS");
//           return bannerElement
//             ? -window.innerHeight +
//                 bannerElement.getBoundingClientRect().height
//             : 0;
//         },
//         duration: 1,
//         ease: "power3.inOut",
//       })
//       .from(".products-section", {
//         y: "0%",
//         duration: 1,
//         ease: "elastic.out(1, 0.75)",
//       })
//       .to(".image-container", {
//         x: screenWidth > 768 ? 0 : -200,
//         duration: 1,
//         ease: "power4.out",
//       })
//       .to(".text-section", {
//         x: screenWidth > 768 ? 0 : 200,
//         duration: 1,
//         ease: "power4.out",
//       });

//     const productCards = gsap.utils.toArray<HTMLElement>(".product-card");
//     gsap.to(productCards, {
//       opacity: 1,
//       x: 0,
//       duration: 0.8,
//       ease: "power4.out",
//       stagger: 0.1,
//     });
//   }, []);

//   return (
//     <div className="page-container h-screen w-full bg-gray-100 text-gray-800">
//       {/* Fullscreen banner */}
//       <div className="bannerS h-screen w-full bg-blue-600 flex items-center justify-center text-white text-4xl font-bold">
//         <div className="w-full h-full flex items-center justify-center relative overflow-hidden">
//           <div className="image-container w-1/2 flex items-center justify-center">
//             <div className="bg-gradient-to-b from-orange-300 to-orange-500 h-80 w-60 rounded-3xl shadow-md flex items-center justify-center">
//               <img
//                 src="src/components/home/main/Light/l1(1).jpg"
//                 alt="Product"
//                 className="h-48 w-48"
//               />
//             </div>
//           </div>

//           <div className="text-section w-1/2 pl-12">
//             <h1 className="text-6xl font-bold mb-4">Unique Light</h1>
//             <p className="text-2xl mb-8">For Your Home</p>
//             <button className="px-6 py-3 bg-orange-600 text-white font-semibold rounded-md hover:bg-orange-700 transition">
//               Category
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Products Section */}
//       <div className="products-section py-12">
//         <h2 className="text-3xl font-semibold text-center mb-8">
//           Our Products
//         </h2>
//         <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
//           {products.map((product) => (
//             <div
//               key={product.id}
//               className="product-card w-30 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl relative"
//             >
//               <div className="relative overflow-hidden">
//                 <img
//                   src={product.image}
//                   alt={product.name}
//                   className="h-80 w-72 object-cover rounded-t-xl transition-opacity duration-300 hover:opacity-0"
//                 />
//                 <img
//                   src={product.hoverImage}
//                   alt={`${product.name} hover`}
//                   className="h-80 w-72 object-cover rounded-t-xl absolute top-0 left-0 opacity-0 transition-opacity duration-300 hover:opacity-100"
//                 />
//               </div>
//               <div className="px-4 py-3 w-72">
//                 <span className="text-gray-400 mr-3 uppercase text-xs">
//                   {product.brand}
//                 </span>
//                 <p className="text-lg font-bold text-black truncate block capitalize">
//                   {product.name}
//                 </p>
//                 <div className="flex items-center">
//                   <p className="text-lg font-semibold text-black cursor-auto my-3">
//                     ${product.price}
//                   </p>
//                   {product.originalPrice && (
//                     <del>
//                       <p className="text-sm text-gray-600 cursor-auto ml-2">
//                         ${product.originalPrice}
//                       </p>
//                     </del>
//                   )}
//                   <div className="ml-auto">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="20"
//                       height="20"
//                       fill="currentColor"
//                       className="bi bi-bag-plus"
//                       viewBox="0 0 16 16"
//                     >
//                       <path
//                         fillRule="evenodd"
//                         d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
//                       />
//                       <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
//                     </svg>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ParallaxPage;
