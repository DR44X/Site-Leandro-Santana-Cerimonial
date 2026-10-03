import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const stagingDir = './staging-photos';
const clientDir = './cada de festa';
const outputDir = './public/images';

// Ensure directories exist
const subdirs = ['hero', 'equipe', 'eventos', 'servicos', 'galeria'];
for (const sub of subdirs) {
  fs.mkdirSync(path.join(outputDir, sub), { recursive: true });
}

// 29 Staging files map (index 1 to 29)
const files = [
  '774165955_18094421786431738_5480595482951275758_n.jpg', // [1] Crianças felizes na festa infantil
  '774777731_18094570991431738_4715460174748188724_n.jpg', // [2] Abraço carinhoso entre convidadas com balões
  '775871634_18094634441431738_1068225298795581581_n.jpg', // [3] Mesa de bolo e doces O Pequeno Príncipe azul e dourado
  '775871643_18094634471431738_263176970664612359_n.jpg',  // [4] Bebê Bento com coroa dourada de príncipe
  '777418183_18094634462431738_7549015552369708543_n.jpg', // [5] Painel circular cenográfico com iluminação suave
  '778124358_18094421765431738_6723960310331932255_n.jpg', // [6] Aniversariante brincando com blocos decorativos
  '778485902_18094634432431738_8808016152582916436_n.jpg', // [7] Balão cenográfico de ar quente com lustre de cristal
  '778986017_18094421795431738_7682390502957993611_n.jpg', // [8] Coordenação de cerimonial e animação
  '779221960_18095297186431738_3327421942207529186_n.jpg', // [9] Casal em momento carinhoso no chá revelação dinossauros
  '779669186_18094517099431738_7128049980759098916_n.jpg', // [10] Registro espontâneo da criança no espaço de festa
  '780127542_18095297228431738_2423891323863129870_n.jpg', // [11] Gestante radiante em vestido verde esmeralda no chá de bebê
  '780423303_18095296100431738_4434279126625810479_n.jpg', // [12] Mesa suntuosa de bolo e doces finos com 3 lustres de cristal
  '783571127_18095297204431738_7618902255223990589_n.jpg', // [13] Cenografia temática infantil com cubos decorativos
  '784477379_18095297195431738_668618711669067451_n.jpg',  // [14] Topo de bolo com coroa dourada do príncipe Rael Matias
  '796585402_18098223026431738_4269593693764740688_n.jpg', // [15] Celebração de casamento com beijo dos noivos de smoking
  '797035205_18096510317431738_735135716683309345_n.jpg',  // [16] Making of emocionante da noiva com maquiador
  '811056660_18097510748431738_6898303438842090834_n.jpg', // [17] Cerimônia na nave da igreja com noiva e daminha
  '813332697_18097612385431738_6113331884494572384_n.jpg', // [18] Ensaio pré-wedding na praia visto através da aliança dourada
  '814560819_18097868063431738_7999315026854901505_n.jpg', // [19] Serviço de buffet refinado com louça de porcelana floral
  '814670632_18097868021431738_516944178008344137_n.jpg',  // [20] Debutante em ensaio temático Alice com relógio e piso xadrez
  '818016113_18098223308431738_3981027843889299060_n.jpg', // [21] Noivos e padrinhos comemorando com champanhe
  '818062346_18098223299431738_4123143452870028631_n.jpg', // [22] Casamento sob pórtico floral com abraço apaixonado
  '820017003_18098223278431738_6633221845207204096_n.jpg', // [23] Detalhe poético das mãos dos noivos entrelaçadas com bokeh
  '825269831_18098912243431738_8086625187384593398_n.jpg', // [24] Leandro Santana no centro com equipe em salão nobre
  '825270163_18098912192431738_432286136325369998_n.jpg',  // [25] Leandro de braços abertos com equipe celebrando EVERTON 40
  '825324069_18098912780431738_1488228021277836759_n.jpg', // [26] Mesa de banquete com taças de cristal e rosas vermelhas
  '825325453_18098912768431738_788475218756518430_n.jpg',  // [27] Moldura barroca dourada na recepção do Baile Everton
  '827856344_18098912792431738_769064244120531484_n.jpg',  // [28] Salão imperial clássico com escadaria monumental
  '828413519_18098912672431738_8706402657589943809_n.jpg', // [29] Bolo escultural temático O Fantasma da Ópera
];

