import React from 'react';

const Shape = () => (
  <div className="Shape" style={{ width: 33.33, height: 33.33, background: '#2D3648' }}></div>
);

const IconImage = () => (
  <div className="IconImage" style={{ width: 40, height: 40, position: 'relative', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex' }}>
    <Shape />
  </div>
);

const WfImagePlaceholder = ({ width, height }) => (
  <div className="WfImagePlaceholder" style={{ width, height, background: '#EDF0F7', border: '2px #2D3648 solid', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
    <IconImage />
  </div>
);

const Slot2 = ({ width, height }) => (
  <div className="Slot2" style={{ flex: '1 1 0', alignSelf: 'stretch', background: 'white', borderRadius: 8, overflow: 'hidden', border: '2px #2D3648 solid', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex' }}>
    <WfImagePlaceholder width={width} height={height} />
  </div>
);

const WfSlotColumns = ({ width, height, paddingTop, left, top }) => (
  <div className="WfSlotColumns" style={{ width, height, paddingTop, left, top, position: 'absolute', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 24, display: 'inline-flex' }}>
    <Slot2 width={width} height={height} />
  </div>
);

const ScreenClothesDescription = () => (
    <div className="ScreenClothesDescriptionDoNotChangeLiverNoMore" style={{ width: 1440, height: 1024, position: 'relative', background: 'white' }}>
      <WfSlotColumns width={319} height={610} paddingTop={40} left={31} top={0} />
      <WfSlotColumns width={673} height={370} paddingTop={40} left={31} top={609} />
      <WfSlotColumns width={319} height={610} paddingTop={40} left={385} top={-1} />
      <div className="ShortDress" style={{ left: 739, top: 65, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 40, fontFamily: 'Inter', fontWeight: '700', lineHeight: 24, wordWrap: 'break-word' }}>Short Dress</div>
      {/* Other components go here */}
    </div>
  );
  
  export default ScreenClothesDescription;