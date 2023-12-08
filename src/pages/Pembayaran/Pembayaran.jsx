import React from 'react';

const Line = () => (
  <div className="Line" style={{ alignSelf: 'stretch', height: 16, background: '#A0ABC0', borderRadius: 3 }} />
);

const ShortLine = () => (
  <div className="ShortLine" style={{ alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex' }}>
    <div className="Blank" style={{ flex: '1 1 0', height: 16, borderRadius: 3 }} />
    <Line />
    <Line />
    <div className="Blank" style={{ flex: '1 1 0', height: 16, borderRadius: 3 }} />
  </div>
);

const Shape = () => (
  <div className="Shape" style={{ width: 33.33, height: 33.33, background: '#2D3648' }} />
);

const IconImage = () => (
  <div className="IconImage" style={{ width: 40, height: 40, position: 'relative', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex' }}>
    <Shape />
  </div>
);

const IconRight = () => (
  <div className="IconRight" style={{ width: 24, height: 24, position: 'relative' }}>
    <Shape style={{ width: 16, height: 16, left: 4, top: 4, position: 'absolute', background: 'white' }} />
  </div>
);

const WfImagePlaceholder = () => (
  <div className="WfImagePlaceholder" style={{ width: 120, height: 120, paddingTop: 39, paddingBottom: 41, paddingLeft: 40, paddingRight: 40, left: 273, top: 208, position: 'absolute', background: '#EDF0F7', border: '2px #2D3648 solid', justifyContent: 'center', alignItems: 'center', display: 'inline-flex' }}>
    <IconImage />
  </div>
);

const WfIconButton = () => (
  <div className="WfIconButton" style={{ padding: 16, left: 132, top: 121, position: 'absolute', transform: 'rotate(-180deg)', transformOrigin: '0 0', background: '#2D3648', borderRadius: 6, overflow: 'hidden', justifyContent: 'center', alignItems: 'center', gap: 8, display: 'inline-flex' }}>
    <IconRight />
  </div>
);

const Button = ({ background, borderColor, labelColor }) => (
  <div className="Button" style={{ width: 154, height: 69, paddingLeft: 20, paddingRight: 20, paddingTop: 12, paddingBottom: 12, background, borderRadius: 6, overflow: 'hidden', border: borderColor ? `2px ${borderColor} solid` : 'none', justifyContent: 'center', alignItems: 'center', gap: 8, display: 'flex' }}>
    <div className="Label" style={{ color: labelColor, fontSize: 16, fontFamily: 'Inter', fontWeight: '700', lineHeight: 24, wordWrap: 'break-word' }}>Button</div>
  </div>
);

const ButtonStack = () => (
  <div className="ButtonStack" style={{ left: 1004, top: 861, position: 'absolute', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 16, display: 'inline-flex' }}>
    <Button background="#2D3648" labelColor="white" />
    <Button background="none" borderColor="#2D3648" labelColor="#2D3648" />
  </div>
);

const Pembayaran = () => (
  <div className="ScreenPaymentDoNotChangeHaveNoTsingtaoAncestorCry" style={{ width: 1440, height: 1024, position: 'relative', background: 'white' }}>
    <div className="TextBase" style={{ height: 112, left: 132, top: 861, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'inline-flex' }}>
      <Line />
      <Line />
      <Line />
      <Line />
      <ShortLine />
    </div>
    <div className="TextBase" style={{ width: 699, height: 42, left: 416, top: 210, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'inline-flex' }}>
      <Line />
      <ShortLine />
    </div>
    <WfImagePlaceholder />
    <WfIconButton />
    <div className="Line" style={{ width: 688, height: 56, left: 376, top: 65, position: 'absolute', background: '#717D96', borderTopLeftRadius: 3, borderTopRightRadius: 3 }} />
    <WfIconButton style={{ left: 1138, top: 208 }} />
    <div className="TextBase" style={{ width: 699, height: 42, left: 416, top: 375, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'inline-flex' }}>
      <Line />
      <ShortLine />
    </div>
    <WfImagePlaceholder style={{ left: 273, top: 373 }} />
    <WfIconButton style={{ left: 1138, top: 373 }} />
    <div className="TextBase" style={{ width: 699, height: 42, left: 416, top: 540, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'inline-flex' }}>
      <Line />
      <ShortLine />
    </div>
    <WfImagePlaceholder style={{ left: 273, top: 538 }} />
    <WfIconButton style={{ left: 1138, top: 538 }} />
    <div className="TextBase" style={{ width: 699, height: 42, left: 416, top: 705, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'inline-flex' }}>
      <Line />
      <ShortLine />
    </div>
    <WfImagePlaceholder style={{ left: 273, top: 703 }} />
    <WfIconButton style={{ left: 1138, top: 703 }} />
    <ButtonStack />
  </div>
);

export default Pembayaran;
