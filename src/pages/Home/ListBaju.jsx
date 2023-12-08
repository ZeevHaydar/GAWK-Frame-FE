import React from 'react';

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
  <div className="WfImagePlaceholder" style={{ width: '394.67px', height: '220px', background: '#EDF0F7', border: '2px #2D3648 solid', justifyContent: 'center', alignItems: 'center', display: 'inline-flex' }}>
    <div className="IconImage" style={{ width: '40px', height: '40px', position: 'relative', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex' }}>
      <div className="Shape" style={{ width: '33.33px', height: '33.33px', background: '#2D3648' }}></div>
    </div>
  </div>
);

const ContentStack = () => (
  <div className="ContentStack" style={{ alignSelf: 'stretch', height: '216px', padding: '32px', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '24px', display: 'flex' }}>
    <WfTextPlaceholder />
    <WfHeadingPlaceholder />
  </div>
);

const Slot = () => (
  <div className="Slot" style={{ flex: '1 1 0', alignSelf: 'stretch', background: 'white', borderRadius: '8px', overflow: 'hidden', border: '2px #2D3648 solid', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex' }}>
    <WfImagePlaceholder />
    <ContentStack />
  </div>
);

const WfSlotColumns = () => (
  <div className="WfSlotColumns" style={{ width: '1232px', paddingTop: '40px', left: '104px', top: '347px', position: 'absolute', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '24px', display: 'inline-flex' }}>
    <Slot />
    <Slot />
    <Slot />
  </div>
);

const WfLogoPlaceholder = () => (
    <div className="WfLogoPlaceholder" style={{ width: '150px', height: '50px', paddingLeft: '55px', paddingRight: '55px', paddingTop: '45px', paddingBottom: '45px', left: '34px', top: '28px', position: 'absolute', background: '#2D3648', borderRadius: '4px', overflow: 'hidden', justifyContent: 'center', alignItems: 'center', gap: '10px', display: 'inline-flex' }}>
        <div className="Logo" style={{ textAlign: 'center', color: 'white', fontSize: '96px', fontFamily: 'Inter', fontWeight: '700', lineHeight: '24px', wordWrap: 'break-word' }}>Logo</div>
    </div>
);

const ClothesList = () => {
  return (
    <div style={{ width: '100%', height: '1024px', position: 'relative', background: 'white'}}>
      <Line width="688px" height="56px" left="423px" top="65px" position="absolute" background="#717D96" borderTopLeftRadius={3} borderTopRightRadius={3} />
      {/* <div className="TextBase" style={{ height: '112px', left: '104px', top: '196px', position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '8px', display: 'flex' }}>
        <Line height="24px" background="#A0ABC0" borderRadius={3} />
        <Line height="24px" background="#A0ABC0" borderRadius={3} />
        <Line height="24px" background="#A0ABC0" borderRadius={3} />
      </div> */}
      <WfSlotColumns />
      <WfLogoPlaceholder />
    </div>
  );
};

export default ClothesList;
