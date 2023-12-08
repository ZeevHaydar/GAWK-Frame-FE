import React from 'react';

const WfImagePlaceholder = () => (
  <div className="WfImagePlaceholder" style={{ width: 56, height: 56, paddingTop: 7, paddingBottom: 9, paddingLeft: 8, paddingRight: 8, left: 175, top: 65, position: 'absolute', background: '#EDF0F7', border: '2px #2D3648 solid', justifyContent: 'center', alignItems: 'center', display: 'inline-flex' }}>
    <div className="IconImage" style={{ width: 40, height: 40, position: 'relative', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex' }}>
      <div className="Shape" style={{ width: 33.33, height: 33.33, background: '#2D3648' }}></div>
    </div>
  </div>
);

const WfIconButton = () => (
  <div className="WfIconButton" style={{ padding: 16, left: 132, top: 121, position: 'absolute', transform: 'rotate(-180deg)', transformOrigin: '0 0', background: '#2D3648', borderRadius: 6, overflow: 'hidden', justifyContent: 'center', alignItems: 'center', gap: 8, display: 'inline-flex' }}>
    <div className="IconRight" style={{ width: 24, height: 24, position: 'relative' }}>
      <div className="Shape" style={{ width: 16, height: 16, left: 4, top: 4, position: 'absolute', background: 'white' }}></div>
    </div>
  </div>
);

const Line = ({ width, height, left, top, background, borderTopLeftRadius, borderTopRightRadius }) => (
  <div className="Line" style={{ width, height, left, top, position: 'absolute', background, borderRadius: borderTopLeftRadius && borderTopRightRadius ? `${borderTopLeftRadius}px ${borderTopRightRadius}px 0 0` : '3px' }} />
);

const TextBase = ({ width, height, left, top, children }) => (
  <div className="TextBase" style={{ width, height, left, top, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'inline-flex' }}>
    {children}
  </div>
);

const ShortLine = () => (
  <div className="ShortLine" style={{ alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex' }}>
    <div className="Line" style={{ flex: '1 1 0', height: 16, background: '#A0ABC0', borderTopLeftRadius: 3, borderTopRightRadius: 3 }} />
    <div className="Line" style={{ flex: '1 1 0', height: 16, background: '#A0ABC0', borderTopLeftRadius: 3, borderTopRightRadius: 3 }} />
    <div className="Blank" style={{ flex: '1 1 0', height: 16, borderRadius: 3 }} />
  </div>
);

const Chat = () => (
  <div className="ChatDoNotChangeIAmOpenDmAgainDoNotSendHentai" style={{ width: 1440, height: 1024, position: 'relative', background: 'white' }}>
    <WfImagePlaceholder />
    <WfIconButton />
    <Line width={270} height={56} left={275} top={65} background="#717D96" borderTopLeftRadius={3} borderTopRightRadius={3} />
    <TextBase width={800} height={42} left={1328} top={344}>
      <Line alignSelf="stretch" height={16} background="#A0ABC0" borderRadius={3} />
      <ShortLine />
    </TextBase>
    <TextBase width={699} height={42} left={175} top={564}>
      <Line alignSelf="stretch" height={16} background="#A0ABC0" borderRadius={3} />
      <ShortLine />
    </TextBase>
    <TextBase width={699} height={42} left={175} top={651}>
      <Line alignSelf="stretch" height={16} background="#A0ABC0" borderRadius={3} />
      <ShortLine />
    </TextBase>
    {/* ... Repeat similar structure for other sections ... */}
  </div>
);

export default Chat;
