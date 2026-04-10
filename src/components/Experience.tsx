// import { motion } from 'framer-motion';
// import { Briefcase, MapPin, Calendar } from 'lucide-react';

// const experiences = [
//   {
//     title: 'Data Engineer',
//     company: 'CVS Healthcare',
//     location: 'Buffalo Grove, IL',
//     period: 'May 2022 - Present',
//     highlights: [
//       'Designed scalable ETL pipelines using <span class="tech-highlight">Python, Java, and Apache Spark</span>, processing multi-terabyte pharmacy datasets, reducing data ingestion latency by 35%',
//       'Built REST APIs and microservices with <span class="tech-highlight">Spring Boot and NodeJS</span> to unify pharmacy data, improving interoperability by 40%',
//       'Implemented streaming pipelines with <span class="tech-highlight">Kafka and RabbitMQ</span> to process real-time pharmacy transactions',
//       'Optimized database operations by tuning SQL queries, indexing, and partitioning, improving query performance by 50%',
//       'Orchestrated cloud-based workflows on <span class="tech-highlight">AWS S3, Lambda, and Glue</span>, reducing manual intervention by 30%'
//     ]
//   },
//   {
//     title: 'Data Engineer',
//     company: 'Subaru',
//     location: 'Camden, NJ',
//     period: 'Oct 2021 - May 2022',
//     highlights: [
//       'Designed batch ETL pipelines using <span class="tech-highlight">Python, SQL, and Airflow</span>, consolidating vehicle telemetry and service records',
//       'Exposed vehicle telemetry data through RESTful APIs and <span class="tech-highlight">Spring Boot</span> microservices',
//       'Developed real-time streaming pipelines with <span class="tech-highlight">Apache Kafka</span>, increasing alert delivery by 35%',
//       'Leveraged <span class="tech-highlight">AWS Redshift, S3, and Lambda</span> for large-scale telemetry data pipelines'
//     ]
//   },
//   {
//     title: 'SQL Developer',
//     company: 'Goldman Sachs',
//     location: 'Salt Lake City, UT',
//     period: 'May 2018 - Sep 2021',
//     highlights: [
//       'Engineered complex SQL queries in <span class="tech-highlight">Oracle and Snowflake</span>, improving portfolio report generation by 45%',
//       'Created relational and dimensional data models with star and snowflake schemas',
//       'Developed ETL pipelines using <span class="tech-highlight">SQL, Spark SQL, and Python</span> for investment data',
//       'Constructed interactive <span class="tech-highlight">Tableau and Power BI</span> dashboards for wealth advisors',
//       'Implemented database performance tuning, raising analytics throughput by 50%'
//     ]
//   },
//   {
//     title: 'ETL Developer',
//     company: 'Edutech Information',
//     location: 'Hyderabad, India',
//     period: 'Aug 2016 - Apr 2018',
//     highlights: [
//       'Designed end-to-end ETL workflows with <span class="tech-highlight">Java, Spring, and JDBC</span> to merge HR and project datasets',
//       'Built RESTful APIs to provide processed HR data, reducing retrieval latency by 25%',
//       'Automated ETL build and deployment using <span class="tech-highlight">Maven and Jenkins</span>',
//       'Created unit and integration tests achieving 95% pipeline reliability'
//     ]
//   },
//   {
//     title: 'Data Platform Engineer',
//     company: 'Codon Software Pvt Ltd',
//     location: 'Hyderabad, India',
//     period: 'Oct 2014 - Aug 2016',
//     highlights: [
//       'Engineered batch and real-time ETL pipelines with <span class="tech-highlight">Java and Shell scripting</span>',
//       'Streamlined relational schemas and optimized <span class="tech-highlight">Oracle 11g and MySQL</span> queries',
//       'Developed RESTful and SOAP APIs to deliver processed retail data',
//       'Deployed <span class="tech-highlight">Jenkins-based CI/CD pipelines</span>, accelerating release cycles by 30%'
//     ]
//   }
// ];

// const Experience = () => {
//   return (
//     <section id="experience" className="py-20 relative overflow-hidden bg-muted/20">
//       <div className="container mx-auto px-4 relative z-10">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl md:text-6xl font-heading mb-4">
//             Professional <span className="text-gradient">Experience</span>
//           </h2>
//           <div className="w-24 h-1 bg-gradient-to-r from-champagne to-sandstone mx-auto" />
//         </motion.div>

