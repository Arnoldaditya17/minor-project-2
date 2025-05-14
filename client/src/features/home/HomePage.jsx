import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const HomePage = () => {
  return (
    
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        interval={2000}
      >
        <div className="w-full h-50 rounded-md">
          <img
            src="./src/assets/images/WhatsApp Image 2025-05-14 at 13.10.41.jpeg"
            alt="Slide 1"
            className="object-cover w-full h-full"
          />
          <p className="legend">Explore latest technology</p>
        </div>
        <div className="w-full h-screen">
          <img
            src="https://media.istockphoto.com/id/1961399015/photo/medical-technology-doctor-use-ai-robots-for-diagnosis-care-and-increasing-accuracy-patient.jpg?s=612x612&w=0&k=20&c=V5W7NpDm70Fpo89NUPraIJwTmj7qGL1FwaVLaDnbYXk="
            alt="Slide 2"
            className="object-cover w-full h-full"
          />
          <p className="legend">Experience nature's beauty</p>
        </div>
        <div className="w-full h-screen">
          <img
            src="https://media.istockphoto.com/id/1353357410/photo/unrecognizable-head-nurse-doctor-surgeon-uses-digital-tablet-computer-health-care-vitals.jpg?s=612x612&w=0&k=20&c=11rJ26jRYVYsL68rd-Pt_rX0YLoAe6rd6C-2gJna_dc="
            alt="Slide 3"
            className="object-cover w-full h-full"
          />
          <p className="legend">Level up your coding skills</p>
        </div>
      </Carousel>
  );
};

export default HomePage;
