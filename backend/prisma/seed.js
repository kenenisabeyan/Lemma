const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding ASTU 5th Year Civil Engineering portfolio database...');

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
    update: {
      engineerName: 'Lemma Techane',
      title: '5th Year Civil Engineering Student | ASTU',
      heroTagline: 'Engineering Ethiopia’s Tomorrow with ASTU Excellence.',
      heroBio: 'Final-year Civil Engineering student team at Adama Science and Technology University (ASTU). Graduating brothers designing resilient reinforced concrete buildings, sustainable highway corridors, and innovative graduation capstone projects.',
      yearsExp: '5th Year',
      projectsCount: '25+',
      safetyRecord: '100%',
      clientsCount: 'ASTU SoCEA',
      email: 'lemmayezedlij21@gmail.com',
      phone: '+251 934 830 919',
      officeAddress: 'School of Civil Engineering & Architecture, ASTU Main Campus, Adama, Ethiopia',
      metaTitle: 'Lemma Techane & Brothers | 5th Year Civil Engineering at ASTU',
      metaDescription: 'Personal portfolio and technical civil engineering dossier of Lemma Techane and 5th-year Civil Engineering graduating cohort at Adama Science and Technology University (ASTU).'
    },
    create: {
      id: 'default',
      engineerName: 'Lemma Techane',
      title: '5th Year Civil Engineering Student | ASTU',
      heroTagline: 'Engineering Ethiopia’s Tomorrow with ASTU Excellence.',
      heroBio: 'Final-year Civil Engineering student team at Adama Science and Technology University (ASTU). Graduating brothers designing resilient reinforced concrete buildings, sustainable highway corridors, and innovative graduation capstone projects.',
      introVideoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-architectural-model-of-a-modern-building-41618-large.mp4',
      yearsExp: '5th Year',
      projectsCount: '25+',
      safetyRecord: '100%',
      clientsCount: 'ASTU SoCEA',
      email: 'lemmayezedlij21@gmail.com',
      phone: '+251 934 830 919',
      officeAddress: 'School of Civil Engineering & Architecture, ASTU Main Campus, Adama, Ethiopia',
      metaTitle: 'Lemma Techane & Brothers | 5th Year Civil Engineering at ASTU',
      metaDescription: 'Personal portfolio and technical civil engineering dossier of Lemma Techane and 5th-year Civil Engineering graduating cohort at Adama Science and Technology University (ASTU).'
    }
  });

  // 3. Seed Projects
  const projectsData = [
    {
      title: 'ASTU Central Multipurpose Complex & Auditorium',
      slug: 'astu-central-multipurpose-complex',
      category: 'Structural & Buildings',
      location: 'ASTU Main Campus, Adama, Ethiopia',
      year: '2025 - 2026',
      client: 'ASTU School of Civil Engineering & Architecture (SoCEA)',
      role: 'Lead Student Structural Engineer & Capstone Group Lead',
      structuralSystem: 'Dual Reinforced Concrete Shear Wall & Moment Resisting Frame',
      materials: 'C30/37 Reinforced Concrete, Grade 500 High-Yield Ribbed Rebar',
      description: 'A 5-story multipurpose academic auditorium and library complex designed as the final year graduation capstone project at ASTU.',
      challenge: 'Addressing high seismic response factors in the Great East African Rift Valley corridor and optimizing long-span column-free seating areas.',
      engineeringApproach: 'Conducted 3D finite element modeling in ETABS, non-linear dynamic spectrum analysis, and foundation soil-structure interaction over Adama volcanic tuff.',
      solution: 'Engineered a dual RC shear wall core coupled with post-tensioned beam-slab systems conforming strictly to Ethiopian Building Code Standard (EBCS EN 1992 & EBCS EN 1998).',
      result: 'Received highest capstone evaluation honor from the ASTU civil engineering faculty and external industry evaluators.',
      imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80',
      softwareUsed: JSON.stringify(['ETABS', 'SAP2000', 'AutoCAD', 'SAFE']),
      isFeatured: true,
      order: 1
    },
    {
      title: 'Awash River Highway Link Bridge',
      slug: 'awash-river-highway-link-bridge',
      category: 'Highway & Transportation',
      location: 'Awash Basin Transit Corridor, Oromia, Ethiopia',
      year: '2024 - 2025',
      client: 'Ethiopian Roads Administration (ERA) Academic Case Study',
      role: 'Student Bridge Design Engineer & Team Modeler',
      structuralSystem: 'Prestressed Concrete Box Girder with Reinforced Concrete Piers',
      materials: 'Post-Tensioned C40 Concrete, High-Strength Strands, Reinforced Abutments',
      description: 'A 180-meter continuous prestressed concrete highway bridge designed to handle heavy freight transit across the Awash river basin.',
      challenge: 'Severe seasonal river flood scouring, expansive riverbank clay deposits, and high vehicular dynamic axle loads.',
      engineeringApproach: 'Utilized SAP2000 and Midas Civil for moving vehicle live-load analysis in accordance with ERA Bridge Design Manual and AASHTO LRFD specifications.',
      solution: 'Implemented deep driven bored pile foundations anchored into competent bedrock and elastomeric bearing pads to dissipate thermal expansion.',
      result: 'Engineered a resilient 100-year design life structure reducing freight detour times by 45 minutes.',
      imageUrl: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&q=80',
      softwareUsed: JSON.stringify(['SAP2000', 'AutoCAD Civil 3D', 'Midas Civil']),
      isFeatured: true,
      order: 2
    },
    {
      title: 'Adama Smart Mixed-Use Commercial Plaza',
      slug: 'adama-smart-commercial-plaza',
      category: 'Geotechnical & Foundation',
      location: 'Adama Commercial Corridor, Ethiopia',
      year: '2025',
      client: 'Adama Urban Development & Infrastructure Syndicate',
      role: 'Senior Design Team Member',
      structuralSystem: 'Special RC Moment Resisting Frame on Compensated Raft Foundation',
      materials: 'High-Strength Concrete, Geosynthetic Reinforcement, ASTM A615 Steel',
      description: 'A 7-story commercial plaza engineered with sustainable thermal mass and underground parking in downtown Adama.',
      challenge: 'Challenging geotechnical conditions characterized by expansive black cotton soil with high swelling pressure and seasonal moisture fluctuations.',
      engineeringApproach: 'Conducted laboratory consolidation and direct shear testing at the ASTU Geotechnical Lab; modeled foundation settlement using SAFE.',
      solution: 'Designed a compensated reinforced concrete mat foundation combined with a 1.5m replacement layer of compacted granular sub-base.',
      result: 'Prevented differential settlement cracking and achieved full compliance with Ethiopian Building Code Standard (EBCS 7).',
      imageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80',
      softwareUsed: JSON.stringify(['SAFE', 'ETABS', 'AutoCAD', 'Geostudio']),
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

  // 4. Seed Services (Core Academic & Engineering Competencies)
  const servicesData = [
    {
      title: 'Structural Analysis & Reinforced Concrete Design',
      icon: 'Building2',
      summary: '3D finite element structural modeling and rebar detailing for multi-story buildings per EBCS & Eurocodes.',
      description: 'Comprehensive structural analysis from preliminary conceptual schemes through detailed construction drawings, ensuring structural safety, stability, and code compliance.',
      features: JSON.stringify([
        'ETABS & SAP2000 3D frame and shear wall dynamic response modeling',
        'Gravity load distribution and reinforced concrete column/beam sizing',
        'Detailed reinforcement schedules and bar bending lists in AutoCAD',
        'Compliance auditing with EBCS EN 1992 (Concrete) and EBCS EN 1998 (Seismic)'
      ]),
      order: 1
    },
    {
      title: 'Highway Alignment & Geometric Design',
      icon: 'Layers',
      summary: 'Highway corridor route selection, horizontal/vertical curvature design, and earthwork calculations using Civil 3D.',
      description: 'Engineering transportation networks adhering to Ethiopian Roads Administration (ERA) geometric and pavement standards for safe, durable roads.',
      features: JSON.stringify([
        'AutoCAD Civil 3D horizontal and vertical alignment optimization',
        'Earthwork cut-and-fill balancing and mass haul diagram calculation',
        'Flexible and rigid pavement thickness design per ERA manuals',
        'Roadway drainage channels, culverts, and intersection layouts'
      ]),
      order: 2
    },
    {
      title: 'Geotechnical Engineering & Foundation Design',
      icon: 'ShieldCheck',
      summary: 'Soil mechanics investigations, borehole data interpretation, and expansive soil mitigation for foundations.',
      description: 'Analyzing soil-structure interaction, bearing capacity, and settlement to specify safe, cost-effective foundation solutions across diverse Ethiopian soils.',
      features: JSON.stringify([
        'Expansive black cotton soil characterization and stabilization design',
        'Isolated footings, combined footings, and compensated raft foundations',
        'Laboratory soil testing (Atterberg limits, sieve analysis, Proctor compaction)',
        'Slope stability and retaining wall stability calculations'
      ]),
      order: 3
    },
    {
      title: 'Water Resources & Infrastructure Capstone Consulting',
      icon: 'Ruler',
      summary: 'Hydraulic calculations, stormwater drainage networks, and academic peer reviews for engineering capstones.',
      description: 'Collaborative technical advisory with fellow engineering brothers for senior design defenses, technical documentation, and construction management.',
      features: JSON.stringify([
        'Culvert and open channel hydraulic capacity sizing',
        'Quantity surveying, bill of quantities (BOQ), and cost estimation',
        'Construction scheduling, bar charts, and project management',
        'Academic capstone presentation and technical defense advisory'
      ]),
      order: 4
    }
  ];

  for (const srv of servicesData) {
    const existing = await prisma.service.findFirst({ where: { title: srv.title } });
    if (!existing) {
      await prisma.service.create({ data: srv });
    } else {
      await prisma.service.update({ where: { id: existing.id }, data: srv });
    }
  }

  // 5. Seed Testimonials (Faculty, Mentors, and Brothers)
  const testimonialsData = [
    {
      clientName: 'Dr. Abebe Gemechu, Ph.D.',
      clientRole: 'Associate Professor & Capstone Advisor',
      clientCompany: 'ASTU School of Civil Engineering & Architecture',
      avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80',
      content: 'Lemma and his 5th-year brothers exhibited remarkable mastery of structural dynamics and EBCS provisions in their multi-story capstone defense. Their ETABS modeling was rigorous and precise.',
      rating: 5,
      isFeatured: true,
      order: 1
    },
    {
      clientName: 'Eng. Bethlehem Tadesse, P.E.',
      clientRole: 'Senior Structural Engineer & Internship Supervisor',
      clientCompany: 'Oromia Construction Corporation (OCC)',
      avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80',
      content: 'During their site internship, Lemma and his fellow ASTU brothers demonstrated exceptional diligence in reinforcement inspection and concrete quality control. True future leaders of Ethiopian engineering.',
      rating: 5,
      isFeatured: true,
      order: 2
    },
    {
      clientName: 'Dawit Kassa',
      clientRole: '5th Year Civil Engineering Brother & Co-Researcher',
      clientCompany: 'ASTU Class of 2026',
      avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80',
      content: 'Tackling complex structural mechanics and late-night capstone simulations alongside Lemma has been an honor. The brotherhood and work ethic in our ASTU 5th-year group is unmatched.',
      rating: 5,
      isFeatured: true,
      order: 3
    }
  ];

  for (const t of testimonialsData) {
    const existing = await prisma.testimonial.findFirst({ where: { clientName: t.clientName } });
    if (!existing) {
      await prisma.testimonial.create({ data: t });
    } else {
      await prisma.testimonial.update({ where: { id: existing.id }, data: t });
    }
  }

  // 6. Seed Insights (Academic Research & Technical Notes)
  const insightsData = [
    {
      title: 'Mitigating Differential Settlement on Expansive Black Cotton Soils in the Rift Valley',
      slug: 'mitigating-differential-settlement-expansive-soils',
      category: 'Geotechnical Engineering',
      excerpt: 'Evaluating lime stabilization, moisture barriers, and compensated raft foundations for structures in Adama and surrounding regions.',
      content: 'Expansive soils, commonly known as black cotton clays, present significant structural hazards across the Ethiopian Rift Valley due to extreme swelling and shrinkage cycles. Through extensive laboratory testing at ASTU, we analyzed the effects of chemical lime stabilization and mechanical replacement with selected granular fills, demonstrating how proper foundation depth and drainage cut-offs prevent severe structural cracking.',
      readTime: '6 min read',
      imageUrl: 'https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&q=80',
      isFeatured: true
    },
    {
      title: 'Comparative Structural Modeling: EBCS EN 1992 vs Eurocode 2 in ETABS',
      slug: 'comparative-structural-modeling-ebcs-vs-eurocode',
      category: 'Structural Mechanics',
      excerpt: 'A technical review of load combination factors, concrete stress-strain relationships, and rebar curtailment guidelines.',
      content: 'As Ethiopia harmonizes building codes with European normative standards under the Ethiopian Building Code Standard (EBCS EN series), understanding the nuances in partial safety factors and ductility requirements is essential for graduating engineers. This paper examines a 5-story RC building model in ETABS, detailing differences in drift limitations and shear reinforcement design.',
      readTime: '8 min read',
      imageUrl: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80',
      isFeatured: true
    },
    {
      title: 'Hydraulic Capacity & Scour Protection for Bridges along the Modjo-Adama Transit Corridor',
      slug: 'hydraulic-capacity-scour-protection-bridges',
      category: 'Hydraulic & Highway',
      excerpt: 'Applying ERA drainage design guidelines to prevent bridge abutment scour during intense seasonal rainfall.',
      content: 'Seasonal flash floods across the Awash river tributaries demand careful hydraulic and hydrological modeling. Using Rational and SCS curve number methods, we evaluated peak discharge return periods to properly size bridge waterway openings and specify riprap boulder protection around pier foundations.',
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
      title: 'ASTU 5th Year Reinforced Concrete Building Design Checklist (EBCS EN 1992)',
      category: 'Design Guides',
      format: 'PDF',
      fileSize: '2.8 MB',
      fileUrl: '/uploads/astu-rc-design-checklist.pdf',
      description: 'Comprehensive graduation capstone design guide covering lateral drift checks, slab reinforcement curtailment, and column interaction diagrams.'
    },
    {
      title: 'ERA Highway Geometric & Flexible Pavement Thickness Manual Summary',
      category: 'Technical Specifications',
      format: 'PDF',
      fileSize: '3.9 MB',
      fileUrl: '/uploads/era-pavement-manual-summary.pdf',
      description: 'Practical summary of Ethiopian Roads Administration (ERA) specifications for traffic classification, subgrade CBR analysis, and asphalt layer sizing.'
    },
    {
      title: 'Standard Structural CAD Detailing Sheets (Columns, Beams & Mat Foundations)',
      category: 'CAD / BIM Templates',
      format: 'PDF / DWG',
      fileSize: '6.4 MB',
      fileUrl: '/uploads/standard-cad-detailing-sheets.pdf',
      description: 'AutoCAD templates with standardized bar bending schedules, hook lengths, and lap splice details compliant with EBCS standards.'
    },
    {
      title: 'Geotechnical Bearing Capacity & Settlement Calculation Spreadsheet',
      category: 'Engineering Calculations',
      format: 'PDF / XLS',
      fileSize: '1.5 MB',
      fileUrl: '/uploads/geotech-bearing-capacity-sheet.pdf',
      description: 'Automated Excel calculation model based on Terzaghi and Meyerhof equations for isolated and continuous footings on Ethiopian soils.'
    }
  ];

  for (const res of resourcesData) {
    const existing = await prisma.resource.findFirst({ where: { title: res.title } });
    if (!existing) {
      await prisma.resource.create({ data: res });
    } else {
      await prisma.resource.update({ where: { id: existing.id }, data: res });
    }
  }

  // 8. Seed FAQs
  const faqsData = [
    {
      question: 'What is the focus of the 5th-Year Civil Engineering curriculum at ASTU?',
      answer: 'At Adama Science and Technology University (ASTU), the 5th year represents the culmination of our B.Sc. degree in the School of Civil Engineering and Architecture. It focuses on comprehensive capstone design projects, advanced structural analysis in ETABS/SAP2000, highway geometric design, foundation engineering on challenging soils, and research defense before faculty and industry panels.',
      category: 'General',
      order: 1
    },
    {
      question: 'What building codes and design standards do ASTU Civil Engineering students apply?',
      answer: 'Our coursework and projects strictly adhere to the Ethiopian Building Code Standards (EBCS EN series harmonized with Eurocodes 1 through 8), the Ethiopian Roads Administration (ERA) Geometric and Pavement Design Manuals, and international benchmarks including ACI 318 and ASTM.',
      category: 'Technical',
      order: 2
    },
    {
      question: 'How do the engineering brothers collaborate on projects and capstone defense?',
      answer: 'Our 5th-year cohort functions as a cohesive engineering syndicate. We divide multi-disciplinary responsibilities across architectural coordination, structural finite element modeling, geotechnical investigations, bill of quantities (BOQ), and construction site management, fostering rigorous peer review and brotherhood.',
      category: 'Process',
      order: 3
    },
    {
      question: 'What practical site and laboratory experience have ASTU students completed?',
      answer: 'Beyond rigorous mathematical and software training, we have completed hands-on surveying camps with total stations, geotechnical soil testing in the ASTU materials lab, and intensive 4th-year industrial internships on active commercial and highway construction sites across Ethiopia.',
      category: 'Consultation',
      order: 4
    },
    {
      question: 'Are ASTU 5th-year graduating civil engineers available for graduate roles and projects?',
      answer: 'Yes! Our graduating team and brothers are actively preparing for 2026 graduation and are open to graduate engineer roles, structural design apprenticeships, infrastructure consulting, and research collaborations with engineering firms and contractors across Ethiopia and internationally.',
      category: 'Opportunities',
      order: 5
    }
  ];

  for (const f of faqsData) {
    const existing = await prisma.faq.findFirst({ where: { question: f.question } });
    if (!existing) {
      await prisma.faq.create({ data: f });
    } else {
      await prisma.faq.update({ where: { id: existing.id }, data: f });
    }
  }

  console.log('ASTU 5th Year Civil Engineering portfolio database seeded successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