// Target placements mapping
const targets = [
  // HERO
  {
    src: files[11], // [12] Mesa majestosa 3 lustres
    dest: 'hero/hero-main',
    maxWidth: 1920,
  },
  {
    src: files[24], // [25] Leandro e equipe EVERTON 40
    dest: 'hero/hero-secondary',
    maxWidth: 1400,
  },

  // EQUIPE
  {
    src: files[23], // [24] Equipe com Leandro no centro -> Portrait Crop de Leandro Santana
    dest: 'equipe/leandro-santana',
    crop: { left: 1140, top: 220, width: 340, height: 450 },
    width: 600,
    height: 800,
  },
  {
    src: files[23], // [24] Equipe completa em salão de gala
    dest: 'equipe/bastidores-evento',
    maxWidth: 1400,
  },

  // EVENTOS
  {
    src: files[21], // [22] Casamento arco floral
    dest: 'eventos/casamentos',
    maxWidth: 1200,
  },
  {
    src: files[16], // [17] Cerimônia religiosa na igreja com daminha
    dest: 'eventos/casamentos-cerimonia',
    maxWidth: 1400,
  },
  {
    src: files[20], // [21] Noivos e padrinhos em festa celebrando
    dest: 'eventos/casamentos-festa',
    maxWidth: 1200,
  },
  {
    src: files[27], // [28] Salão imperial escadaria ópera
    dest: 'eventos/formaturas',
    maxWidth: 1200,
  },
  {
    src: files[25], // [26] Mesa banquete taças de cristal e rosas vermelhas
    dest: 'eventos/formaturas-brinde',
    maxWidth: 1400,
  },
  {
    src: files[24], // [25] Celebração com letras iluminadas EVERTON 40
    dest: 'eventos/corporativos',
    maxWidth: 1200,
  },
  {
    src: files[26], // [27] Recepção Baile Everton com moldura barroca
    dest: 'eventos/corporativos-coquetel',
    maxWidth: 1400,
  },
  {
    src: files[2],  // [3] Mesa O Pequeno Príncipe azul e dourada
    dest: 'eventos/aniversarios',
    maxWidth: 1200,
  },
  {
    src: files[13], // [14] Topo de bolo artesanal com coroa
    dest: 'eventos/aniversarios-bolo',
    maxWidth: 1200,
  },
  {
    src: files[10], // [11] Gestante em vestido verde esmeralda no chá de bebê
    dest: 'eventos/confraternizacoes',
    maxWidth: 1200,
  },
  {
    src: files[1],  // [2] Abraço afetuoso de convidadas com balões
    dest: 'eventos/confraternizacoes-lounge',
    maxWidth: 1400,
  },

  // SERVIÇOS
  {
    src: files[7],  // [8] Leandro Santana e equipe conduzindo o evento
    dest: 'servicos/cerimonial',
    maxWidth: 1200,
  },
  {
    src: files[18], // [19] Louça nobre de porcelana e serviço de buffet
    dest: 'servicos/buffet',
    maxWidth: 1200,
  },
  {
    src: files[6],  // [7] Balão cenográfico de ar quente com lustre
    dest: 'servicos/decoracao',
    maxWidth: 1200,
  },
  {
    src: files[27], // [28] Salão monumental de festas com escadaria
    dest: 'servicos/espaco',
    maxWidth: 1200,
  },
  {
    src: files[28], // [29] Bolo escultural O Fantasma da Ópera e mesa de bar
    dest: 'servicos/bar',
    maxWidth: 1200,
  },
  {
    src: files[24], // [25] Pista iluminada, sonorização e letras gigantes
    dest: 'servicos/musica',
    maxWidth: 1200,
  },
  {
    src: files[17], // [18] Ensaio na praia através da aliança dourada
    dest: 'servicos/foto',
    maxWidth: 1200,
  },

  // GALERIA (Slots existentes)
  {
    src: files[14], // [15] Casamento beijo dos noivos de smoking
    dest: 'galeria/casamento-01',
    maxWidth: 1200,
  },
  {
    src: files[15], // [16] Making of da noiva com maquiador
    dest: 'galeria/casamento-02',
    maxWidth: 1200,
  },
  {
    src: files[22], // [23] Detalhe das mãos dos noivos e anel
    dest: 'galeria/casamento-03',
    maxWidth: 1200,
  },
  {
    src: files[26], // [27] Recepção com espelho barroco dourado
    dest: 'galeria/formatura-01',
    maxWidth: 1200,
  },
  {
    src: files[27], // [28] Salão de gala com escadaria imperial
    dest: 'galeria/formatura-02',
    maxWidth: 1200,
  },
  {
    src: files[12], // [13] Cenografia infantil Dino Baby com cubos
    dest: 'galeria/decoracao-01',
    maxWidth: 1200,
  },
  {
    src: files[4],  // [5] Painel circular cenográfico com iluminação
    dest: 'galeria/decoracao-02',
    maxWidth: 1200,
  },
  {
    src: files[11], // [12] Mesa suntuosa com 3 lustres de cristal
    dest: 'galeria/decoracao-03',
    maxWidth: 1400,
  },
  {
    src: files[25], // [26] Mesa banquete taças e rosas vermelhas
    dest: 'galeria/buffet-01',
    maxWidth: 1200,
  },
  {
    src: files[28], // [29] Bolo escultural O Fantasma da Ópera
    dest: 'galeria/buffet-02',
    maxWidth: 1200,
  },
  {
    src: files[18], // [19] Serviço refinado de chá e porcelana
    dest: 'galeria/buffet-03',
    maxWidth: 1200,
  },
  {
    src: files[8],  // [9] Casal no chá revelação dinos com beijo
    dest: 'galeria/momentos-01',
    maxWidth: 1200,
  },
  {
    src: files[19], // [20] Debutante Alice no País das Maravilhas
    dest: 'galeria/momentos-02',
    maxWidth: 1200,
  },
  {
    src: files[3],  // [4] Bebê Bento com coroa de príncipe
    dest: 'galeria/momentos-03',
    maxWidth: 1200,
  },

  // SLOTS ADICIONAIS DE GALERIA PARA TODAS AS 29 FOTOS REAIS DO CLIENTE!
  {
    src: files[0],  // [1] Crianças felizes na festa
    dest: 'galeria/momentos-04',
    maxWidth: 1200,
  },
  {
    src: files[5],  // [6] Bebê brincando com cubos
    dest: 'galeria/momentos-05',
    maxWidth: 1200,
  },
  {
    src: files[9],  // [10] Bento brincando no espaço temático
    dest: 'galeria/momentos-06',
    maxWidth: 1200,
  },
  {
    src: files[1],  // [2] Abraço carinhoso entre convidadas
    dest: 'galeria/momentos-07',
    maxWidth: 1200,
  },
  {
    src: files[10], // [11] Gestante radiante em verde esmeralda
    dest: 'galeria/momentos-08',
    maxWidth: 1200,
  },
  {
    src: files[6],  // [7] Balão cenográfico de ar quente com lustre
    dest: 'galeria/decoracao-04',
    maxWidth: 1200,
  },
  {
    src: files[13], // [14] Topo de bolo com coroa artesanal
    dest: 'galeria/decoracao-05',
    maxWidth: 1200,
  },
  {
    src: files[2],  // [3] Mesa O Pequeno Príncipe azul e dourada
    dest: 'galeria/decoracao-06',
    maxWidth: 1200,
  },
  {
    src: files[16], // [17] Cerimônia na nave da igreja com daminha
    dest: 'galeria/casamento-04',
    maxWidth: 1400,
  },
  {
    src: files[20], // [21] Noivos e padrinhos em festa comemorando
    dest: 'galeria/casamento-05',
    maxWidth: 1200,
  },
  {
    src: files[21], // [22] Casamento ao ar livre com pórtico floral
    dest: 'galeria/casamento-06',
    maxWidth: 1200,
  },
  {
    src: files[17], // [18] Ensaio pré-wedding na praia através da aliança
    dest: 'galeria/casamento-07',
    maxWidth: 1200,
  },
  {
    src: files[19], // [20] Debutante ensaio temático Alice
    dest: 'galeria/15-anos-04',
    maxWidth: 1200,
  },
];

