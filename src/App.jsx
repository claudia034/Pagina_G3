import { useEffect, useRef, useState } from "react";
import { Link, Route, Routes, useLocation, useNavigate, useParams } from "react-router-dom";

const image = (path) => `${import.meta.env.BASE_URL}${path}`;
const branches = [
  [
    "Castores",
    "Niños y niñas de 5 a 6 años. Descubren el mundo mediante el juego, la imaginación y la convivencia.",
    "images/castores.jpg",
    [
      "Juegos dinámicos y actividades lúdicas.",
      "Desarrollo de hábitos y autonomía.",
      "Trabajo en equipo y amistad.",
    ],
  ],
  [
    "Manada de Lobatos/Lobeznas",
    "Para niños y niñas de 7 a 11 años. Aprenden jugando, explorando la naturaleza y siguiendo las aventuras del Libro de la Selva.",
    "images/manada.jpg",
    [
      "Juegos y canciones.",
      "Primeros campamentos.",
      "Valores de amistad y respeto.",
    ],
  ],
  [
    "Unidad Scout",
    "Jóvenes de 11 a 15 años. Desarrollan habilidades de campismo, liderazgo y servicio a través de la aventura.",
    "images/unidad.jpeg",
    [
      "Campamentos y excursiones.",
      "Primeros auxilios y orientación.",
      "Trabajo en equipo y liderazgo.",
    ],
  ],
  [
    "Comunidad de Caminantes",
    "Adolescentes de 15 a 18 años enfocados en servicio, expediciones y desarrollo personal.",
    "images/caminantes.jpg",
    [
      "Proyectos comunitarios.",
      "Grandes travesías y campamentos.",
      "Preparación para la vida adulta.",
    ],
  ],
  [
    "Clan de Rovers",
    "Jóvenes de 18 a 22 años. Viven el servicio, la aventura y la construcción de su propio camino.",
    "images/rovers.jpg",
    [
      "Servicio a la comunidad.",
      "Proyectos personales.",
      "Formación de líderes scouts.",
    ],
  ],
];
const articles = {
  castores: {
    category: "Nueva Rama",
    title: "Reapertura de la rama de Castores",
    date: "7 de marzo, 2026",
    detail: "25 niños participaron en la reapertura",
    hero: "images/Castores/lanzamiento castores-24.jpg",
    quote:
      "“Ser Castor es dar el primer paso en una aventura que forma, inspira y deja huella para toda la vida.”",
    gallery: [
      "images/Castores/castores-2.jpg",
      "images/Castores/Img2 (1).jpg",
      "images/Castores/Img2 (2).jpg",
    ],
    summary: [
      "Reapertura oficial de la rama de Castores.",
      "25 niños iniciaron esta nueva etapa scout.",
      "Proyecto impulsado por trabajo en equipo y visión compartida.",
    ],
    message: "Los grandes cambios comienzan con pequeños pasos.",
    sections: [
      [
        "Una nueva etapa para los más pequeños",
        [
          "El 7 de marzo se llevó a cabo la reapertura de la rama de Castores, marcando un momento significativo dentro del grupo scout y dando inicio a una nueva etapa orientada al desarrollo de los más pequeños.",
          "En esta jornada participaron 25 niños, quienes comenzaron su camino dentro del movimiento scout con entusiasmo y curiosidad. La reapertura representa el compromiso de brindar a la niñez un espacio basado en valores, aprendizaje y convivencia.",
        ],
      ],
      [
        "Origen y desarrollo del proyecto",
        [
          "La iniciativa surgió tras conocer en Guatemala una sección dirigida a niños pequeños denominada “Cachorros”. El propósito fue ofrecer a más niños la posibilidad de integrarse al escultismo desde temprana edad.",
          "El proyecto contó con el apoyo de Miguel Linares, Roy Venegas, Sandra Platero y el comité de padres. Claudia Grande lidera la rama y aporta su experiencia en educación parvularia.",
        ],
      ],
      [
        "Impacto y proyección",
        [
          "La rama es un espacio integral para iniciar una formación en valores, desarrollar habilidades sociales, fortalecer la autonomía y aprender mediante el juego y la exploración.",
        ],
      ],
    ],
  },
  navidad: {
    category: "Actividad de Servicio",
    title: "Donación navideña en Fundación Ayúdame a Vivir",
    date: "23 de diciembre, 2025",
    detail: "Fundación Ayúdame a Vivir",
    hero: "blog/images/sn1.jpg",
    gallery: [
      "blog/images/sn2.jpg",
      "blog/images/sn3.jpg",
      "blog/images/sn4.jpg",
    ],
    summary: [
      "Entrega de donación y convivencia.",
      "Acción solidaria con espíritu navideño.",
      "Siempre listos para servir.",
    ],
    message: "Servir también es compartir esperanza. 💚",
    sections: [
      [
        "Un detalle que suma esperanza",
        [
          "En diciembre, el Clan Acra Leuka realizó la entrega de una donación a la Fundación Ayúdame a Vivir. Fue un momento especial para compartir solidaridad y acompañar con cariño la importante labor que realiza la fundación.",
          "Como scouts, creemos que servir también es estar presentes: con empatía, respeto y la intención de aportar un granito de arena donde más se necesita.",
        ],
      ],
      [
        "Gracias por hacerlo posible",
        [
          "Gracias a la Fundación Ayúdame a Vivir por recibirnos, y a cada integrante del Clan Acra Leuka por su compromiso y corazón de servicio. Seguimos avanzando con solidaridad, servicio y comunidad.",
        ],
      ],
    ],
  },
  campamentos: {
    category: "Actividad Nacional",
    title: "Campamentos Nacionales – Diciembre 2025",
    date: "Diciembre 2025",
    detail: "Representando al G3 Javier",
    hero: "blog/images/unidad.jpg",
    gallery: [
      "blog/images/manada2.jpg",
      "blog/images/unidad.jpg",
      "blog/images/caminantes.jpg",
      "blog/images/clan.jpg",
    ],
    summary: [
      "Participación en campamentos nacionales.",
      "Manada, Unidad, Caminantes y Clan.",
    ],
    message: "Siempre listos para vivir la aventura scout. ⚜️",
    sections: [
      [
        "Un diciembre lleno de aventura y aprendizaje",
        [
          "Durante diciembre, integrantes de la Manada, Unidad, Caminantes y Clan del Grupo Scout 3 Javier participaron en distintos campamentos nacionales.",
          "Estos espacios permitieron vivir el escultismo a plenitud, compartir con scouts de otros grupos, fortalecer valores y crear recuerdos que quedarán para siempre.",
        ],
      ],
      [
        "Gracias por representar al G3 Javier",
        [
          "Felicitamos a cada scout y scouter por representar con orgullo al Grupo Scout 3 Javier. Gracias por demostrar que el escultismo se vive con alegría, respeto y espíritu de servicio. 💚",
        ],
      ],
    ],
  },
  hermandad: {
    category: "Convivencia Scout",
    title: "Viviendo la hermandad Scout",
    date: "Octubre 2025",
    detail: "Comunidad Íñigo – G3 Javier",
    hero: "blog/images/b4.jpg",
    gallery: ["blog/images/b1.jpg", "blog/images/b2.jpg", "blog/images/b3.jpg"],
    summary: [
      "Jornada de hermandad scout.",
      "Alegría, aprendizaje y amistad scout.",
    ],
    message: "La hermandad scout nos une más allá de los grupos. ⚜️",
    sections: [
      [
        "Una jornada para compartir y aprender",
        [
          "La Comunidad Íñigo del Grupo Scout 3 “Javier” vivió una jornada especial junto al Grupo Scout 16 “Pandas”, del Distrito de Grupos Unificados.",
          "Fue un espacio donde se celebró la felicidad de ser scouts, fortaleciendo la amistad, el respeto y la hermandad que nos une como movimiento.",
        ],
      ],
      [
        "Construyendo un mundo mejor",
        [
          "Esta convivencia nos recordó que el escultismo se vive en comunidad, aprendiendo unos de otros y construyendo lazos para un mundo más inclusivo y solidario.",
          "Gracias al Grupo Scout 16 “Pandas” por compartir esta experiencia y demostrar que la hermandad scout trasciende grupos y distritos. 🌍⚜️",
        ],
      ],
    ],
  },
};
const cards = [
  [
    "castores",
    "Reapertura de la rama de Castores",
    "7 de marzo de 2026",
    "La rama de Castores reabrió sus puertas y recibió a 25 niños que comenzaron su experiencia scout.",
    "images/Castores/lanzamiento castores-24.jpg",
  ],
  [
    "navidad",
    "Servicio navideño 2025",
    "23 de diciembre, Fundación Ayúdame a Vivir",
    "El Clan Acra Leuka realizó una donación, compartiendo solidaridad y esperanza.",
    "blog/images/sn1.jpg",
  ],
  [
    "campamentos",
    "Campamentos fin de año",
    "Diciembre 2025",
    "Manada, Unidad, Caminantes y Clan vivieron aventuras y fortalecieron amistades.",
    "blog/images/unidad.jpg",
  ],
  [
    "hermandad",
    "Jornada de hermandad",
    "Octubre 2025, Colegio Externado de San José",
    "La Comunidad Íñigo compartió aprendizaje mutuo y unión con el Grupo Scout 16 Pandas.",
    "blog/images/b4.jpg",
  ],
];

