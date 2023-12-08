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

const WfImagePlaceholder = () => (
  <div className="WfImagePlaceholder" style={{ width: 120, height: 120, paddingTop: 39, paddingBottom: 41, paddingLeft: 40, paddingRight: 40, background: '#EDF0F7', border: '2px #2D3648 solid', justifyContent: 'center', alignItems: 'center', display: 'inline-flex' }}>
    <div className="IconImage" style={{ width: 40, height: 40, position: 'relative', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex' }}>
      <div className="Shape" style={{ width: 33.33, height: 33.33, background: '#2D3648' }}></div>
    </div>
  </div>
);

const WfIconButton = ({ left, top, iconColor }) => (
  <div className="WfIconButton" style={{ padding: 16, left, top, position: 'absolute', background: '#2D3648', borderRadius: 6, overflow: 'hidden', justifyContent: 'center', alignItems: 'center', gap: 8, display: 'inline-flex' }}>
    <div className="IconRight" style={{ width: 24, height: 24, position: 'relative' }}>
      <div className="Shape" style={{ width: 16, height: 16, left: 4, top: 4, position: 'absolute', background: iconColor }}></div>
    </div>
  </div>
);

const Button1 = ({ label, left, top }) => (
  <div className="Button1" style={{ width: 154, height: 69, paddingLeft: 20, paddingRight: 20, paddingTop: 12, paddingBottom: 12, background: '#2D3648', borderRadius: 6, overflow: 'hidden', justifyContent: 'center', alignItems: 'center', gap: 8, display: 'flex', left, top, position: 'absolute' }}>
    <div className="Label" style={{ color: 'white', fontSize: 16, fontFamily: 'Inter', fontWeight: '700', lineHeight: 24, wordWrap: 'break-word' }}>{label}</div>
  </div>
);

const WfButton = ({ left, top, label }) => (
  <div className="WfButton" style={{ width: 43, height: 120, paddingLeft: 20, paddingRight: 20, paddingTop: 12, paddingBottom: 12, left, top, position: 'absolute', borderRadius: 6, overflow: 'hidden', border: '2px #2D3648 solid', justifyContent: 'center', alignItems: 'center', gap: 8, display: 'inline-flex' }}>
    <div className="Label" style={{ color: '#2D3648', fontSize: 16, fontFamily: 'Inter', fontWeight: '700', lineHeight: 24, wordWrap: 'break-word' }}>{label}</div>
  </div>
);

const ListChat = () => (
  <div className="ScreenChatDoNotChangeWhatIsChatRealMeanIAmVomit" style={{ width: 1440, height: 1024, position: 'relative', background: 'white' }}>
    <div className="TextBase" style={{ width: 699, height: 42, left: 275, top: 293, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'inline-flex' }}>
      <Line height={16} background="#A0ABC0" borderRadius={3} />
      <ShortLine />
    </div>
    <WfImagePlaceholder left={132} top={233} />
    <WfIconButton left={132} top={121} iconColor="white" />
    <Line width={270} height={56} left={585} top={65} position="absolute" background="#717D96" borderTopLeftRadius={3} borderTopRightRadius={3} />
    <WfIconButton left={1272} top={65} iconColor="white" />
    <Button1 label="Button" left={1174} top={897} />
    <Line width={233} height={18} left={275} top={233} position="absolute" background="#717D96" borderTopLeftRadius={3} borderTopRightRadius={3} />
    {/* ... repeat similar structure for other sections ... */}
    <WfButton left={997} top={233} label=">" />
    <WfButton left={997} top={392} label=">" />
    <WfButton left={997} top={551} label=">" />
  </div>
);

export default ListChat;