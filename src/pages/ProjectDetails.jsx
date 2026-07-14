import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, MapPin, Calendar, Ruler, DollarSign, ChevronRight, Building2, Users, ParkingSquare } from 'lucide-react';
import { motion } from 'framer-motion';

// Import project images
import Varsity1 from '../assets/images/Varsity1.jpg';
import Thuto1 from '../assets/images/Thuto1.jpeg';
import Celestial1 from '../assets/images/Celestial1.jpg';
import Kaelo1 from '../assets/images/kaelo1.jpg';


// Real Ga-Rankuwa renders (from Mr Sthole's MUMA/OTL Group/BukhoBuhle Architects documents)
import GaRankuwaResidential1 from '../assets/images/ga-rankuwa-residential-1.jpg';
import GaRankuwaResidential2 from '../assets/images/ga-rankuwa-residential-2.jpg';
import GaRankuwaStudentAccommodation1 from '../assets/images/ga-rankuwa-student-accommodation-1.jpg';
import GaRankuwaStudentAccommodation2 from '../assets/images/ga-rankuwa-student-accommodation-2.jpg';
import GaRankuwaStudentAccommodation3 from '../assets/images/ga-rankuwa-student-accommodation-3.jpg';

// Complete Projects Data with new projects from documents
const projectsData = [
  // Existing Projects
  {
    slug: 'varsity-living',
    title: 'Varsity Living',
    category: 'Property Management',
    location: 'Pretoria, South Africa',
    status: 'Completed',
    type: 'BeMore Project',
    image: Varsity1,
    description: 'A premium student accommodation development designed for security, comfort, and modern living. Varsity Living provides high-quality housing for students in close proximity to major universities.',
    details: {
      sqm: '2,500m²',
      year: '2021',
      value: 'R45M',
      units: '120 Beds',
    },
    gallery: [Varsity1],
  },
  {
    slug: 'thuto-residence',
    title: 'Thuto Residence',
    category: 'Property Management',
    location: 'Pretoria, South Africa',
    status: 'Completed',
    type: 'BeMore Project',
    image: Thuto1,
    description: 'Thuto Residence offers purpose-built student accommodation with modern amenities, secure access, and a conducive environment for academic success.',
    details: {
      sqm: '3,200m²',
      year: '2022',
      value: 'R55M',
      units: '150 Beds',
    },
    gallery: [Thuto1],
  },
  {
    slug: 'the-celestial',
    title: 'The Celestial',
    category: 'Mixed Use',
    location: 'Pretoria, South Africa',
    status: 'Completed',
    type: 'BeMore Project',
    image: Celestial1,
    description: 'A landmark mixed-use development combining residential, commercial, and retail spaces in the heart of Pretoria. The Celestial redefines urban living with its modern design and strategic location.',
    details: {
      sqm: '8,500m²',
      year: '2023',
      value: 'R120M',
      units: '48 Units',
    },
    gallery: [Celestial1,],
  },
  {
    slug: 'kaelo-student-rez',
    title: 'Kaelo Student Rez',
    category: 'Property Management',
    location: 'Pretoria, South Africa',
    status: 'Completed',
    type: 'BeMore Project',
    image: Kaelo1,
    description: 'Kaelo Student Rez is a modern student accommodation facility offering comfortable living spaces, study areas, and recreational facilities for students.',
    details: {
      sqm: '2,800m²',
      year: '2023',
      value: 'R50M',
      units: '100 Beds',
    },
    gallery: [Kaelo1],
  },
  
  // Ga-Rankuwa Developments (Erf 3782 & Erf 2903) — real specs from MUMA/OTL Group/BukhoBuhle Architects documents
  {
    slug: 'ga-rankuwa-residential',
    title: 'Ga-Rankuwa Residential Development',
    category: 'Residential',
    location: 'Ga-Rankuwa Unit 9, Pretoria (Erf 3782)',
    status: 'Ongoing',
    type: 'BeMore Project',
    image: GaRankuwaResidential1,
    description: 'A residential development on Erf 3782, Ga-Rankuwa Unit 9, comprising 24 units across four floors with a guard house and dedicated parking. Designed to provide quality, secure living spaces in the growing Ga-Rankuwa area.',
    details: {
      sqm: '1,287m²',
      year: '2025',
      value: 'R65M',
      units: '120 Beds',
      coverage: '33%',
      parking: '12 Bays',
      height: '4 Storeys',
    },
    gallery: [GaRankuwaResidential1, GaRankuwaResidential2],
  },
  {
    slug: 'ga-rankuwa-student-accommodation',
    title: 'Ga-Rankuwa Student Accommodation',
    category: 'Student Housing',
    location: 'Ga-Rankuwa Unit 9, Pretoria (Erf 2903)',
    status: 'Ongoing',
    type: 'BeMore Project',
    image: GaRankuwaStudentAccommodation1,
    description: 'A purpose-built student accommodation development on Erf 2903, Ga-Rankuwa Unit 9, with 60 units providing 300 beds across four floors. Includes communal areas, a shop, and modern facilities designed for student living and academic success.',
    details: {
      sqm: '3,650m²',
      year: '2025',
      value: 'R85M',
      units: '300 Beds',
      coverage: '41%',
      parking: '17 Bays',
      height: '4 Storeys',
    },
    gallery: [GaRankuwaStudentAccommodation1, GaRankuwaStudentAccommodation2, GaRankuwaStudentAccommodation3],
  },
  
  // Partner Projects
  {
    slug: 'partner-student-housing',
    title: 'Student Housing Development',
    category: 'Property Management',
    location: 'Johannesburg, South Africa',
    status: 'Completed',
    type: 'Partner Project',
    image: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?w=800&h=600&fit=crop',
    description: 'A collaboration project delivering quality student housing in Johannesburg. This development showcases BeMore Properties\' ability to partner and deliver exceptional results.',
    details: {
      sqm: '4,200m²',
      year: '2023',
      value: 'R70M',
      units: '180 Beds',
    },
    gallery: [
      'https://images.unsplash.com/photo-1554995207-c18c203602cb?w=800&h=600&fit=crop',
    ],
  },
  {
    slug: 'partner-mixed-use',
    title: 'Mixed Use Complex',
    category: 'Mixed Use',
    location: 'Cape Town, South Africa',
    status: 'Ongoing',
    type: 'Partner Project',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&h=600&fit=crop',
    description: 'A mixed-use development in Cape Town combining residential, retail, and office spaces. This project demonstrates BeMore Properties\' expertise in complex urban developments.',
    details: {
      sqm: '12,000m²',
      year: '2025',
      value: 'R200M',
      units: '80 Units',
    },
    gallery: [
      'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&h=600&fit=crop',
    ],
  },
  {
    slug: 'partner-residential',
    title: 'Residential Estate',
    category: 'Property Management',
    location: 'Durban, South Africa',
    status: 'Completed',
    type: 'Partner Project',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop',
    description: 'A premium residential estate development in Durban, featuring modern homes with stunning views and world-class amenities.',
    details: {
      sqm: '15,000m²',
      year: '2024',
      value: 'R150M',
      units: '60 Units',
    },
    gallery: [
      'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop',
    ],
  },
];

