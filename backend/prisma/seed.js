const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding structural engineering portfolio database...');

  // 1. Seed Admin User
  const hashedPassword = await bcrypt.hash('AdminPassword123!', 10);
  const admin = await prisma.user.upsert({
    where: { email: 'admin@engineering.com' },
    update: {},
    create: {
      email: 'admin@engineering.com',
      name: 'Lemma Techane',
      password: hashedPassword,
      role: 'ADMIN'
    }
  });
  console.log('Admin user created:', admin.email);

  // 2. Seed Default Site Settings
  await prisma.siteSettings.upsert({
    where: { id: 'default' },
    update: {},
    create: {
      id: 'default',
      engineerName: 'Lemma Techane',
      title: 'Senior Structural Engineer, PE, SE',
      heroTagline: 'Precision in Every Structure.',
      heroBio: 'Ensuring structural integrity, seismic safety, and architectural elegance for high-rise towers, infrastructure bridges, and complex commercial developments.',
      introVideoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-architectural-model-of-a-modern-building-41618-large.mp4',
      yearsExp: '14+',
      projectsCount: '180+',
      safetyRecord: '100%',
      clientsCount: '50+',
      email: 'consult@lemma-structural.com',
      phone: '+1 (555) 019-8472',
      officeAddress: 'Suite 400, Iron Building, Metropolis City, NY 10001'
    }
  });

  // 3. Seed Projects
  const projectsData = [
    {
      title: 'Nexus Commercial Tower',
      slug: 'nexus-commercial-tower',
      category: 'Commercial High-Rise',
      location: 'Metropolis Financial District, NY',
      year: '2025',
      client: 'Apex Global Real Estate',
      role: 'Lead Structural Engineer',
      structuralSystem: 'Dual Core Shear Wall & Outrigger Truss System',
      materials: 'C80 High-Strength Concrete, Grade 65 Structural Steel',
      description: 'A 52-story state-of-the-art skyscraper featuring a striking cantilevered glass atrium and high-velocity wind damping systems.',
      challenge: 'High aspect ratio resulting in severe lateral wind drift and complex seismic foundation loads over soft clay strata.',
      engineeringApproach: 'Utilized ETABS wind-tunnel aerodynamic integration, high-performance viscoelastic dampers, and deep drilled shaft caissons extending to bedrock.',
      solution: 'Engineered a perimeter belt truss coupled with post-tensioned floor slabs to maximize interior clear-span space by 35%.',
      result: 'Completed 2 months ahead of schedule, achieving LEED Platinum certification and zero structural vibration compliance issues.',
      imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80',
      softwareUsed: JSON.stringify(['ETABS', 'SAP2000', 'REVIT Structure', 'SAFE', 'RISA-3D']),
      isFeatured: true,
      order: 1
    },
    {
      title: 'Avalon River Suspension Bridge',
      slug: 'avalon-river-bridge',
      category: 'Infrastructure & Bridges',
      location: 'West River County Highway Authority',
      year: '2024',
      client: 'State Transportation Department',
      role: 'Principal Bridge Engineer',
      structuralSystem: 'Steel Cable-Stayed Deck System with Reinforced Concrete Pylons',
      materials: 'Weathering Steel (ASTM A709), Ultra-High Performance Concrete (UHPC)',
      description: 'A 450-meter main span cable-stayed bridge built to replace a century-old vulnerable truss structure while handling 80,000 vehicles daily.',
      challenge: 'Maintaining active traffic flow during construction while adhering to strict environmental water protection regulations.',
      engineeringApproach: 'Implemented incremental launching method for steel deck segments and non-linear dynamic seismic response analysis in SAP2000.',
      solution: 'Designed lightweight orthotropic steel deck plates with lead-rubber seismic isolation bearings at pylon abutments.',
      result: 'Restored vital economic transit corridor with a projected 120-year design life and zero environmental impact citations.',
      imageUrl: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&q=80',
      softwareUsed: JSON.stringify(['SAP2000', 'Midas Civil', 'AutoCAD Structural', 'ANSYS']),
      isFeatured: true,
      order: 2
    },
    {
      title: 'Solaria Cultural Center & Dome',
      slug: 'solaria-cultural-center',
      category: 'Special Structures',
      location: 'San Francisco, CA',
      year: '2025',
      client: 'Civic Arts Foundation',
      role: 'Senior Structural Designer',
      structuralSystem: 'Geodesic Steel Space Frame Dome with Tension Fabric Membrane',
      materials: 'Architectural Glazing, Hollow Structural Sections (HSS), Stainless Steel Nodes',
      description: 'An iconic column-free 80-meter diameter spherical dome serving as an amphitheater and museum auditorium.',
      challenge: 'High seismic acceleration zone combined with irregular asymmetric geometry and heavy snow/wind load combinations.',
      engineeringApproach: 'Conducted finite element geometric non-linear displacement analysis under extreme dynamic earthquake response spectra.',
      solution: 'Engineered node connection pin joints with energy-dissipating yield dampers at foundational ring beams.',
      result: 'Featured in Architectural Record for structural transparency and structural elegance.',
      imageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80',
      softwareUsed: JSON.stringify(['ANSYS', 'Rhino Grasshopper', 'Tekla Structures', 'ETABS']),
      isFeatured: true,
      order: 3
    }
  ];

  for (const proj of projectsData) {
    await prisma.project.upsert({
      where: { slug: proj.slug },
      update: proj,
      create: proj
    });
  }

  // 4. Seed Services
  const servicesData = [
    {
      title: 'Structural Analysis & Engineering Design',
      icon: 'Building2',
      summary: 'Advanced 3D linear and non-linear structural modeling for high-rise, commercial, and industrial facilities.',
      description: 'Comprehensive analysis from concept schematic phase through detailed construction documentation, ensuring structural safety, efficiency, and full building code compliance.',
      features: JSON.stringify([
        'Wind and seismic dynamic response analysis',
        'Gravity load system optimization & foundation design',
        '3D BIM modeling and Tekla structural detailing',
        'Code compliance auditing (IBC, ACI 318, AISC 360, ASCE 7)'
      ]),
      order: 1
    },
    {
      title: 'Reinforced Concrete & Steel Systems',
      icon: 'Layers',
      summary: 'Specialized member detailing and steel connection specification for heavy structural frameworks.',
      description: 'Tailored structural design for reinforced concrete cores, post-tensioned floor systems, composite steel beams, and complex truss geometries.',
      features: JSON.stringify([
        'Post-tensioned slab & beam calculations',
        'Precast concrete structural system design',
        'High-capacity structural steel connection detailing',
        'Material optimization for reduced carbon footprint'
      ]),
      order: 2
    },
    {
      title: 'Seismic Retrofitting & Structural Assessment',
      icon: 'ShieldCheck',
      summary: 'Rigorous structural health evaluations, failure analysis, and earthquake resilience retrofits.',
      description: 'Protecting legacy buildings and heritage structures through non-destructive testing, pushover analysis, and state-of-the-art seismic isolation upgrades.',
      features: JSON.stringify([
        'Non-destructive testing (NDT) & concrete coring analysis',
        'FEMA P-58 seismic performance estimation',
        'Base isolation and fluid viscous damper integration',
        'Structural repair after seismic or blast events'
      ]),
      order: 3
    },
    {
      title: 'Technical Advisory & Peer Review',
      icon: 'Ruler',
      summary: 'Independent third-party peer review and structural cost-optimization consulting for developers.',
      description: 'Providing strategic technical guidance for architects, general contractors, and project owners to eliminate design redundancies and prevent construction delays.',
      features: JSON.stringify([
        'Third-party structural calculation verification',
        'Value engineering and material quantity optimization',
        'Expert witness & forensic structural investigation',
        'Constructability reviews and site quality control'
      ]),
      order: 4
    }
  ];

  for (const srv of servicesData) {
    const existing = await prisma.service.findFirst({ where: { title: srv.title } });
    if (!existing) {
      await prisma.service.create({ data: srv });
    }
  }

  // 5. Seed Testimonials
  const testimonialsData = [
    {
      clientName: 'Sarah Jenkins, AIA',
      clientRole: 'Principal Architect',
      clientCompany: 'ArchiTech Global Design',
      avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80',
      content: 'Lemma’s approach to the foundation redesign on the Nexus Tower saved us 4 months of schedule time while exceeding safety margins. A true master of structural elegance.',
      rating: 5,
      isFeatured: true,
      order: 1
    },
    {
      clientName: 'Marcus Vance',
      clientRole: 'VP of Development',
      clientCompany: 'Apex Commercial Properties',
      avatarUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80',
      content: 'Unmatched technical depth and clear communication. He translates complex structural mechanics into actionable insights that non-engineers can confidently execute.',
      rating: 5,
      isFeatured: true,
      order: 2
    }
  ];

  for (const t of testimonialsData) {
    const existing = await prisma.testimonial.findFirst({ where: { clientName: t.clientName } });
    if (!existing) {
      await prisma.testimonial.create({ data: t });
    }
  }

  // 6. Seed Insights
  const insightsData = [
    {
      title: 'Innovations in High-Strength C80 Concrete Formulations',
      slug: 'innovations-high-strength-c80-concrete',
      category: 'Materials Science',
      excerpt: 'Evaluating micro-silica and fly ash additives for high-performance concrete cores in supertall skyscrapers.',
      content: 'High-strength concrete (HSC) with compressive strengths exceeding 80 MPa (C80/C90) has fundamentally altered supertall structural engineering. By refining the aggregate-paste interfacial transition zone with micro-silica silica fume and blast furnace slag, structural engineers can significantly decrease column cross-sections, maximizing leasable floor plate area while mitigating creep and shrinkage under massive vertical dead loads.',
      readTime: '6 min read',
      imageUrl: 'https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&q=80',
      isFeatured: true
    },
    {
      title: 'Seismic Retrofitting Strategies for Pre-1980 Structural Steel Frame Buildings',
      slug: 'seismic-retrofitting-pre-1980-steel-frames',
      category: 'Seismic Design',
      excerpt: 'Modern nonlinear pushover assessment and viscous fluid damper retrofits to safeguard historic steel infrastructure.',
      content: 'Welded unreinforced flange-bolted web (WUF-B) connections common prior to the 1994 Northridge earthquake present severe brittle fracture risks. Through three-dimensional non-linear response history analysis (NLRHA), engineers can identify high-strain plastic hinge locations and integrate fluid viscous dampers (FVD) or buckling-restrained braced frames (BRBF) to dissipate up to 70% of ground motion energy without destructive architectural demolition.',
      readTime: '8 min read',
      imageUrl: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80',
      isFeatured: true
    },
    {
      title: 'Optimizing Wind Damping Outrigger Systems in 50+ Story Skyscrapers',
      slug: 'optimizing-wind-damping-outrigger-systems',
      category: 'High-Rise Analysis',
      excerpt: 'Coupling central shear wall cores to perimeter megacolumns through multistage belt trusses.',
      content: 'Dynamic wind pressures govern structural design for slender towers having aspect ratios greater than 6:1. Integrating perimeter outrigger trusses activates tension-compression force couples between external megacolumns and the internal shear wall core, substantially reducing overturning moments at the base and suppressing occupant vortex shedding vibrations.',
      readTime: '7 min read',
      imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80',
      isFeatured: true
    }
  ];

  for (const ins of insightsData) {
    await prisma.insight.upsert({
      where: { slug: ins.slug },
      update: ins,
      create: ins
    });
  }

  // 7. Seed Resources
  const resourcesData = [
    {
      title: 'High-Rise Structural Design Checklist (IBC 2024 & ASCE 7-22)',
      category: 'Design Guides',
      format: 'PDF',
      fileSize: '2.4 MB',
      fileUrl: '/uploads/sample-design-checklist.pdf',
      description: 'Comprehensive audit template covering lateral drift limits, outrigger truss geometry, and seismic response spectrum factors.'
    },
    {
      title: 'Seismic Evaluation & Retrofit Guide for Concrete Structures',
      category: 'Technical Specifications',
      format: 'PDF',
      fileSize: '4.1 MB',
      fileUrl: '/uploads/sample-seismic-guide.pdf',
      description: 'Step-by-step guidance on non-destructive coring, pushover curve validation, and fiber-reinforced polymer (FRP) application.'
    },
    {
      title: 'Structural Steel Connection Detailing Reference Sheet',
      category: 'CAD / BIM Templates',
      format: 'PDF / DWG',
      fileSize: '8.7 MB',
      fileUrl: '/uploads/sample-steel-connections.pdf',
      description: 'Moment frame connection details, beam-to-column stiffener plates, and shear tab calculation formulas.'
    },
    {
      title: 'Post-Tensioned Concrete Floor Slab Thickness Estimator',
      category: 'Engineering Calculations',
      format: 'PDF / XLS',
      fileSize: '1.2 MB',
      fileUrl: '/uploads/sample-slab-estimator.pdf',
      description: 'Empirical formulation matrix for unbonded post-tensioned tendon spacing and deflection limits.'
    }
  ];

  for (const res of resourcesData) {
    const existing = await prisma.resource.findFirst({ where: { title: res.title } });
    if (!existing) {
      await prisma.resource.create({ data: res });
    }
  }

  // 8. Seed FAQs
  const faqsData = [
    {
      question: 'What is the role of a Structural Engineer vs an Architect?',
      answer: 'While architects design the visual aesthetics, interior layouts, spatial functionality, and exterior envelope of a building, structural engineers are responsible for calculating force vectors, gravity loads, wind shear, and seismic mechanics to ensure the building remains safe, rigid, and standing under extreme conditions.',
      category: 'General',
      order: 1
    },
    {
      question: 'When do I need to hire a licensed Structural Engineer (PE/SE)?',
      answer: 'You require a licensed structural engineer whenever you build new high-rise or commercial structures, modify load-bearing walls, add additional stories to an existing building, perform seismic retrofitting, repair foundation cracks, or design bridge/infrastructure systems requiring city building permit approval.',
      category: 'Consultation',
      order: 2
    },
    {
      question: 'What is non-linear dynamic seismic analysis?',
      answer: 'Non-linear dynamic analysis is a sophisticated computerized finite element simulation (FEA) that models how a structural framework deforms and absorbs energy during a real earthquake ground motion recording. It allows us to optimize damper placement and save structural material.',
      category: 'Technical',
      order: 3
    },
    {
      question: 'How long does a typical structural peer review or evaluation take?',
      answer: 'A standard peer review or structural assessment takes between 1 to 3 weeks depending on the complexity of the building drawings, finite element calculations, and whether non-destructive site testing (NDT) is required.',
      category: 'Process',
      order: 4
    },
    {
      question: 'Can structural engineering lower construction material costs?',
      answer: 'Yes. Through value engineering, advanced post-tensioning, and optimized steel member sizing, high-performance structural engineering frequently reduces concrete volume and structural steel weight by 15% to 30%, saving developers substantial capital.',
      category: 'Cost & Value',
      order: 5
    }
  ];

  for (const f of faqsData) {
    const existing = await prisma.faq.findFirst({ where: { question: f.question } });
    if (!existing) {
      await prisma.faq.create({ data: f });
    }
  }

  console.log('Seeding completed successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