console.log(`\n1. Processing ${targets.length} image target mappings from client photos...`);
const usedSources = new Set();

for (const t of targets) {
  const srcPath = path.join(stagingDir, t.src);
  if (!fs.existsSync(srcPath)) {
    console.error(`Source not found: ${srcPath}`);
    continue;
  }
  usedSources.add(t.src);

  const outWebp = path.join(outputDir, `${t.dest}.webp`);
  const outJpg = path.join(outputDir, `${t.dest}.jpg`);

  let pipeline = sharp(srcPath);

  if (t.crop) {
    pipeline = pipeline.extract(t.crop);
  }

  if (t.width && t.height) {
    pipeline = pipeline.resize(t.width, t.height, { fit: 'cover' });
  } else if (t.maxWidth) {
    pipeline = pipeline.resize({ width: t.maxWidth, withoutEnlargement: true });
  }

  // WebP output
  await pipeline
    .clone()
    .webp({ quality: 82, effort: 4 })
    .toFile(outWebp);

  // JPG output (for fallback)
  await pipeline
    .clone()
    .jpeg({ quality: 85, progressive: true })
    .toFile(outJpg);

  const statWebp = fs.statSync(outWebp);
  console.log(`✓ ${t.dest}.webp (${(statWebp.size / 1024).toFixed(1)} KB)`);
}