// Animated Section Component
const AnimatedSection = ({ children, delay = 0, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    viewport={{ once: true }}
    className={className}
  >
    {children}
  </motion.div>
);

// Section Label Component
const SectionLabel = ({ children }) => (
  <div className="flex items-center gap-4 mb-4">
    <div className="w-8 h-px bg-yellow-600" />
    <span className="text-[11px] tracking-[0.3em] uppercase text-yellow-600 font-body">
      {children}
    </span>
  </div>
);

// Glass Card Component
const GlassCard = ({ children, className = "" }) => (
  <div className={`bg-white/5 backdrop-blur-sm border border-yellow-600/10 rounded-lg ${className}`}>
    {children}
  </div>
);

// Badge Component
const Badge = ({ children, className = "" }) => (
  <span className={`px-3 py-1 text-[10px] tracking-wider uppercase rounded-full ${className}`}>
    {children}
  </span>
);

export default function ProjectDetails() {
  const { slug } = useParams();
  const project = projectsData.find(p => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center px-[5vw] bg-black">
        <div className="text-center">
          <h1 className="font-display text-4xl text-white mb-4">Project Not Found</h1>
          <Link to="/projects" className="text-yellow-600 hover:underline">Back to Projects</Link>
        </div>
      </div>
    );
  }

  const specItems = [
    { icon: MapPin, label: 'Location', value: project.location },
    { icon: Ruler, label: 'Total Area', value: project.details?.sqm || 'N/A' },
    { icon: Calendar, label: 'Year', value: project.details?.year || 'N/A' },
    { icon: DollarSign, label: 'Project Value', value: project.details?.value || 'N/A' },
  ];

  // Additional specs for new projects
  const extraSpecs = [];
  if (project.details?.coverage) {
    extraSpecs.push({ icon: Building2, label: 'Coverage', value: project.details.coverage });
  }
  if (project.details?.parking) {
    extraSpecs.push({ icon: ParkingSquare, label: 'Parking', value: project.details.parking });
  }
  if (project.details?.height) {
    extraSpecs.push({ icon: Building2, label: 'Height', value: project.details.height });
  }

  return (
    <div className="bg-black">
      {/* Hero Image */}
      <section className="relative h-[80vh] min-h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/20" />
        </div>
        <div className="relative z-10 h-full flex flex-col justify-end px-[5vw] pb-16">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-yellow-600/70 hover:text-yellow-600 text-sm mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Projects
            </Link>
            <div className="flex items-center gap-3 mb-4 flex-wrap">
              <Badge className={project.status === 'Completed'
                ? 'bg-emerald-600 text-white'
                : project.status === 'Ongoing'
                ? 'bg-yellow-600 text-black'
                : 'bg-blue-600 text-white'
              }>
                {project.status}
              </Badge>
              <Badge className="bg-white/10 text-white/80 border border-white/10">
                {project.type || 'BeMore Project'}
              </Badge>
              <span className="text-[11px] tracking-[0.2em] uppercase text-yellow-600/60">{project.category}</span>
            </div>
            <h1 className="font-display text-5xl sm:text-7xl font-light text-white">{project.title}</h1>
            <div className="flex items-center gap-2 mt-4 text-white/60">
              <MapPin className="w-4 h-4 text-yellow-600" />
              <span>{project.location}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Specification Grid */}
      <section className="py-12 px-[5vw] border-b border-yellow-600/10 bg-gray-900/30">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {specItems.map((item, i) => (
            <AnimatedSection key={item.label} delay={i * 0.1}>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-yellow-600/10 flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 text-yellow-600" />
                </div>
                <div>
                  <p className="text-[10px] tracking-[0.2em] uppercase text-white/40 mb-1">{item.label}</p>
                  <p className="text-lg font-display text-white">{item.value}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
        {extraSpecs.length > 0 && (
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 mt-6 pt-6 border-t border-yellow-600/10">
            {extraSpecs.map((item, i) => (
              <AnimatedSection key={item.label} delay={i * 0.1}>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-yellow-600/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-yellow-600" />
                  </div>
                  <div>
                    <p className="text-[10px] tracking-[0.2em] uppercase text-white/40 mb-1">{item.label}</p>
                    <p className="text-lg font-display text-white">{item.value}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        )}
      </section>

      {/* Description + Units */}
      <section className="py-24 px-[5vw]">
        <div className="grid lg:grid-cols-3 gap-16">
          <AnimatedSection className="lg:col-span-2">
            <SectionLabel>Overview</SectionLabel>
            <h2 className="font-display text-3xl font-light text-white mb-6">About This Development</h2>
            <p className="text-white/60 leading-relaxed text-lg">{project.description}</p>
            <div className="mt-8">
              <GlassCard className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-lg bg-yellow-600/10 flex items-center justify-center">
                    <span className="font-display text-2xl text-yellow-600">
                      {project.details?.units?.split(' ')[0] || 'N/A'}
                    </span>
                  </div>
                  <div>
                    <p className="text-white font-display text-lg">
                      Total {project.details?.units?.split(' ')[1] || 'Units'}
                    </p>
                    <p className="text-sm text-white/40">
                      Across {project.details?.sqm || 'N/A'} of developed space
                    </p>
                  </div>
                </div>
              </GlassCard>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <SectionLabel>Quick Actions</SectionLabel>
            <div className="space-y-4 mt-6">
              <Link
                to="/contact"
                className="flex items-center justify-between p-4 bg-yellow-600 text-black hover:bg-yellow-500 transition-colors group rounded-lg"
              >
                <span className="text-[13px] tracking-[0.1em] uppercase font-medium">Enquire About This Project</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="flex items-center justify-between p-4 border border-yellow-600/30 text-yellow-600 hover:bg-yellow-600/5 transition-colors group rounded-lg"
              >
                <span className="text-[13px] tracking-[0.1em] uppercase">Schedule Consultation</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Gallery */}
      {project.gallery && project.gallery.length > 0 && (
        <section className="py-16 px-[5vw] border-t border-yellow-600/10">
          <AnimatedSection>
            <SectionLabel>Gallery</SectionLabel>
            <h2 className="font-display text-3xl font-light text-white mb-8">Project Images</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {project.gallery.map((img, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <img
                  src={img}
                  alt={`${project.title} gallery ${i + 1}`}
                  className="w-full aspect-video object-cover rounded-lg hover:scale-[1.02] transition-transform duration-500"
                />
              </AnimatedSection>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}