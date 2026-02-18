export const company = {
  name: 'SIRAAT OUTSOURCING PVT LTD',
  shortName: 'SIRAAT',
  tagline: 'Empowering Businesses Through Strategic Outsourcing',
  description:
    'We are a leading outsourcing company dedicated to helping businesses scale efficiently by providing top-tier IT, BPO, and consulting services. With a commitment to excellence, we bridge the gap between talent and opportunity.',
  founded: '2020',
  employees: '500+',
  clients: '150+',
  countries: '12+',
};

export const navigation = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Contact Us', path: '/contact' },
  { label: 'Career', path: '/career' },
];

export const heroSection = {
  headline: 'Your Trusted Partner in Outsourcing Excellence',
  subheadline:
    'We deliver world-class outsourcing solutions that drive growth, reduce costs, and transform the way you do business.',
  primaryCta: 'Get Started',
  secondaryCta: 'Learn More',
};

export const services = [
  {
    title: 'IT Outsourcing',
    description:
      'Custom software development, cloud solutions, and IT infrastructure management tailored to your business needs.',
    icon: '💻',
  },
  {
    title: 'Business Process Outsourcing',
    description:
      'Streamline your operations with our comprehensive BPO services including customer support, data entry, and back-office operations.',
    icon: '⚙️',
  },
  {
    title: 'Staff Augmentation',
    description:
      'Scale your team with pre-vetted professionals who integrate seamlessly into your existing workflows and culture.',
    icon: '👥',
  },
  {
    title: 'Consulting Services',
    description:
      'Strategic guidance to optimize your business processes, technology adoption, and digital transformation journey.',
    icon: '📊',
  },
];

export const companyOverview = {
  title: 'Why Choose Siraat?',
  description:
    'At Siraat Outsourcing, we combine industry expertise with innovative solutions to deliver measurable results. Our client-centric approach ensures that every engagement is tailored to meet your unique business objectives.',
  stats: [
    { value: company.employees, label: 'Professionals' },
    { value: company.clients, label: 'Happy Clients' },
    { value: company.countries, label: 'Countries Served' },
    { value: '99%', label: 'Client Retention' },
  ],
};

export const aboutPage = {
  hero: {
    title: 'About Us',
    subtitle: 'Building partnerships that drive success since ' + company.founded,
  },
  story: {
    title: 'Our Story',
    paragraphs: [
      'Founded in ' +
        company.founded +
        ', Siraat Outsourcing Pvt Ltd was born from a vision to bridge the gap between global businesses and exceptional talent. What started as a small team of dedicated professionals has grown into a full-service outsourcing powerhouse.',
      'Our journey has been defined by a relentless pursuit of excellence, a commitment to innovation, and an unwavering focus on client success. Today, we serve clients across ' +
        company.countries +
        ' countries, delivering solutions that transform businesses.',
      'We believe that outsourcing is not just about cost savings — it is about unlocking potential, driving efficiency, and creating lasting value for our clients and their customers.',
    ],
  },
  mission: {
    title: 'Our Mission',
    text: 'To empower businesses worldwide by delivering innovative, reliable, and cost-effective outsourcing solutions that drive sustainable growth and operational excellence.',
  },
  vision: {
    title: 'Our Vision',
    text: 'To be the most trusted global outsourcing partner, recognized for transforming businesses through exceptional talent, cutting-edge technology, and unwavering commitment to quality.',
  },
  values: [
    { title: 'Excellence', description: 'We strive for the highest standards in everything we do.' },
    { title: 'Integrity', description: 'We build relationships on trust, transparency, and honesty.' },
    { title: 'Innovation', description: 'We embrace change and continuously seek better solutions.' },
    { title: 'Collaboration', description: 'We believe in the power of teamwork and partnership.' },
  ],
  team: [
    { name: 'HAJI MUHAMMAD SALEEM', role: 'CEO & Founder', bio: 'Visionary leader with 15+ years in outsourcing.' },
    { name: 'SYED ATHER ALI SHAH', role: 'COO', bio: 'Operations expert driving efficiency and scale.' },
    { name: 'SIRAJ UDDIN', role: 'CTO', bio: 'Tech innovator building next-gen solutions.' },
    { name: 'MUHAMMAD ARIF', role: 'VP of Client Success', bio: 'Passionate about delivering exceptional client experiences.' },
  ],
};

export const contactPage = {
  hero: {
    title: 'Contact Us',
    subtitle: 'Get in touch — we would love to hear from you',
  },
  info: {
    address: 'Opposit Nadra office Salman Tower Office NO 206 Malir Karachi',
    phone: '+92 344 3941457',
    email: 'info@siraat.com',
    hours: 'Monday - Friday: 9:00 AM - 6:00 PM IST',
  },
  form: {
    title: 'Send Us a Message',
    namePlaceholder: 'Your Full Name',
    emailPlaceholder: 'your.email@example.com',
    subjectPlaceholder: 'How can we help?',
    messagePlaceholder: 'Tell us about your project or inquiry...',
    submitLabel: 'Send Message',
  },
};

export const careerPage = {
  hero: {
    title: 'Career',
    subtitle: 'Join our team and build the future of outsourcing',
  },
  whyWork: {
    title: 'Why Work With Us?',
    benefits: [
      { title: 'Growth Opportunities', description: 'Accelerate your career with continuous learning and mentorship programs.' },
      { title: 'Work-Life Balance', description: 'Flexible schedules and remote work options to support your well-being.' },
      { title: 'Competitive Compensation', description: 'Industry-leading salaries, bonuses, and comprehensive benefits packages.' },
      { title: 'Collaborative Culture', description: 'Work alongside talented professionals in an inclusive, supportive environment.' },
      { title: 'Cutting-Edge Projects', description: 'Work on exciting projects with the latest technologies and global clients.' },
      { title: 'Health & Wellness', description: 'Comprehensive health insurance and wellness programs for you and your family.' },
    ],
  },
  positions: [
    {
      title: 'Senior Full-Stack Developer',
      department: 'Engineering',
      location: 'Noida / Remote',
      type: 'Full-Time',
      description: 'Build scalable web applications using React, Node.js, and cloud technologies.',
    },
    {
      title: 'Project Manager',
      department: 'Operations',
      location: 'Noida',
      type: 'Full-Time',
      description: 'Lead cross-functional teams to deliver client projects on time and within budget.',
    },
    {
      title: 'Business Analyst',
      department: 'Consulting',
      location: 'Noida / Hybrid',
      type: 'Full-Time',
      description: 'Analyze client requirements and translate them into actionable solutions.',
    },
    {
      title: 'Customer Support Specialist',
      department: 'BPO',
      location: 'Malir Karachi',
      type: 'Full-Time',
      description: 'Provide exceptional support to clients across multiple communication channels.',
    },
  ],
  applicationCta: {
    title: "Don't See the Right Role?",
    description:
      "We're always looking for talented individuals. Send us your resume and we'll reach out when a matching opportunity arises.",
    buttonLabel: 'Send Your Resume',
    email: 'careers@siraat.com',
  },
};

export const footer = {
  description:
    'Empowering businesses through strategic outsourcing solutions. Your trusted partner for IT, BPO, and consulting services.',
  quickLinks: navigation,
  contact: {
    address: contactPage.info.address,
    phone: contactPage.info.phone,
    email: contactPage.info.email,
  },
  copyright: `© ${new Date().getFullYear()} ${company.name}. All rights reserved.`,
};
