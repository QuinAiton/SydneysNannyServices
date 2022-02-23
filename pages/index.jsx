import Head from 'next/head';
import Image from 'next/image';
import Nav from '../components/Nav.jsx';
import JumboTron from '../components/JumboTron.jsx';
import Services from '../components/Services'
const index = () => {
  return (
    <div>
      <Nav />
      <JumboTron /> 
      <Services/>
    </div>
  );
};

export default index;
