import React, { useState } from 'react';
import {
  Code,
  Database,
  Bot,
  Zap,
  CheckCircle,
  ArrowRight,
  Mail,
  Github,
  Linkedin,
  Twitter,
  Cpu,
  Layers,
  Terminal,
  MessageSquare,
  Image as ImageIcon
} from 'lucide-react';
import ramoneurImage from './assets/ramoneur_ease_mockup.webp';
import autocrmImage from './assets/autocrm_mockup.webp';
import smartshopImage from './assets/smartshop_mockup.webp';
import docugenImage from './assets/docugen_mockup.webp';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-indigo-500 selection:text-white">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="font-bold text-white">SD</span>
              </div>
              <span className="font-bold text-xl tracking-tight">Sokle<span className="text-indigo-400">Digital</span>.</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {['Services', 'Pourquoi moi', 'Processus', 'Projets'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                  className="text-slate-300 hover:text-white transition-colors text-sm font-medium"
                >
                  {item}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-white text-slate-950 px-5 py-2.5 rounded-full font-semibold hover:bg-indigo-50 transition-all transform hover:scale-105"
              >
                Me contacter
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white p-2">
                {isMenuOpen ? <Zap className="h-6 w-6" /> : <Layers className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-900 border-b border-slate-800">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {['Services', 'Pourquoi moi', 'Processus', 'Projets', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                  className="block w-full text-left px-3 py-3 text-slate-300 hover:text-white hover:bg-slate-800 rounded-md text-base font-medium"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-600/20 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-[100px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 mb-8 animate-fade-in-up">
            <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">Disponible pour nouveaux projets</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight">
            Développeur Web & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400">
              Automatisation IA
            </span>
          </h1>

          <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-400 mb-10 leading-relaxed">
            Je construis des applications web performantes et j'intègre des agents IA
            qui automatisent vos processus métier. Gagnez du temps, réduisez vos coûts.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white rounded-lg font-bold text-lg shadow-lg shadow-indigo-500/25 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              Discutons de votre projet <ArrowRight size={20} />
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="px-8 py-4 bg-slate-900 border border-slate-700 hover:border-slate-500 text-white rounded-lg font-bold text-lg transition-all flex items-center justify-center"
            >
              Voir mes services
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Expertise Technique</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Une approche hybride combinant développement robuste et intelligence artificielle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard
              icon={<Code size={32} className="text-blue-400" />}
              title="Sites Vitrines"
              desc="Design moderne et responsive (React, Next.js). Performance et SEO optimisés pour votre marque."
            />
            <ServiceCard
              icon={<Database size={32} className="text-indigo-400" />}
              title="Apps Web & SaaS"
              desc="Applications complexes avec bases de données, authentification et tableaux de bord (Node, Supabase)."
            />
            <ServiceCard
              icon={<Bot size={32} className="text-purple-400" />}
              title="Agents IA"
              desc="Chatbots intelligents et assistants virtuels entraînés sur vos données d'entreprise."
            />
            <ServiceCard
              icon={<Zap size={32} className="text-yellow-400" />}
              title="Automatisation"
              desc="Connexion entre vos outils (n8n, Make) pour supprimer les tâches répétitives."
            />
          </div>
        </div>
      </section>

      {/* Why Me Section */}
      <section id="pourquoi-moi" className="py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Pourquoi choisir un développeur <span className="text-indigo-400">augmenté par l'IA</span> ?
              </h2>
              <p className="text-slate-400 mb-8 text-lg">
                Le développement classique ne suffit plus. Je vous apporte des solutions qui ne se contentent pas d'exister, mais qui travaillent pour vous.
              </p>

              <div className="space-y-6">
                <FeatureRow
                  title="Gain de temps massif"
                  text="Mes solutions d'automatisation réduisent vos tâches manuelles de 40% à 80%."
                />
                <FeatureRow
                  title="Approche Business First"
                  text="Je ne code pas juste pour coder. Je développe pour augmenter votre ROI."
                />
                <FeatureRow
                  title="Solutions Sur-Mesure"
                  text="Pas de templates rigides. Une architecture adaptée à vos besoins spécifiques."
                />
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl transform rotate-3 blur opacity-30"></div>
              <div className="relative bg-slate-900 border border-slate-800 p-8 rounded-2xl shadow-2xl">
                <div className="flex items-center gap-4 mb-6 border-b border-slate-800 pb-6">
                  <div className="w-12 h-12 bg-indigo-500/20 rounded-full flex items-center justify-center text-indigo-400">
                    <Terminal size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Tech Stack Moderne</h3>
                    <p className="text-slate-400 text-sm">Performance & Scalabilité</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {['React / Next.js', 'Node.js', 'Python / AI', 'PostgreSQL', 'OpenAI API', 'Tailwind CSS'].map((tech) => (
                    <div key={tech} className="bg-slate-950 p-3 rounded-lg text-center text-sm font-mono text-slate-300 border border-slate-800/50">
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="processus" className="py-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Mon Processus</h2>
            <p className="text-slate-400">Clarté, rapidité et transparence à chaque étape.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <ProcessStep number="01" title="Analyse" desc="Audit de vos besoins et identification des opportunités d'automatisation." />
            <ProcessStep number="02" title="Proposition" desc="Plan technique détaillé, stack technologique et devis transparent." />
            <ProcessStep number="03" title="Développement" desc="Construction agile avec points d'étape réguliers pour valider la direction." />
            <ProcessStep number="04" title="Livraison" desc="Déploiement, formation à l'outil et suivi post-lancement." />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projets" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">Projets Récents</h2>
              <p className="text-slate-400">Exploration de cas d'usage web et IA.</p>
            </div>
            <a href="#" className="hidden md:flex items-center text-indigo-400 hover:text-indigo-300 font-medium mt-4 md:mt-0">
              Voir tout le portfolio <ArrowRight size={16} className="ml-2" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              category="Web App / PWA"
              title="Ramoneur Ease"
              desc="Plateforme complète de gestion pour ramoneurs : prise de rendez-vous, facturation, mode hors-ligne et génération de certificats."
              tags={['Next.js', 'Supabase', 'Tailwind']}
              color="bg-orange-500"
              image={ramoneurImage}
            />
            <ProjectCard
              category="SaaS B2B"
              title="AutoCRM Dashboard"
              desc="Plateforme de gestion client avec enrichissement automatique des leads via IA."
              tags={['React', 'Node', 'OpenAI']}
              color="bg-blue-500"
              image={autocrmImage}
            />
            <ProjectCard
              category="E-commerce"
              title="SmartShop Vitrine"
              desc="Site e-commerce ultra-rapide avec recommandations produits personnalisées."
              tags={['Next.js', 'Stripe', 'Tailwind']}
              color="bg-purple-500"
              image={smartshopImage}
            />
            <ProjectCard
              category="Automation"
              title="DocuGen Agent"
              desc="Agent IA capable de générer et d'envoyer des contrats PDF depuis un email."
              tags={['Python', 'LangChain', 'Gmail API']}
              color="bg-indigo-500"
              image={docugenImage}
            />
          </div>

          <div className="mt-8 text-center md:hidden">
            <a href="#" className="text-indigo-400 font-medium">Voir tout le portfolio →</a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-indigo-900/20"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Prêt à moderniser votre activité ?
          </h2>
          <p className="text-xl text-indigo-100 mb-10">
            Ne laissez pas la technologie vous ralentir. Discutons de la manière dont nous pouvons construire votre futur outil dès aujourd'hui.
          </p>
          <button
            onClick={() => scrollToSection('contact')}
            className="px-10 py-5 bg-white text-indigo-900 rounded-lg font-bold text-xl hover:bg-indigo-50 transition-colors shadow-xl"
          >
            Démarrer un projet
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-slate-950 border-t border-slate-800 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
            <div className="md:col-span-5">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="font-bold text-white">D</span>
                </div>
                <span className="font-bold text-xl tracking-tight">Dev<span className="text-indigo-400">AI</span>.</span>
              </div>
              <p className="text-slate-400 mb-6 max-w-sm">
                Développeur Freelance spécialisé dans la création d'expériences web modernes et l'intégration de solutions d'intelligence artificielle.
              </p>
              <div className="flex space-x-4">
                <SocialIcon icon={<Github size={20} />} />
                <SocialIcon icon={<Linkedin size={20} />} />
                <SocialIcon icon={<Twitter size={20} />} />
              </div>
            </div>

            <div className="md:col-span-3">
              <h4 className="text-white font-bold mb-6">Services</h4>
              <ul className="space-y-4 text-slate-400">
                <li><a href="#" className="hover:text-indigo-400 transition-colors">Développement Web</a></li>
                <li><a href="#" className="hover:text-indigo-400 transition-colors">Applications SaaS</a></li>
                <li><a href="#" className="hover:text-indigo-400 transition-colors">Automatisation IA</a></li>
                <li><a href="#" className="hover:text-indigo-400 transition-colors">Consulting Tech</a></li>
              </ul>
            </div>

            <div className="md:col-span-4">
              <h4 className="text-white font-bold mb-6">Contact</h4>
              <ul className="space-y-4 text-slate-400">
                <li className="flex items-center gap-3">
                  <Mail size={18} className="text-indigo-400" />
                  <a href="mailto:hello@example.com" className="hover:text-white">hello@votresite.com</a>
                </li>
                <li className="flex items-center gap-3">
                  <MessageSquare size={18} className="text-indigo-400" />
                  <span>Réponse sous 24h</span>
                </li>
                <li className="mt-4">
                  <div className="p-4 bg-slate-900 rounded-lg border border-slate-800">
                    <p className="text-sm text-slate-400">"Excellent travail sur notre automatisation CRM. Je recommande !"</p>
                    <p className="text-xs text-indigo-400 mt-2 font-bold">- Client Satisfait</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
            <p>&copy; 2025 Sokle Digital Freelance. Tous droits réservés.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-slate-300">Mentions Légales</a>
              <a href="#" className="hover:text-slate-300">Confidentialité</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

/* Sub-components for cleaner code structure */

const ServiceCard = ({ icon, title, desc }) => (
  <div className="bg-slate-950 p-8 rounded-2xl border border-slate-800 hover:border-indigo-500/50 transition-all group hover:-translate-y-2 hover:shadow-xl hover:shadow-indigo-500/10">
    <div className="mb-6 p-3 bg-slate-900 rounded-xl w-fit group-hover:bg-indigo-500/10 transition-colors">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
    <p className="text-slate-400 leading-relaxed">{desc}</p>
  </div>
);

const FeatureRow = ({ title, text }) => (
  <div className="flex items-start gap-4">
    <div className="mt-1 text-indigo-400">
      <CheckCircle size={20} />
    </div>
    <div>
      <h4 className="font-bold text-white mb-1">{title}</h4>
      <p className="text-slate-400 text-sm">{text}</p>
    </div>
  </div>
);

const ProcessStep = ({ number, title, desc }) => (
  <div className="relative p-6 rounded-xl border border-slate-800/50 bg-slate-950/50">
    <span className="absolute -top-6 left-6 text-6xl font-bold text-slate-800/50 z-0">{number}</span>
    <div className="relative z-10">
      <h3 className="text-xl font-bold mb-3 mt-4 text-indigo-100">{title}</h3>
      <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
    </div>
  </div>
);

const ProjectCard = ({ category, title, desc, tags, color, image }) => (
  <div className="group rounded-xl overflow-hidden bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all">
    <div className={`h-48 ${color} opacity-80 group-hover:opacity-100 transition-opacity relative flex items-center justify-center overflow-hidden`}>
      {image ? (
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover opacity-50 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-105 transform"
        />
      ) : (
        <Cpu className="text-white opacity-20 w-24 h-24 transform rotate-12 group-hover:scale-110 transition-transform duration-500" />
      )}
      <div className="absolute top-4 left-4">
        <span className="px-3 py-1 bg-black/50 backdrop-blur-sm text-white text-xs font-bold rounded-full uppercase tracking-wide">
          {category}
        </span>
      </div>
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold mb-2 text-white group-hover:text-indigo-400 transition-colors">{title}</h3>
      <p className="text-slate-400 mb-4 text-sm">{desc}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span key={tag} className="text-xs px-2 py-1 rounded bg-slate-800 text-slate-300 font-mono">
            {tag}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const SocialIcon = ({ icon }) => (
  <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-indigo-600 hover:text-white transition-all">
    {icon}
  </a>
);

export default App;
