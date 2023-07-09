import { Helmet } from 'react-helmet';


export default function Myhelm() {
    return (
      <div>
        <Helmet>
          <title>Eric Polley at ericpolley.com</title>
          <meta name="description" content="official website of eric polley: 2d character animation" />
          <meta property="og:title" content="ericpolley.com" />
          <meta property="og:description" content="the official website of eric polley: 2d character animation" />
          <meta property="og:image" content="https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/301220658_802468080960735_1144962636426578233_n.jpg?_nc_cat=110&cb=99be929b-3346023f&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=M1ciaDHOBdoAX9v8b-M&_nc_ht=scontent-sea1-1.xx&oh=00_AfBwnRwLPdM5AXzBWVHWl-hci6xkUOumcoZo77VZ5_61-Q&oe=64AFA316" />
          <meta property="og:url" content="https://ericpolley.com" />
          <meta property="og:type" content="website" />
        </Helmet>
  
        {/* Rest of your component's content */}
      </div>
    );
  }

  
  
