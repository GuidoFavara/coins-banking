import React from "react";
import Icon1 from "../../images/svg-1.svg";
import Icon2 from "../../images/svg-5.svg";
import Icon3 from "../../images/svg-4.svg";
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from "./ServicesElements";
const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Nuestros servicios</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Reduce tus Gastos</ServicesH2>
          <ServicesP>
            Te ayudamos a reducir tus gastos bancarios ahorrandote todos sus
            costos.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Oficinas Virtuales</ServicesH2>
          <ServicesP>
            Puedes acceder a nuestra plataforma desde cualquier parte del mundo.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Cuenta Premium</ServicesH2>
          <ServicesP>
            Obten una membresia Premium y te reintegramos hasta el 5% en tus
            transacciones.
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
