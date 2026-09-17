
const currentUrl = window.location.href;
const siteUrl = "https://carromeu.com";
let updatedUrl = currentUrl.replace("https://carromeu.com", "");
if (currentUrl.length == updatedUrl.length && currentUrl.startsWith("http://127.0.0.1")) {
  const otherSiteUrl = siteUrl.replace("localhost", "127.0.0.1");
  updatedUrl = currentUrl.replace(otherSiteUrl + "", "");
}
if ("".length > 0) {
  updatedUrl = updatedUrl.replace("/", "");
}
// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-sobre",
    title: "sobre",
    section: "Menu de navegação",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projetos",
          title: "projetos",
          description: "Plataformas, aplicativos e sistemas que construí ou ajudei a construir, do LEDES/UFMS ao Embrapa I/O.",
          section: "Menu de navegação",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-publicações",
          title: "publicações",
          description: "Artigos em periódicos, capítulos de livro e trabalhos em eventos selecionados. A lista completa está no Currículo Lattes.",
          section: "Menu de navegação",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-currículo",
          title: "currículo",
          description: "Resumo estruturado da trajetória, com formação, experiência, projetos, propriedade intelectual, orientações e reconhecimentos. A versão exaustiva está no Currículo Lattes.",
          section: "Menu de navegação",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "projects-andrológico",
          title: 'AndroLógico',
          description: "Aplicativo para exame andrológico bovino e emissão de laudos ao produtor, com operação offline.",
          section: "Projetos",handler: () => {
              window.location.href = "/projects/andrologico/";
            },},{id: "projects-cria-certo",
          title: 'Cria Certo',
          description: "Aplicativo que simula resultados de técnicas reprodutivas na bovinocultura de corte.",
          section: "Projetos",handler: () => {
              window.location.href = "/projects/cria-certo/";
            },},{id: "projects-e-cattle",
          title: 'e-Cattle',
          description: "Plataforma de IoT para pecuária de precisão, tema da tese de doutorado e de seis dissertações coorientadas.",
          section: "Projetos",handler: () => {
              window.location.href = "/projects/e-cattle/";
            },},{id: "projects-e-sapi-portal-da-carne",
          title: 'e-SAPI / Portal da Carne',
          description: "Infraestrutura tecnológica para rastreabilidade bovina e vigilância sanitária, semente da atuação em pecuária.",
          section: "Projetos",handler: () => {
              window.location.href = "/projects/e-sapi/";
            },},{id: "projects-embrapa-i-o",
          title: 'Embrapa I/O',
          description: "Plataforma corporativa de desenvolvimento, entrega automatizada e monitoramento contínuo dos ativos digitais da Embrapa.",
          section: "Projetos",handler: () => {
              window.location.href = "/projects/embrapa-io/";
            },},{id: "projects-pandora",
          title: 'Pandora',
          description: "Plataforma de informação e gestão estratégica da Embrapa Gado de Corte (2011 a 2022).",
          section: "Projetos",handler: () => {
              window.location.href = "/projects/pandora/";
            },},{id: "projects-pasto-certo",
          title: 'Pasto Certo',
          description: "Aplicativo sobre cultivares de forrageiras tropicais da Embrapa, para dispositivos móveis e desktop.",
          section: "Projetos",handler: () => {
              window.location.href = "/projects/pasto-certo/";
            },},{id: "projects-plataforma-precoce",
          title: 'Plataforma +Precoce',
          description: "Simulador do desempenho de sistemas de produção de novilho precoce, integrando Pantanal e Cerrado.",
          section: "Projetos",handler: () => {
              window.location.href = "/projects/precoce/";
            },},{id: "projects-família-sigfap-e-sigproj",
          title: 'Família SIGFAP e SIGProj',
          description: "Sistemas de gestão de fomento adotados por fundações de amparo à pesquisa de vários estados e pelo MEC.",
          section: "Projetos",handler: () => {
              window.location.href = "/projects/sigfap/";
            },},{id: "projects-smids-e-pheno-sight",
          title: 'SMIDS e Pheno Sight',
          description: "Monitoramento agrícola e fenotipagem de forrageiras com drones, satélites e aprendizado profundo.",
          section: "Projetos",handler: () => {
              window.location.href = "/projects/smids-pheno-sight/";
            },},{id: "projects-titan-framework",
          title: 'Titan Framework',
          description: "Framework de aplicações web do LEDES/UFMS para instanciar gerenciadores de conteúdo, com três versões registradas no INPI.",
          section: "Projetos",handler: () => {
              window.location.href = "/projects/titan-framework/";
            },},{
        id: 'social-email',
        title: 'Enviar um email',
        section: 'Redes sociais',
        handler: () => {
          window.open("mailto:%63%61%6D%69%6C%6F@%63%61%72%72%6F%6D%65%75.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-lattes',
        title: 'Lattes',
        section: 'Redes sociais',
        handler: () => {
          window.open("http://lattes.cnpq.br/4383081925249086", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Redes sociais',
        handler: () => {
          window.open("https://orcid.org/0000-0002-7692-8935", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Redes sociais',
        handler: () => {
          window.open("https://github.com/carromeu", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Redes sociais',
        handler: () => {
          window.open("https://www.linkedin.com/in/carromeu", "_blank");
        },
      },{
          id: 'lang-en-us',
          title: 'en-us',
          section: 'Idiomas',
          handler: () => {
            window.location.href = "/en-us" + updatedUrl;
          },
        },{
      id: 'light-theme',
      title: 'Muda o tema para claro',
      description: 'Muda o tema do site para claro',
      section: 'Tema',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Muda o tema para escuro',
      description: 'Muda o tema do site para escuro',
      section: 'Tema',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Usa o tema padrão do sistema',
      description: 'Muda o tema do site para o padrão do sistema',
      section: 'Tema',
      handler: () => {
        setThemeSetting("system");
      },
    },];
