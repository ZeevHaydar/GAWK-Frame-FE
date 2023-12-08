import React, { useEffect, useState } from 'react';
// import InformationCard from '../components/InformationCard';
// import Button1 from '../components/Button1';
// import { Link } from 'react-router-dom';
// import Grid from '../components/Grid';

const Line = ({ height, background, borderTopLeftRadius, borderTopRightRadius }) => (
  <div
    className="Line"
    style={{ alignSelf: 'stretch', height, background, borderRadius: borderTopLeftRadius && borderTopRightRadius ? `${borderTopLeftRadius}px ${borderTopRightRadius}px 0 0` : '3px' }}
  />
);

const ShortLine = () => (
  <div className="ShortLine" style={{ alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex' }}>
    <div className="Blank" style={{ flex: '1 1 0', height: 16, borderRadius: 3 }} />
    <Line flex="1 1 0" height={16} background="#A0ABC0" borderTopLeftRadius={3} borderTopRightRadius={3} />
    <Line flex="1 1 0" height={16} background="#A0ABC0" borderTopLeftRadius={3} borderTopRightRadius={3} />
    <div className="Blank" style={{ flex: '1 1 0', height: 16, borderRadius: 3 }} />
  </div>
);

const WfTextPlaceholder = () => (
  <div className="WfTextPlaceholder" style={{ alignSelf: 'stretch', height: 88, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex' }}>
    <div className="TextBase" style={{ alignSelf: 'stretch', height: 88, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'flex' }}>
      <Line height={16} background="#A0ABC0" borderRadius={3} />
      <Line height={16} background="#A0ABC0" borderRadius={3} />
      <Line height={16} background="#A0ABC0" borderRadius={3} />
      <ShortLine />
    </div>
  </div>
);

const WfHeadingPlaceholder = () => (
  <div className="WfHeadingPlaceholder" style={{ alignSelf: 'stretch', height: 40, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 12, display: 'flex' }}>
    <ShortLine />
  </div>
);

const WfImagePlaceholder = () => (
  <div className="WfImagePlaceholder" style={{ width: 394.67, height: 220, background: '#EDF0F7', border: '2px #2D3648 solid', justifyContent: 'center', alignItems: 'center', display: 'inline-flex' }}>
    <div className="IconImage" style={{ width: 40, height: 40, position: 'relative', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex' }}>
      <div className="Shape" style={{ width: 33.33, height: 33.33, background: '#2D3648' }}></div>
    </div>
  </div>
);

const ContentStack = () => (
  <div className="ContentStack" style={{ alignSelf: 'stretch', height: 216, padding: 32, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 24, display: 'flex' }}>
    <WfTextPlaceholder />
    <WfHeadingPlaceholder />
  </div>
);

const Slot = () => (
  <div className="Slot" style={{ flex: '1 1 0', alignSelf: 'stretch', background: 'white', borderRadius: 8, overflow: 'hidden', border: '2px #2D3648 solid', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex' }}>
    <WfImagePlaceholder />
    <ContentStack />
  </div>
);

const WfSlotColumns = () => (
  <div className="WfSlotColumns" style={{ width: 1232, paddingTop: 40, left: 104, top: 347, position: 'absolute', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 24, display: 'inline-flex' }}>
    <Slot />
    <Slot />
    <Slot />
  </div>
);

const WfLogoPlaceholder = () => (
  <div className="WfLogoPlaceholder" style={{ width: 345, height: 130, paddingLeft: 55, paddingRight: 55, paddingTop: 45, paddingBottom: 45, left: 34, top: 28, position: 'absolute', background: '#2D3648', borderRadius: 4, overflow: 'hidden', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex' }}>
    <div className="Logo" style={{ textAlign: 'center', color: 'white', fontSize: 96, fontFamily: 'Inter', fontWeight: '700', lineHeight: 24, wordWrap: 'break-word' }}>Logo</div>
  </div>
);

const ClothesList = () => {
    return (
        <div className="ScreenClothesListDoNotChangeFortuneVeryDisgusting" style={{ width: 1440, height: 1024, position: 'relative', background: 'white' }}>
            <Line width={688} height={56} left={423} top={65} position="absolute" background="#717D96" borderTopLeftRadius={3} borderTopRightRadius={3} />
            {/* <WfIconButtonDropDown left={1293} top={65} />
            <WfIconButtonDropDown left={1155} top={65} /> */}
            <div className="TextBase" style={{ height: 112, left: 104, top: 196, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'flex' }}>
            <Line height={24} background="#A0ABC0" borderRadius={3} />
            <Line height={24} background="#A0ABC0" borderRadius={3} />
            <Line height={24} background="#A0ABC0" borderRadius={3} />
            </div>
            <WfSlotColumns />
            <WfLogoPlaceholder />
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

// export default ClothesList;
