export const siteSeo = {
  url: "https://gruposcout3.org.sv/",
  name: "Grupo Scout 3 Javier",
  title: "Grupo Scout 3 Javier | Scouts en San Salvador",
  description:
    "Conoce al Grupo Scout 3 Javier en San Salvador: actividades, campamentos y formación en valores para niños, niñas y jóvenes. ¡Únete a nuestra familia scout!",
  image: "images/grupo1.jpg",
  imageAlt: "Integrantes del Grupo Scout 3 Javier en El Salvador",
};

export function getPageSeo(pathname, article) {
  if (pathname === "/") return siteSeo;
  if (pathname === "/actividades") {
    return {
      ...siteSeo,
      title: `Actividades y campamentos | ${siteSeo.name}`,
      description:
        "Explora los campamentos, actividades de servicio y encuentros del Grupo Scout 3 Javier en El Salvador.",
    };
  }
  if (pathname === "/calendario") {
    return {
      ...siteSeo,
      title: `Calendario de actividades | ${siteSeo.name}`,
      description:
        "Consulta el calendario y las fechas de las actividades del Grupo Scout 3 Javier en San Salvador, El Salvador.",
    };
  }
  if (article) {
    return {
      title: `${article.title} | ${siteSeo.name}`,
      description: article.summary.join(" "),
      image: article.hero,
      imageAlt: article.title,
    };
  }
  return {
    ...siteSeo,
    title: `Página no encontrada | ${siteSeo.name}`,
    description: "La página solicitada no existe. Visita el inicio del Grupo Scout 3 Javier.",
    noindex: true,
  };
}
