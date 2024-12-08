
import './CostCalculator.scss';
import consultationImage from '../assets/consultation.png';

const CostCalculator = () => {

  const homeStyle = {
    backgroundImage: `url(${consultationImage})`,
    backgroundSize: 'cover',
    
  };
  return (
    <section className="cost-calculator" style={homeStyle}>
      <h2>We're Here to Help You Every <br /><span>Step of the Way</span></h2>
      
    </section>
  );
};

export default CostCalculator;