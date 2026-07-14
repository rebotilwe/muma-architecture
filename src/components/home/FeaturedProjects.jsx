import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, User } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionLabel from '@/components/ui/SectionLabel';

// Temporary placeholder data until images are provided
const teamMembersData = [
  {
    id: 1,
    name: 'John Doe',
    role: 'CEO & Founder',
    bio: 'Over 20 years of experience in property development and consulting.',
    image: null // Will be replaced with actual image
  },
  {
    id: 2,
    name: 'Jane Smith',
    role: 'Head of Project Management',
    bio: 'Expert in delivering large-scale developments on time and within budget.',
    image: null
  },
  {
    id: 3,
    name: 'Mike Johnson',
    role: 'Senior Development Consultant',
    bio: 'Specializes in feasibility studies and property valuation.',
    image: null
  },
  {
    id: 4,
    name: 'Sarah Williams',
    role: 'Architectural Lead',
    bio: 'Passionate about sustainable and innovative design solutions.',
    image: null
  }
];

// Team Member Card Component
const TeamMemberCard = ({ member, index }) => {
  return (
    <div className="group bg-gray-900/50 border border-gray-800 hover:border-yellow-600/30 rounded-lg overflow-hidden transition-all duration-300 hover:transform hover:-translate-y-1">
      <div className="aspect-[4/3] bg-gray-800 flex items-center justify-center relative overflow-hidden">
        {member.image ? (
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover"
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
        <p className="text-gray-400 text-sm leading-relaxed">
          {member.bio}
        </p>
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
  const teamMembers = teamMembersData.slice(0, 4);

  return (
    <section className="py-24 px-[5vw]">
      <AnimatedSectionWrapper>
        <SectionLabel>Our Team</SectionLabel>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <h2 className="font-display text-4xl sm:text-5xl font-light text-alabaster">
            Meet Our Team
          </h2>
          <Link
            to="/about"
            className="flex items-center gap-2 text-gold text-sm tracking-wider uppercase hover:gap-4 transition-all duration-300"
          >
            View All
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </AnimatedSectionWrapper>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {teamMembers.map((member, i) => (
          <AnimatedSectionWrapper key={member.id} delay={i * 0.1}>
            <TeamMemberCard member={member} index={i} />
          </AnimatedSectionWrapper>
        ))}
      </div>
    </section>
  );
}