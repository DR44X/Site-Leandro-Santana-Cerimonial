import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const dirs = [
  'public/images/hero',
  'public/images/eventos',
  'public/images/servicos',
  'public/images/galeria',
  'public/images/equipe',
  'public/videos',
];

for (const dir of dirs) {
  fs.mkdirSync(path.join(rootDir, dir), { recursive: true });
}

// 1. Copy Client real files from "cada de festa"
const clientSourceDir = path.join(rootDir, 'cada de festa');
if (fs.existsSync(clientSourceDir)) {
  const files = [
    {
      src: '825325761_18099034913431738_1454909493504935490_n.jpg',
      dests: [
        'public/images/eventos/15-anos-valsa.jpg',
        'public/images/galeria/15-anos-valsa.jpg'
      ]
    },
    {
      src: '825325913_18099034934431738_7311838514814023466_n.jpg',
      dests: [
        'public/images/eventos/15-anos-debutante.jpg',
        'public/images/galeria/15-anos-debutante.jpg'
      ]
    },
    {
      src: '829631160_18099034955431738_1035633851315990521_n.jpg',
      dests: [
        'public/images/galeria/15-anos-detalhe.jpg'
      ]
    },
    {
      src: 'AQMgt9JJu8IdVeW8aMAioMSmUJhUHAu8u9guSayOdgFrkfE30OQdK5UQuIThCx3LmLfIlpzj0MdqkbTlhjpa3BVcddyd30gu.mp4',
      dests: [
        'public/videos/hero.mp4'
      ]
    }
  ];

  for (const item of files) {
    const srcPath = path.join(clientSourceDir, item.src);
    if (fs.existsSync(srcPath)) {
      for (const dest of item.dests) {
        const destPath = path.join(rootDir, dest);
        fs.copyFileSync(srcPath, destPath);
        console.log(`Copied ${item.src} -> ${dest}`);
      }
    }
  }
}

// 2. Curated royalty-free high quality images for events and editorial aesthetic
// Using reliable Unsplash Source photo IDs with q=80 and auto=format
const downloads = [
  // HERO
  {
    url: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=1600&auto=format&fit=crop',
    dest: 'public/images/hero/hero-main.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1200&auto=format&fit=crop',
    dest: 'public/images/hero/hero-secondary.jpg'
  },
  // EQUIPE & QUEM SOMOS
  {
    url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop',
    dest: 'public/images/equipe/leandro-santana.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=900&auto=format&fit=crop',
    dest: 'public/images/equipe/bastidores-evento.jpg'
  },
  // EVENTOS
  {
    url: 'https://images.unsplash.com/photo-1519225429980-715cb0215aed?q=80&w=1200&auto=format&fit=crop',
    dest: 'public/images/eventos/casamentos.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=1000&auto=format&fit=crop',
    dest: 'public/images/eventos/casamentos-cerimonia.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=1000&auto=format&fit=crop',
    dest: 'public/images/eventos/casamentos-festa.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=1200&auto=format&fit=crop',
    dest: 'public/images/eventos/formaturas.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1000&auto=format&fit=crop',
    dest: 'public/images/eventos/formaturas-brinde.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop',
    dest: 'public/images/eventos/corporativos.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=1000&auto=format&fit=crop',
    dest: 'public/images/eventos/corporativos-coquetel.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=1200&auto=format&fit=crop',
    dest: 'public/images/eventos/aniversarios.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=1000&auto=format&fit=crop',
    dest: 'public/images/eventos/aniversarios-bolo.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=1200&auto=format&fit=crop',
    dest: 'public/images/eventos/confraternizacoes.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=1000&auto=format&fit=crop',
    dest: 'public/images/eventos/confraternizacoes-lounge.jpg'
  },
  // SERVIÇOS
  {
    url: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=1000&auto=format&fit=crop',
    dest: 'public/images/servicos/cerimonial.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=1000&auto=format&fit=crop',
    dest: 'public/images/servicos/buffet.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1000&auto=format&fit=crop',
    dest: 'public/images/servicos/decoracao.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?q=80&w=1000&auto=format&fit=crop',
    dest: 'public/images/servicos/espaco.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=1000&auto=format&fit=crop',
    dest: 'public/images/servicos/bar.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1000&auto=format&fit=crop',
    dest: 'public/images/servicos/musica.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?q=80&w=1000&auto=format&fit=crop',
    dest: 'public/images/servicos/foto.jpg'
  },
  // GALERIA
  {
    url: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1000&auto=format&fit=crop',
    dest: 'public/images/galeria/casamento-01.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1544077960-604201fe74bc?q=80&w=1000&auto=format&fit=crop',
    dest: 'public/images/galeria/casamento-02.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1519225429980-715cb0215aed?q=80&w=1000&auto=format&fit=crop',
    dest: 'public/images/galeria/casamento-03.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=1000&auto=format&fit=crop',
    dest: 'public/images/galeria/formatura-01.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1525610553991-2bede1a236e2?q=80&w=1000&auto=format&fit=crop',
    dest: 'public/images/galeria/formatura-02.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1000&auto=format&fit=crop',
    dest: 'public/images/galeria/corporativo-01.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=1000&auto=format&fit=crop',
    dest: 'public/images/galeria/corporativo-02.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1478146896981-b80fe463b330?q=80&w=1000&auto=format&fit=crop',
    dest: 'public/images/galeria/decoracao-01.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=1000&auto=format&fit=crop',
    dest: 'public/images/galeria/decoracao-02.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=1000&auto=format&fit=crop',
    dest: 'public/images/galeria/decoracao-03.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=1000&auto=format&fit=crop',
    dest: 'public/images/galeria/buffet-01.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1000&auto=format&fit=crop',
    dest: 'public/images/galeria/buffet-02.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1000&auto=format&fit=crop',
    dest: 'public/images/galeria/buffet-03.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1000&auto=format&fit=crop',
    dest: 'public/images/galeria/momentos-01.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1000&auto=format&fit=crop',
    dest: 'public/images/galeria/momentos-02.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?q=80&w=1000&auto=format&fit=crop',
    dest: 'public/images/galeria/momentos-03.jpg'
  },
];

async function downloadImages() {
  console.log(`Starting download of ${downloads.length} curated editorial assets...`);
  for (const item of downloads) {
    const destPath = path.join(rootDir, item.dest);
    if (fs.existsSync(destPath)) {
      console.log(`Already exists: ${item.dest}`);
      continue;
    }
    try {
      const res = await fetch(item.url);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const arrayBuffer = await res.arrayBuffer();
      fs.writeFileSync(destPath, Buffer.from(arrayBuffer));
      console.log(`✓ Downloaded ${item.dest} (${Math.round(arrayBuffer.byteLength / 1024)} KB)`);
    } catch (err) {
      console.error(`Failed ${item.dest}:`, err.message);
    }
  }
  console.log('Finished setting up images.');
}

downloadImages();
