import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

document.body.style = 'background: cyan;';

const Line = ({ width, height, left, top, background, borderTopLeftRadius, borderTopRightRadius }) => (
  <div
    className="Line"
    style={{
      width,
      height,
      left,
      top,
      position: 'absolute',
      background,
      borderRadius: borderTopLeftRadius && borderTopRightRadius ? `${borderTopLeftRadius}px ${borderTopRightRadius}px 0 0` : '3px',
    }}
  />
);

// const ShortLine = () => (
//   <div className="ShortLine" style={{ alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex' }}>
//     <div className="Blank" style={{ flex: '1 1 0', height: 16, borderRadius: 3 }} />
//     <Line flex="1 1 0" height={16} background="#A0ABC0" borderTopLeftRadius={3} borderTopRightRadius={3} />
//     <Line flex="1 1 0" height={16} background="#A0ABC0" borderTopLeftRadius={3} borderTopRightRadius={3} />
//     <div className="Blank" style={{ flex: '1 1 0', height: 16, borderRadius: 3 }} />
//   </div>
// );

// const WfTextPlaceholder = () => (
//   <div className="WfTextPlaceholder" style={{ alignSelf: 'stretch', height: 88, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex' }}>
//     <div className="TextBase" style={{ alignSelf: 'stretch', height: 88, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'flex' }}>
//       <Line height={16} background="#A0ABC0" borderRadius={3} />
//       <Line height={16} background="#A0ABC0" borderRadius={3} />
//       <Line height={16} background="#A0ABC0" borderRadius={3} />
//       <ShortLine />
//     </div>
//   </div>
// );

// const WfHeadingPlaceholder = () => (
//   <div className="WfHeadingPlaceholder" style={{ alignSelf: 'stretch', height: 40, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 12, display: 'flex' }}>
//     <ShortLine />
//   </div>
// );

const WfImagePlaceholder = ({ imageUrl }) => (
  <div className="WfImagePlaceholder" style={{ width: '100%', height: '120px', background: '#EDF0F7', border: '2px #2D3648 solid', justifyContent: 'center', alignItems: 'center', display: 'inline-flex' }}>
    <img src={imageUrl} alt="Baju" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  </div>
);

const ContentStack = ({ children }) => (
  <div className="ContentStack" style={{ alignSelf: 'stretch', height: '125px', padding: '16px', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '12px', display: 'flex', textDecoration: 'none', color: 'inherit' }}>
    {children}
  </div>
);

const Slot = ({ children }) => (
  <div className="Slot" style={{ flex: '1 1 0', alignSelf: 'stretch', width: '33%', background: 'white', borderRadius: '8px', overflow: 'hidden', border: '2px #2D3648 solid', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex', textDecoration: 'none', color: 'inherit' }}>
    {children}
  </div>
);

const WfSlotColumns = ({ children }) => (
  <div className="WfSlotColumns" style={{ width: '100%', paddingTop: '40px', position: 'absolute', top: '200px', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '24px', display: 'flex', textDecoration: 'none', color: 'inherit' }}>
    {children}
  </div>
);


const WfLogoPlaceholder = () => (
  <div className="WfLogoPlaceholder" style={{ width: '150px', height: '50px', paddingLeft: '55px', paddingRight: '55px', paddingTop: '45px', paddingBottom: '45px', left: '34px', top: '28px', position: 'absolute', background: '#2D3648', borderRadius: '4px', overflow: 'hidden', justifyContent: 'center', alignItems: 'center', gap: '10px', display: 'inline-flex' }}>
    <div className="Logo" style={{ textAlign: 'center', color: 'white', fontSize: '96px', fontFamily: 'Inter', fontWeight: '700', lineHeight: '24px', wordWrap: 'break-word' }}>Logo</div>
  </div>
);

const ClothesList = () => {
  const [baju, setBaju] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://gawk-frame-be-production.up.railway.app/api/pakaian`, {
          method: 'GET',
          body: null,
          headers: { "Content-Type": "application/json" }
        });
        const data = await response.json();
        setBaju(data?.data);

      } catch (error) {
        // console.log('Error fetching data:', error);
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  console.log(baju);
  return (
    <div style={{ width: '95%', height: '750px', position: 'relative', background: 'cyan'}}>
      <Line width="688px" height="56px" left="423px" top="65px" position="absolute" background="#717D96" borderTopLeftRadius={3} borderTopRightRadius={3} />
      <WfLogoPlaceholder />
      <WfSlotColumns>
        {baju.map((item, index) => (
          // <Link to={`../Detail/${item._id}`} style={{ display: 'block', width: '100%' }}>
            <Slot key={index}>
              <Link to={`../Detail/${item._id}`} style={{ display: 'block', width: '100%' }}>
                <WfImagePlaceholder imageUrl={item.image} />
                <ContentStack>
                  <div>Nama: {item.nama}</div>
                  <div>Harga: {item.harga}</div>
                  <div>Kategori: {item.kategori}</div>
                  <div>Stok: {item.stok}</div>
                </ContentStack>
              </Link>
            </Slot>
          // </Link>
        ))}
      </WfSlotColumns>
    </div>
  );
};

export default ClothesList;
// const ClothesList = () => {
//     const [baju, setBaju] = useState([]);
//     const { showMessage } = useMessageContext();

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await fetch(`/api/pakaian/`, {
//                     method: 'GET',
//                     body: null,
//                     headers: { "Content-Type": "application/json" }
//                 });
//                 const data = await response.json();
//                 setBaju(data?.data);

//                 // Assuming data is an array of objects
//             } catch (error) {
//                 showMessage(error, "error");
//                 console.log('Error fetching data:', error);
//                 console.error('Error fetching data:', error);
//             }
//         };

//         fetchData();
//     }, []);

//     return (
//         <div className='w-full' style={{ maxHeight: '500px', overflowY: "auto" }}>
//             <Grid rows={4} columns={3}>
//                 {baju &&
//                     baju.map((baju) => (
//                         <div key={baju.id} style={{ margin: "2rem" }}>
//                             <InformationCard
//                                 key={baju.id}
//                                 data={
//                                     <div>
//                                         <p>Nama: {baju.nama}</p>
//                                         <p>Harga: {baju.harga}</p>
//                                         <p>Kategori: {baju.kategori}</p>
//                                         <p>Stok: {baju.stok}</p>
//                                         <img src={baju.image} />
//                                     </div>
//                                 }
//                                 buttons={
//                                     <Link to={`/detail/?id=${baju.id}`}>
//                                         <Button1 text='Beli Sekarang' />
//                                     </Link>
//                                 }
//                             />
//                         </div>
//                     ))}
//             </Grid>
//         </div>
//     );
// };