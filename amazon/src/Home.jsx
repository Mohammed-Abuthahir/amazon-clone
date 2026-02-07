import React, { useState, useEffect } from 'react';

const Home = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8080/api/products/all')
      .then((response) => {
        if (!response.ok) throw new Error(`Server error: ${response.status}`);
        return response.json();
      })
      .then((actualData) => {
        setData(actualData);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div style={centerStyle}>Loading Amazon...</div>;
  if (error) return <div style={centerStyle}>Error: {error}</div>;
  if (!data) return null;

  return (
    <div style={{ backgroundColor: '#eaeded', minHeight: '100vh', padding: '20px' }}>
      
      {/* 1. TOP GRID SECTION (Standard 4-item cards) */}
      <div style={gridContainerStyle}>
        {data.productList?.map((section, idx) => (
          <QuadCard key={`list-${idx}`} section={section} />
        ))}
        {data.productList2?.map((section, idx) => (
          <QuadCard key={`list2-${idx}`} section={section} />
        ))}
        {data.productList6?.map((section, idx) => (
          <QuadCard key={`list6-${idx}`} section={section} />
        ))}
      </div>

      {/* 2. HORIZONTAL CAROUSELS (Single row scrolling) */}
      <HorizontalCarousel section={data.productList1?.[0]} />
      <HorizontalCarousel section={data.productList4?.[0]} />
      <HorizontalCarousel section={data.productList5?.[0]} />

    </div>
  );
};

// --- SUB-COMPONENTS FOR CLEANER CODE ---

const QuadCard = ({ section }) => (
  <div style={cardStyle}>
    <h3 style={{ fontSize: '18px', marginBottom: '10px' }}>{section.title}</h3>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', flexGrow: 1 }}>
      {section.items?.map((item, i) => (
        <div key={i}>
          <img src={item.img} alt="" style={{ width: '100%', height: '100px', objectFit: 'cover' }} />
          <p style={{ fontSize: '12px', margin: '5px 0' }}>{item.price}</p>
        </div>
      ))}
    </div>
    <a href="#" style={linkStyle}>Shop now</a>
  </div>
);

const HorizontalCarousel = ({ section }) => {
  if (!section) return null;
  return (
    <div style={{ background: 'white', padding: '20px', marginBottom: '20px' }}>
      <h2 style={{ fontSize: '20px', marginBottom: '15px' }}>{section.title}</h2>
      <div style={carouselScrollStyle}>
        {section.items?.map((item, i) => (
          <img key={i} src={item.img} alt="" style={{ height: '160px', cursor: 'pointer' }} />
        ))}
      </div>
    </div>
  );
};

// --- STYLES ---

const gridContainerStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
  gap: '20px',
  marginBottom: '20px'
};

const cardStyle = {
  background: 'white',
  padding: '20px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between'
};

const carouselScrollStyle = {
  display: 'flex',
  overflowX: 'auto',
  gap: '20px',
  paddingBottom: '10px'
};

const linkStyle = {
  marginTop: '15px',
  fontSize: '13px',
  color: '#007185',
  textDecoration: 'none'
};

const centerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh'
};

export default Home;