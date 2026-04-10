import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Parallax, EffectCoverflow, Autoplay } from 'swiper/modules';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import 'swiper/css/autoplay';

const projects = [
  {
    title: 'Vision-Based Automated Inspection Validation Tool for Machine Vision Systems',
    description: 'Built a desktop inspection validation utility using C# .NET and Cognex VisionPro libraries to simulate production inspection workflows before deployment.',
    points: [
      'Built a desktop inspection validation utility using C# .NET and Cognex VisionPro libraries to simulate production inspection workflows before deployment, reducing onsite configuration iterations during machine commissioning.',
      'Configured camera calibration routines through VisionPro scripting interfaces to standardize image alignment parameters across inspection scenarios, improving repeatability of measurement validation during offline testing cycles.',
      'Verified inspection decision logic using controlled defect image datasets processed through VisionPro pipelines, enabling early-stage tuning of inspection thresholds prior to integration with factory automation systems.'
    ],
    tech: ['C#', '.NET', 'Cognex VisionPro', 'Camera Calibration', 'Machine Vision'],
    image: '/vision_inspection.png',
    gradient: 'from-blue-500/20 to-purple-500/20'
  },
  {
    title: 'Industrial Equipment Monitoring HMI Dashboard for Production Systems',
    description: 'Designed a WPF-based operator diagnostics dashboard to visualize machine status signals from structured SQL Server datasets.',
    points: [
      'Designed a WPF-based operator diagnostics dashboard to visualize machine status signals from structured SQL Server datasets supporting faster identification of abnormal equipment states during simulation testing workflows.',
      'Implemented asynchronous UI refresh logic using .NET multithreading techniques to maintain responsive operator interface behavior while processing high-frequency equipment telemetry updates.',
      'Connected structured production signal tables through T-SQL stored procedures to support traceable equipment event visualization improving usability of monitoring views during operator validation exercises.'
    ],
    tech: ['WPF', '.NET', 'Multithreading', 'SQL Server', 'T-SQL'],
    image: '/hmi_dashboard.png',
    gradient: 'from-green-500/20 to-teal-500/20'
  },
  {
    title: 'OPC-UA Communication Bridge for Industrial Device Data Exchange',
    description: 'Developed a Python-based OPC-UA communication bridge to simulate structured device signal exchange between virtual equipment endpoints.',
    points: [
      'Developed a Python-based OPC-UA communication bridge to simulate structured device signal exchange between virtual equipment endpoints supporting validation of industrial communication workflows prior to deployment.',
      'Mapped structured node-level signal attributes across OPC-UA namespaces enabling reliable interpretation of equipment state variables during integration testing of automation communication layers.',
      'Tested communication reliability across TCP/IP industrial networking sessions using scripted data polling routines ensuring consistent message availability during simulated machine connectivity validation scenarios.'
    ],
    tech: ['Python', 'OPC-UA', 'TCP/IP', 'Industrial Networking', 'Communication Protocols'],
    image: '/opc_ua_bridge.png',
    gradient: 'from-orange-500/20 to-red-500/20'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,hsl(var(--sandstone)/0.1),transparent_70%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-heading mb-4">
            <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-champagne to-sandstone mx-auto" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-6xl mx-auto"
        >
          <Swiper
            modules={[Pagination, Navigation, Parallax, EffectCoverflow, Autoplay]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop={true}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={{ clickable: true }}
            navigation={true}
            parallax={true}
            className="pb-12"
          >
            {projects.map((project, index) => (
              <SwiperSlide key={index} className="!w-full md:!w-[600px]">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="glass-effect rounded-xl overflow-hidden group cursor-pointer"
                >
                  <div className="relative h-64 overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} mix-blend-overlay`} />
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                      data-swiper-parallax="-100"
                    />
                  </div>

                  <div className="p-6 space-y-4">
                    <h3 
                      className="text-2xl font-heading text-gradient"
                      data-swiper-parallax="-200"
                    >
                      {project.title}
                    </h3>

                    <ul 
                      className="text-muted-foreground leading-relaxed space-y-2 text-sm"
                      data-swiper-parallax="-300"
                    >
                      {project.points.map((point, i) => (
                        <li key={i} className="flex gap-2">
                          <span className="text-accent">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>

                    <div 
                      className="flex flex-wrap gap-2"
                      data-swiper-parallax="-400"
                    >
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-xs font-medium bg-accent/20 text-accent rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* <div 
                      className="flex gap-4 pt-4"
                      data-swiper-parallax="-500"
                    >
                      <Button variant="outline" className="btn-glow flex-1">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Preview
                      </Button>
                      <Button variant="outline" className="btn-glow flex-1">
                        <Github className="mr-2 h-4 w-4" />
                        View Code
                      </Button>
                    </div> */}
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