// 2. Process og-image.jpg (1200x630) using the client's magnificent 3-chandeliers cake table
console.log('\n2. Generating public/og-image.jpg from client photo...');
const ogSrcPath = path.join(stagingDir, files[11]); // [12] Mesa majestosa 3 lustres
await sharp(ogSrcPath)
  .resize(1200, 630, { fit: 'cover' })
  .jpeg({ quality: 85, progressive: true })
  .toFile('./public/og-image.jpg');
console.log('✓ public/og-image.jpg generated.');

// 3. Optimize the 3 client debutante photos from "cada de festa"
console.log('\n3. Optimizing client photos from "cada de festa"...');
const clientPhotos = [
  {
    src: '825325913_18099034934431738_7311838514814023466_n.jpg',
    dests: ['eventos/15-anos-debutante', 'galeria/15-anos-debutante'],
    maxWidth: 1400,
  },
  {
    src: '825325761_18099034913431738_1454909493504935490_n.jpg',
    dests: ['eventos/15-anos-valsa', 'galeria/15-anos-valsa'],
    maxWidth: 1400,
  },
  {
    src: '829631160_18099034955431738_1035633851315990521_n.jpg',
    dests: ['galeria/15-anos-detalhe'],
    maxWidth: 1400,
  },
];

for (const cp of clientPhotos) {
  const srcPath = path.join(clientDir, cp.src);
  if (fs.existsSync(srcPath)) {
    for (const d of cp.dests) {
      const outWebp = path.join(outputDir, `${d}.webp`);
      const outJpg = path.join(outputDir, `${d}.jpg`);
      await sharp(srcPath)
        .resize({ width: cp.maxWidth, withoutEnlargement: true })
        .webp({ quality: 82, effort: 4 })
        .toFile(outWebp);
      await sharp(srcPath)
        .resize({ width: cp.maxWidth, withoutEnlargement: true })
        .jpeg({ quality: 85, progressive: true })
        .toFile(outJpg);
      console.log(`✓ Optimized ${d}.webp (${(fs.statSync(outWebp).size / 1024).toFixed(1)} KB) and .jpg`);
    }
  }
}

// 4. Clean up any remaining legacy Unsplash files (corporativo-01 and corporativo-02)
console.log('\n4. Removing legacy Unsplash files...');
const staleFiles = [
  'galeria/corporativo-01.jpg',
  'galeria/corporativo-01.webp',
  'galeria/corporativo-02.jpg',
  'galeria/corporativo-02.webp',
];
for (const sf of staleFiles) {
  const p = path.join(outputDir, sf);
  if (fs.existsSync(p)) {
    fs.unlinkSync(p);
    console.log(`✓ Deleted legacy Unsplash file: ${sf}`);
  }
}

// 5. Verification
console.log('\n--- VERIFICATION REPORT ---');
console.log(`Total client photos in folder: ${files.length}`);
console.log(`Total client photos utilized: ${usedSources.size}`);
if (usedSources.size === files.length) {
  console.log('★ ALL 29 CLIENT PHOTOS ARE ACTIVELY UTILIZED!');
} else {
  console.warn(`Warning: Missing ${files.length - usedSources.size} photos.`);
}