//         <div className="relative max-w-6xl mx-auto">
//           {/* Timeline Line */}
//           <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-champagne via-sandstone to-champagne" />

//           {experiences.map((exp, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: index * 0.1 }}
//               className={`relative mb-12 ${
//                 index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:ml-auto md:text-left'
//               } md:w-1/2`}
//               data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
//             >
//               {/* Timeline Dot */}
//               <div className="hidden md:block absolute top-0 w-4 h-4 bg-gradient-to-br from-champagne to-sandstone rounded-full shadow-glow"
//                 style={{
//                   [index % 2 === 0 ? 'right' : 'left']: '-8px',
//                   boxShadow: '0 0 20px hsl(var(--sandstone))'
//                 }}
//               />

//               <motion.div
//                 whileHover={{ scale: 1.02, y: -5 }}
//                 className="glass-effect p-6 rounded-lg group cursor-pointer"
//               >
//                 <div className="flex items-center gap-2 mb-3 justify-start md:justify-end md:group-odd:justify-start">
//                   <Briefcase className="w-5 h-5 text-accent" />
//                   <h3 className="text-2xl font-heading text-gradient">{exp.title}</h3>
//                 </div>

//                 <div className="space-y-2 mb-4">
//                   <div className="flex items-center gap-2 text-sm text-muted-foreground justify-start md:justify-end md:group-odd:justify-start">
//                     <span className="font-semibold">{exp.company}</span>
//                   </div>
//                   <div className="flex items-center gap-2 text-sm text-muted-foreground justify-start md:justify-end md:group-odd:justify-start">
//                     <MapPin className="w-4 h-4" />
//                     <span>{exp.location}</span>
//                   </div>
//                   <div className="flex items-center gap-2 text-sm text-accent justify-start md:justify-end md:group-odd:justify-start">
//                     <Calendar className="w-4 h-4" />
//                     <span>{exp.period}</span>
//                   </div>
//                 </div>

//                 <ul className="space-y-3 text-left">
//                   {exp.highlights.map((highlight, i) => (
//                     <li 
//                       key={i} 
//                       className="text-sm text-muted-foreground leading-relaxed flex items-start gap-2"
//                     >
//                       <span className="text-accent mt-1.5">▹</span>
//                       <span dangerouslySetInnerHTML={{ 
//                         __html: highlight.replace(
//                           /<span class="tech-highlight">(.*?)<\/span>/g, 
//                           '<span class="text-champagne font-medium">$1</span>'
//                         )
//                       }} />
//                     </li>
//                   ))}
//                 </ul>
//               </motion.div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Experience;
























// import { motion } from 'framer-motion';
// import { Briefcase, MapPin, Calendar } from 'lucide-react';

