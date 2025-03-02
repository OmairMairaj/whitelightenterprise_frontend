import React, { useEffect, useState } from 'react';
// import '.style/Product.css'; // Import related CSS for styling

// Interfaces for the data
interface CaseStudy {
  id: number;
  title: string;
  imageUrl: string;
  description: string;
}

type ProductProps = {};

const Product: React.FC<ProductProps> = () => {
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([]);

  // Fetch function to get case study data
  const fetchData = async () => {
    try {
      // Replace the URL below with your actual API endpoint or JSON file
      const response = await fetch('https://example.com/api/case-studies');
      const data = await response.json();
      setCaseStudies(data); // Set the fetched data to the state
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData(); // Fetch data when the component mounts

    // Parallax functionality
    const scrollBanner = () => {
      const handleScroll = () => {
        const scrollPos = window.scrollY;
        document.querySelectorAll<HTMLElement>('.parallax-fade-top').forEach(el => {
          el.style.top = `${scrollPos / 2}px`;
          el.style.opacity = `${1 - scrollPos / 700}`;
        });
        document.querySelectorAll<HTMLElement>('.parallax-00').forEach(el => {
          el.style.top = `${scrollPos / -3.5}px`;
        });
        document.querySelectorAll<HTMLElement>('.parallax-01').forEach(el => {
          el.style.top = `${scrollPos / -2.8}px`;
        });
        document.querySelectorAll<HTMLElement>('.parallax-top-shadow').forEach(el => {
          el.style.top = `${scrollPos / -2}px`;
        });
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    };

    scrollBanner();

    // Cursor functionality
    const body = document.body;
    const t = document.getElementById('cursor');
    const e = document.getElementById('cursor2');
    const i = document.getElementById('cursor3');

    const onMouseMove = (n: MouseEvent) => {
      if (t && e && i) {
        t.style.left = `${n.clientX}px`;
        t.style.top = `${n.clientY}px`;
        e.style.left = `${n.clientX}px`;
        e.style.top = `${n.clientY}px`;
        i.style.left = `${n.clientX}px`;
        i.style.top = `${n.clientY}px`;
      }
    };

    const onHover = () => {
      e?.classList.add('hover');
      i?.classList.add('hover');
    };

    const onHoverOut = () => {
      e?.classList.remove('hover');
      i?.classList.remove('hover');
    };

    body.addEventListener('mousemove', onMouseMove);

    document.querySelectorAll('.hover-target').forEach(target => {
      target.addEventListener('mouseover', onHover);
      target.addEventListener('mouseout', onHoverOut);
    });

    // Scroll to top functionality
    const scrollToTop = () => {
      document.querySelector('.scroll-to-top')?.addEventListener('click', event => {
        event.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });

      const handleScrollArrow = () => {
        const scrollTopArrow = document.querySelector('.scroll-to-top');
        if (scrollTopArrow) {
          scrollTopArrow.classList.toggle('active-arrow', window.scrollY > 300);
        }
      };
      window.addEventListener('scroll', handleScrollArrow);
    };

    scrollToTop();

    // Case study hover functionality
    document.querySelectorAll('.case-study-name').forEach((element, index) => {
      element.addEventListener('mouseenter', () => {
        document.querySelector('.case-study-name.active')?.classList.remove('active');
        document.querySelector('.case-study-images li.show')?.classList.remove('show');
        document.querySelector(`.case-study-images li:nth-child(${index + 1})`)?.classList.add('show');
        element.classList.add('active');
      });
    });

    document.querySelector('.case-study-name:nth-child(1)')?.dispatchEvent(new Event('mouseenter'));

    return () => {
      // Cleanup event listeners
      window.removeEventListener('scroll', scrollBanner);
      body.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <div>
      <div className="shadow-title parallax-top-shadow">work</div>
      <div className="section-parallax parallax-00" style={{ backgroundImage: "url('main/2.jpg')" }}></div>
      <div className="section-parallax parallax-01" style={{ backgroundImage: "url('http://www.ivang-design.com/svg-load/parallax/parallax-01.png')" }}></div>

      <div className="section full-height">
        <div className="section-title-wrap">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center parallax-fade-top">
                <p>we do magic</p>
                <h1>chase your<br />passion</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section full-height z-bigger">
        <ul className="case-study-wrapper">
          {caseStudies.map((study, index) => (
            <li key={study.id} className="case-study-name">
              <a href="#" className="hover-target">{study.title}</a>
            </li>
          ))}
        </ul>
        <ul className="case-study-images">
          {caseStudies.map((study, index) => (
            <li key={study.id}>
              <div className="img-hero-background">
                <img src={study.imageUrl} alt={study.title} />
              </div>
              <div className="hero-number-back">{index + 1}</div>
              <div className="hero-number">{index + 1}</div>
              <div className="hero-number-fixed">{caseStudies.length}</div>
              <div className="case-study-title">{study.description}</div>
            </li>
          ))}
        </ul>
      </div>

      <div className="section padding-top-bottom over-hide background-dark z-bigger-2">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-7 text-center">
              <a href="#" className="hover-target">
                <div className="project-link-wrap">
                  <p>let's talk</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-to-top hover-target"></div>
      <div className='cursor' id="cursor"></div>
      <div className='cursor2' id="cursor2"></div>
      <div className='cursor3' id="cursor3"></div>
    </div>
  );
};

export default Product;
