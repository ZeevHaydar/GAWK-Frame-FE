import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

document.body.style = 'background: cyan;';

const Flex = ({ children, ...props }) => (
  <div style={{ display: 'flex', ...props }}>{children}</div>
);

const Box = ({ children, ...props }) => (
  <div style={{ background: 'cyan !important', ...props }}>{children}</div>
);

// const Shape = () => (
//   <div className="Shape" style={{ width: '35px', height: '33.33px', background: '#2D3648' }}></div>
// );

// const IconImage = () => (
//   <div className="IconImage" style={{ width: '40px', height: '40px', position: 'relative', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex' }}>
//     <Shape />
//   </div>
// );

// const PicturePlaceholder = ({ width, height }) => (
//   <div className="PicturePlaceholder" style={{ width, height, background: '#EDF0F7', border: '2px #2D3648 solid', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
//     <IconImage />
//   </div>
// );

const PicturePosition = ({ imageUrl, width, height }) => (
  <div className="PicturePosition" style={{ flex: '1 1 0', alignSelf: 'stretch', background: 'white', borderRadius: '15px', overflow: 'hidden', border: '2px #2D3648 solid', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex' }}>
    <img src={imageUrl} alt="Clothes" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  </div>
);

const InfoContainer = ({ children }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', position: 'absolute', left: '500px', top: '110px', color: '#2D3648' }}>
    {children}
  </div>
);

const PictureSlots = ({ imageUrl, width, height, paddingTop, left, top }) => (
  <div className="PictureSlots" style={{ width, height, paddingTop, left, top, position: 'absolute', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '25px', display: 'inline-flex' }}>
    <PicturePosition imageUrl={imageUrl} width={width} height={height} />
  </div>
);

const Detail = () => {
  const { id } = useParams();
  const [clothesData, setClothesData] = useState(null);
  console.log(id);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://gawk-frame-be-production.up.railway.app/api/pakaian/${id}`);
        const data = await response.json();
        // console.log(data)
        setClothesData(data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [id]);

  if (!clothesData) {
    return <p>Loading...</p>; // Loading indicator
  }

  console.log(clothesData.data);

  return (
    <Flex>
      <Box style={{ width: '100vw', height: '71vw', position: 'relative', background: 'cyan' }}>
        <PictureSlots imageUrl={clothesData.image} width={'400px'} height={'550px'} paddingTop={'10px'} left={'30px'} top={'40px'} />
        <div className="ShortDress" style={{ left: '500px', top: '50px', position: 'absolute', textAlign: 'center', color: 'black', fontSize: '40px', fontFamily: 'Inter', fontWeight: '700', lineHeight: '42px', wordWrap: 'break-word' }}>{clothesData.nama}</div>
        <InfoContainer>
          <div className="Price" style={{ fontSize: '24px', fontFamily: 'Inter', fontWeight: '500', lineHeight: '26px', wordWrap: 'break-word' }}>Harga: {clothesData.harga}</div>
          <div className="Category" style={{ fontSize: '20px', fontFamily: 'Inter', fontWeight: '500', lineHeight: '22px', wordWrap: 'break-word' }}>Kategori: {clothesData.kategori}</div>
          <div className="Stock" style={{ fontSize: '20px', fontFamily: 'Inter', fontWeight: '500', lineHeight: '22px', wordWrap: 'break-word'}}>Stok: {clothesData.stok}</div>
          <div className="Ukuran" style={{ fontSize: '20px', fontFamily: 'Inter', fontWeight: '500', lineHeight: '22px', wordWrap: 'break-word' , marginTop: '20px'}}>Ukuran</div>
          <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            {/* Square around 'S' */}
            <div style={{ marginRight: '10px', fontSize: '18px', fontFamily: 'Inter', fontWeight: '500', width: '30px', height: '30px', display: 'flex', justifyContent: 'center', alignItems: 'center', border: '2px solid #2D3648' }}>S</div>
            {/* Square around 'M' */}
            <div style={{ marginRight: '10px', fontSize: '18px', fontFamily: 'Inter', fontWeight: '500', width: '30px', height: '30px', display: 'flex', justifyContent: 'center', alignItems: 'center', border: '2px solid #2D3648' }}>M</div>
            {/* Square around 'L' */}
            <div style={{ marginRight: '10px', fontSize: '18px', fontFamily: 'Inter', fontWeight: '500', width: '30px', height: '30px', display: 'flex', justifyContent: 'center', alignItems: 'center', border: '2px solid #2D3648' }}>L</div>
            {/* Square around 'XL' */}
            <div style={{ fontSize: '18px', fontFamily: 'Inter', fontWeight: '500', width: '30px', height: '30px', display: 'flex', justifyContent: 'center', alignItems: 'center', border: '2px solid #2D3648' }}>XL</div>
          </div>
          <button
            className="buy-button"
            style={{
              marginTop: '20px',
              padding: '10px 20px',
              fontSize: '18px',
              fontFamily: 'Inter',
              fontWeight: '500',
              background: '#2D3648',
              color: 'white',
              border: 'none',
              cursor: 'pointer',
            }}
            onClick={() => {}}
          >
            Buy Now
          </button>
        </InfoContainer>
      </Box>
    </Flex>
  );
};

export default Detail;
