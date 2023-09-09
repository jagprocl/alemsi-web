import React from 'react';
import Navbar from './Navbar';
import Hero from '../pages/Hero.jsx';
import Banner from './Banner.jsx';
import Grid from './Grid.jsx';
import SectionLayout from './SectionLayout';
import ServiceGrid from './ServiceGrid';
import ProductCard from './ProductCard';
import ProductGrid from './ProductGrid';
import LogoGrid from './LogoGrid';
import About from './About';

const BaseLayout = (props) => {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Banner></Banner>
      <About></About>
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
    </>
  );
};

export default BaseLayout;
