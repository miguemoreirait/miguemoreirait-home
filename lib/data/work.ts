export type WorkItem = {
  slug: string;
  titulo: string;
  desc: string;
  tags: string[];
  href?: string;
  image?: string;
};

// Vacío por ahora — la sección "Trabajos" muestra el estado "Próximamente"
// mientras este array esté vacío. Agregar un WorkItem acá activa la grilla.
export const workItems: WorkItem[] = [];
