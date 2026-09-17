
const currentUrl = window.location.href;
const siteUrl = "https://carromeu.com";
let updatedUrl = currentUrl.replace("https://carromeu.com", "");
if (currentUrl.length == updatedUrl.length && currentUrl.startsWith("http://127.0.0.1")) {
  const otherSiteUrl = siteUrl.replace("localhost", "127.0.0.1");
  updatedUrl = currentUrl.replace(otherSiteUrl + "", "");
}
if ("en-us".length > 0) {
  updatedUrl = updatedUrl.replace("/en-us", "");
}
// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation menu",
    handler: () => {
      window.location.href = "/en-us/";
    },
  },{id: "nav-projects",
          title: "projects",
          description: "Platforms, apps and systems I built or helped build, from LEDES/UFMS to Embrapa I/O.",
          section: "Navigation menu",
          handler: () => {
            window.location.href = "/en-us/projects/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "Selected journal articles, book chapters and conference papers. The full list is on the Lattes CV.",
          section: "Navigation menu",
          handler: () => {
            window.location.href = "/en-us/publications/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "A structured summary of education, experience, projects, intellectual property, supervision and awards. The exhaustive version is on the Lattes CV.",
          section: "Navigation menu",
          handler: () => {
            window.location.href = "/en-us/cv/";
          },
        },{id: "projects-andrológico",
          title: 'AndroLógico',
          description: "App for bull breeding soundness examination and report generation, working offline in the field.",
          section: "Projects",handler: () => {
              window.location.href = "/en-us/projects/andrologico/";
            },},{id: "projects-cria-certo",
          title: 'Cria Certo',
          description: "App that simulates the outcome of reproductive techniques in beef cattle.",
          section: "Projects",handler: () => {
              window.location.href = "/en-us/projects/cria-certo/";
            },},{id: "projects-e-cattle",
          title: 'e-Cattle',
          description: "IoT platform for precision livestock, subject of my Ph.D. thesis and six co-supervised master&#39;s theses.",
          section: "Projects",handler: () => {
              window.location.href = "/en-us/projects/e-cattle/";
            },},{id: "projects-e-sapi-portal-da-carne",
          title: 'e-SAPI / Portal da Carne',
          description: "Technology infrastructure for cattle traceability and animal health surveillance, the seed of my work in livestock.",
          section: "Projects",handler: () => {
              window.location.href = "/en-us/projects/e-sapi/";
            },},{id: "projects-embrapa-i-o",
          title: 'Embrapa I/O',
          description: "Embrapa&#39;s corporate platform for collaborative development, automated delivery and continuous monitoring of digital assets.",
          section: "Projects",handler: () => {
              window.location.href = "/en-us/projects/embrapa-io/";
            },},{id: "projects-pandora",
          title: 'Pandora',
          description: "Information and strategic management platform of Embrapa Beef Cattle (2011 to 2022).",
          section: "Projects",handler: () => {
              window.location.href = "/en-us/projects/pandora/";
            },},{id: "projects-pasto-certo",
          title: 'Pasto Certo',
          description: "App about Embrapa&#39;s tropical forage cultivars, for mobile and desktop devices.",
          section: "Projects",handler: () => {
              window.location.href = "/en-us/projects/pasto-certo/";
            },},{id: "projects-precoce-platform",
          title: '+Precoce Platform',
          description: "Simulator of early-slaughter beef production systems, integrating the Pantanal and Cerrado biomes.",
          section: "Projects",handler: () => {
              window.location.href = "/en-us/projects/precoce/";
            },},{id: "projects-sigfap-family-and-sigproj",
          title: 'SIGFAP family and SIGProj',
          description: "Research funding management systems adopted by state research foundations across Brazil and by the Ministry of Education.",
          section: "Projects",handler: () => {
              window.location.href = "/en-us/projects/sigfap/";
            },},{id: "projects-smids-and-pheno-sight",
          title: 'SMIDS and Pheno Sight',
          description: "Agricultural monitoring and forage phenotyping with UAVs, satellites and deep learning.",
          section: "Projects",handler: () => {
              window.location.href = "/en-us/projects/smids-pheno-sight/";
            },},{id: "projects-titan-framework",
          title: 'Titan Framework',
          description: "Web application framework from LEDES/UFMS for instantiating content management systems, with three versions registered at INPI.",
          section: "Projects",handler: () => {
              window.location.href = "/en-us/projects/titan-framework/";
            },},{
        id: 'social-email',
        title: 'Send an email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%63%61%6D%69%6C%6F@%63%61%72%72%6F%6D%65%75.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-lattes',
        title: 'Lattes',
        section: 'Socials',
        handler: () => {
          window.open("http://lattes.cnpq.br/4383081925249086", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0002-7692-8935", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/carromeu", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/camilo.carromeu", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/ccarromeu", "_blank");
        },
      },{
        id: 'social-embrapa',
        title: 'Embrapa',
        section: 'Socials',
        handler: () => {
          window.open("https://www.embrapa.br/equipe/-/empregado/354215/camilo-carromeu", "_blank");
        },
      },{
          id: 'lang-pt-br',
          title: 'pt-br',
          section: 'Languages',
          handler: () => {
            window.location.href = "" + updatedUrl;
          },
        },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
