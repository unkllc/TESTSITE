import { useEffect } from 'react';
import SectionCards from '../../components/cap-plus/SectionCards';
import SectionCarousel from '../../components/cap-plus/SectionCarousel';
import SectionCheckCard from '../../components/cap-plus/SectionCheckCard';
import SectionCollege from '../../components/cap-plus/SectionCollege';
import SectionFAQ from '../../components/cap-plus/SectionFAQ';
import SectionFour from '../../components/cap-plus/SectionFour';
import SectionOne from '../../components/cap-plus/SectionOne';
import SectionThirt from '../../components/cap-plus/SectionThirt';
import SectionTwo from '../../components/cap-plus/SectionTwo';

function InscrevaSe() {
  useEffect(() => {
    if (document.getElementById('mais-support-widget')) {
      const maisim = document.getElementById('mais-support-widget');
      if (maisim) {
        maisim.remove();
      }
    }
  }, []);

  return (
    <>
      <SectionOne />
      <SectionTwo />
      <SectionCards />
      <SectionThirt />
      <SectionFour />
      <SectionCheckCard />
      <SectionFAQ />
      <SectionCarousel />
      <SectionCollege />
    </>
  );
}

export default InscrevaSe;
