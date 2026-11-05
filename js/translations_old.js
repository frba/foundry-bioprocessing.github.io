/**
 * ============================================================================
 * CONCORDIA GENOME FOUNDRY — CENTRAL TRANSLATION DICTIONARY (EN -> FR)
 * ============================================================================
 *
 * HOW TO EDIT OR ADD TRANSLATIONS IN THE FUTURE:
 * 1. Find the section below corresponding to the page you are editing
 *    (e.g., `common`, `index`, `capabilities`, `workWithUs`, `instrumentation`,
 *    `funding`, `collaboration`, `publications`, `news`, `about`, `partners`).
 * 2. Each line maps the exact English text to its French translation:
 *      "English text on page": "French translation",
 * 3. If you change text in an HTML file, simply update the matching English key
 *    and French value here (or add a new `"English": "French"` line).
 * 4. You can also optionally add `data-i18n="CustomKey"` to any HTML element
 *    and put `"CustomKey": "Texte en français"` in this file.
 * ============================================================================
 */

window.CGF_TRANSLATIONS = {
  // ==========================================================================
  // 1. COMMON (Navbar, Footer, Shared Buttons, Testimonials, Modals)
  // ==========================================================================
  common: {
    // Navbar
    "Home": "Accueil",
    "Capabilities": "Capacités",
    "Work With Us": "Collaborer avec nous",
    "Research & Impact": "Recherche et impact",
    "News & Updates": "Actualités",
    "Resources": "Ressources",
    "Instrumentation List": "Liste des instruments",
    "Concordia Researcher Directory": "Répertoire des chercheurs de Concordia",
    "Research Funding Directory": "Répertoire du financement de la recherche",
    "About": "À propos",
    "Contact us ↗": "Nous joindre ↗",
    "Open navigation menu": "Ouvrir le menu de navigation",

    // Footer
    "Integrated research infrastructure for high-throughput bioengineering, microbial and mammalian workflow development, and microbial bioprocessing.":
      "Infrastructure de recherche intégrée pour la bio-ingénierie à haut débit, le développement de flux de travail microbiens et mammifères, et les bioprocédés microbiens.",
    "A CONCORDIA UNIVERSITY RESEARCH PLATFORM.":
      "UNE PLATEFORME DE RECHERCHE DE L’UNIVERSITÉ CONCORDIA.",
    "EXPLORE": "EXPLORER",
    "Instrumentation": "Instrumentation",
    "CONNECT": "NOUS JOINDRE",
    "Ecosystem": "Écosystème",
    "User Tools": "Outils utilisateurs",
    "Instrument Booking": "Réservation d’instruments",
    "LIMS (Concordia access)": "LIMS (accès Concordia)",
    "For trained users with active accounts.": "Pour les utilisateurs formés ayant un compte actif.",
    "© 2026 Concordia Genome Foundry. All rights reserved.": "© 2026 Fonderie génomique de Concordia. Tous droits réservés.",
    "Privacy": "Confidentialité",
    "Concordia Genome Foundry homepage": "Page d’accueil de la Fonderie génomique de Concordia",
    "Concordia network or authorized access may be required.": "L’accès au réseau de Concordia ou une autorisation peut être requis.",
    "LIMS, Concordia access may be required": "LIMS, un accès Concordia peut être requis",

    // Shared CTA & Navigation labels
    "Explore Capabilities": "Explorer les capacités",
    "Explore capabilities": "Explorer les capacités",
    "Explore Capabilities →": "Explorer les capacités →",
    "Explore capabilities ↗": "Explorer les capacités ↗",
    "See Research & Impact": "Voir la recherche et l’impact",
    "See Research & Impact →": "Voir la recherche et l’impact →",
    "View instruments": "Voir les instruments",
    "Close modal": "Fermer la fenêtre",

    // Partner Testimonials (js/main.js)
    "Research Services & Residency": "Services de recherche et résidence",
    "Research Services": "Services de recherche",
    "Training & Direct Access": "Formation et accès direct",
    "Service Project": "Projet de service",
    "Collaboration": "Collaboration",
    "VP Research": "VP Recherche",
    "CSO & Founder": "Directeur scientifique et fondateur",
    "Co-Founder & CSO": "Cofondateur et directeur scientifique",
    "Applied Research Lead": "Responsable de la recherche appliquée",
    "Associate Professor": "Professeur agrégé",
    "Senior Research Officer": "Agent principal de recherche",
    "“We initially began working with the Genome Foundry through a service contract and eventually decided to embed a team on-site. Having direct access to their equipment, technical expertise, and support has significantly accelerated our progress, from strain prototyping to bioprocessing and production scale-up. Additionally, hiring Concordia graduates who were already familiar with the platforms has made our onboarding process much smoother.”":
      "« Nous avons d’abord collaboré avec la Fonderie génomique dans le cadre d’un contrat de service avant d’intégrer une équipe sur place. L’accès direct aux équipements, à l’expertise technique et au soutien de l’équipe a considérablement accéléré nos progrès, du prototypage de souches jusqu’aux bioprocédés et à la mise à l’échelle. De plus, l’embauche de diplômés de Concordia déjà familiers avec les plateformes a grandement facilité l’intégration de notre personnel. »",
    "“We brought the Concordia Genome Foundry a challenging project: dozens of complex DNA constructs, some reaching 30 kb. These were not straightforward assemblies, and the team worked through several technical hurdles along the way. What stood out was their willingness to try different approaches and find solutions rather than simply stick to the original plan. They were knowledgeable, responsive, and genuinely invested in making the project succeed. Throughout, they kept us informed and treated the work as a shared problem rather than a handoff. It is exactly the kind of collaborative partnership we value, and we would gladly work with them again.”":
      "« Nous avons confié à la Fonderie génomique de Concordia un projet exigeant : des dizaines de constructions d’ADN complexes, certaines atteignant 30 kb. Il ne s’agissait pas d’assemblages simples, et l’équipe a surmonté plusieurs défis techniques en cours de route. Leur volonté d’essayer différentes approches et de trouver des solutions plutôt que de s’en tenir aveuglément au plan initial s’est particulièrement démarquée. L’équipe s’est montrée compétente, réactive et véritablement investie dans la réussite du projet. »",
    "“Direct access to the platform helped us use the Echo acoustic droplet ejection system for precise reagent printing as part of our prototype development. The team supported method onboarding, trained us on the workflow, and gave us access to specialized instrumentation that would have been difficult to build internally. It has been a practical way to move our R&D forward while staying lean.”":
      "« L’accès direct à la plateforme nous a permis d’utiliser le système acoustique Echo pour l’impression précise de réactifs dans le cadre du développement de notre prototype. L’équipe a soutenu l’intégration de la méthode, nous a formés sur le flux de travail et nous a donné accès à une instrumentation spécialisée qu’il aurait été difficile de mettre en place à l’interne. »",
    "“The bioprocessing team has been a valuable partner for our development work. Their expertise and experience facilitated onboarding our fungal organism, adapting our protocol, and transferring our process from shake flasks to 3- to 20-liter bioreactor scale. Along the way, they were accessible, flexible, and collaborative, and welcomed our on-site presence during the work. We look forward to continuing this work with them as we move toward pilot scale.”":
      "« L’équipe des bioprocédés a été un partenaire précieux pour nos travaux de développement. Son expertise a facilité l’intégration de notre organisme fongique, l’adaptation de notre protocole et le transfert de notre procédé des fioles agitées vers des bioréacteurs de 3 à 20 litres. Tout au long du projet, l’équipe s’est montrée accessible, flexible et collaborative. »",
    "Testimonial navigation": "Navigation des témoignages",
    "Previous testimonials": "Témoignages précédents",
    "Previous": "Précédent",
    "Next testimonials": "Témoignages suivants",
    "Next": "Suivant",
    "Partner testimonials carousel": "Carrousel des témoignages de partenaires",
    "Testimonial pagination": "Pagination des témoignages"
  },

  // ==========================================================================
  // 2. INDEX PAGE (index.html)
  // ==========================================================================
  index: {
    "BUILD MORE. TEST MORE. LEARN MORE.": "CONSTRUIRE PLUS. TESTER PLUS. APPRENDRE PLUS.",
    "Engineer Biology": "Concevoir la biologie",
    "with a Biofoundry.": "avec une biofonderie.",
    "Automation-enabled infrastructure for building, testing, characterizing, and scaling biological systems, from genetic and strain variants to mammalian cell engineering, screening and microbial bioprocesses.":
      "Infrastructure automatisée pour construire, tester, caractériser et mettre à l’échelle des systèmes biologiques, des variants génétiques et microbiens jusqu’à l’ingénierie de cellules de mammifères, au criblage et aux bioprocédés microbiens.",
    "WAYS TO WORK WITH US": "FAÇONS DE COLLABORER AVEC NOUS",
    "Research services": "Services de recherche",
    "Startup lab space": "Espaces de laboratoire pour jeunes pousses",
    "Training & direct access": "Formation et accès direct",
    "Collaborative projects": "Projets collaboratifs",
    "Explore all capabilities": "Explorer toutes les capacités",
    "Bioprocessing & scale-up": "Bioprocédés et mise à l’échelle",

    // DBTL Section
    "An iterative approach to biological engineering": "Une approche itérative de l’ingénierie biologique",
    "Design": "Concevoir",
    "Define the biological question, identify relevant factors, and establish starting designs and experimental strategy.":
      "Définir la question biologique, identifier les facteurs pertinents et établir les conceptions initiales ainsi que la stratégie expérimentale.",
    "Build": "Construire",
    "Create biological systems, libraries, and variants using parallel, automation-enabled workflows.":
      "Créer des systèmes biologiques, des banques et des variants à l’aide de flux de travail parallèles et automatisés.",
    "Test": "Tester",
    "Run screens, assays, and analytical measurements across designs and conditions.":
      "Exécuter des criblages, des dosages et des mesures analytiques sur l’ensemble des conceptions et des conditions.",
    "Learn": "Apprendre",
    "Review results, select promising directions, and steer the next":
      "Analyser les résultats, sélectionner les pistes prometteuses et orienter le prochain cycle",
    "design–build–test": "conception–construction–test",
    "cycle.": ".",
    "Scale": "Mettre à l’échelle",
    "Advance relevant microbial systems toward process development and production.":
      "Faire progresser les systèmes microbiens pertinents vers le développement de procédés et la production.",

    // Biological Scope & Plate Grid
    "From": "Des",
    "genetic and strain variants": "variants génétiques et de souches",
    "to": "à",
    "mammalian cell engineering and assays": "l’ingénierie et aux essais sur cellules de mammifères",
    ", our platforms help researchers explore more biological designs and experimental conditions.":
      ", nos plateformes aident les chercheurs à explorer davantage de conceptions biologiques et de conditions expérimentales.",
    "We develop and adapt automated workflows for DNA assembly, transformation, culturing, testing, and screening at higher throughput.":
      "Nous développons et adaptons des flux de travail automatisés pour l’assemblage d’ADN, la transformation, la culture, les tests et le criblage à haut débit.",

    // Research Streams
    "ONE INTEGRATED PLATFORM": "UNE PLATEFORME INTÉGRÉE",
    "Two research streams. One shared execution engine.": "Deux axes de recherche. Un moteur d’exécution partagé.",
    "Shared automation, high-throughput experimentation, analytical workflows, and data-supported decision-making connect biological design with screening, characterization, and scale.":
      "L’automatisation partagée, l’expérimentation à haut débit, les flux analytiques et la prise de décision appuyée par les données relient la conception biologique au criblage, à la caractérisation et à la mise à l’échelle.",
    "Microbial Engineering to Biomanufacturing": "De l’ingénierie microbienne à la biofabrication",
    "Support microbial engineering workflows that extend toward bioprocess development and scale-up.":
      "Soutenir les flux d’ingénierie microbienne qui s’étendent jusqu’au développement de bioprocédés et à la mise à l’échelle.",
    "Strain engineering": "Ingénierie de souches",
    "Screening and optimization": "Criblage et optimisation",
    "Process development": "Développement de procédés",
    "Scale-up and production": "Mise à l’échelle et production",
    "Shared Platform Engine": "Moteur de plateforme partagé",
    "Automation · Experimentation · Analysis · Data": "Automatisation · Expérimentation · Analyse · Données",
    "Mammalian Cell Engineering": "Ingénierie de cellules de mammifères",
    "Support mammalian cell engineering workflows for complex models, assays, and candidate evaluation.":
      "Soutenir les flux d’ingénierie de cellules de mammifères pour les modèles complexes, les dosages et l’évaluation de candidats.",
    "Cell engineering": "Ingénierie cellulaire",
    "Disease and biological models": "Modèles biologiques et pathologiques",
    "Screening and functional assays": "Criblage et essais fonctionnels",
    "Cell-line development and characterization": "Développement et caractérisation de lignées cellulaires",

    // What We Offer
    "WHAT WE OFFER": "CE QUE NOUS OFFRONS",
    "Instrumentation.": "Instrumentation.",
    "Workflows.": "Flux de travail.",
    "Expertise.": "Expertise.",
    "Access specialized infrastructure and technical expertise for synthetic biology, mammalian cell engineering and screening, and microbial bioprocess development and scale-up.":
      "Accédez à une infrastructure spécialisée et à une expertise technique pour la biologie synthétique, l’ingénierie et le criblage de cellules de mammifères, ainsi que le développement et la mise à l’échelle de bioprocédés microbiens.",
    "Specialized infrastructure": "Infrastructure spécialisée",
    "Automation, cell culture and screening platforms, bioreactors, and analytical instruments.":
      "Automatisation, plateformes de culture cellulaire et de criblage, bioréacteurs et instruments analytiques.",
    "Adaptable workflows": "Flux de travail adaptables",
    "Methods adapted and automated for parallel experiments, screening and analysis.":
      "Méthodes adaptées et automatisées pour des expériences parallèles, le criblage et l’analyse.",
    "Technical expertise": "Expertise technique",
    "Hands-on experience in automation, workflow implementation, and microbial process development.":
      "Expérience pratique en automatisation, mise en œuvre de flux de travail et développement de procédés microbiens.",
    "Meet the team ↗": "Rencontrer l’équipe ↗",
    "From screening to scale.": "Du criblage à la mise à l’échelle.",
    "Together, the Genome Foundry and Bioprocessing platforms support":
      "Ensemble, les plateformes de la Fonderie génomique et des Bioprocédés soutiennent",
    "multiple stages of biomanufacturing R&D":
      "plusieurs étapes de la R-D en biofabrication",
    ", from DNA construction and genetic and strain variant screening to microbial process development. Our bioreactors and technical expertise support optimization and scale-up toward production-relevant conditions.":
      ", de la construction d’ADN et du criblage de variants génétiques et de souches jusqu’au développement de procédés microbiens. Nos bioréacteurs et notre expertise technique soutiennent l’optimisation et la mise à l’échelle vers des conditions pertinentes pour la production.",
    "Explore bioprocessing ↗": "Explorer les bioprocédés ↗",

    // Applications & Outputs
    "Across disciplines and sectors, a biofoundry can accelerate your R&D.":
      "Dans toutes les disciplines et tous les secteurs, une biofonderie peut accélérer votre R-D.",
    "APPLICATION AREAS": "DOMAINES D’APPLICATION",
    "Industrial biotechnology": "Biotechnologie industrielle",
    "Health & therapeutics": "Santé et produits thérapeutiques",
    "Food & agriculture": "Alimentation et agriculture",
    "Environment": "Environnement",
    "AI & computational biology": "IA et biologie computationnelle",
    "Discovery & methods": "Découverte et méthodes",
    "YOUR PROJECT MIGHT INVOLVE...": "VOTRE PROJET POURRAIT IMPLIQUER...",
    "Proteins & enzymes": "Protéines et enzymes",
    "Small molecules": "Petites molécules",
    "Engineered cells": "Cellules modifiées",
    "Custom assays": "Essais sur mesure",
    "Compound screens": "Criblages de composés",
    "Genetic libraries": "Banques génétiques",
    "Research we've supported": "Recherches que nous avons soutenues",
    "Featured research": "Recherches en vedette",
    "Engineering yeast extracellular vesicles": "Ingénierie de vésicules extracellulaires de levure",
    "Directed evolution of GPCRs": "Évolution dirigée des RCPG",
    "Whey permeate to fumaric acid": "Du perméat de lactosérum à l’acide fumarique",

    // Bottom CTA & Supporters
    "WORK WITH US": "COLLABORER AVEC NOUS",
    "Let's talk about your": "Parlons de votre",
    "project.": "projet.",
    "Bring us a project, a service request, or a workflow challenge. We’ll explore how the Foundry might contribute.":
      "Présentez-nous un projet, une demande de service ou un défi méthodologique. Nous explorerons comment la Fonderie peut y contribuer.",
    "Submit a Request →": "Soumettre une demande →",
    "Building a biotech startup?": "Vous bâtissez une jeune pousse en biotechnologie?",
    "Explore lab space and biofoundry access through our Startup Residency Program.":
      "Découvrez nos espaces de laboratoire et l’accès à la biofonderie grâce à notre programme de résidence pour jeunes pousses.",
    "Explore Startup Residency": "Explorer la résidence pour jeunes pousses",
    "FUNDERS & SUPPORTERS - PAST AND PRESENT": "BAILLEURS DE FONDS ET PARTENAIRES – PASSÉS ET PRÉSENTS"
  },

  // ==========================================================================
  // 3. CAPABILITIES PAGE (capabilities.html)
  // ==========================================================================
  capabilities: {
    "Access individual capabilities or combine them across experimental workflows.":
      "Accédez à des capacités individuelles ou combinez-les au sein de flux de travail expérimentaux.",
    "SynBio & DNA ↓": "Biologie synthétique et ADN ↓",
    "Mammalian Cell Engineering ↓": "Ingénierie de cellules de mammifères ↓",
    "Bioprocessing & Scale-Up ↓": "Bioprocédés et mise à l’échelle ↓",
    "Browse Our Instruments ↗": "Parcourir nos instruments ↗",
    "SHARED ENABLING CAPABILITIES": "CAPACITÉS TRANSVERSALES PARTAGÉES",
    "Methods, measurements, and automation": "Méthodes, mesures et automatisation",
    "Sequencing library preparation": "Préparation de banques de séquençage",
    "Sample preparation, barcoding, and library construction for downstream sequencing.":
      "Préparation d’échantillons, codage à barres et construction de banques pour le séquençage en aval.",
    "Genotyping & qPCR": "Génotypage et qPCR",
    "Targeted validation, gene expression, and variant characterization.":
      "Validation ciblée, expression génique et caractérisation de variants.",
    "Flow cytometry / FACS": "Cytométrie en flux / FACS",
    "Population analysis, single-cell measurements, and sorting.":
      "Analyse de populations, mesures sur cellules uniques et tri cellulaire.",
    "Imaging & phenotyping": "Imagerie et phénotypage",
    "Imaging, microscopy, multiwell measurements, and phenotypic assays.":
      "Imagerie, microscopie, mesures multipuits et essais phénotypiques.",
    "HPLC & mass spectrometry": "CLHP et spectrométrie de masse",
    "Product, metabolite, and analytical characterization.":
      "Caractérisation analytique de produits et de métabolites.",
    "Automation & data workflows": "Automatisation et flux de données",
    "Liquid handling, robotic execution, workflow integration, and LIMS-supported sample tracking":
      "Manipulation de liquides, exécution robotisée, intégration de flux de travail et suivi d’échantillons assisté par LIMS",

    // Microbial Engineering
    "Synthetic Biology & Genetic Engineering Workflows":
      "Flux de travail en biologie synthétique et génie génétique",
    "Automated DNA assembly, library construction, and screening workflows supporting applications from genetic variant testing to microbial strain engineering.":
      "Assemblage automatisé d’ADN, construction de banques et flux de criblage soutenant des applications allant du test de variants génétiques à l’ingénierie de souches microbiennes.",
    "Automated liquid handling for parallel microbial engineering workflows":
      "Manipulation automatisée de liquides pour des flux parallèles d’ingénierie microbienne",
    "Biological systems:": "Systèmes biologiques :",
    "(cloning and plasmid propagation) ·": "(clonage et propagation de plasmides) ·",
    "(selected workflows) · other organisms by project scope.": "(flux sélectionnés) · autres organismes selon la portée du projet.",
    "Formats:": "Formats :",
    "96-well · 384-well": "96 puits · 384 puits",
    "Library Construction & Reaction Setup": "Construction de banques et préparation de réactions",
    "Assemble plasmids, DNA constructs, and genetic libraries using automated, miniaturized reaction setup, including arrayed or pooled designs.":
      "Assembler des plasmides, des constructions d’ADN et des banques génétiques par préparation de réactions miniaturisées et automatisées, en formats ordonnés ou groupés.",
    "Transformation & Host Workflows": "Transformation et flux liés aux hôtes",
    "Transform DNA constructs, select clones, and automate colony handling and culture setup. Adapt workflows to different microbial hosts and project requirements.":
      "Transformer des constructions d’ADN, sélectionner des clones et automatiser la manipulation de colonies et la mise en culture. Adapter les flux à différents hôtes microbiens et exigences de projet.",
    "Functional Screening & Phenotyping": "Criblage fonctionnel et phénotypage",
    "Screen genetic, strain, protein, and enzyme variants for growth, expression, activity, and other functional properties using miniaturized assays, fluorescence, imaging, and kinetic measurements.":
      "Cribler des variants génétiques, de souches, de protéines et d’enzymes pour la croissance, l’expression, l’activité et d’autres propriétés fonctionnelles par essais miniaturisés, fluorescence, imagerie et mesures cinétiques.",
    "Molecular & Analytical Characterization": "Caractérisation moléculaire et analytique",
    "Characterize DNA constructs, genetic variants, and biological samples using sequencing, genotyping, qPCR, HPLC, mass spectrometry, and other analytical methods.":
      "Caractériser des constructions d’ADN, des variants génétiques et des échantillons biologiques par séquençage, génotypage, qPCR, CLHP, spectrométrie de masse et autres méthodes analytiques.",
    "Automated reactions per run": "Réactions automatisées par cycle",
    "PCR · DNA assembly · IVT": "PCR · assemblage d’ADN · TIV",
    "960 wells": "960 puits",
    "Growth monitoring": "Suivi de croissance",
    "Real-time · growth-triggered automation": "Temps réel · automatisation déclenchée par la croissance",

    // Mammalian Cell Engineering
    "Mammalian Cell Engineering & Screening": "Ingénierie et criblage de cellules de mammifères",
    "Automated workflows for mammalian cell culture, genetic modification, reagent delivery, and arrayed cell-based assays.":
      "Flux de travail automatisés pour la culture de cellules de mammifères, la modification génétique, la livraison de réactifs et les essais cellulaires en plaques.",
    "Cell Culture & Maintenance Workflows": "Flux de culture et de maintien cellulaire",
    "Automate the culture, expansion, passaging, and maintenance of mammalian cells, including iPSCs, adherent and suspension cell lines.":
      "Automatiser la culture, l’expansion, le repiquage et le maintien de cellules de mammifères, y compris les CSPi et les lignées adhérentes ou en suspension.",
    "Cell Engineering & Reagent Delivery": "Ingénierie cellulaire et livraison de réactifs",
    "Introduce genetic modifications and deliver reagents using nucleofection, transfection, and other established methods, with workflows adapted to different cell types and applications.":
      "Introduire des modifications génétiques et livrer des réactifs par nucléofection, transfection et autres méthodes établies, avec des flux adaptés à différents types cellulaires et applications.",
    "Arrayed Screening & Cell-Based Assays": "Criblage en réseau et essais cellulaires",
    "Screen genetic perturbations, compounds, and experimental conditions using automated cell-based assays, fluorescence, imaging, and other functional or phenotypic readouts.":
      "Cribler des perturbations génétiques, des composés et des conditions expérimentales à l’aide d’essais cellulaires automatisés, de la fluorescence, de l’imagerie et d’autres lectures fonctionnelles ou phénotypiques.",
    "Cell-Line Development & Characterization": "Développement et caractérisation de lignées cellulaires",
    "Generate and characterize modified cell lines through genome editing, clonal isolation, expansion, genotyping, and other molecular and functional analyses.":
      "Générer et caractériser des lignées cellulaires modifiées par édition génomique, isolement clonal, expansion, génotypage et autres analyses moléculaires et fonctionnelles.",
    "96-well": "96 puits",
    "Arrayed cell engineering": "Ingénierie cellulaire en réseau",
    "384-well": "384 puits",
    "Screening format": "Format de criblage",
    "Automated liquid handling within a controlled mammalian cell-culture environment":
      "Manipulation automatisée de liquides dans un environnement contrôlé de culture de cellules de mammifères",
    "Cell Types:": "Types cellulaires :",
    "iPSCs and other supported mammalian cell types.": "CSPi et autres types de cellules de mammifères pris en charge.",

    // Bioprocessing
    "Microbial Bioprocessing & Scale-Up": "Bioprocédés microbiens et mise à l’échelle",
    "Bioprocess development, optimization, and scale-up to support the transition toward pilot-scale operations.":
      "Développement, optimisation et mise à l’échelle de bioprocédés pour soutenir la transition vers des opérations à l’échelle pilote.",
    "Parallel process development in controlled small-scale 1 L bioreactors":
      "Développement parallèle de procédés dans des bioréacteurs contrôlés de 1 L à petite échelle",
    "Organisms:": "Organismes :",
    "Bacteria · yeast · filamentous fungi": "Bactéries · levures · champignons filamenteux",
    "DSP:": "Traitement en aval :",
    "Disc-stack centrifugation · tangential flow filtration · spray drying · lyophilization":
      "Centrifugation à assiettes · filtration tangentielle · séchage par atomisation · lyophilisation",
    "Process Development & Screening": "Développement de procédés et criblage",
    "Evaluate microbial candidates under controlled, process-relevant conditions using parallel small-scale systems.":
      "Évaluer des candidats microbiens dans des conditions contrôlées et représentatives du procédé à l’aide de systèmes parallèles à petite échelle.",
    "Fermentation Scale-Up": "Mise à l’échelle de la fermentation",
    "Develop and scale up batch, fed-batch, or continuous processes across multiple working volumes.":
      "Développer et mettre à l’échelle des procédés discontinus (batch), semi-continus (fed-batch) ou continus sur plusieurs volumes de travail.",
    "Process Optimization & Analytics": "Optimisation de procédés et analytique",
    "Refine media, feeding strategies, operating parameters, productivity, yield and process performance.":
      "Affiner les milieux, les stratégies d’alimentation, les paramètres opératoires, la productivité, le rendement et la performance du procédé.",
    "Downstream Processing & Recovery": "Traitement en aval et récupération",
    "Develop and adapt recovery, concentration, and stabilization workflows according to product characteristics and project requirements.":
      "Développer et adapter des flux de récupération, de concentration et de stabilisation selon les caractéristiques du produit et les exigences du projet.",
    "Working volume range": "Plage de volumes de travail",
    "Parallel bioreactors": "Bioréacteurs parallèles",
    "Our team works with researchers to implement, adapt, and automate experimental methods. Organism-specific engineering, biological design requirements, and non-routine workflows are assessed during project scoping.":
      "Notre équipe travaille avec les chercheurs pour implanter, adapter et automatiser des méthodes expérimentales. L’ingénierie propre à un organisme, les exigences de conception biologique et les flux non routiniers sont évalués lors du cadrage du projet.",
    "Want to work with the platform?": "Vous souhaitez travailler avec la plateforme?",
    "Tell us about your project, workflow, platform-access need, or technical challenge. We’ll help identify the right capabilities and next step.":
      "Parlez-nous de votre projet, de votre flux de travail, de votre besoin d’accès ou de votre défi technique. Nous vous aiderons à déterminer les capacités appropriées et la prochaine étape."
  },

  // ==========================================================================
  // 4. WORK WITH US PAGE (WorkWithUs.html)
  // ==========================================================================
  workWithUs: {
    "Research services, collaborations, direct instrument access, and lab space for startups.":
      "Services de recherche, collaborations, accès direct aux instruments et espaces de laboratoire pour jeunes pousses.",
    "Ways to Work Together ↓": "Façons de collaborer ↓",
    "Startup Residency ↓": "Résidence pour jeunes pousses ↓",
    "Submit a Request ↓": "Soumettre une demande ↓",
    "WHERE TO START": "PAR OÙ COMMENCER",
    "Possible starting points": "Points de départ possibles",
    "“We need to build or modify a biological system.”":
      "« Nous devons construire ou modifier un système biologique. »",
    "Construct design, DNA assembly, microbial or mammalian engineering, variant generation, and cell-based workflows.":
      "Conception de constructions, assemblage d’ADN, ingénierie microbienne ou mammifère, génération de variants et flux cellulaires.",
    "“We need to test, screen, or characterize something.”":
      "« Nous devons tester, cribler ou caractériser quelque chose. »",
    "Assays, phenotyping, analytical workflows, sequencing preparation, HPLC, mass spectrometry, and microscopy-supported studies.":
      "Dosages, phénotypage, flux analytiques, préparation au séquençage, CLHP, spectrométrie de masse et études appuyées par la microscopie.",
    "“We need to automate or scale a workflow.”":
      "« Nous devons automatiser ou mettre à l’échelle un flux de travail. »",
    "Liquid handling, assay miniaturization, workflow optimization, high-throughput implementation, and automation-enabled process development.":
      "Manipulation de liquides, miniaturisation d’essais, optimisation de flux de travail, déploiement à haut débit et développement de procédés automatisés.",
    "“We need access, training, or technical support.”":
      "« Nous avons besoin d’un accès, d’une formation ou d’un soutien technique. »",
    "Research services, collaborative projects, platform access, hosted arrangements, training, and staff-assisted technical work.":
      "Services de recherche, projets collaboratifs, accès à la plateforme, hébergement, formation et travaux techniques assistés par notre personnel.",
    "WAYS TO ENGAGE": "MODES D’ENGAGEMENT",
    "Ways to work with us": "Façons de collaborer avec nous",
    "Different projects call for different arrangements. The models below may overlap and can be scoped around the work.":
      "Différents projets appellent différentes modalités. Les modèles ci-dessous peuvent se combiner et être adaptés selon les travaux.",
    "Defined experimental work, including protocol onboarding, automation, and execution with agreed deliverables.":
      "Travaux expérimentaux définis, incluant l’intégration de protocoles, l’automatisation et l’exécution selon des livrables convenus.",
    "Collaborative Projects": "Projets collaboratifs",
    "Joint research and method development, including project co-design and potential funding partnerships.":
      "Recherche conjointe et développement méthodologique, incluant la coconception de projets et les partenariats de financement potentiels.",
    "Find a research partner": "Trouver un partenaire de recherche",
    "Browse funding programs": "Parcourir les programmes de financement",
    "Training and access to suitable instrumentation and workflows for qualified users.":
      "Formation et accès aux instruments et flux de travail appropriés pour les utilisateurs qualifiés.",
    "Explore instruments": "Explorer les instruments",
    "Hosting & Residency": "Hébergement et résidence",
    "Dedicated laboratory or office space for startups and teams seeking an ongoing presence.":
      "Espaces de laboratoire ou de bureau dédiés pour les jeunes pousses et les équipes recherchant une présence continue.",
    "Explore residency": "Explorer la résidence",
    "Commercial projects are subject to appropriate agreements and material rights, licensing, and freedom-to-operate considerations.":
      "Les projets commerciaux sont assujettis aux ententes appropriées ainsi qu’aux considérations relatives aux droits sur le matériel, aux licences et à la liberté d’exploitation.",
    "WORKING ALONGSIDE THE FOUNDRY": "TRAVAILLER AUX CÔTÉS DE LA FONDERIE",
    "Startup Residency Program": "Programme de résidence pour jeunes pousses",
    "A home for biotech startups needing laboratory or office space near specialized research infrastructure. Hosted arrangements and any instrument access or technical support are scoped individually.":
      "Un lieu d’accueil pour les jeunes pousses en biotechnologie ayant besoin d’espaces de laboratoire ou de bureau à proximité d’une infrastructure de recherche spécialisée. Les modalités d’hébergement, l’accès aux instruments et le soutien technique sont définis au cas par cas.",
    "Inquire about residency": "S’informer sur la résidence",
    "CURRENT RESIDENT COMPANIES": "ENTREPRISES RÉSIDENTES ACTUELLES",
    "ADDITIONAL OPPORTUNITY": "OPPORTUNITÉ SUPPLÉMENTAIRE",
    "Lab-to-Market Research Program": "Programme de recherche Du laboratoire au marché",
    "Developing a research project with commercial potential? Financial support may be available for selected projects moving toward translation.":
      "Vous développez un projet de recherche à potentiel commercial? Un soutien financier peut être offert à certains projets en voie de valorisation.",
    "Ask us about the program": "Informez-vous sur le programme",
    "Availability, eligibility, and support scope are assessed case by case.":
      "La disponibilité, l’admissibilité et la portée du soutien sont évaluées au cas par cas.",
    "Entrepreneurship support through District 3": "Soutien à l’entrepreneuriat avec District 3",
    "Through our connection with Concordia's District 3 incubator, startups can explore venture coaching, laboratory facilities, and resources to support their growth.":
      "Grâce à notre lien avec l’incubateur District 3 de Concordia, les jeunes pousses peuvent bénéficier d’accompagnement entrepreneurial, d’installations de laboratoire et de ressources pour soutenir leur croissance.",
    "Explore District 3": "Explorer District 3",
    "USER EXPERIENCES": "EXPÉRIENCES D’UTILISATEURS",
    "In their words": "Dans leurs mots",
    "PRACTICAL INFORMATION": "INFORMATIONS PRATIQUES",
    "Pricing & project terms": "Tarification et modalités de projet",
    "A few practical details before getting started.": "Quelques détails pratiques avant de commencer.",
    "Equipment & access rates": "Tarifs d’équipement et d’accès",
    "Most direct instrument-access rates are listed in our reservation system. Rates vary by client type.":
      "La plupart des tarifs d’accès direct aux instruments figurent dans notre système de réservation. Les tarifs varient selon le type de client.",
    "View instrument rates ↗": "Voir les tarifs des instruments ↗",
    "Services & project pricing": "Services et tarification par projet",
    "Project-based services are scoped and quoted individually, based on requirements, milestones, and deliverables.":
      "Les services par projet sont cadrés et chiffrés individuellement selon les besoins, les jalons et les livrables.",
    "Request a quote ↓": "Demander une soumission ↓",
    "Send a request": "Envoyer une demande",
    "Tell us a little about your project, access need, or residency inquiry. We'll suggest a suitable next conversation.":
      "Parlez-nous brièvement de votre projet, de votre besoin d’accès ou de votre demande de résidence. Nous vous proposerons un prochain échange adapté.",
    "Email": "Courriel",
    "Name": "Nom",
    "Organization": "Organisation",
    "Inquiry Area": "Domaine de la demande",
    "Select an area": "Sélectionner un domaine",
    "General inquiry": "Demande générale",
    "Biofoundry services": "Services de biofonderie",
    "Mammalian workflows": "Flux de cellules de mammifères",
    "Bioprocessing / scale-up": "Bioprocédés / mise à l’échelle",
    "Hosted access": "Accès hébergé / résidence",
    "Partnership or referral": "Partenariat ou référence",
    "Message": "Message",
    "Submit Inquiry": "Envoyer la demande",
    "What happens next": "Prochaines étapes",
    "Review": "Analyse",
    "We review your project goals, materials, timelines, and technical requirements.":
      "Nous examinons les objectifs, le matériel, l’échéancier et les exigences techniques de votre projet.",
    "Route": "Orientation",
    "We identify the relevant platform capabilities, access model, and possible project pathway.":
      "Nous déterminons les capacités pertinentes de la plateforme, le modèle d’accès et le parcours de projet possible.",
    "Protect": "Confidentialité",
    "If needed, we can arrange an NDA before discussing confidential details.":
      "Au besoin, nous pouvons mettre en place une entente de confidentialité (NDA) avant de discuter de détails confidentiels.",
    "Scope": "Cadrage",
    "We prepare a scope, cost estimate, and next-step plan for review.":
      "Nous préparons une portée des travaux, une estimation des coûts et un plan des prochaines étapes pour examen.",
    "Our Location": "Notre emplacement",
    "Visits are welcome by appointment;": "Les visites sont les bienvenues sur rendez-vous;",
    "please contact us in advance.": "veuillez nous contacter à l’avance.",
    "Concordia University, Loyola Campus": "Université Concordia, campus Loyola",
    "GE Building": "Pavillon GE",
    "7141 Sherbrooke St W": "7141, rue Sherbrooke Ouest",
    "Montreal, Quebec H4B 1R6": "Montréal (Québec) H4B 1R6",
    "Open in Google Maps": "Ouvrir dans Google Maps",
    "Full name": "Nom complet",
    "Your organization": "Votre organisation",
    "you@organization.ca": "vous@organisation.ca",
    "Tell us about your project, goals, and any relevant details...":
      "Parlez-nous de votre projet, de vos objectifs et de tout détail pertinent..."
  },

  // ==========================================================================
  // 5. INSTRUMENTATION PAGE (instrumentation.html)
  // ==========================================================================
  instrumentation: {
    "Instrumentation & Platforms": "Instrumentation et plateformes",
    "Explore our specialized robotic workstations, automated liquid handlers, analytical screening systems, and bioprocessing bioreactors.":
      "Découvrez nos stations robotisées spécialisées, nos manipulateurs de liquides automatisés, nos systèmes analytiques de criblage et nos bioréacteurs de bioprocédés.",
    "Browse Instruments ↓": "Parcourir les instruments ↓",
    "Capabilities →": "Capacités →",
    "Filter by category:": "Filtrer par catégorie :",
    "All Categories": "Toutes les catégories",
    "Automation & liquid handling": "Automatisation et manipulation de liquides",
    "Automation & sample preparation": "Automatisation et préparation d’échantillons",
    "Nucleic acid construction & analysis": "Construction et analyse d’acides nucléiques",
    "Screening, cytometry & imaging": "Criblage, cytométrie et imagerie",
    "Mammalian cell engineering & culture": "Ingénierie et culture de cellules de mammifères",
    "Analytical characterization": "Caractérisation analytique",
    "Fermentation & bioprocessing": "Fermentation et bioprocédés",
    "Downstream processing": "Traitement en aval",
    "Microfabrication & prototyping": "Microfabrication et prototypage",
    "Showing": "Affichage de",
    "of 61 instruments & platforms": "sur 61 instruments et plateformes",
    "Reset filters": "Réinitialiser les filtres",
    "No matching instruments found": "Aucun instrument correspondant trouvé",
    "We couldn't find any instruments matching your search or filters. Try adjusting your search term or selecting another category.":
      "Aucun instrument ne correspond à votre recherche ou à vos filtres. Essayez de modifier votre terme de recherche ou de sélectionner une autre catégorie.",
    "Clear search & show all": "Effacer la recherche et tout afficher",
    "Search equipment, models, techniques, or workflows (e.g. Echo, Biomek, HPLC, PCR, cytometer)...":
      "Rechercher un équipement, un modèle, une technique ou un flux (p. ex. Echo, Biomek, CLHP, PCR, cytomètre)...",
    "Integrated instruments": "Instruments intégrés",
    "View in BookR": "Voir dans BookR",
    "Coming soon": "À venir",
    "SynBio Suite": "Suite SynBio",
    "Mammalian Studio": "Studio Mammifère",
    "Bioprocessing": "Bioprocédés",
    "Engineering": "Génie",

    // Group Subtitles
    "Programmable workstations and precise liquid transfers across plate-based workflows.":
      "Stations programmables et transferts précis de liquides pour les flux de travail en microplaques.",
    "Sample preparation, plate handling, and integrated workflow accessories.":
      "Préparation d’échantillons, manipulation de plaques et accessoires de flux intégrés.",
    "DNA and RNA workflows, amplification, quality control, and single-cell preparation.":
      "Flux d’ADN et d’ARN, amplification, contrôle de qualité et préparation sur cellules uniques.",
    "Population and single-cell measurements, imaging, and plate-based phenotyping.":
      "Mesures de populations et de cellules uniques, imagerie et phénotypage en plaques.",
    "Cell engineering, controlled culture, and supporting infrastructure.":
      "Ingénierie cellulaire, culture contrôlée et infrastructure de soutien.",
    "Chromatography, spectroscopy, and analytical measurements.":
      "Chromatographie, spectroscopie et mesures analytiques.",
    "Controlled cultivation, process optimization, and scale-up experiments.":
      "Culture contrôlée, optimisation de procédés et expériences de mise à l’échelle.",
    "Separation, concentration, drying, and recovery operations.":
      "Opérations de séparation, de concentration, de séchage et de récupération.",
    "Specialized precision fabrication equipment listed through Engineering.":
      "Équipement spécialisé de fabrication de précision répertorié par la Faculté de génie.",

    // Instrument Descriptions
    "Programmable, scheduled workflows coordinating multiple instruments for DNA assembly, PCR, RT-qPCR, in vitro transcription, nucleic-acid analysis, and automated plate processing.":
      "Flux de travail programmables et planifiés coordonnant plusieurs instruments pour l’assemblage d’ADN, la PCR, la RT-qPCR, la transcription in vitro, l’analyse d’acides nucléiques et le traitement automatisé de plaques.",
    "Integrated robotic platform for scheduled microbial cultivation, normalization, passaging, and phenotyping, including coordinated growth monitoring and plate-based measurements.":
      "Plateforme robotisée intégrée pour la culture microbienne planifiée, la normalisation, le repiquage et le phénotypage, incluant le suivi coordonné de la croissance et les mesures en plaques.",
    "Programmable liquid handling with integrated thermal cycling and temperature-controlled deck positions for multistep molecular biology and sample preparation workflows.":
      "Manipulation programmable de liquides avec cyclage thermique intégré et positions à température contrôlée pour les flux multi-étapes de biologie moléculaire et de préparation d’échantillons.",
    "Acoustic, tipless transfer of small liquid volumes for plate-based experimental workflows.":
      "Transfert acoustique sans embout de petits volumes de liquide pour les flux expérimentaux en plaques.",
    "Automated liquid handling for plate-based microbial and assay workflows.":
      "Manipulation automatisée de liquides pour les flux microbiens et les essais en microplaques.",
    "Integrated automation for scheduled mammalian cell culture and assay workflows, coordinating seeding, feeding, passaging, nucleofection, incubation, and phenotypic readouts.":
      "Automatisation intégrée pour la culture planifiée de cellules de mammifères et les flux d’essais, coordonnant l’ensemencement, l’alimentation, le repiquage, la nucléofection, l’incubation et les lectures phénotypiques.",
    "Flexible programmable pipetting robot for custom, small-batch and multiwell workflows.":
      "Robot de pipetage programmable et flexible pour les flux personnalisés, à petits lots et multipuits.",
    "Automated liquid handling system for next-generation sequencing library preparation.":
      "Système automatisé de manipulation de liquides pour la préparation de banques de séquençage de nouvelle génération.",
    "Low-volume reagent dispensing into microplates for screening and assay setup.":
      "Distribution de réactifs à faible volume dans des microplaques pour le criblage et la préparation d’essais.",
    "Automated bulk dispensing for microplate-based assays and sample preparation.":
      "Distribution automatisée en vrac pour les essais en microplaques et la préparation d’échantillons.",
    "Automated magnetic-bead workflows for nucleic-acid and sample purification.":
      "Flux automatisés à billes magnétiques pour la purification d’acides nucléiques et d’échantillons.",
    "Instrument-assisted magnetic-bead separation for automated sample preparation.":
      "Séparation par billes magnétiques assistée par instrument pour la préparation automatisée d’échantillons.",
    "Automated sealing of microplates for liquid handling and downstream processing.":
      "Scellage automatisé de microplaques pour la manipulation de liquides et le traitement en aval.",
    "Plate heat sealing for microplate-based processing and culture workflows.":
      "Thermoscellage de plaques pour les flux de traitement et de culture en microplaques.",
    "Automated plate centrifugation within integrated robotic workflows.":
      "Centrifugation automatisée de plaques au sein de flux robotisés intégrés.",
    "Automated microplate washing for assay and sample preparation workflows.":
      "Lavage automatisé de microplaques pour les flux d’essais et de préparation d’échantillons.",
    "Centrifugation of laboratory samples and vessels for preparative workflows.":
      "Centrifugation d’échantillons et de récipients de laboratoire pour les flux préparatoires.",
    "Automated agar plate pouring to support microbial culture and colony screening.":
      "Coulée automatisée de boîtes de gélose pour soutenir la culture microbienne et le criblage de colonies.",
    "Automated tube capping and decapping for integrated mammalian-cell workflows.":
      "Bouchage et débouchage automatisés de tubes pour les flux intégrés de cellules de mammifères.",
    "Automated removal of plate seals during multi-step robotic workflows.":
      "Retrait automatisé des scellés de plaques lors de flux robotisés multi-étapes.",
    "Microfluidic sample partitioning for single-cell sequencing workflows.":
      "Partitionnement microfluidique d’échantillons pour les flux de séquençage sur cellules uniques.",
    "Automated electrophoretic sizing and quality assessment of nucleic acids.":
      "Évaluation électrophorétique automatisée de la taille et de la qualité des acides nucléiques.",
    "Automated nucleic-acid fragment sizing and sample quality assessment.":
      "Détermination automatisée de la taille des fragments d’acides nucléiques et évaluation de la qualité des échantillons.",
    "Automated thermal cycling for PCR and related reactions within robotic workflows.":
      "Cyclage thermique automatisé pour la PCR et les réactions connexes au sein de flux robotisés.",
    "Real-time PCR for nucleic-acid quantification and assay measurements.":
      "PCR en temps réel pour la quantification d’acides nucléiques et les mesures d’essais.",
    "Digital PCR system combining ProFlex flat-block thermal cycling with QuantStudio 3D chip readout for nucleic-acid quantification.":
      "Système de PCR numérique combinant le cyclage thermique ProFlex à bloc plat et la lecture sur puce QuantStudio 3D pour la quantification d’acides nucléiques.",
    "Fluorescence-based quantification of DNA, RNA, and proteins.":
      "Quantification par fluorescence de l’ADN, de l’ARN et des protéines.",
    "Dual-laser flow cytometry for cell population, fluorescence, and assay measurements.":
      "Cytométrie en flux à double laser pour l’analyse de populations cellulaires, la fluorescence et les essais.",
    "Spectral flow cytometry for multiparameter cell analysis.":
      "Cytométrie en flux spectrale pour l’analyse cellulaire multiparamétrique.",
    "Spectral flow cytometry with cell sorting.":
      "Cytométrie en flux spectrale avec tri cellulaire.",
    "Multiwell-plate optical readouts for screening and quantitative assays.":
      "Lectures optiques en plaques multipuits pour le criblage et les dosages quantitatifs.",
    "Automated time-course growth monitoring of microbial cultures in microplates.":
      "Suivi temporel automatisé de la croissance de cultures microbiennes en microplaques.",
    "High-content automated microscopy for imaging and phenotypic screening.":
      "Microscopie automatisée à haut contenu pour l’imagerie et le criblage phénotypique.",
    "Automated colony picking to support microbial variant screening and arraying.":
      "Prélèvement automatisé de colonies pour soutenir le criblage et la mise en réseau de variants microbiens.",
    "Microplate absorbance measurements for routine growth and assay readouts.":
      "Mesures d’absorbance en microplaques pour le suivi courant de croissance et les essais.",
    "Automated cell imaging and multimode plate measurement for mammalian assays.":
      "Imagerie cellulaire automatisée et lecture multimode de plaques pour les essais sur cellules de mammifères.",
    "Inverted microscopy for routine observation of adherent mammalian cell cultures.":
      "Microscopie inversée pour l’observation courante de cultures adhérentes de cellules de mammifères.",
    "Plate-format electroporation for delivery of nucleic acids and other cargo into mammalian cells.":
      "Électroporation en format plaque pour le transfert d’acides nucléiques et d’autres molécules dans les cellules de mammifères.",
    "Automated, controlled-atmosphere incubation for mammalian cell culture.":
      "Incubation automatisée sous atmosphère contrôlée pour la culture de cellules de mammifères.",
    "Controlled CO₂ incubation for routine mammalian cell culture.":
      "Incubation à CO₂ contrôlé pour la culture courante de cellules de mammifères.",
    "Temperature- and CO₂-controlled shaking incubation for specialized cell-culture workflows.":
      "Incubation avec agitation à température et CO₂ contrôlés pour les flux spécialisés de culture cellulaire.",
    "Class II biosafety cabinet supporting aseptic mammalian cell handling.":
      "Poste de sécurité microbiologique de classe II soutenant la manipulation aseptique de cellules de mammifères.",
    "Liquid chromatography, ion mobility, and high-resolution mass spectrometry for molecular characterization.":
      "Chromatographie liquide, mobilité ionique et spectrométrie de masse à haute résolution pour la caractérisation moléculaire.",
    "Liquid chromatography with UV and refractive-index detection for process-sample analysis.":
      "Chromatographie liquide avec détection UV et par indice de réfraction pour l’analyse d’échantillons de procédés.",
    "UV-visible absorbance analysis of biological and process samples.":
      "Analyse d’absorbance UV-visible d’échantillons biologiques et de procédés.",
    "Biochemical analyte measurements for fermentation monitoring and process development.":
      "Mesures d’analytes biochimiques pour le suivi de fermentation et le développement de procédés.",
    "Routine laboratory light microscopy and image capture for process samples.":
      "Microscopie optique de laboratoire et capture d’images pour les échantillons de procédés.",
    "Eight benchtop bioreactors for parallel microbial process development and optimization.":
      "Huit bioréacteurs de paillasse pour le développement et l’optimisation parallèles de procédés microbiens.",
    "Controlled bench-scale bioreactor for microbial cultivation and process studies.":
      "Bioréacteur contrôlé de paillasse pour la culture microbienne et les études de procédés.",
    "Controlled stirred-tank fermentation at 3- and 20-L vessel sizes.":
      "Fermentation contrôlée en cuve agitée dans des volumes de 3 L et 20 L.",
    "Steam-in-place (SIP) Bioengineering bioreactor for controlled fermentation and microbial process-development studies.":
      "Bioréacteur Bioengineering stérilisable en place (NEP/SEP) pour la fermentation contrôlée et le développement de procédés microbiens.",
    "Steam-in-place bioreactor supporting larger-scale microbial fermentation and process development.":
      "Bioréacteur stérilisable en place soutenant la fermentation microbienne et le développement de procédés à plus grande échelle.",
    "Steam-in-place bioreactor for fermentation scale-up and process-development studies.":
      "Bioréacteur stérilisable en place pour la mise à l’échelle de la fermentation et les études de développement de procédés.",
    "Multi-level orbital shaking incubation for parallel microbial cultivation.":
      "Incubation à agitation orbitale à plusieurs niveaux pour la culture microbienne parallèle.",
    "Preparation and sterilization of culture media for bioprocess workflows.":
      "Préparation et stérilisation de milieux de culture pour les flux de bioprocédés.",
    "Tangential-flow filtration for product or biomass concentration and buffer exchange.":
      "Filtration tangentielle pour la concentration de produits ou de biomasse et l’échange de tampon.",
    "Laboratory spray drying for downstream product and formulation development.":
      "Séchage par atomisation de laboratoire pour le développement de produits et de formulations en aval.",
    "Freeze drying for preservation, stabilization, or formulation of biological materials.":
      "Lyophilisation pour la conservation, la stabilisation ou la formulation de matières biologiques.",
    "Centrifugal separation for biomass and other bioprocess samples.":
      "Séparation centrifuge de la biomasse et d’autres échantillons de bioprocédés.",
    "Direct-write optical lithography for rapid fabrication of micro-scale patterned devices.":
      "Lithographie optique à écriture directe pour la fabrication rapide de dispositifs microstructurés.",

    // Footer Notes & CTA
    "SCOPE": "PORTÉE",
    "Distinct systems and platforms are catalogued. Duplicate units, small consumables, and ancillary accessories are omitted for clarity.":
      "Les systèmes et plateformes distincts sont répertoriés. Les unités en double, les petits consommables et les accessoires auxiliaires sont omis par souci de clarté.",
    "ACCESS": "ACCÈS",
    "Access, training, and service models vary by platform. Both independent operation (for trained researchers) and assisted service runs are available.":
      "Les modèles d’accès, de formation et de service varient selon la plateforme. L’utilisation autonome (pour les chercheurs formés) et les essais assistés par le personnel sont offerts.",
    "Need help selecting the right instrumentation?": "Besoin d’aide pour choisir la bonne instrumentation?",
    "Tell us about your experimental workflow, target assays, or scale-up requirements. Our scientific and engineering staff can help configure equipment, design automation protocols, and plan pilot runs.":
      "Parlez-nous de votre flux expérimental, de vos essais cibles ou de vos besoins de mise à l’échelle. Notre personnel scientifique et technique peut vous aider à configurer l’équipement, concevoir des protocoles d’automatisation et planifier des essais pilotes.",
    "Contact Foundry": "Contacter la Fonderie"
  },

  // ==========================================================================
  // 6. RESEARCH FUNDING DIRECTORY PAGE (funding.html)
  // ==========================================================================
  funding: {
    "A snapshot of external funding programs for academic research, collaborative projects, and industry R&D.":
      "Un aperçu des programmes de financement externes pour la recherche universitaire, les projets collaboratifs et la R-D industrielle.",
    "Browse Funding Programs ↓": "Parcourir les programmes ↓",
    "Application Support ↓": "Soutien aux demandes ↓",
    "Search & Filter Funding Programs": "Rechercher et filtrer les programmes de financement",
    "Project type": "Type de projet",
    "All pathways": "Tous les parcours",
    "Academic Research": "Recherche universitaire",
    "University research without an industry partner": "Recherche universitaire sans partenaire industriel",
    "Academic–Industry Collaborative R&D": "R-D collaborative université-industrie",
    "Research projects involving academic and industry partners":
      "Projets de recherche impliquant des partenaires universitaires et industriels",
    "Industry R&D": "R-D industrielle",
    "Company-led research and development projects": "Projets de recherche et développement dirigés par une entreprise",
    "Research area": "Domaine de recherche",
    "All areas": "Tous les domaines",
    "Genomics & SynBio": "Génomique et biologie synthétique",
    "Cell & gene therapy": "Thérapie cellulaire et génique",
    "Industrial biotech": "Biotechnologie industrielle",
    "Agriculture & food": "Agriculture et alimentation",
    "AI & machine learning": "IA et apprentissage automatique",
    "Search": "Recherche",
    "Program, funder or keyword...": "Programme, organisme ou mot-clé...",
    "Applicant location": "Lieu du demandeur",
    "Any location": "Tous les lieux",
    "Canada-wide": "Pancanadien",
    "International": "International",
    "All research areas": "Tous les domaines de recherche",
    "Funding type": "Type de financement",
    "All funding types": "Tous les types de financement",
    "Research grants": "Subventions de recherche",
    "Collaborative R&D": "R-D collaborative",
    "Technology development & commercialization": "Développement technologique et commercialisation",
    "Check each funder's official information for current eligibility, deadlines, and eligible expenses.":
      "Vérifiez les informations officielles de chaque organisme subventionnaire concernant l’admissibilité, les dates limites et les dépenses admissibles.",
    "Clear filters": "Effacer les filtres",
    "Programs in this directory": "Programmes dans ce répertoire",
    "Funding opportunities": "Occasions de financement",
    "Browse the programs below and follow the official links for current requirements, deadlines, and eligible expenses.":
      "Parcourez les programmes ci-dessous et suivez les liens officiels pour connaître les exigences, dates limites et dépenses admissibles en vigueur.",
    "No programs match these filters. Try adjusting your search.":
      "Aucun programme ne correspond à ces filtres. Essayez de modifier votre recherche.",
    "Explore funding organizations": "Explorer les organismes de financement",
    "No funding organizations match those filters.": "Aucun organisme de financement ne correspond à ces filtres.",
    "Looking for more funding opportunities?": "Vous cherchez d’autres occasions de financement?",
    "Concordia University maintains a broader directory of research funding opportunities across disciplines, including grants, partnerships and international programs.":
      "L’Université Concordia tient à jour un répertoire élargi d’occasions de financement de la recherche dans toutes les disciplines, incluant les subventions, les partenariats et les programmes internationaux.",
    "Explore Concordia's funding directory ↗": "Explorer le répertoire de financement de Concordia ↗",
    "Deadlines and rules may change between reviews": "Les dates limites et les règles peuvent changer entre les révisions",
    "APPLICATION SUPPORT": "SOUTIEN AUX DEMANDES",
    "Preparing a funding application?": "Vous préparez une demande de financement?",
    "For projects that may involve the Foundry, we can provide a proposed scope of work, cost estimates, and letters of support to accompany funding applications.":
      "Pour les projets pouvant impliquer la Fonderie, nous pouvons fournir une portée des travaux proposée, des estimations de coûts et des lettres d’appui pour accompagner vos demandes de financement.",
    "Discuss your project": "Discuter de votre projet",

    // Dynamic Program Cards labels
    "APPLICATIONS": "DEMANDES",
    "FUNDING": "FINANCEMENT",
    "Official program ↗": "Programme officiel ↗",
    "Program notes": "Notes sur le programme",
    "Confirm eligible expenses": "Confirmer les dépenses admissibles",
    "Confirm current call": "Confirmer l’appel en cours",
    "Confirm program details": "Confirmer les détails du programme",
    "Rolling": "En continu",
    "Consult program": "Consulter le programme",
    "Varies by project": "Varie selon le projet",
    "Varies by call": "Varie selon l’appel",
    "Varies by award": "Varie selon l’octroi",
    "Project-dependent": "Selon le projet",
    "Genomics": "Génomique",
    "Open — new applications": "Ouvert — nouvelles demandes",
    "No fixed deadline": "Aucune date limite fixe",
    "Open — eligible academic teams": "Ouvert — équipes universitaires admissibles",
    "Open until funds committed": "Ouvert jusqu’à engagement des fonds",
    "Consult Genome Centre": "Consulter le centre de génomique",
    "Previous round closed": "Concours précédent terminé",
    "Check competition": "Vérifier le concours",
    "Check next competition": "Vérifier le prochain concours",
    "Ask PROMPT": "Contacter PROMPT",
    "Not confirmed": "Non confirmé",
    "Not announced": "Non annoncé",
    "Contact Mitacs": "Contacter Mitacs",
    "Next round not announced": "Prochain concours non annoncé",
    "Next call unconfirmed": "Prochain appel non confirmé",
    "Initial applications closed": "Demandes initiales fermées",
    "Contact an advisor": "Contacter un conseiller",
    "Next intake unconfirmed": "Prochaine période de dépôt non confirmée",
    "Up to $350,000": "Jusqu’à 350 000 $",
    "$20,000–$1 million/year": "20 000 $ à 1 M$ / an",
    "Up to $2 million (national stream)": "Jusqu’à 2 M$ (volet national)",
    "$50,000–$200,000 (previous round)": "50 000 $ à 200 000 $ (concours précédent)",
    "$50,000–$150,000": "50 000 $ à 150 000 $",
    "$150,000–$300,000": "150 000 $ à 300 000 $",
    "$15,000 per standard unit": "15 000 $ par unité standard",
    "Up to $100,000": "Jusqu’à 100 000 $",
    "Biopharmaceutical R&D between eligible Québec companies and public research institutions.":
      "R-D biopharmaceutique entre des entreprises québécoises admissibles et des établissements publics de recherche.",
    "Support for commercial proof-of-concept and validation of Canadian bio-based products and technologies.":
      "Soutien à la preuve de concept commerciale et à la validation de produits et technologies biosourcés canadiens.",
    "Funding for Canadian university researchers working with an internationally funded research team; no industry partner is required.":
      "Financement pour les chercheurs universitaires canadiens collaborant avec une équipe de recherche financée à l’international; aucun partenaire industriel requis.",
    "Partner-driven natural-sciences and engineering research led by an eligible Canadian university researcher.":
      "Recherche en sciences naturelles et en génie axée sur les partenaires et dirigée par un chercheur universitaire canadien admissible.",
    "Pre-commercial agricultural and agri-food R&D led by eligible industry or not-for-profit applicants.":
      "R-D précommerciale agricole et agroalimentaire dirigée par des demandeurs admissibles de l’industrie ou d’organismes sans but lucratif.",
    "Genomics commercialization projects pairing a Canadian business with an eligible academic research partner.":
      "Projets de commercialisation en génomique jumelant une entreprise canadienne à un partenaire de recherche universitaire admissible.",
    "Applied research, experimental development and adaptation of technology in the Québec bio-food sector.":
      "Recherche appliquée, développement expérimental et adaptation technologique dans le secteur bioalimentaire québécois.",
    "Collaborative development of bioproducts and bioprocesses, including fermentation, purification and scale-up.":
      "Développement collaboratif de bioproduits et de bioprocédés, incluant la fermentation, la purification et la mise à l’échelle.",
    "Genomics proof-of-concept collaborations between Québec public researchers and nonacademic users.":
      "Collaborations de preuve de concept en génomique entre des chercheurs publics québécois et des utilisateurs non universitaires.",
    "Genomics and other omics projects with a Québec research partner and a nonacademic user.":
      "Projets de génomique et d’autres omiques réunissant un partenaire de recherche québécois et un utilisateur non universitaire.",
    "Eligible international research and innovation consortia, including Canadian participation in associated Pillar II calls.":
      "Consortiums internationaux de recherche et d’innovation admissibles, incluant la participation canadienne aux appels associés du Pilier II.",
    "Research programs in the natural sciences and engineering led by eligible Canadian university researchers; no industry partner is required.":
      "Programmes de recherche en sciences naturelles et en génie dirigés par des chercheurs universitaires canadiens admissibles; aucun partenaire industriel requis.",
    "Investigator-led health research grants available through eligible Canadian institutions, without an industry partner requirement.":
      "Subventions de recherche en santé dirigées par des chercheurs par l’entremise d’établissements canadiens admissibles, sans exigence de partenaire industriel.",
    "Supports Québec company–university research collaborations, including AI-enabled R&D. Projects with experimental biology must fit program objectives.":
      "Soutient les collaborations de recherche entreprise-université au Québec, y compris la R-D appuyée par l’IA.",
    "Québec AI innovation for the bioeconomy, including company partnerships with eligible public research institutions.":
      "Innovation en IA au Québec pour la bioéconomie, incluant des partenariats d’entreprises avec des établissements publics de recherche admissibles.",
    "Academic–industry AI research partnership funding through Québec sectoral research organizations.":
      "Financement de partenariats de recherche université-industrie en IA par l’entremise des regroupements sectoriels de recherche du Québec.",
    "Industry-led genomics, AI and automation projects that advance Canadian manufacturing capability.":
      "Projets dirigés par l’industrie en génomique, IA et automatisation faisant progresser les capacités de fabrication canadiennes.",
    "Research internships connecting academic researchers and trainees with eligible partner organizations on collaborative projects.":
      "Stages de recherche reliant des chercheurs universitaires et des stagiaires à des organisations partenaires admissibles dans le cadre de projets collaboratifs.",
    "Collaborative projects developing ingredients, products and technologies for the plant-based food ecosystem.":
      "Projets collaboratifs développant des ingrédients, des produits et des technologies pour l’écosystème des aliments d’origine végétale.",
    "Supports Québec companies developing technologies for RNA therapeutics.":
      "Soutient les entreprises québécoises développant des technologies pour les thérapies à base d’ARN.",
    "Collaborative drug and vaccine R&D using academic expertise and infrastructure.":
      "R-D collaborative sur les médicaments et les vaccins mobilisant l’expertise et les infrastructures universitaires.",
    "Research funding for stem cell and regenerative medicine innovation and translation.":
      "Financement de la recherche pour l’innovation et la valorisation en cellules souches et médecine régénératrice.",
    "Advisory support and possible funding for Canadian SMEs developing innovative products or processes.":
      "Services-conseils et soutien financier possible pour les PME canadiennes développant des produits ou procédés innovants.",
    "Helps eligible Canadian SMEs address food innovation challenges and technical barriers.":
      "Aide les PME canadiennes admissibles à relever des défis d’innovation alimentaire et des obstacles techniques."
  },

  // ==========================================================================
  // 7. CONCORDIA RESEARCHER DIRECTORY PAGE (collaboration.html)
  // ==========================================================================
  collaboration: {
    "Explore Concordia Research Expertise": "Explorer l’expertise de recherche à Concordia",
    "A snapshot of researchers and their areas of expertise across Concordia University, to help you identify potential collaborators for research projects and joint funding applications.":
      "Un aperçu des chercheurs et de leurs domaines d’expertise à l’Université Concordia, pour vous aider à identifier des collaborateurs potentiels pour des projets de recherche et des demandes de financement conjointes.",
    "CONCORDIA RESEARCHERS": "CHERCHEURS DE CONCORDIA",
    "Browse research expertise": "Parcourir l’expertise de recherche",
    "SEARCH": "RECHERCHE",
    "Try ‘enzyme engineering’, ‘yeast’, ‘fermentation’, ‘CRISPR’…":
      "Essayez « ingénierie enzymatique », « levure », « fermentation », « CRISPR »…",
    "DEPARTMENT": "DÉPARTEMENT",
    "All departments": "Tous les départements",
    "BROAD RESEARCH AREAS": "GRANDS DOMAINES DE RECHERCHE",
    "SPECIFIC EXPERTISE": "EXPERTISE SPÉCIFIQUE",
    "Choose a topic, or click any specialty tag on a profile":
      "Choisissez un sujet ou cliquez sur une étiquette de spécialité sur un profil",
    "Researcher directory": "Répertoire des chercheurs",
    "Reset filters ↺": "Réinitialiser les filtres ↺",
    "EXPLORE FURTHER": "EXPLORER DAVANTAGE",
    "Looking beyond this selection?": "Vous cherchez au-delà de cette sélection?",
    "Concordia's university-wide faculty directory covers a much broader range of research expertise. Search by name, academic department, or research keyword to discover additional potential collaborators.":
      "Le répertoire professoral de l’Université Concordia couvre un éventail beaucoup plus large d’expertises de recherche. Recherchez par nom, département ou mot-clé pour découvrir d’autres collaborateurs potentiels.",
    "Explore Concordia faculty directory ↗": "Explorer le répertoire professoral de Concordia ↗",
    "Opens Concordia University's official search tool.": "Ouvre l’outil de recherche officiel de l’Université Concordia.",

    // Dynamic chips, departments, and cards on collaboration.html
    "All expertise": "Toutes les expertises",
    "Microbes & plants": "Microbes et plantes",
    "Cells & health": "Cellules et santé",
    "Proteins & molecules": "Protéines et molécules",
    "Analytics & omics": "Analytique et omique",
    "Automation & devices": "Automatisation et dispositifs",
    "Computation & genomics": "Calcul et génomique",
    "Biomaterials & translation": "Biomatériaux et valorisation",
    "Biology": "Biologie",
    "Biology (joining May 2027)": "Biologie (arrivée en mai 2027)",
    "Chemistry & Biochemistry": "Chimie et biochimie",
    "Chemical & Materials Engineering": "Génie chimique et des matériaux",
    "Building, Civil & Environmental Engineering": "Génie du bâtiment, civil et environnemental",
    "Electrical & Computer Engineering": "Génie électrique et informatique",
    "Health, Kinesiology & Applied Physiology": "Santé, kinésiologie et physiologie appliquée",
    "Physics": "Physique",
    "Psychology": "Psychologie",
    "Synthetic biology": "Biologie synthétique",
    "Enzyme engineering": "Ingénierie enzymatique",
    "Yeast research": "Recherche sur les levures",
    "Metabolic engineering": "Ingénierie métabolique",
    "Fermentation": "Fermentation",
    "Functional genomics": "Génomique fonctionnelle",
    "Microfluidics": "Microfluidique",
    "Drug discovery": "Découverte de médicaments",
    "Mass spectrometry": "Spectrométrie de masse",
    "Biomaterials": "Biomatériaux",
    "Cell biology": "Biologie cellulaire",
    "Computational biology": "Biologie computationnelle",
    "View Concordia profile ↗": "Voir le profil Concordia ↗",
    "View LinkedIn profile ↗": "Voir le profil LinkedIn ↗",
    "Affiliate": "Affilié",
    "No matching researchers": "Aucun chercheur correspondant",
    "Try another keyword or reset your filters.": "Essayez un autre mot-clé ou réinitialisez vos filtres.",
    "Cell division and migration, cytoskeletal regulation, gene editing, and mechanisms relevant to cancer cell biology.":
      "Division et migration cellulaires, régulation du cytosquelette, édition génique et mécanismes liés à la biologie des cellules cancéreuses.",
    "Virology, RNA-virus replication organelles, biochemical and cell-based assays.":
      "Virologie, organites de réplication des virus à ARN, essais biochimiques et cellulaires.",
    "Applied biochemistry, extraction and sustainable manufacturing processes.":
      "Biochimie appliquée, extraction et procédés de fabrication durable.",
    "Antibiotics, antimicrobial resistance, natural products and directed evolution.":
      "Antibiotiques, résistance aux antimicrobiens, produits naturels et évolution dirigée.",
    "Molecular biophysics, ultrasound technologies and biomedical imaging.":
      "Biophysique moléculaire, technologies par ultrasons et imagerie biomédicale.",
    "Biophysical chemistry, model lipid membranes and lipid–protein interactions.":
      "Chimie biophysique, membranes lipidiques modèles et interactions lipides-protéines.",
    "Chemically modified DNA and RNA, nucleic-acid nanoscience and DNA repair.":
      "ADN et ARN chimiquement modifiés, nanosciences des acides nucléiques et réparation de l’ADN.",
    "Synthetic-biology approaches to engineering baker’s yeast extracellular vesicles and exosomes for biomedical delivery.":
      "Approches de biologie synthétique pour l’ingénierie de vésicules extracellulaires et d’exosomes de levure boulangère pour la livraison biomédicale.",
    "Mass-spectrometry-based metabolomics and lipidomics, analytical chemistry, bioanalysis and biomarker discovery.":
      "Métabolomique et lipidomique par spectrométrie de masse, chimie analytique, bioanalyse et découverte de biomarqueurs.",
    "Enzyme and protein engineering through directed evolution, glycosyltransferase research, biocatalysis and chemical biology.":
      "Ingénierie des enzymes et des protéines par évolution dirigée, recherche sur les glycosyltransférases, biocatalyse et biologie chimique.",
    "Marine microbial ecology, environmental genomics and microbial evolution.":
      "Écologie microbienne marine, génomique environnementale et évolution microbienne.",
    "Computational biophysics and molecular dynamics simulations of proteins, biomolecular interactions and materials for biomedical applications.":
      "Biophysique computationnelle et simulations de dynamique moléculaire des protéines, des interactions biomoléculaires et des matériaux pour applications biomédicales.",
    "Population and conservation genetics, evolutionary ecology and environmental adaptation.":
      "Génétique des populations et de la conservation, écologie évolutive et adaptation environnementale.",
    "Yeast and human functional genomics, genetic interaction networks, genome engineering and CRISPR-based screening.":
      "Génomique fonctionnelle chez la levure et l’humain, réseaux d’interactions génétiques, ingénierie du génome et criblage CRISPR.",
    "Neural mechanisms of learning and memory, electrophysiology and optogenetics.":
      "Mécanismes neuronaux de l’apprentissage et de la mémoire, électrophysiologie et optogénétique.",
    "Genomics of filamentous fungi, microbial interactions, secondary metabolism and natural-product biosynthesis.":
      "Génomique des champignons filamenteux, interactions microbiennes, métabolisme secondaire et biosynthèse de produits naturels.",
    "Fermentative biohydrogen and bioalcohol production from biomass, with research in resource recovery and environmental bioenergy.":
      "Production fermentaire de biohydrogène et de bioalcools à partir de la biomasse, récupération des ressources et bioénergie environnementale.",
    "Plant molecular genetics, developmental signalling and functional genomics.":
      "Génétique moléculaire végétale, signalisation du développement et génomique fonctionnelle.",
    "Polymer-based nanomaterials, drug-delivery carriers and biomedical imaging platforms.":
      "Nanomatériaux polymères, vecteurs d’administration de médicaments et plateformes d’imagerie biomédicale.",
    "Plant synthetic biology and metabolic engineering focused on specialized metabolism, enzyme discovery and natural products.":
      "Biologie synthétique végétale et ingénierie métabolique axées sur le métabolisme spécialisé, la découverte d’enzymes et les produits naturels.",
    "Cancer epigenetics, chromatin biology and gene regulation, investigating the mechanisms controlling enhancer activity and gene expression in cancer.":
      "Épigénétique du cancer, biologie de la chromatine et régulation génique, étude des mécanismes contrôlant l’activité des amplificateurs et l’expression génique dans le cancer.",
    "Photochemistry, photocatalysis and artificial photosynthesis for solar energy conversion.":
      "Photochimie, photocatalyse et photosynthèse artificielle pour la conversion de l’énergie solaire.",
    "Computational genomics, human genetics and gene–environment interactions.":
      "Génomique computationnelle, génétique humaine et interactions gènes-environnement.",
    "Heterogeneous catalysis for environmental applications, including emissions reduction, sustainable fuel production and green chemical processes.":
      "Catalyse hétérogène pour applications environnementales, réduction des émissions, carburants durables et procédés chimiques verts.",
    "Imaging mass spectrometry and spatial omics in biological samples.":
      "Spectrométrie de masse par imagerie et omique spatiale dans les échantillons biologiques.",
    "Membrane trafficking, vesicle biology and mechanisms underlying rare genetic disease.":
      "Trafic membranaire, biologie des vésicules et mécanismes sous-jacents aux maladies génétiques rares.",
    "Medicinal and synthetic organic chemistry, drug discovery and green catalysis.":
      "Chimie organique médicinale et synthétique, découverte de médicaments et catalyse verte.",
    "Bioinspired materials, drug delivery, tissue regeneration and antimicrobial systems.":
      "Matériaux bio-inspirés, administration de médicaments, régénération tissulaire et systèmes antimicrobiens.",
    "Biochemistry, genomics, proteomics and molecular and cell biology.":
      "Biochimie, génomique, protéomique et biologie moléculaire et cellulaire.",
    "Immune-cell function, T-cell biology, autoimmunity and cancer immunotherapy.":
      "Fonction des cellules immunitaires, biologie des lymphocytes T, auto-immunité et immunothérapie du cancer.",
    "Bacterial pathogenesis, membrane proteins, molecular interactions and structural protein biochemistry.":
      "Pathogenèse bactérienne, protéines membranaires, interactions moléculaires et biochimie structurale des protéines.",
    "Computational biophysics, molecular dynamics and deep learning.":
      "Biophysique computationnelle, dynamique moléculaire et apprentissage profond.",
    "Global-change ecology, conservation and the evolution of life-history traits.":
      "Écologie des changements globaux, conservation et évolution des traits d’histoire de vie.",
    "Paper-based microfluidics, biosensors, point-of-care diagnostics and stabilization of biologics.":
      "Microfluidique sur papier, biocapteurs, diagnostic au point de service et stabilisation de produits biologiques.",
    "Microfluidics and synthetic biology, including droplet-based methods for biological experiments and screening.":
      "Microfluidique et biologie synthétique, incluant les méthodes à base de gouttelettes pour l’expérimentation et le criblage biologiques.",
    "Metabolic and cellular mechanisms of obesity, adipose tissue biology, lipid metabolism and their roles in cardiometabolic disease.":
      "Mécanismes métaboliques et cellulaires de l’obésité, biologie du tissu adipeux, métabolisme des lipides et maladies cardiométaboliques.",
    "Molecular biology of photosynthetic algae and thylakoid membrane formation.":
      "Biologie moléculaire des algues photosynthétiques et formation des membranes thylakoïdes."
  },

  // ==========================================================================
  // 8. PUBLICATIONS / RESEARCH & IMPACT PAGE (publications.html)
  // ==========================================================================
  publications: {
    "Selected research projects and publications supported by the Foundry's infrastructure and expertise.":
      "Sélection de projets de recherche et de publications soutenus par l’infrastructure et l’expertise de la Fonderie.",
    "Featured Research ↓": "Recherches en vedette ↓",
    "Selected Publications ↓": "Publications sélectionnées ↓",
    "RESEARCH SPOTLIGHT": "PLEINS FEUX SUR LA RECHERCHE",
    "Featured Research": "Recherches en vedette",
    "Collaborations, preprints, and milestone publications highlighting technologies and workflows developed with Foundry platform support.":
      "Collaborations, prépublications et publications marquantes mettant en valeur les technologies et flux de travail développés avec le soutien de la Fonderie.",
    "RESEARCH FEATURE": "PROJET EN VEDETTE",
    "CHRISTOPHER BRETT LAB": "LABORATOIRE CHRISTOPHER BRETT",
    "extracellular vesicles using synthetic biology": "de vésicules extracellulaires par biologie synthétique",
    "Preprint": "Prépublication",
    "preprint": "prépublication",
    "This preprint explores yeast extracellular vesicles as an engineering platform, using synthetic biology workflows to identify and evaluate candidate scaffolds for cargo loading. The work supports iterative design-build-test-learn development for future health and biotechnology applications.":
      "Cette prépublication explore les vésicules extracellulaires de levure comme plateforme d’ingénierie, en utilisant des flux de biologie synthétique pour identifier et évaluer des échafaudages candidats pour le chargement de cargos moléculaires.",
    "Yeast as a chassis for extracellular vesicle engineering":
      "La levure comme châssis pour l’ingénierie de vésicules extracellulaires",
    "Candidate scaffold screening for EV cargo loading":
      "Criblage d’échafaudages candidats pour le chargement de vésicules extracellulaires",
    "Synthetic biology framework for iterative development":
      "Cadre de biologie synthétique pour le développement itératif",
    "Extracellular vesicles": "Vésicules extracellulaires",
    "Yeast": "Levure",
    "Screening": "Criblage",
    "Biotechnology": "Biotechnologie",
    "Read preprint ↗": "Lire la prépublication ↗",
    "VINCENT MARTIN LAB": "LABORATOIRE VINCENT MARTIN",
    "Heterologous engineering of receptors using OrthoRep (HERO) for directed evolution of GPCRs in yeast":
      "Ingénierie hétérologue de récepteurs par OrthoRep (HERO) pour l’évolution dirigée des RCPG chez la levure",
    "This collaboration used the Foundry’s MAESTRO platform to automate growth-triggered serial passaging for GPCR evolution in yeast. The result is a high-throughput workflow for receptor engineering that combines synthetic biology, automation, and directed evolution.":
      "Cette collaboration a utilisé la plateforme MAESTRO de la Fonderie pour automatiser le repiquage en série déclenché par la croissance pour l’évolution de RCPG chez la levure, combinant biologie synthétique, automatisation et évolution dirigée.",
    "OrthoRep-based directed evolution in yeast": "Évolution dirigée basée sur OrthoRep chez la levure",
    "Automated growth-triggered serial passaging on MAESTRO":
      "Repiquage en série automatisé déclenché par la croissance sur MAESTRO",
    "Improved signaling for human GPCR targets": "Signalisation améliorée pour des cibles RCPG humaines",
    "Directed evolution": "Évolution dirigée",
    "GPCRs": "RCPG",
    "Automation": "Automatisation",
    "VINCENT MARTIN LAB – AGROPUR COLLABORATION": "LABORATOIRE VINCENT MARTIN – COLLABORATION AGROPUR",
    "From whey permeate to fumaric acid": "Du perméat de lactosérum à l’acide fumarique",
    "Published research": "Recherche publiée",
    "This published collaboration explores": "Cette collaboration publiée explore",
    "as a platform for converting lactose-rich dairy permeate into fumaric acid. The work combines host evaluation, genetic variant engineering, and fermentation optimization to demonstrate a viable bioprocess route from dairy side streams to a valuable biochemical.":
      "comme plateforme pour convertir le perméat laitier riche en lactose en acide fumarique. Les travaux combinent l’évaluation de l’hôte, l’ingénierie de variants génétiques et l’optimisation de la fermentation pour valoriser les coproduits laitiers.",
    "as a host for whey valorization": "comme hôte pour la valorisation du lactosérum",
    "Fermentation optimization on lactose-rich dairy permeate":
      "Optimisation de la fermentation sur perméat laitier riche en lactose",
    "Published route to fumaric acid production": "Voie publiée de production d’acide fumarique",
    "Microbial bioprocessing": "Bioprocédés microbiens",
    "Whey permeate valorization": "Valorisation du perméat de lactosérum",
    "Fumaric acid": "Acide fumarique",
    "Read publications": "Lire les publications",
    "CATALOGUE": "CATALOGUE",
    "Selected Publications": "Publications sélectionnées",
    "Peer-reviewed articles, review papers, and preprints co-authored by Foundry researchers or enabled by our platform instruments.":
      "Articles évalués par les pairs, articles de synthèse et prépublications cosignés par les chercheurs de la Fonderie ou rendus possibles par les instruments de notre plateforme.",
    "Discovery & Methods": "Découverte et méthodes",
    "Cell Engineering": "Ingénierie cellulaire",
    "Biomanufacturing": "Biofabrication",
    "For Platform Users: acknowledgement & authorship guidance →":
      "Pour les utilisateurs de la plateforme : directives de remerciement et de coautorat →",
    "Have a research project that could use platform support?":
      "Vous avez un projet de recherche qui pourrait bénéficier du soutien de la plateforme?",
    "Tell us what you’re trying to build, test, validate, or scale. We’ll help identify the right platform capabilities and next steps.":
      "Dites-nous ce que vous cherchez à construire, tester, valider ou mettre à l’échelle. Nous vous aiderons à déterminer les capacités appropriées et les prochaines étapes.",
    "For Platform Users": "Pour les utilisateurs de la plateforme",
    "If our infrastructure, workflows, technical expertise, or staff support contributed to your research, please acknowledge the Concordia Genome Foundry in resulting publications, presentations, and research outputs.":
      "Si notre infrastructure, nos flux de travail, notre expertise technique ou le soutien de notre personnel ont contribué à vos recherches, veuillez remercier la Fonderie génomique de Concordia dans vos publications, présentations et résultats de recherche.",
    "Suggested acknowledgement": "Formule de remerciement suggérée",
    "The authors acknowledge the infrastructure, workflows, and technical support provided by the Concordia Genome Foundry at Concordia University.":
      "Les auteurs remercient la Fonderie génomique de Concordia de l’Université Concordia pour l’infrastructure, les flux de travail et le soutien technique fournis.",
    "For substantial intellectual, experimental, analytical, or writing contributions by platform staff, please discuss authorship early so expectations are clear before submission.":
      "Pour toute contribution intellectuelle, expérimentale, analytique ou rédactionnelle substantielle du personnel de la plateforme, veuillez discuter du coautorat dès le début afin que les attentes soient claires avant la soumission.",
    "CNSP acknowledgement recommendations": "Recommandations de remerciement du RCSP (CNSP)"
  },

  // ==========================================================================
  // 9. NEWS & UPDATES PAGE (news.html)
  // ==========================================================================
  news: {
    "Announcements, research highlights, new initiatives, and partnerships from the Concordia Genome Foundry and Concordia Bioprocessing.":
      "Annonces, faits saillants de la recherche, nouvelles initiatives et partenariats de la Fonderie génomique de Concordia et de Concordia Bioprocessing.",
    "Stories": "Articles",
    "Updates and perspectives from across our community.":
      "Actualités et perspectives de l’ensemble de notre communauté.",
    "June 22, 2026": "22 juin 2026",
    "Design. Build. Test. Repeat. A conversation with Angela Quach":
      "Concevoir. Construire. Tester. Répéter. Entretien avec Angela Quach",
    "Angela discusses the role of lab automation, interdisciplinary teams and iterative experimentation in synthetic biology.":
      "Angela discute du rôle de l’automatisation de laboratoire, des équipes interdisciplinaires et de l’expérimentation itérative en biologie synthétique.",
    "Read the SynBio Canada interview": "Lire l’entrevue de SynBio Canada",
    "June 11, 2026": "11 juin 2026",
    "Hosting the 2026 LRIG Canada Annual Symposium & Exhibit in Montréal":
      "Accueil du symposium et salon annuel 2026 de LRIG Canada à Montréal",
    "Concordia University’s Loyola Campus hosted LRIG Canada’s annual gathering, bringing together automation specialists, bioengineers, and researchers for discussions on laboratory robotics, precision fermentation, and high-throughput workflows.":
      "Le campus Loyola de l’Université Concordia a accueilli le rassemblement annuel de LRIG Canada, réunissant spécialistes de l’automatisation, bio-ingénieurs et chercheurs autour de la robotique de laboratoire, de la fermentation de précision et des flux à haut débit.",
    "View on LinkedIn": "Voir sur LinkedIn",
    "April 20, 2026": "20 avril 2026",
    "Shaping the future of cell and gene therapy in Canada":
      "Façonner l’avenir de la thérapie cellulaire et génique au Canada",
    "How the NRC and Concordia Genome Foundry are developing automated genome-engineering platforms to support advanced cell research.":
      "Comment le CNRC et la Fonderie génomique de Concordia développent des plateformes automatisées d’ingénierie génomique pour soutenir la recherche cellulaire de pointe.",
    "Read the NRC story": "Lire l’article du CNRC",
    "December 11, 2025": "11 décembre 2025",
    "Concordia expands sustainable biomanufacturing capacity with $5M investment":
      "Concordia accroît sa capacité en biofabrication durable grâce à un investissement de 5 M$",
    "New investment supports upgrades to the Genome Foundry and Bioprocessing facilities, expanding research capacity from early biological design through process development.":
      "Ce nouvel investissement soutient la modernisation des installations de la Fonderie génomique et des Bioprocédés, élargissant la capacité de recherche de la conception biologique initiale jusqu’au développement de procédés.",
    "Read the Concordia story": "Lire l’article de Concordia",
    "From the archive": "Archives",
    "August 14, 2018": "14 août 2018",
    "Concordia unveils Canada's first genome lab where 'robots do biology'":
      "Concordia dévoile le premier laboratoire génomique au Canada où « les robots font de la biologie »",
    "CBC News reports on the launch of the automated Genome Foundry at the Centre for Applied Synthetic Biology, highlighting how robotic platforms accelerate experimental workflows and precision research.":
      "CBC News relate le lancement de la Fonderie génomique automatisée au Centre de biologie synthétique appliquée, soulignant comment les plateformes robotisées accélèrent les flux expérimentaux et la recherche de précision.",
    "Read the CBC News story": "Lire l’article de CBC News",
    "No stories in this category yet.": "Aucun article dans cette catégorie pour le moment.",
    "From LinkedIn": "Sur LinkedIn",
    "View page ↗": "Voir la page ↗",
    "Oct 2026": "Oct. 2026",
    "Joining District 3 Innovation and CENSR for": "Aux côtés de District 3 Innovation et du CENSR pour",
    "Exploring Innovation in the Life Sciences": "Explorer l’innovation dans les sciences de la vie",
    ", a workshop on pathways from research to real-world application.":
      ", un atelier sur les parcours menant de la recherche aux applications concrètes.",
    "A new preprint featuring work with our": "Une nouvelle prépublication mettant en valeur des travaux réalisés avec notre",
    "MAESTRO automation platform": "plateforme d’automatisation MAESTRO",
    "describes a directed-evolution system for GPCRs in yeast.":
      "décrit un système d’évolution dirigée pour les RCPG chez la levure.",
    "Supporting this year's": "Soutien au",
    "RRCancer Symposium": "Symposium du RRCancer",
    "in Montréal and sharing how our platform helps researchers build and test more designs in parallel.":
      "cette année à Montréal et présentation de la façon dont notre plateforme aide les chercheurs à construire et tester davantage de conceptions en parallèle.",
    "See all updates on LinkedIn ↗": "Voir toutes les actualités sur LinkedIn ↗"
  },

  // ==========================================================================
  // 10. ABOUT PAGE (about.html)
  // ==========================================================================
  about: {
    "Built for Bionnovation": "Bâtie pour la bio-innovation",
    "Established in 2017 as Canada's first biofoundry.":
      "Fondée en 2017 en tant que première biofonderie au Canada.",
    "Our Story & Facility ↓": "Notre histoire et nos installations ↓",
    "Meet the Team ↓": "Rencontrer l’équipe ↓",
    "WHY A BIOFOUNDRY": "POURQUOI UNE BIOFONDERIE",
    "Standardize the execution layer": "Standardiser la couche d’exécution",
    "Biological research can help address challenges far beyond the laboratory, from human health and food security to sustainable production. Yet progress is often limited by experimental workflows that remain largely artisanal and difficult to parallelize, restricting how many hypotheses, variants, or conditions researchers can test in each cycle.":
      "La recherche biologique peut aider à relever des défis bien au-delà du laboratoire, de la santé humaine et de la sécurité alimentaire jusqu’à la production durable. Pourtant, les progrès sont souvent limités par des flux expérimentaux encore largement artisanaux et difficiles à paralléliser, restreignant le nombre d’hypothèses, de variants ou de conditions que les chercheurs peuvent tester à chaque cycle.",
    "Where the unit operations of engineering biology are mature, repetitive, and procedural, biofoundry infrastructure standardizes that essential execution layer, automates it, and makes it scalable. That scalability shifts the boundaries of exploration, making it possible to build, test, and learn at an unprecedented depth and pace.":
      "Là où les opérations unitaires de la biologie d’ingénierie sont matures, répétitives et procédurales, l’infrastructure d’une biofonderie standardise cette couche d’exécution essentielle, l’automatise et la rend évolutive. Cette capacité de mise à l’échelle repousse les frontières de l’exploration et permet de construire, tester et apprendre à une profondeur et à un rythme inédits.",
    "That shift also frees researchers to focus on the work that matters most: generating scientific insight from results, making smarter design choices, asking better questions, and solving the next problem.":
      "Cette transformation libère également les chercheurs pour qu’ils se concentrent sur l’essentiel : tirer des connaissances scientifiques des résultats, faire des choix de conception plus judicieux, poser de meilleures questions et résoudre le prochain problème.",
    "ORIGINS": "ORIGINES",
    "Founding the foundry": "La fondation de la Fonderie",
    "Established in 2017 as Canada's first biofoundry, the Concordia Genome Foundry initially focused on automating synthetic biology and microbial engineering workflows. In 2019, it became a founding member of the Global Biofoundries Alliance (GBA), an international network of biofoundries.":
      "Fondée en 2017 en tant que première biofonderie au Canada, la Fonderie génomique de Concordia s’est d’abord concentrée sur l’automatisation des flux de travail en biologie synthétique et en ingénierie microbienne. En 2019, elle est devenue membre fondateur de la Global Biofoundries Alliance (GBA), un réseau international de biofonderies.",
    "The Foundry has since expanded into automated mammalian cell culture, engineering, and screening. In parallel, Concordia Bioprocessing has developed complementary capabilities in microbial fermentation, process development, and scale-up.":
      "Depuis, la Fonderie a étendu ses activités à la culture, à l’ingénierie et au criblage automatisés de cellules de mammifères. En parallèle, Concordia Bioprocessing a développé des capacités complémentaires en fermentation microbienne, développement de procédés et mise à l’échelle.",
    "Founder Perspective": "Perspective du fondateur",
    "Founder and Former Director, Concordia Genome Foundry":
      "Fondateur et ancien directeur, Fonderie génomique de Concordia",
    "Professor Emeritus, Biology, Concordia University":
      "Professeur émérite, Biologie, Université Concordia",
    "“Now researchers can come to the Genome Foundry and work on thousands of genes at a time.”":
      "« Désormais, les chercheurs peuvent venir à la Fonderie génomique et travailler sur des milliers de gènes à la fois. »",
    "On the power of automation to unlock natural and synthetic biological diversity.":
      "Sur le pouvoir de l’automatisation pour libérer la diversité biologique naturelle et synthétique.",
    "OUR ROLE TODAY": "NOTRE RÔLE AUJOURD’HUI",
    "From proof of concept toward translation": "De la preuve de concept vers la valorisation",
    "We support researchers, startups, companies, and collaborators at many points in the development of biological systems and applications.":
      "Nous soutenons les chercheurs, les jeunes pousses, les entreprises et les collaborateurs à de nombreuses étapes du développement de systèmes et d’applications biologiques.",
    "Projects enter the platform at different points. Some involve designing and testing biological systems, developing assays, screening candidates, or identifying promising leads. Others focus on improving reproducibility, performance, manufacturability, process robustness, or readiness for larger-scale development.":
      "Les projets intègrent la plateforme à différentes étapes. Certains portent sur la conception et le test de systèmes biologiques, le développement d’essais, le criblage de candidats ou l’identification de pistes prometteuses. D’autres visent à améliorer la reproductibilité, la performance, la fabricabilité, la robustesse des procédés ou la préparation à un développement à plus grande échelle.",
    "Our role is to provide the infrastructure, automation, workflows, and expertise needed to generate reliable evidence, resolve technical questions, and help promising biological systems move toward useful applications.":
      "Notre rôle est de fournir l’infrastructure, l’automatisation, les flux de travail et l’expertise nécessaires pour générer des données fiables, résoudre des questions techniques et aider les systèmes biologiques prometteurs à évoluer vers des applications concrètes.",
    "Explore Our Capabilities →": "Explorer nos capacités →",
    "Part of a Broader Research Ecosystem": "Au cœur d’un écosystème de recherche élargi",
    "The Foundry is supported by Concordia University, the Canada Foundation for Innovation, and the Government of Québec, and maintains connections across a broader network of research and innovation organizations.":
      "La Fonderie est soutenue par l’Université Concordia, la Fondation canadienne pour l’innovation et le gouvernement du Québec, et entretient des liens avec un vaste réseau d’organisations de recherche et d’innovation.",
    "Explore our ecosystem →": "Explorer notre écosystème →",
    "Meet the Team": "Rencontrer l’équipe",
    "An agile, multidisciplinary team dedicated to helping complex biology projects move from idea to execution.":
      "Une équipe agile et multidisciplinaire dédiée à faire passer les projets biologiques complexes de l’idée à l’exécution.",
    "Director, Genome Foundry": "Directeur, Fonderie génomique",
    "Director, Bioprocessing": "Directeur, Bioprocédés",
    "Research Operations Manager": "Gestionnaire des opérations de recherche",
    "Senior Advisor, Business Dev & Partnerships": "Conseiller principal, développement des affaires et partenariats",
    "Platform Lead, Genome Foundry": "Responsable de plateforme, Fonderie génomique",
    "Cell Editing Specialist, Genome Foundry": "Spécialiste en édition cellulaire, Fonderie génomique",
    "Supervisor, Bioprocessing": "Superviseur, Bioprocédés",
    "Computer Scientist": "Informaticienne",
    "Tell us about your project, workflow, or platform access needs. We’ll help identify the right next step.":
      "Parlez-nous de votre projet, de votre flux de travail ou de vos besoins d’accès à la plateforme. Nous vous aiderons à déterminer la prochaine étape appropriée."
  },

  // ==========================================================================
  // 11. PARTNERS / ECOSYSTEM PAGE (partners.html)
  // ==========================================================================
  partners: {
    "Our Ecosystem": "Notre écosystème",
    "The institutions and organizations that have helped build and sustain the Foundry.":
      "Les institutions et organisations qui ont contribué à bâtir et à soutenir la Fonderie.",
    "Funders & Supporters ↓": "Bailleurs de fonds et partenaires ↓",
    "Research & Innovation Ecosystem ↓": "Écosystème de recherche et d’innovation ↓",
    "Funders & Philanthropic Supporters": "Bailleurs de fonds et partenaires philanthropiques",
    "Organizations whose funding, institutional support, or philanthropic contributions have helped build, sustain, and expand the platform’s infrastructure and operations.":
      "Organisations dont le financement, le soutien institutionnel ou les contributions philanthropiques ont aidé à bâtir, maintenir et développer l’infrastructure et les activités de la plateforme.",
    "Philanthropic giving is managed through Concordia University Advancement.":
      "Les dons philanthropiques sont gérés par le Service de l’avancement de l’Université Concordia.",
    "Contact Advancement →": "Contacter le Service de l’avancement →",
    "Research & Innovation Ecosystem": "Écosystème de recherche et d’innovation",
    "Organizations connected through research collaboration, platform engagement, ecosystem development, referrals, training, or innovation support.":
      "Organisations liées par la collaboration de recherche, l’utilisation de la plateforme, le développement de l’écosystème, les références, la formation ou le soutien à l’innovation.",
    "Interested in working with us?": "Vous souhaitez collaborer avec nous?",
    "We work with researchers, companies, institutions, and ecosystem partners through projects, services, collaborations, and platform access.":
      "Nous travaillons avec des chercheurs, des entreprises, des institutions et des partenaires de l’écosystème par l’entremise de projets, de services, de collaborations et d’accès à la plateforme."
  }
};