// const experiences = [
//   {
//     title: 'Data Engineer',
//     company: 'CVS Healthcare',
//     location: 'Buffalo Grove, IL',
//     period: 'May 2022 - Present',
//     highlights: [
//       'Designed scalable ETL pipelines using <span class="tech-highlight">Python, Java, and Apache Spark</span>, processing multi-terabyte pharmacy datasets, reducing data ingestion latency by 35%',
//       'Built REST APIs and microservices with <span class="tech-highlight">Spring Boot and NodeJS</span> to unify pharmacy data, improving interoperability by 40%',
//       'Implemented streaming pipelines with <span class="tech-highlight">Kafka and RabbitMQ</span> to process real-time pharmacy transactions',
//       'Optimized database operations by tuning SQL queries, indexing, and partitioning, improving query performance by 50%',
//       'Orchestrated cloud-based workflows on <span class="tech-highlight">AWS S3, Lambda, and Glue</span>, reducing manual intervention by 30%'
//     ]
//   },
//   {
//     title: 'Data Engineer',
//     company: 'Subaru',
//     location: 'Camden, NJ',
//     period: 'Oct 2021 - May 2022',
//     highlights: [
//       'Designed batch ETL pipelines using <span class="tech-highlight">Python, SQL, and Airflow</span>, consolidating vehicle telemetry and service records',
//       'Exposed vehicle telemetry data through RESTful APIs and <span class="tech-highlight">Spring Boot</span> microservices',
//       'Developed real-time streaming pipelines with <span class="tech-highlight">Apache Kafka</span>, increasing alert delivery by 35%',
//       'Leveraged <span class="tech-highlight">AWS Redshift, S3, and Lambda</span> for large-scale telemetry data pipelines'
//     ]
//   },
//   {
//     title: 'SQL Developer',
//     company: 'Goldman Sachs',
//     location: 'Salt Lake City, UT',
//     period: 'May 2018 - Sep 2021',
//     highlights: [
//       'Engineered complex SQL queries in <span class="tech-highlight">Oracle and Snowflake</span>, improving portfolio report generation by 45%',
//       'Created relational and dimensional data models with star and snowflake schemas',
//       'Developed ETL pipelines using <span class="tech-highlight">SQL, Spark SQL, and Python</span> for investment data',
//       'Constructed interactive <span class="tech-highlight">Tableau and Power BI</span> dashboards for wealth advisors',
//       'Implemented database performance tuning, raising analytics throughput by 50%'
//     ]
//   },
//   {
//     title: 'ETL Developer',
//     company: 'Edutech Information',
//     location: 'Hyderabad, India',
//     period: 'Aug 2016 - Apr 2018',
//     highlights: [
//       'Designed end-to-end ETL workflows with <span class="tech-highlight">Java, Spring, and JDBC</span> to merge HR and project datasets',
//       'Built RESTful APIs to provide processed HR data, reducing retrieval latency by 25%',
//       'Automated ETL build and deployment using <span class="tech-highlight">Maven and Jenkins</span>',
//       'Created unit and integration tests achieving 95% pipeline reliability'
//     ]
//   },
//   {
//     title: 'Data Platform Engineer',
//     company: 'Codon Software Pvt Ltd',
//     location: 'Hyderabad, India',
//     period: 'Oct 2014 - Aug 2016',
//     highlights: [
//       'Engineered batch and real-time ETL pipelines with <span class="tech-highlight">Java and Shell scripting</span>',
//       'Streamlined relational schemas and optimized <span class="tech-highlight">Oracle 11g and MySQL</span> queries',
//       'Developed RESTful and SOAP APIs to deliver processed retail data',
//       'Deployed <span class="tech-highlight">Jenkins-based CI/CD pipelines</span>, accelerating release cycles by 30%'
//     ]
//   }
// ];

// const Experience = () => {
//   return (
//     <section id="experience" className="py-20 relative overflow-hidden bg-muted/20">
//       <div className="container mx-auto px-4 relative z-10">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl md:text-6xl font-heading mb-4">
//             Professional <span className="text-gradient">Experience</span>
//           </h2>
//           <div className="w-24 h-1 bg-gradient-to-r from-champagne to-sandstone mx-auto" />
//         </motion.div>

//         <div className="relative max-w-6xl mx-auto">
//           {/* Timeline Line */}
//           <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-champagne via-sandstone to-champagne" />

//           {experiences.map((exp, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: index * 0.1 }}
//               className={`relative mb-12 ${
//                 index % 2 === 0 ? 'md:pr-12' : 'md:pl-12 md:ml-auto'
//               } md:w-1/2`}
//               data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
//             >
//               {/* Timeline Dot */}
//               <div className="hidden md:block absolute top-0 w-4 h-4 bg-gradient-to-br from-champagne to-sandstone rounded-full shadow-glow"
//                 style={{
//                   [index % 2 === 0 ? 'right' : 'left']: '-8px',
//                   boxShadow: '0 0 20px hsl(var(--sandstone))'
//                 }}
//               />

//               <motion.div
//                 whileHover={{ scale: 1.02, y: -5 }}
//                 className="glass-effect p-6 rounded-lg group cursor-pointer"
//               >
//                 <div className="flex items-center gap-2 mb-3 justify-start">
//                   <Briefcase className="w-5 h-5 text-orange-500" />
//                   <h3 className="text-2xl font-heading text-gradient">{exp.title}</h3>
//                 </div>

//                 <div className="space-y-2 mb-4">
//                   <div className="flex items-center gap-2 text-sm text-muted-foreground justify-start">
//                     <span className="font-semibold">{exp.company}</span>
//                   </div>
//                   <div className="flex items-center gap-2 text-sm text-muted-foreground justify-start">
//                     <MapPin className="w-4 h-4" />
//                     <span>{exp.location}</span>
//                   </div>
//                   <div className="flex items-center gap-2 text-sm text-purple-500 justify-start">
//                     <Calendar className="w-4 h-4" />
//                     <span>{exp.period}</span>
//                   </div>
//                 </div>

