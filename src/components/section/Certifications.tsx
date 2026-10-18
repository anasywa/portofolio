import { useDarkMode } from '../../contexts/DarkModeContext';
import { useThemeColors } from '../../hooks/useThemeColors';
import associateDataScientistBnsp from '../../assets/projects/sertifikatbnsp.jpeg';
import { getProjectImage } from '../../assets/projects';
import juniorNetworkAdmin from '../../assets/projects/junior.jpeg';
import workshopKaryaIlmiah from '../../assets/projects/workshop.jpeg';

const gdscDicoding = getProjectImage('dicoding.jpeg');
const codingAi = getProjectImage('diklatonline.jpeg');
const operatorKomputer = getProjectImage('operator.jpeg');

const Certifications = () => {
  const { isDarkMode } = useDarkMode();
  const themeColors = useThemeColors();

  const badges = [
    {
      id: 'associate-data-scientist-bnsp',
      image: associateDataScientistBnsp,
      alt: 'Associate Data Scientist BNSP',
      title: 'Associate Data Scientist',
      subtitle: 'BNSP / LSP Teknologi Digital',
      credentialUrl: 'https://drive.google.com/drive/folders/10JSsMr3yM717wQNKzYVf5xACQSvGumRb?usp=drive_link',
      status: 'completed'
    },
    {
      id: 'dsc-uinam-dicoding',
      image: gdscDicoding,
      alt: 'Info Session GDSC UINAM Dicoding Certificate',
      title: 'Info Session GDSC UINAM',
      subtitle: 'Certificate of Attendance',
      credentialUrl: '#',
      status: 'completed'
    },
    {
      id: 'coding-ai-diklat-online',
      image: codingAi,
      alt: 'Diklat Nasional Coding dan Kecerdasan Artifisial',
      title: 'Coding & Artificial Intelligence',
      subtitle: 'National Training for Future Learning',
      credentialUrl: '#',
      status: 'completed'
    },
  ];

  const credentials = [
    {
      id: 'operator-komputer-madya',
      image: operatorKomputer,
      alt: 'Operator Komputer Madya Certificate',
      title: 'Operator Komputer Madya',
      subtitle: 'Digital Talent Scholarship 2023',
      issuer: 'BBPSDMP Makassar',
      issued: 'Dec 2023',
      expires: '',
      credentialId: '19372671060-25/VSGA/BLSDM.Kominfo/2023',
      credentialUrl: '#',
      status: 'completed'
    },
    {
      id: 'junior-network-administrator',
      image: juniorNetworkAdmin,
      alt: 'Junior Network Administrator Certificate',
      title: 'Junior Network Administrator',
      subtitle: 'HVSGA Digital Talent Scholarship 2023',
      issuer: 'Kominfo',
      issued: 'Jun 2023',
      expires: '',
      credentialId: '19368311060-8/VSGA/BLSDM.Kominfo/2023',
      credentialUrl: '#',
      status: 'completed'
    },
    {
      id: 'workshop-penulisan-karya-ilmiah',
      image: workshopKaryaIlmiah,
      alt: 'Workshop Penulisan Karya Ilmiah Mahasiswa Certificate',
      title: 'Workshop Penulisan Karya Ilmiah Mahasiswa',
      subtitle: 'Academic Writing Workshop',
      issuer: 'Jurusan Teknik Informatika, UIN Alauddin Makassar',
      issued: 'Oct 2023',
      expires: '',
      credentialId: '540/TI-UINAM/X/2023',
      credentialUrl: '#',
      status: 'completed'
    }
  ];

  return (
    <section id="certifications" className="py-8 relative" style={{
      background: themeColors.background.sections?.certifications || themeColors.background.gradient,
      transition: 'background 0.3s ease-in-out'
    }}>
      <div className="container mx-auto px-6 relative" style={{ zIndex: 2 }}>
        <h2 className="text-4xl font-bold text-center mb-6" style={{ color: isDarkMode ? themeColors.colors.white : themeColors.colors.pink[500] }}>Certifications & Credentials</h2>

        <div className="max-w-6xl mx-auto">
          {/* AWS Certifications */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            {badges.map((badge) => {
              const BadgeComponent = () => (
                <div className="flex flex-col items-center group">
                  <div className="mb-4">
                    <img
                      src={badge.image}
                      alt={badge.alt}
                      className="w-32 h-32 md:w-40 md:h-40 object-contain transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                      width="160"
                      height="160"
                      sizes="(max-width: 768px) 128px, 160px"
                    />
                  </div>
                  <h3 className="text-center text-sm font-medium mb-2" style={{ color: isDarkMode ? themeColors.colors.pink[300] : themeColors.colors.pink[500] }}>
                    {badge.title}
                  </h3>
                  <p className="text-center text-sm" style={{ color: isDarkMode ? themeColors.colors.dark[300] : themeColors.colors.dark[600] }}>
                    {badge.subtitle || (badge.status === 'in-progress' ? 'In Progress!' : '')}
                  </p>
                </div>
              );

              return badge.credentialUrl ? (
                <a
                  key={badge.id}
                  href={badge.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block transition-transform duration-300 hover:scale-105 cursor-pointer focus:outline-none"
                  style={{ outline: 'none' }}
                  onFocus={(e) => e.currentTarget.blur()}
                  aria-label={`View ${badge.title} credential`}
                >
                  <BadgeComponent />
                </a>
              ) : (
                <div key={badge.id} className="block">
                  <BadgeComponent />
                </div>
              );
            })}
          </div>

          {/* CITI Program Certifications */}
          <div className="flex flex-wrap justify-center gap-8">
            {credentials.map((credential) => {
              const BadgeComponent = () => (
                <div className="flex flex-col items-center group">
                  <div className="mb-4">
                    <img
                      src={credential.image}
                      alt={credential.alt}
                      className="w-32 h-32 md:w-40 md:h-40 object-contain transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                      width="160"
                      height="160"
                      sizes="(max-width: 768px) 128px, 160px"
                    />
                  </div>
                  <h3 className="text-center text-sm font-medium mb-2" style={{ color: isDarkMode ? themeColors.colors.pink[300] : themeColors.colors.pink[500] }}>
                    {credential.title}
                  </h3>
                  <p className="text-center text-sm" style={{ color: isDarkMode ? themeColors.colors.dark[300] : themeColors.colors.dark[600] }}>
                    {credential.subtitle || (credential.status === 'in-progress' ? 'In Progress!' : '')}
                  </p>
                </div>
              );

              return credential.credentialUrl ? (
                <a
                  key={credential.id}
                  href={credential.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block transition-transform duration-300 hover:scale-105 cursor-pointer focus:outline-none"
                  style={{ outline: 'none' }}
                  onFocus={(e) => e.currentTarget.blur()}
                  aria-label={`View ${credential.title} credential`}
                >
                  <BadgeComponent />
                </a>
              ) : (
                <div key={credential.id} className="block">
                  <BadgeComponent />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* Bottom gradient overlay for smooth transition to next section */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{
          height: '60px',
          background: isDarkMode
            ? `linear-gradient(180deg, transparent 0%, ${themeColors.background.gradientEnd} 100%)`
            : `linear-gradient(180deg, transparent 0%, ${themeColors.colors.pink[25]} 100%)`,
          zIndex: 1
        }}
      />
    </section>
  );
};

export default Certifications;
