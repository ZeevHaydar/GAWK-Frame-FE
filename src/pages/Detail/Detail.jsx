import React from 'react';

const Flex = ({ children, ...props }) => (
  <div style={{ display: 'flex', ...props }}>{children}</div>
);

const Box = ({ children, ...props }) => (
  <div style={{ ...props }}>{children}</div>
);

const Shape = () => (
  <div className="Shape" style={{ width: '35px', height: '33.33px', background: '#2D3648' }}></div>
);

const IconImage = () => (
  <div className="IconImage" style={{ width: '40px', height: '40px', position: 'relative', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex' }}>
    <Shape />
  </div>
);

const PicturePlaceholder = ({ width, height }) => (
  <div className="PicturePlaceholder" style={{ width, height, background: '#EDF0F7', border: '2px #2D3648 solid', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
    <IconImage />
  </div>
);

const PicturePosition = ({ width, height }) => (
  <div className="PicturePosition" style={{ flex: '1 1 0', alignSelf: 'stretch', background: 'white', borderRadius: '15px', overflow: 'hidden', border: '2px #2D3648 solid', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex' }}>
    <PicturePlaceholder width={width} height={height} />
  </div>
);

const PictureSlots = ({ width, height, paddingTop, left, top }) => (
  <div className="PictureSlots" style={{ width, height, paddingTop, left, top, position: 'absolute', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '25px', display: 'inline-flex' }}>
    <PicturePosition width={width} height={height} />
  </div>
);

const ScreenClothesDescription = () => (
  <Flex>
    <Box style={{ width: '100vw', height: '71vw', position: 'relative', background: 'white' }}>
      <PictureSlots width={'400px'} height={'550px'} paddingTop={'10px'} left={'30px'} top={'40px'} />
      {/* <PictureSlots width={'22.15vw'} height={'35vw'} paddingTop={'2.78vw'} left={'26.74vw'} top={'5vw'} /> */}
      {/* <PictureSlots width={'46.74vw'} height={'25.69vw'} paddingTop={'2.78vw'} left={'2.15vw'} top={'30vw'} /> */}
      <div className="ShortDress" style={{ left: '500px', top: '50px', position: 'absolute', textAlign: 'center', color: 'black', fontSize: '40px', fontFamily: 'Inter', fontWeight: '700', lineHeight: '42px', wordWrap: 'break-word' }}>Short Dress</div>
      {/* Other components go here */}
    </Box>
  </Flex>
);

export default ScreenClothesDescription;
