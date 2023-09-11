import React from 'react';
import Navbar from './Navbar';
import Hero from '../pages/Hero.jsx';
import Banner from './Banner.jsx';
import Grid from './Grid.jsx';
import SectionLayout from './SectionLayout';
import ServiceGrid from './ServiceGrid';
import ProductGrid from './ProductGrid';
import LogoGrid from './LogoGrid';
import About from './About';
import Human from './Human';
import TwoWorkers from './TwoWorkers';
import Schedule from './Schedule';
import PostSale from './PostSale';

const BaseLayout = (props) => {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Banner></Banner>
      <About></About>
      <Human></Human>
      <Grid></Grid>
      <SectionLayout
        description='Estamos constantemente ampliando nuestros servicios para brindarte una gran variedad de soluciones de higiene.'
        title={
          <>
            <span>
              Una amplia gama de{' '}
              <span style={{ fontWeight: '600' }}>servicios</span>
            </span>
          </>
        }
      >
        <ServiceGrid></ServiceGrid>
      </SectionLayout>
      <SectionLayout
        color='#ffffff'
        align='center'
        description={
          <>
            <span>
              Trabajamos para las principales agencias gubernamentales del país
            </span>
          </>
        }
        title={
          <>
            <span>
              Ellos ya <span style={{ fontWeight: '600' }}>confiaron {''}</span>
              en nosotros
            </span>
          </>
        }
      >
        <LogoGrid></LogoGrid>
      </SectionLayout>
      <SectionLayout
        color='#13457D'
        title={
          <>
            <span style={{ color: 'white' }}>
              Trabajamos usando la mejor{' '}
              <span style={{ fontWeight: '600' }}>tecnología</span>
            </span>
          </>
        }
        description={
          <>
            <span style={{ color: 'white' }}>
              Trabajamos para las principales agencias gubernamentales del país
            </span>
          </>
        }
      >
        <ProductGrid></ProductGrid>
      </SectionLayout>
      <TwoWorkers></TwoWorkers>
      <SectionLayout
        color='#F8FAFC'
        title={
          <>
            <span>
              Agenda tu servicio{' '}
              <span style={{ fontWeight: '600' }}>ahora </span>
              en unos cuantos click
            </span>
          </>
        }
        description={
          <>
            <span>
              Completa este formulario para agendar alguno de nuestros servicios
            </span>
          </>
        }
      >
        <Schedule></Schedule>
      </SectionLayout>

      <SectionLayout
        pad='80px 0px'
        color='#ffffff'
        align='center'
        title='Seguimos pendiente de ti'
        description={
          <>
            <span>
              Nos preocupamos de que tu experiencia con nosotros sea buena de
              principio a fin
            </span>
          </>
        }
      >
        <PostSale></PostSale>
      </SectionLayout>
    </>
  );
};

export default BaseLayout;
