// src/lib/projectsData.jsx

// Winchester Heights Images
import Winchester1 from '../assets/images/Wincherster1.jpg';
import Winchester2 from '../assets/images/Wincherster2.jpg';
import Winchester3 from '../assets/images/Wincherster3.jpg';
import Winchester4 from '../assets/images/Wincherster4.jpg';
import Winchester5 from '../assets/images/Wincherster5.jpg';

// Kaelo Student Rez Images
import Kaelo1 from '../assets/images/kaelo1.jpg';
import Kaelo2 from '../assets/images/kaelo2.jpg';
import Kaelo3 from '../assets/images/kaelo3.jpg';
import Kaelo4 from '../assets/images/kaelo4.jpg';
import Kaelo5 from '../assets/images/kaelo5.jpg';

// Varsity Living Images
import Varsity1 from '../assets/images/varsity1.jpg';
import Varsity2 from '../assets/images/varsity2.jpg';
import Varsity3 from '../assets/images/varsity3.jpg';
import Varsity4 from '../assets/images/varsity4.jpg';
import Varsity5 from '../assets/images/varsity5.jpg';

// Thuto Residence Images
import Thuto1 from '../assets/images/thuto1.jpeg';
import Thuto2 from '../assets/images/thuto2.jpeg';
import Thuto3 from '../assets/images/thuto3.jpeg';
import Thuto4 from '../assets/images/thuto4.png';
import Thuto5 from '../assets/images/thuto5.jpeg';

// Elnita 2 Images
import Elnita1 from '../assets/images/Elnita1.jpg';
import Elnita2 from '../assets/images/Elnita2.jpg';
import Elnita3 from '../assets/images/Elnita3.jpg';
import Elnita4 from '../assets/images/Elnita4.jpg';
import Elnita5 from '../assets/images/Elnita5.jpg';

// 125 Village Hub Images
import Village1 from '../assets/images/village1.jpg';
import Village2 from '../assets/images/village2.jpg';
import Village3 from '../assets/images/village3.jpg';
import Village4 from '../assets/images/village4.jpg';
import Village5 from '../assets/images/village5.jpg';

// The Celestial Images
import Celestial1 from '../assets/images/Celestial1.jpg';
import Celestial2 from '../assets/images/Celestial2.jpg';
import Celestial3 from '../assets/images/Celestial3.jpg';
import Celestial4 from '../assets/images/Celestial4.jpg';
import Celestial5 from '../assets/images/Celestial5.jpg';

// 222 West Images
import West1 from '../assets/images/West1.png';
import West2 from '../assets/images/West2.png';
import West3 from '../assets/images/West3.png';

// Export image arrays for each project
export const winchesterImages = [Winchester1, Winchester2, Winchester3, Winchester4, Winchester5];
export const kaeloImages = [Kaelo1, Kaelo2, Kaelo3, Kaelo4, Kaelo5];
export const varsityImages = [Varsity1, Varsity2, Varsity3, Varsity4, Varsity5];
export const thutoImages = [Thuto1, Thuto2, Thuto3, Thuto4, Thuto5];
export const elnitaImages = [Elnita1, Elnita2, Elnita3, Elnita4, Elnita5];
export const hubImages = [Village1, Village2, Village3, Village4, Village5];
export const celestialImages = [Celestial1, Celestial2, Celestial3, Celestial4, Celestial5];
export const westImages = [West1, West2, West3];