//                 <ul className="space-y-3 text-left">
//                   {exp.highlights.map((highlight, i) => (
//                     <li 
//                       key={i} 
//                       className="text-sm text-muted-foreground leading-relaxed flex items-start gap-2"
//                     >
//                       <span className="text-accent mt-1.5">▹</span>
//                       <span dangerouslySetInnerHTML={{ 
//                         __html: highlight.replace(
//                           /<span class="tech-highlight">(.*?)<\/span>/g, 
//                           '<span class="text-purple-700 font-medium">$1</span>'
//                         )
//                       }} />
//                     </li>
//                   ))}
//                 </ul>
//               </motion.div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Experience;














































import { motion } from 'framer-motion';
import { Briefcase, MapPin, Calendar } from 'lucide-react';

const experiences = [
  {
    title: 'Controls Software Engineer',
    company: 'Phillips Medisize',
    location: 'New Richmond, WI',
    period: 'Oct 2024 - Present',
    highlights: [
      'Developed HMI applications using <span class="tech-highlight">C#, .NET Core, and WPF</span> to improve operator visibility across automated assembly stations, reducing manual monitoring effort by 22% during production shifts.',
      'Integrated <span class="tech-highlight">Cognex VisionPro and Keyence vision systems</span> into machine control software enabling automated inspection validation workflows and improving inline defect detection accuracy by 18%.',
      'Implemented <span class="tech-highlight">Modbus TCP and OPC-UA</span> communication interfaces between Allen-Bradley PLC-connected equipment and .NET applications supporting stable real-time machine status synchronization across production stations.',
      'Engineered <span class="tech-highlight">servo motion control integration logic</span> using torque-controlled sequencing methods to support precision assembly automation workflows and improve positioning repeatability across multi-stage automation processes.',
      'Configured <span class="tech-highlight">MES and SCADA-connected production traceability systems</span> using SQL Server stored procedures enabling centralized equipment monitoring and reducing manual reporting effort by 30%.',
      'Automated <span class="tech-highlight">camera calibration and inspection configuration routines</span> using C# integrated with RSLogix and FactoryTalk environments to streamline machine vision system setup workflows and reduce production line changeover configuration time by 25%.',
      'Collaborated with electrical engineers and manufacturing technicians to translate device interface specifications into <span class="tech-highlight">hardware API and SDK integrations</span> supporting deployment readiness across new automation stations.',
      'Supported SAP manufacturing traceability integrations by developing <span class="tech-highlight">SQL-based processing logic</span> for production event capture improving compliance reporting reliability across regulated medical device workflows.'
    ]
  },
  {
    title: 'Software Developer - Manufacturing Systems Support',
    company: 'Abbott',
    location: 'USA',
    period: 'Aug 2023 - Sep 2024',
    highlights: [
      'Developed <span class="tech-highlight">C# .NET automation utilities</span> supporting manufacturing data exchange between production monitoring systems and reporting platforms improving traceability visibility across operational workflows.',
      'Implemented <span class="tech-highlight">SQL Server stored procedures and T-SQL logic</span> enabling production dataset validation and reducing manual reconciliation effort by 28% across analytics-driven reporting pipelines.',
      'Built <span class="tech-highlight">Python-based validation scripts</span> supporting automated quality checks across production telemetry datasets improving downstream reporting reliability by 20%.',
      'Designed <span class="tech-highlight">dimensional SQL Server data structures</span> supporting manufacturing equipment KPI dashboards used by operations teams for performance tracking across multiple equipment groups.',
      'Automated <span class="tech-highlight">Power BI dataset refresh coordination workflows</span> using Python and PowerShell integrations reducing manual reporting preparation effort by 35%.',
      'Collaborated with operations analysts and production stakeholders to translate equipment-level reporting requirements into scalable <span class="tech-highlight">SQL-based transformation logic</span> supporting centralized analytics delivery.',
      'Maintained <span class="tech-highlight">SSIS-driven production data movement workflows</span> ensuring reliable ingestion of manufacturing datasets across distributed reporting environments supporting daily operational visibility.',
      'Supported enterprise reporting availability by diagnosing <span class="tech-highlight">SQL performance bottlenecks</span> and optimizing stored procedures improving dashboard refresh performance by 24%.'
    ]
  },
  {
    title: 'Software QA & Automation Engineer',
    company: 'Triad Techno Services',
    location: 'USA',
    period: 'Jun 2020 - Jul 2021',
    highlights: [
      'Developed <span class="tech-highlight">Selenium-based automation scripts</span> using Java and C# improving regression test execution coverage across enterprise software application releases by 30%.',
      'Implemented <span class="tech-highlight">hybrid automation testing framework</span> using TestNG and Page Object Model architecture improving repeatability of functional validation workflows across application modules.',
      'Executed <span class="tech-highlight">automated integration testing scenarios</span> supporting validation of .NET-based enterprise applications across multiple release cycles reducing manual verification effort by 26%.',
      'Collaborated with development teams to reproduce software defects and validate fixes improving turnaround time for issue resolution across sprint delivery timelines.',
      'Maintained <span class="tech-highlight">SQL Server-based validation datasets</span> supporting backend testing workflows ensuring accuracy across data-driven application modules.',
      'Documented <span class="tech-highlight">structured usability testing scenarios</span> supporting improved application stability and reducing production defect leakage across deployment environments.',
      'Analyzed automation execution results using <span class="tech-highlight">Visual Studio diagnostic tooling</span> improving reliability of regression suites across multiple test environments.',
      'Supported <span class="tech-highlight">Agile delivery workflows</span> by coordinating with cross-functional QA and engineering teams ensuring test readiness alignment across sprint milestones.'
    ]
  },
  {
    title: 'Software Engineer Intern',
    company: 'Triad Techno Services',
    location: 'USA',
    period: 'Feb 2020 - May 2020',
    highlights: [
      'Developed <span class="tech-highlight">Selenium automation scripts</span> using Java supporting regression validation across web-based application modules improving repeatability of functional testing workflows.',
      'Implemented <span class="tech-highlight">Page Object Model structure</span> within TestNG-based automation framework improving maintainability of automated testing components.',
      'Executed <span class="tech-highlight">automated test scenarios</span> using C# Selenium WebDriver supporting validation of .NET application features across staging environments.',
      'Collaborated with QA engineers to identify reproducible defect conditions improving issue tracking accuracy within <span class="tech-highlight">Bugzilla</span> workflows.',
      'Maintained <span class="tech-highlight">structured test execution documentation</span> supporting traceability across functional validation activities during release preparation cycles.',
      'Assisted engineering teams with <span class="tech-highlight">usability testing scenarios</span> ensuring alignment between expected functionality and deployed application behavior across testing environments.'
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 relative overflow-hidden bg-muted/20">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-heading mb-4">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-champagne to-sandstone mx-auto" />
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-champagne via-sandstone to-champagne" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative mb-12 ${
                index % 2 === 0 ? 'md:pr-12' : 'md:pl-12 md:ml-auto'
              } md:w-1/2`}
              data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
            >
              {/* Timeline Dot */}
              <div className="hidden md:block absolute top-0 w-4 h-4 bg-gradient-to-br from-champagne to-sandstone rounded-full shadow-glow"
                style={{
                  [index % 2 === 0 ? 'right' : 'left']: '-8px',
                  boxShadow: '0 0 20px hsl(var(--sandstone))'
                }}
              />

              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                className="glass-effect p-6 rounded-lg group cursor-pointer"
              >
                <div className="flex items-center gap-2 mb-3 justify-start">
                  <Briefcase className="w-5 h-5 text-orange-500" />
                  <h3 className="text-2xl font-heading text-gradient">{exp.title}</h3>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground justify-start">
                    <span className="font-semibold">{exp.company}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground justify-start">
                    <MapPin className="w-4 h-4" />
                    <span>{exp.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-purple-500 justify-start">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <ul className="space-y-3 text-left">
                  {exp.highlights.map((highlight, i) => (
                    <li 
                      key={i} 
                      className="text-sm text-muted-foreground leading-relaxed flex items-start gap-2"
                    >
                      <span className="text-accent mt-1.5">▹</span>
                      <span dangerouslySetInnerHTML={{ 
                        __html: highlight.replace(
                          /<span class="tech-highlight">(.*?)<\/span>/g, 
                          '<span class="text-purple-700 font-medium">$1</span>'
                        )
                      }} />
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