function Header() {
  const [open, setOpen] = useState(false);
  const loc = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (loc.pathname === "/" && loc.hash) {
      document.getElementById(loc.hash.slice(1))?.scrollIntoView();
    }
  }, [loc.pathname, loc.hash]);
  const links = [
    ["Inicio", "inicio"],
    ["Quiénes Somos", "quienes-somos"],
    ["Ramas", "ramas"],
    ["Actividades", "actividades"],
    ["Calendario", "calendario"],
    ["Galería", "galeria"],
    ["Contacto", "contacto"],
  ];
  const go = (id) => {
    setOpen(false);
    if (id === "calendario") {
      navigate("/calendario");
      return;
    }
    if (loc.pathname === "/") document.getElementById(id)?.scrollIntoView();
    else navigate(`/#${id}`);
  };
  return (
    <nav className="fixed top-0 z-50 w-full bg-green-700 p-4 shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 text-white">
          <img
            src={image("images/logo.jpg")}
            className="h-12 w-12 rounded-full"
            alt="Logo Grupo Scout 3 Javier"
          />
          <span>
            <b className="block text-2xl sm:text-3xl">Grupo Scout 3 Javier</b>
            <small className="text-base">El Salvador</small>
          </span>
        </Link>
        <div className="hidden gap-6 md:flex">
          {links.map(([x, id]) => (
            <button
              className="text-white hover:text-green-200"
              onClick={() => go(id)}
              key={id}
            >
              {x}
            </button>
          ))}
        </div>
        <button
          className="text-2xl text-white md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menú"
        >
          <i className={`fas ${open ? "fa-xmark" : "fa-bars"}`} />
        </button>
      </div>
      {open && (
        <div className="container mx-auto mt-3 rounded-lg bg-green-800 py-2 md:hidden">
          {links.map(([x, id]) => (
            <button
              className="block w-full px-4 py-2 text-left text-white hover:bg-green-700"
              onClick={() => go(id)}
              key={id}
            >
              {x}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
function Footer() {
  return (
    <footer className="bg-gray-800 py-12 text-center text-white">
      <p className="text-lg">© 2026 Grupo Scout 3 Javier. Todos los derechos reservados.</p>
      <p className="mt-3 text-sm text-gray-400">
        Parte de la Asociación de Scouts de El Salvador.
      </p>
    </footer>
  );
}
function ContactBubble() {
  const [open, setOpen] = useState(false);
  return (
    <div className="fixed bottom-6 right-6 z-[60] text-right">
      {open && (
        <div className="mb-3 w-64 rounded-2xl bg-white p-4 text-left shadow-2xl ring-1 ring-black/5">
          <p className="mb-3 font-bold text-gray-800">¿Cómo prefieres contactarnos?</p>
          <a href="mailto:grupo03@scouts.org.sv" className="mb-2 flex items-center gap-3 rounded-xl bg-green-50 px-3 py-2 text-green-800 hover:bg-green-100">
            <i className="fas fa-envelope" /> Enviar correo
          </a>
          <a href="https://www.instagram.com/grupo3javier" target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-xl bg-green-50 px-3 py-2 text-green-800 hover:bg-green-100">
            <i className="fab fa-instagram" /> Escribir por Instagram
          </a>
        </div>
      )}
      <button onClick={() => setOpen(!open)} aria-expanded={open} className="rounded-full bg-green-600 px-6 py-4 text-lg font-bold text-white shadow-xl transition hover:scale-105 hover:bg-green-700 md:px-7">
        <i className="fas fa-comment-dots mr-2 text-xl" /> Contáctanos
      </button>
    </div>
  );
}
function Box({ title, light = false, children }) {
  return (
    <div className="container mx-auto px-6 lg:px-8">
      <h2
        className={`section-title mx-auto mb-10 block w-fit text-center text-4xl font-bold ${light ? "text-white" : "text-gray-800"}`}
      >
        {title}
      </h2>
      {children}
    </div>
  );
}
function Card({ card }) {
  const [slug, title, date, text, pic] = card;
  return (
    <article className="w-[88%] shrink-0 snap-start overflow-hidden rounded-lg bg-gray-50 shadow-md sm:w-[65%] lg:w-[calc(33.333%-1.35rem)]">
      <img src={image(pic)} className="h-56 w-full object-cover" alt={title} />
      <div className="p-6">
        <h3 className="mb-2 text-2xl font-semibold">{title}</h3>
        <p className="mb-4 text-sm text-gray-600">
          <i className="fas fa-calendar-alt mr-2" />
          {date}
        </p>
        <p className="mb-4 text-gray-700">{text}</p>
        <div className="text-center">
          <Link
            to={`/actividades/${slug}`}
            className="inline-block rounded-full bg-green-600 px-6 py-2 font-semibold text-white hover:bg-green-700"
          >
            Leer más
          </Link>
        </div>
      </div>
    </article>
  );
}
function Calendar() {
  const [month, setMonth] = useState(new Date(2026, 8, 1));
  const year = month.getFullYear();
  const monthIndex = month.getMonth();
  const firstDay = new Date(year, monthIndex, 1).getDay();
  const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();
  const monthName = `${month.toLocaleDateString("es-SV", { month: "long" })} ${year}`;
  const events = { "2026-09-19": "Acto cívico" };
  const eventList = Object.entries(events).filter(([key]) => key.startsWith(`${year}-${String(monthIndex + 1).padStart(2, "0")}-`));
  const changeMonth = (offset) => setMonth(new Date(year, monthIndex + offset, 1));
  const displayEvents = eventList;

  return (
    <section id="calendario" className="bg-green-50 py-16">
      <Box title="Fechas Importantes">
        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[1.5fr_1fr]">
          <div className="rounded-2xl bg-white p-5 shadow-lg md:p-8">
            <div className="mb-6 flex items-center justify-between">
              <button onClick={() => changeMonth(-1)} className="rounded-full p-3 text-green-700 hover:bg-green-100" aria-label="Mes anterior"><i className="fas fa-chevron-left" /></button>
              <h3 className="capitalize text-xl font-bold text-gray-800 md:text-2xl">{monthName}</h3>
              <button onClick={() => changeMonth(1)} className="rounded-full p-3 text-green-700 hover:bg-green-100" aria-label="Mes siguiente"><i className="fas fa-chevron-right" /></button>
            </div>
            <div className="grid grid-cols-7 gap-1 text-center text-sm md:gap-2">
              {"Dom Lun Mar Mié Jue Vie Sáb".split(" ").map((day) => <div className="pb-2 font-bold text-green-700" key={day}>{day}</div>)}
              {Array.from({ length: firstDay }, (_, index) => <div key={`blank-${index}`} />)}
              {Array.from({ length: daysInMonth }, (_, index) => {
                const day = index + 1;
                const event = events[`${year}-${String(monthIndex + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`];
                return <div className={`min-h-12 rounded-lg p-2 md:min-h-16 ${event ? "bg-green-600 font-bold text-white shadow-md" : "text-gray-700"}`} key={day}><span>{day}</span>{event && <span className="mt-1 block text-[10px] leading-tight md:text-xs">{event}</span>}</div>;
              })}
            </div>
          </div>
          <aside className="rounded-2xl bg-green-700 p-7 text-white shadow-lg">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-green-200">Próxima actividad</p>
            {displayEvents.length ? displayEvents.map(([key, name]) => <div key={key}><h3 className="mb-3 text-2xl font-bold">{name}</h3><p className="mb-4 text-lg"><i className="fas fa-calendar-day mr-2 text-green-200" />{new Date(`${key}T12:00:00`).toLocaleDateString("es-SV", { day: "numeric", month: "long", year: "numeric" })}</p><p className="leading-relaxed text-green-50">Únete a nuestro Acto Cívico, un evento diseñado para honrar nuestros valores patrios a través de la participación activa. Durante esta jornada, llevaremos a cabo una serie de iniciativas y actividades orientadas a fortalecer nuestra identidad cultural y reafirmar nuestro compromiso con la comunidad.</p></div>) : <p className="text-green-50">No hay actividades registradas para este mes.</p>}
          </aside>
        </div>
      </Box>
    </section>
  );
}
function CalendarPage() {
  return <><Header /><main className="min-h-screen pt-20"><Calendar /></main><Footer /></>;
}
function Home() {
  const slides = [
    "images/grupo1.jpg",
    "images/inicio1.jpg",
    "images/inicio2.jpg",
    "images/inicio3.jpg",
    "images/cf2.jpg",
  ];
  const [slide, setSlide] = useState(0);
  const [branchList, setBranchList] = useState(branches);
  const branchRef = useRef();
  const activityRef = useRef();
  const isBranchCycling = useRef(false);
  useEffect(() => {
    const timer = setInterval(
      () => setSlide((n) => (n + 1) % slides.length),
      3500,
    );
    return () => clearInterval(timer);
  }, []);
  const advanceBranches = () => {
    const carousel = branchRef.current;
    const firstCard = carousel?.firstElementChild;
    if (!carousel || !firstCard || isBranchCycling.current) return;

    isBranchCycling.current = true;
    const gap = Number.parseFloat(getComputedStyle(carousel).gap) || 24;
    const distance = firstCard.getBoundingClientRect().width + gap;
    carousel.scrollBy({ left: distance, behavior: "smooth" });

    window.setTimeout(() => {
      setBranchList((current) => [...current.slice(1), current[0]]);
      carousel.scrollLeft -= distance;
      isBranchCycling.current = false;
    }, 500);
  };
  useEffect(() => {
    const timer = window.setInterval(advanceBranches, 3000);
    return () => window.clearInterval(timer);
  }, []);
  const scroll = (ref, n) =>
    ref.current?.scrollBy({
      left: ref.current.clientWidth * 0.82 * n,
      behavior: "smooth",
    });
  const gallery = [
    ["images/bp.jpg", "Conmemoración BP"],
    ["images/mp1.jpg", "Mensajeros de la paz"],
    ["images/insigniamadera.jpg", "Insignia de madera"],
    ["images/sc.jpg", "Servicio a la comunidad"],
    ["images/lc.jpg", "Logros clan"],
    ["images/df.jpg", "Día de la familia"],
    ["images/cf.jpg", "Campamento familiar"],
    ["images/reuniones.jpg", "Nuestras reuniones"],
  ];
  return (
    <>
      <Header />
      <main>
        <section id="inicio" className="relative h-screen overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center transition-all duration-700"
            style={{ backgroundImage: `url(${image(slides[slide])})` }}
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative z-10 flex h-full items-center justify-center p-6 text-center text-white">
            <div>
              <h1 className="mb-4 text-4xl font-extrabold md:text-6xl">
                ¡Bienvenidos al Grupo Scout 3 Javier!
              </h1>
              <p className="mb-8 text-lg md:text-xl">
                Donde la aventura, el aprendizaje y la amistad se unen para
                formar líderes del mañana.
              </p>
              <button
                className="rounded-full bg-green-500 px-8 py-3 font-bold shadow-lg hover:bg-green-600"
                onClick={() =>
                  document.getElementById("quienes-somos").scrollIntoView()
                }
              >
                Descubre Nuestra Aventura
              </button>
            </div>
          </div>
          <button
            className="absolute left-4 top-1/2 z-20 text-3xl text-white"
            onClick={() =>
              setSlide((slide - 1 + slides.length) % slides.length)
            }
            aria-label="Imagen anterior"
          >
            <i className="fas fa-chevron-left" />
          </button>
          <button
            className="absolute right-4 top-1/2 z-20 text-3xl text-white"
            onClick={() => setSlide((slide + 1) % slides.length)}
            aria-label="Imagen siguiente"
          >
            <i className="fas fa-chevron-right" />
          </button>
          <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                aria-label={`Ver imagen ${i + 1}`}
                onClick={() => setSlide(i)}
                className={`h-3 w-3 rounded-full ${i === slide ? "bg-white" : "bg-gray-400"}`}
              />
            ))}
          </div>
          <Link to="/calendario" className="event-float absolute bottom-20 left-1/2 z-20 flex w-[min(90%,380px)] -translate-x-1/2 items-center gap-4 rounded-2xl bg-white/95 p-3 text-left text-gray-800 shadow-2xl backdrop-blur transition hover:-translate-y-1 hover:bg-white md:bottom-8 md:left-8 md:translate-x-0">
            <div className="rounded-xl bg-green-700 px-3 py-2 text-center text-white"><span className="block text-2xl font-extrabold leading-none">19</span><span className="text-xs font-bold uppercase">Sep</span></div>
            <div><p className="text-xs font-bold uppercase tracking-wide text-green-700">Próximo evento</p><p className="font-bold">Acto cívico</p></div><i className="fas fa-arrow-right ml-auto text-green-700" />
          </Link>
        </section>
        <section id="quienes-somos" className="bg-white py-16">
          <Box title="Quiénes Somos">
            <div className="flex flex-col items-center gap-10 lg:flex-row">
              <img
                src={image("images/campfam.jpg")}
                className="w-full rounded-lg shadow-xl lg:w-1/2"
                alt="Grupo Scout Javier en actividad"
              />
              <div className="space-y-4 text-lg leading-relaxed text-gray-700 lg:w-1/2">
                <p>
                  El Grupo Scout 3 “Javier” forma parte de la Asociación de
                  Scouts de El Salvador. Desde nuestra fundación en 1934,
                  formamos a niños, niñas y jóvenes a través del Método Scout e
                  inculcamos respeto, responsabilidad, servicio y amor por la
                  naturaleza.
                </p>
                <p>
                  Nuestra misión es contribuir a la educación de los jóvenes
                  mediante un sistema de valores basado en la Promesa y la Ley
                  Scout, para construir un mundo mejor.
                </p>
                <p>
                  Ofrecemos un ambiente seguro y estimulante donde cada miembro
                  descubre su potencial, desarrolla habilidades para la vida y
                  hace amigos para siempre. ¡Únete a nuestra gran familia scout!
                </p>
              </div>
            </div>
          </Box>
        </section>
        <section id="ramas" className="bg-gray-100 py-16">
          <Box title="Nuestras Ramas">
            <div className="relative">
              <div
                ref={branchRef}
                className="no-scrollbar flex snap-x gap-6 overflow-x-auto pb-4"
              >
                {branchList.map(([name, text, pic, items]) => (
                  <article
                    className="w-[72%] shrink-0 snap-start overflow-hidden rounded-lg bg-white shadow-xl sm:w-[52%] lg:w-[30%]"
                    key={name}
                  >
                    <img
                      src={image(pic)}
                      className="h-48 w-full object-cover"
                      alt={name}
                    />
                    <div className="p-6">
                      <h3 className="mb-3 text-2xl font-semibold">{name}</h3>
                      <p className="mb-4 text-gray-600">{text}</p>
                      <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700">
                        {items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </article>
                ))}
              </div>
              <button
                className="absolute right-0 top-1/2 hidden h-12 w-12 -translate-y-1/2 rounded-full bg-green-700 text-white shadow-lg md:block"
                onClick={advanceBranches}
                aria-label="Ver siguiente rama"
              >
                <i className="fas fa-chevron-right" />
              </button>
            </div>
          </Box>
        </section>
        <section id="actividades" className="bg-white py-16">
          <Box title="Nuestras Actividades">
            <div
              ref={activityRef}
              className="no-scrollbar flex snap-x gap-8 overflow-x-auto pb-4"
            >
              {cards.map((card) => (
                <Card card={card} key={card[0]} />
              ))}
            </div>
            <div className="mt-6 flex justify-center gap-4">
              <button
                className="rounded-full bg-green-700 px-5 py-3 text-white"
                onClick={() => scroll(activityRef, -1)}
                aria-label="Actividad anterior"
              >
                <i className="fas fa-chevron-left" />
              </button>
              <button
                className="rounded-full bg-green-700 px-5 py-3 text-white"
                onClick={() => scroll(activityRef, 1)}
                aria-label="Siguiente actividad"
              >
                <i className="fas fa-chevron-right" />
              </button>
            </div>
            <div className="mt-8 text-center">
              <Link
                className="font-semibold text-green-700 hover:underline"
                to="/actividades"
              >
                Ver todas las actividades
              </Link>
            </div>
          </Box>
        </section>
        <section id="galeria" className="bg-gray-100 py-16">
          <Box title="Nuestra Galería de Fotos">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {gallery.map(([pic, title]) => (
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.facebook.com/profile.php?id=100064627842250&sk=photos"
                  key={title}
                  className="group relative overflow-hidden rounded-lg shadow-md"
                >
                  <img
                    src={image(pic)}
                    alt={title}
                    className="h-56 w-full object-cover transition group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/50 p-4 text-center font-semibold text-white opacity-0 transition group-hover:opacity-100">
                    {title}
                  </div>
                </a>
              ))}
            </div>
            <div className="mt-12 text-center">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.facebook.com/profile.php?id=100064627842250&sk=photos"
                className="rounded-full bg-blue-600 px-8 py-3 font-bold text-white hover:bg-blue-700"
              >
                Ver Más Fotos
              </a>
            </div>
          </Box>
        </section>
        <section id="contacto" className="bg-green-700 py-24 text-white">
          <Box title="Contáctanos" light>
            <div className="flex flex-col gap-12 lg:flex-row">
              <div className="lg:w-1/2">
                <p className="mb-8 text-xl leading-relaxed md:text-2xl">
                  ¿Interesado en unirte o tienes alguna pregunta? Estamos aquí
                  para ayudarte.
                </p>
                <p className="mb-6 flex items-start text-xl leading-relaxed md:text-2xl">
                  <i className="fas fa-map-marker-alt mr-4 mt-1 text-2xl text-green-300 md:text-3xl" />
                  Colegio Externado de San José, San Salvador, El Salvador
                </p>
                <p className="flex items-center text-xl md:text-2xl">
                  <i className="fas fa-envelope mr-4 text-2xl text-green-300 md:text-3xl" />
                  <a className="underline" href="mailto:grupo03@scouts.org.sv">
                    grupo03@scouts.org.sv
                  </a>
                </p>
                <div className="mt-10 flex gap-8 text-5xl">
                  <a
                    href="https://www.facebook.com/profile.php?id=100064627842250"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-facebook-square" />
                  </a>
                  <a
                    href="https://www.instagram.com/grupo3javier"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-instagram-square" />
                  </a>
                </div>
              </div>
              <div className="rounded-lg bg-white p-8 text-gray-800 shadow-xl lg:w-1/2">
                <h3 className="mb-4 text-2xl font-bold">Ubicación</h3>
                <p className="mb-5 text-lg">
                  Nos encontramos en el Externado de San José. ¡Te esperamos!
                </p>
                <iframe
                  title="Ubicación del Grupo Scout 3 Javier"
                  className="h-80 w-full rounded-lg"
                  loading="lazy"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.2015033507787!2d-89.20863372593654!3d13.706242398348737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f63308ae2255579%3A0x6ad7471288b254a5!2sExternado%20de%20San%20Jos%C3%A9!5e0!3m2!1ses-419!2ssv"
                />
              </div>
            </div>
          </Box>
        </section>
      </main>
      <Footer />
    </>
  );
}
function Activities() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 pb-16 pt-28">
        <Box title="Todas Nuestras Actividades">
          <p className="mx-auto mb-10 max-w-2xl text-center text-lg text-gray-600">
            Explora las aventuras, campamentos y eventos especiales que hemos
            vivido como familia scout.
          </p>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {cards.map((card) => {
              const [slug, title, date, text, pic] = card;
              return (
                <article
                  className="overflow-hidden rounded-lg bg-white shadow-lg"
                  key={slug}
                >
                  <img
                    src={image(pic)}
                    className="h-56 w-full object-cover"
                    alt={title}
                  />
                  <div className="p-6">
                    <p className="mb-3 text-sm text-gray-500">
                      <i className="fas fa-calendar-alt mr-2" />
                      {date}
                    </p>
                    <h2 className="mb-3 text-2xl font-bold">{title}</h2>
                    <p className="mb-5 text-gray-600">{text}</p>
                    <Link
                      to={`/actividades/${slug}`}
                      className="font-semibold text-green-600"
                    >
                      Leer más <i className="fas fa-arrow-right ml-1" />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </Box>
      </main>
      <Footer />
    </>
  );
}
function Article() {
  const { slug } = useParams();
  const a = articles[slug];
  if (!a) return <NotFound />;
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 pb-16 pt-28">
        <article className="container mx-auto max-w-7xl px-6 lg:px-8">
          <Link
            to="/actividades"
            className="mb-5 inline-flex items-center text-green-600"
          >
            <i className="fas fa-arrow-left mr-2" />
            Regresar a Actividades
          </Link>
          <header className="mb-10 overflow-hidden rounded-2xl bg-white shadow-md">
            <img
              src={image(a.hero)}
              className="h-64 w-full object-cover md:h-96"
              alt={a.title}
            />
            <div className="p-6 md:p-8">
              <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-green-700">
                {a.category}
              </p>
              <h1 className="text-3xl font-bold leading-tight text-gray-800 md:text-5xl">
                {a.title}
              </h1>
              {a.quote && (
                <p className="mt-4 text-lg italic text-gray-600">{a.quote}</p>
              )}
              <div className="mt-4 flex flex-wrap gap-3 text-gray-600">
                <span>
                  <i className="fas fa-calendar-alt mr-2" />
                  {a.date}
                </span>
                <span className="text-gray-300">•</span>
                <span>
                  <i className="fas fa-users mr-2" />
                  {a.detail}
                </span>
              </div>
            </div>
          </header>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="space-y-8 lg:col-span-2">
              {a.sections.map(([heading, paragraphs], i) => (
                <section
                  className={`rounded-2xl p-6 shadow-md md:p-8 ${i === 1 ? "border border-green-100 bg-green-50" : "bg-white"}`}
                  key={heading}
                >
                  <h2 className="mb-4 text-2xl font-bold text-gray-800">
                    {heading}
                  </h2>
                  {paragraphs.map((p) => (
                    <p
                      className="mb-4 leading-relaxed text-gray-700 last:mb-0"
                      key={p}
                    >
                      {p}
                    </p>
                  ))}
                </section>
              ))}
              <section>
                <h2 className="mb-4 text-2xl font-bold">Galería</h2>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  {a.gallery.map((pic, i) => (
                    <img
                      src={image(pic)}
                    className="h-56 w-full rounded-2xl bg-white object-contain shadow-lg"
                      alt={`${a.title} ${i + 1}`}
                      key={pic}
                    />
                  ))}
                </div>
              </section>
            </div>
            <aside>
              <div className="sticky top-28 space-y-6">
                <section className="rounded-2xl bg-white p-6 shadow-md">
                  <h3 className="mb-3 text-lg font-bold">Resumen</h3>
                  <ul className="space-y-3 text-gray-700">
                    {a.summary.map((item) => (
                      <li className="flex gap-3" key={item}>
                        <i className="fas fa-check text-green-600" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </section>
                <section className="rounded-2xl bg-green-700 p-6 text-white shadow-md">
                  <h3 className="mb-2 text-lg font-bold">Mensaje</h3>
                  <p>{a.message}</p>
                </section>
              </div>
            </aside>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
function NotFound() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold">Página no encontrada</h1>
          <Link className="mt-4 inline-block text-green-700 underline" to="/">
            Volver al inicio
          </Link>
        </div>
      </main>
    </>
  );
}
export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/actividades" element={<Activities />} />
        <Route path="/actividades/:slug" element={<Article />} />
        <Route path="/calendario" element={<CalendarPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ContactBubble />
    </>
  );
}