export const projectsData = [
  {
    slug: 'winchester-heights',
    title: 'Winchester Heights',
    location: 'Johannesburg, South Africa',
    category: 'Student Accommodation',
    status: 'Completed',
    description: 'A premium student accommodation development in the heart of Johannesburg, offering modern living spaces designed for academic excellence and community building.',
    details: {
      units: '120 Units',
      sqm: '4,800 m²',
      year: '2022',
      value: 'R45 Million',
    },
    image: Winchester1,
    gallery: winchesterImages,
  },
  {
    slug: 'kaelo-student-rez',
    title: 'Kaelo Student Rez',
    location: 'Johannesburg, South Africa',
    category: 'Student Accommodation',
    status: 'Completed',
    description: 'Contemporary student residence featuring cutting-edge amenities, study facilities, and communal spaces designed to foster an environment of academic achievement.',
    details: {
      units: '200 Units',
      sqm: '6,200 m²',
      year: '2023',
      value: 'R65 Million',
    },
    image: Kaelo1,
    gallery: kaeloImages,
  },
  {
    slug: 'varsity-living',
    title: 'Varsity Living',
    location: 'Johannesburg, South Africa',
    category: 'Student Accommodation',
    status: 'Completed',
    description: 'Purpose-built student living complex offering a holistic residential experience with integrated study areas, recreation facilities, and secure access.',
    details: {
      units: '180 Units',
      sqm: '5,400 m²',
      year: '2023',
      value: 'R55 Million',
    },
    image: Varsity1,
    gallery: varsityImages,
  },
  {
    slug: 'thuto-residence',
    title: 'Thuto Residence',
    location: 'Soshanguve, South Africa',
    category: 'Student Accommodation',
    status: 'Completed',
    description: 'A modern 540-bed student accommodation facility located within 1.5km of TUT main campus, featuring technology-equipped rooms and contemporary communal spaces.',
    details: {
      units: '540 Beds',
      sqm: '8,500 m²',
      year: '2022',
      value: 'R80 Million',
    },
    image: Thuto1,
    gallery: thutoImages,
  },
  {
    slug: 'elnita-2',
    title: 'Elnita 2',
    location: 'Pretoria, South Africa',
    category: 'Residential',
    status: 'Completed',
    description: 'A sophisticated residential development offering premium apartments with modern finishes, secure living, and convenient urban access in Pretoria.',
    details: {
      units: '48 Units',
      sqm: '3,200 m²',
      year: '2023',
      value: 'R35 Million',
    },
    image: Elnita1,
    gallery: elnitaImages,
  },
  {
    slug: '125-village-hub',
    title: '125 Village Hub',
    location: 'Pretoria, South Africa',
    category: 'Mixed Use',
    status: 'In Progress',
    description: 'A vibrant mixed-use development combining retail, commercial, and residential spaces to create a self-sustaining urban village in the heart of Pretoria.',
    details: {
      units: '80 Units',
      sqm: '12,000 m²',
      year: '2025',
      value: 'R120 Million',
    },
    image: Village1,
    gallery: hubImages,
  },
  {
    slug: 'the-celestial',
    title: 'The Celestial',
    location: 'Pretoria, South Africa',
    category: 'Mixed Use',
    status: 'In Progress',
    description: 'An iconic mixed-use tower featuring luxury apartments, premium office space, and ground-floor retail, setting a new standard for urban development in Pretoria.',
    details: {
      units: '150 Units',
      sqm: '18,000 m²',
      year: '2026',
      value: 'R200 Million',
    },
    image: Celestial1,
    gallery: celestialImages,
  },
  {
    slug: '222-west',
    title: '222 West',
    location: 'Pretoria, South Africa',
    category: 'Residential',
    status: 'In Progress',
    description: 'A landmark residential development featuring contemporary architecture, premium finishes, and panoramic city views from every unit.',
    details: {
      units: '96 Units',
      sqm: '7,800 m²',
      year: '2025',
      value: 'R90 Million',
    },
    image: West1,
    gallery: westImages,
  },
];

// Also update investments to use local images
import CelestialImage from '../assets/images/Celestial1.jpg';
import HubImage from '../assets/images/village1.jpg';
import WestImage from '../assets/images/West1.png';
import ThutoImage from '../assets/images/Thuto1.jpeg';

export const investments = [
  {
    id: 1,
    title: 'The Celestial Tower',
    location: 'Pretoria, South Africa',
    category: 'Mixed Use Development',
    minInvestment: 'R500,000',
    expectedReturn: '14% IRR',
    term: '36 Months',
    status: 'Open',
    description: 'An iconic mixed-use development featuring luxury apartments, premium office space, and high-traffic retail. Prime location with strong projected capital appreciation.',
    image: CelestialImage,
  },
  {
    id: 2,
    title: '125 Village Hub',
    location: 'Pretoria, South Africa',
    category: 'Mixed Use Development',
    minInvestment: 'R250,000',
    expectedReturn: '12% IRR',
    term: '24 Months',
    status: 'Open',
    description: 'A vibrant urban village concept combining retail, residential, and commercial spaces. Strategic location with high foot traffic and growing demand.',
    image: HubImage,
  },
  {
    id: 3,
    title: '222 West Residences',
    location: 'Pretoria, South Africa',
    category: 'Residential',
    minInvestment: 'R350,000',
    expectedReturn: '11% IRR',
    term: '30 Months',
    status: 'Coming Soon',
    description: 'Premium residential development in a high-demand area. Contemporary design with panoramic views and strong rental yield potential.',
    image: WestImage,
  },
  {
    id: 4,
    title: 'Student Living Portfolio',
    location: 'Gauteng, South Africa',
    category: 'Student Accommodation',
    minInvestment: 'R200,000',
    expectedReturn: '16% IRR',
    term: '24 Months',
    status: 'Open',
    description: 'Diversified student accommodation portfolio near major universities. High occupancy rates with consistent rental income and government-backed demand.',
    image: ThutoImage,
  },
];

export const services = [
  {
    title: 'Architecture & Design',
    description: 'Visionary architectural design that merges aesthetic excellence with functional precision. From concept to completion, we craft spaces that inspire.',
    icon: 'Compass',
  },
  {
    title: 'Property Development',
    description: 'End-to-end property development services, transforming undeveloped land into thriving residential, commercial, and mixed-use developments.',
    icon: 'Building2',
  },
  {
    title: 'Construction Management',
    description: 'Expert construction management ensuring projects are delivered on time, within budget, and to the highest quality standards.',
    icon: 'Hammer',
  },
  {
    title: 'Investment Advisory',
    description: 'Strategic property investment consulting for high-net-worth individuals and institutional investors seeking premium returns in African real estate.',
    icon: 'TrendingUp',
  },
  {
    title: 'Student Accommodation',
    description: 'Purpose-built student accommodation (PBSA) development near major universities, addressing critical housing demand with modern, tech-enabled facilities.',
    icon: 'GraduationCap',
  },
  {
    title: 'Project Management',
    description: 'Comprehensive project management from feasibility studies through to handover, ensuring seamless execution of complex developments.',
    icon: 'ClipboardCheck',
  },
];

// Export projects as alias for convenience
export const projects = projectsData;