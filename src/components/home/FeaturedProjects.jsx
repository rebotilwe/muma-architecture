import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, User } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionLabel from '@/components/ui/SectionLabel';

// Team photos
import KabeloSitholeImg from '../../assets/images/kabelo.jpeg';
import MphoMunyaiImg from '../../assets/images/mpho.jpg';
import SelmaPhofaImg from '../../assets/images/selma.jpg';
import VictorMoagiImg from '../../assets/images/victor.jpg';
import DandyMatamelaImg from '../../assets/images/dandy.jpg';
import DollyChiloaneImg from '../../assets/images/dolly.jpg';
import Rudolf from '../../assets/images/rudolf.jpeg';

const teamMembersData = [
  {
    id: 1,
    name: 'Dandy Matamela',
    role: 'Founder & Group CEO',
    bio: 'Registered professional architect and strategic property developer with over 15 years of experience, having led the design, structuring, and execution of over 1,000 student and affordable housing beds.',
    image: DandyMatamelaImg,
  },
  {
    id: 2,
    name: 'Kabelo Sithole',
    role: 'Chief Operating Officer',
    bio: 'Oversees program execution, interdepartmental coordination, and delivery alignment across BeMore\u2019s active and pipeline projects.',
    image: KabeloSitholeImg,
  },
  {
    id: 3,
    name: 'Selma Phofa',
    role: 'Head of Property Management',
    bio: 'Leads property management systems with over 15 years in operations, managing a 1,472-bed portfolio.',
    image: SelmaPhofaImg,
  },
  {
    id: 4,
    name: 'Dolly Chiloane',
    role: 'HR & Compliance Lead',
    bio: 'Manages HR policy and onboarding, with 5+ years in property development and sales.',
    image: DollyChiloaneImg,
  },
  {
    id: 5,
    name: 'Rudolf Mokolo',
    role: 'Business Development Lead',
    bio: 'Professional Town Planner driving partnerships, project packaging, and stakeholder engagement, with 5+ years in property development.',
    image: Rudolf,
    imagePosition: 'center 20%',
  },
  {
    id: 6,
    name: 'Gcinile Luvuno',
    role: 'Personal Assistant to the CEO',
    bio: 'Supports the Founder and CEO across scheduling, coordination, and day-to-day operations.',
    image: null,
  },
  {
    id: 7,
    name: 'Mpho Munyai',
    role: 'Architect',
    // Draft bio only — no specifics (experience, focus area, qualifications) confirmed yet.
    // Replace with real details once Mr Sthole provides them.
    bio: 'Part of BeMore\u2019s architecture team, contributing to the design and technical execution of the group\u2019s residential and student accommodation developments.',
    image: MphoMunyaiImg,
  },
  {
    id: 8,
    name: 'Victor Moagi',
    role: 'Architect',
    // Draft bio only — no specifics (experience, focus area, qualifications) confirmed yet.
    // Replace with real details once Mr Sthole provides them.
    bio: 'Part of BeMore\u2019s architecture team, contributing to the design and technical execution of the group\u2019s residential and student accommodation developments.',
    image: VictorMoagiImg,
  },
];

const TeamMemberCard = ({ member }) => {
  return (
    <div className="group bg-gray-900/50 border border-gray-800 hover:border-yellow-600/30 rounded-lg overflow-hidden transition-all duration-300 hover:transform hover:-translate-y-1">
      <div className="aspect-[4/3] bg-gray-800 flex items-center justify-center relative overflow-hidden">
        {member.image ? (
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover"
            style={{ objectPosition: member.imagePosition || 'top' }}
          />
        ) : (
          <div className="flex flex-col items-center justify-center text-gray-600">
            <User className="w-16 h-16 mb-2" />
            <span className="text-xs tracking-wider uppercase">Photo Coming Soon</span>
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="font-display text-xl font-light text-white mb-1">
          {member.name}
        </h3>
        <p className="text-yellow-600 text-sm tracking-wider uppercase mb-3">
          {member.role}
        </p>
        {member.bio && (
          <p className="text-gray-400 text-sm leading-relaxed">
            {member.bio}
          </p>
        )}
      </div>
    </div>
  );
};

const AnimatedSectionWrapper = ({ children, delay = 0 }) => (
  <AnimatedSection delay={delay}>
    {children}
  </AnimatedSection>
);

export default function TeamMembers() {
  return (
    <section className="py-24 px-[5vw]">
      <AnimatedSectionWrapper>
        <SectionLabel>Our Team</SectionLabel>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <h2 className="font-display text-4xl sm:text-5xl font-light text-alabaster">
            Meet Our Team
          </h2>
          {/* <Link
            to="/about"
            className="flex items-center gap-2 text-gold text-sm tracking-wider uppercase hover:gap-4 transition-all duration-300"
          >
            View All
            <ArrowRight className="w-4 h-4" />
          </Link> */}
        </div>
      </AnimatedSectionWrapper>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {teamMembersData.map((member, i) => (
          <AnimatedSectionWrapper key={member.id} delay={i * 0.1}>
            <TeamMemberCard member={member} />
          </AnimatedSectionWrapper>
        ))}
      </div>
    </section>
  );
}