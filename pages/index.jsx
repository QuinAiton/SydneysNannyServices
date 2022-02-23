import Head from 'next/head';
import Image from 'next/image';
import Nav from '../components/Nav.jsx';
import JumboTron from '../components/JumboTron.jsx';
const index = () => {
  return (
    <div>
      <Nav />
      <JumboTron />
    </div>
  );
};

export default index;
