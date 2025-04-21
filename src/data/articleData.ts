export interface Article {
  id: string;
  title: string;
  shortDescription: string;
  content: string;
  translations?: {
    [langCode: string]: string; // Content translations for different languages
  };
  titleTranslations?: {
    [langCode: string]: string; // Title translations for different languages
  };
  descriptionTranslations?: {
    [langCode: string]: string; // Short description translations
  };
  imageUrl: string;
  imageCredit?: string; // Added imageCredit field
  author: string;
  publishDate: string;
  category: string;
  tags: string[];
  estimatedReadingTime: number;
}

export const articles: Article[] = [
  {
    id: '1',
    title: 'The Rich Heritage of Iban Traditional Textiles',
    shortDescription: 'Explore the intricate patterns and symbolic meanings behind Iban pua kumbu textiles.',
    content: `
# The Rich Heritage of Iban Traditional Textiles

The Iban people, one of Sarawak's largest indigenous groups, are renowned for their exquisite traditional textiles, particularly the pua kumbu. These handwoven cloths are not merely decorative items but repositories of cultural knowledge, spiritual beliefs, and artistic expressions.

## The Art of Pua Kumbu

Pua kumbu, which means "blanket" in the Iban language, is a traditional woven textile made by Iban women. The process of creating pua kumbu is laborious and requires exceptional skill. Before weaving begins, the cotton threads are prepared through a series of processes including spinning, mordanting, and dyeing.

The dyeing process utilizes natural materials found in the rainforest, such as:
- Engkudu (Morinda citrifolia) roots for red colors
- Tarum (Indigofera) leaves for blue shades
- Various barks and leaves for brown and black tones

These natural dyes are prepared according to ancient recipes passed down through generations of weavers.

## Symbolic Patterns and Motifs

The patterns woven into pua kumbu are not merely decorative but deeply symbolic. Traditional motifs often depict:

1. **Mythical creatures** like the dragon-dog (naga) that represents supernatural power
2. **Flora and fauna** from the Bornean rainforest
3. **Cosmic symbols** representing the spiritual universe
4. **Human figures** depicting ancestors or cultural heroes

Each pattern has a specific name and meaning, and master weavers were traditionally believed to receive these designs in dreams or visions.

## Cultural Significance

In traditional Iban society, pua kumbu served multiple purposes:
- As ceremonial cloths during important rituals
- As status symbols indicating a woman's skill and industriousness
- As protective talismans during spiritual journeys
- As historical records documenting important events

Today, while modern materials and techniques have been introduced, efforts are being made to preserve this invaluable cultural heritage through workshops, exhibitions, and documentation projects.

## Preservation Challenges

The art of pua kumbu weaving faces numerous challenges in the contemporary world:
- The younger generation's decreasing interest in learning this labor-intensive craft
- The loss of traditional knowledge about natural dye preparation
- Competition from mass-produced textiles
- Limited market opportunities for traditional weavers

However, organizations like the Tun Jugah Foundation are working diligently to document traditional patterns, train new weavers, and create sustainable markets for these extraordinary textiles.

## Experiencing Pua Kumbu

Visitors to Sarawak can experience the beauty of pua kumbu in various ways:
- Visit the Tun Jugah Foundation in Kuching to see exhibitions of antique and contemporary textiles
- Observe weaving demonstrations at cultural centers and museums
- Purchase authentic textiles from certified sources that support traditional weavers
- Attend the annual Pua Kumbu Festival when held

Through these experiences, one can gain a deeper appreciation of not just the aesthetic beauty but the cultural depth and spiritual significance of these remarkable textiles.
    `,
    titleTranslations: {
      ms: 'Warisan Kaya Tekstil Tradisional Iban',
      ib: 'Penemu Pemasa Iban ti Besai',
    },
    translations: {
      ms: `
# Warisan Kaya Tekstil Tradisional Iban

Orang Iban, salah satu kumpulan pribumi terbesar di Sarawak, terkenal dengan tekstil tradisional yang indah, terutamanya pua kumbu. Kain tenunan tangan ini bukan sekadar hiasan tetapi merupakan khazanah pengetahuan budaya, kepercayaan spiritual, dan ekspresi seni.

## Seni Pua Kumbu

Pua kumbu, yang bermaksud "selimut" dalam bahasa Iban, adalah tekstil tenunan tradisional yang dihasilkan oleh wanita Iban. Proses pembuatan pua kumbu memerlukan kerja keras dan kemahiran yang luar biasa. Sebelum tenunan dimulakan, benang kapas disediakan melalui beberapa proses termasuk pemintalan, mordanting, dan pewarnaan.

Proses pewarnaan menggunakan bahan semula jadi yang terdapat di hutan hujan, seperti:
- Akar engkudu (Morinda citrifolia) untuk warna merah
- Daun tarum (Indigofera) untuk warna biru
- Pelbagai kulit kayu dan daun untuk warna coklat dan hitam

Pewarna semula jadi ini disediakan mengikut resepi kuno yang diwariskan turun-temurun oleh penenun.

## Corak dan Motif Simbolik

Corak yang ditenun ke dalam pua kumbu bukan sekadar hiasan tetapi sangat simbolik. Motif tradisional sering menggambarkan:

1. **Makhluk mitos** seperti naga yang melambangkan kuasa supernatural
2. **Flora dan fauna** dari hutan hujan Borneo
3. **Simbol kosmos** yang mewakili alam semesta spiritual
4. **Figur manusia** yang menggambarkan nenek moyang atau wira budaya

Setiap corak mempunyai nama dan makna tersendiri, dan penenun mahir secara tradisional dipercayai menerima reka bentuk ini dalam mimpi atau penglihatan.
    `,
      ib: `
# Warisan Kaya Tekstil Tradisional Iban

Orang Iban, salah satu kumpulan pribumi terbesar di Sarawak, terkenal dengan tekstil tradisional yang indah, terutamanya pua kumbu. Kain tenunan tangan ini bukan sekadar hiasan tetapi merupakan khazanah pengetahuan budaya, kepercayaan spiritual, dan ekspresi seni.

## Seni Pua Kumbu

Pua kumbu, yang bermaksud "selimut" dalam bahasa Iban, adalah tekstil tenunan tradisional yang dihasilkan oleh wanita Iban. Proses pembuatan pua kumbu memerlukan kerja keras dan kemahiran yang luar biasa. Sebelum tenunan dimulakan, benang kapas disediakan melalui beberapa proses termasuk pemintalan, mordanting, dan pewarnaan.

Proses pewarnaan menggunakan bahan semula jadi yang terdapat di hutan hujan, seperti:
- Akar engkudu (Morinda citrifolia) untuk warna merah
- Daun tarum (Indigofera) untuk warna biru
- Pelbagai kulit kayu dan daun untuk warna coklat dan hitam

Pewarna semula jadi ini disediakan mengikut resepi kuno yang diwariskan turun-temurun oleh penenun.

## Corak dan Motif Simbolik

Corak yang ditenun ke dalam pua kumbu bukan sekadar hiasan tetapi sangat simbolik. Motif tradisional sering menggambarkan:

1. **Makhluk mitos** seperti naga yang melambangkan kuasa supernatural
2. **Flora dan fauna** dari hutan hujan Borneo
3. **Simbol kosmos** yang mewakili alam semesta spiritual
4. **Figur manusia** yang menggambarkan nenek moyang atau wira budaya

Setiap corak mempunyai nama dan makna tersendiri, dan penenun mahir secara tradisional dipercayai menerima reka bentuk ini dalam mimpi atau penglihatan.
    `
    },
    imageUrl: '/lovable-uploads/a2ac5418-190f-482f-ade0-366e7f7695c8.png',
    imageCredit: 'Image Credit: dreamstime',
    author: 'Dr. Maria Langub',
    publishDate: '2023-05-15',
    category: 'Textiles',
    tags: ['Iban', 'Textiles', 'Pua Kumbu', 'Traditional Crafts'],
    estimatedReadingTime: 8
  },
  {
    id: '2',
    title: 'Sarawak Laksa: A Culinary Journey',
    shortDescription: 'Discover the rich flavors and history behind Sarawak\'s most famous dish.',
    content: `
# Sarawak Laksa: A Culinary Journey

Sarawak Laksa is undoubtedly one of the most beloved dishes to emerge from Malaysian Borneo. This iconic dish represents a beautiful fusion of Chinese, Malay, and indigenous influences, creating a flavor profile that is distinctly Sarawakian.

## Origins and History

The origins of Sarawak Laksa are somewhat debated, but most culinary historians agree that it evolved in the mid-20th century. One popular account attributes its creation to a Chinese immigrant named Goh Lik Teck, who developed the recipe after World War II. Combining Chinese cooking techniques with local ingredients and flavors, he created what would become known as Sarawak Laksa.

Unlike its counterparts in Peninsular Malaysia (such as Penang Laksa or Curry Laksa), Sarawak Laksa has its own distinct character—neither purely curry-based nor dominated by fish, but rather a harmonious blend of aromatics and spices.

## The Magical Paste

At the heart of Sarawak Laksa is its complex spice paste (rempah), which typically includes:

- Dried chiles
- Galangal
- Lemongrass
- Shallots
- Garlic
- Candlenuts (buah keras)
- Coriander seeds
- Cumin
- Black pepper
- Belachan (shrimp paste)

These ingredients are ground into a fine paste, then sautéed in oil until fragrant before being simmered with chicken stock and coconut milk to create the soup base.

## The Perfect Bowl

A traditional bowl of Sarawak Laksa consists of:

1. **The Broth**: A rich, aromatic soup with a balanced flavor that is spicy, savory, and slightly tangy
2. **Rice Vermicelli**: Thin rice noodles (bee hoon) blanched and placed at the bottom of the bowl
3. **Proteins**: Shredded chicken and peeled prawns
4. **Garnishes**: Bean sprouts, shredded omelette, fresh coriander leaves, lime, and sambal belacan (spicy shrimp paste)

The composition creates a symphony of textures and flavors—silky noodles, tender proteins, crunchy bean sprouts, all bathed in that unmistakable fragrant broth.

## Cultural Significance

Sarawak Laksa has become more than just food; it's a cultural icon for the state. It gained international attention when the late Anthony Bourdain featured it on his show "No Reservations," declaring it the "breakfast of the gods."

Today, the dish serves as a unifying culinary experience across Sarawak's diverse ethnic communities. It's enjoyed by Chinese, Malay, Iban, Bidayuh, and other groups alike, often served for breakfast but appreciated throughout the day.

## Where to Find the Best Sarawak Laksa

Visitors to Sarawak should not miss trying authentic Sarawak Laksa at these renowned establishments:

- **Choon Hui Cafe** in Kuching, famously visited by Anthony Bourdain
- **Mom's Laksa** at Jalan Haji Taha
- **Poh Lam Laksa** at Carpenter Street
- **Golden Arch Cafe** at Jalan Ban Hock

Each establishment has its loyal following who will argue passionately about which serves the most authentic version.

## Making It at Home

While nothing beats having Sarawak Laksa in Sarawak itself, those living elsewhere can attempt to recreate it. Premade Sarawak Laksa paste is available commercially, though connoisseurs will tell you it never quite captures the full complexity of a freshly made paste.

The true art lies in balancing the spices, achieving the perfect consistency of the broth (neither too thick nor too thin), and ensuring all elements complement each other harmoniously.

## Preserving a Culinary Heritage

As with many traditional foods, there are concerns about preserving the authenticity of Sarawak Laksa while allowing for its natural evolution. Food festivals, cooking competitions, and documentation efforts help ensure this culinary treasure continues to be appreciated by future generations.

Whether you're a food enthusiast or simply a curious traveler, experiencing Sarawak Laksa offers a delicious gateway into understanding the diverse cultural tapestry of Sarawak.
    `,
    titleTranslations: {
      ms: 'Laksa Sarawak: Perjalanan Kulinari',
      ib: 'Laksa Sarawak: Jalai Pengeman Ti Manah',
    },
    translations: {
      ms: `
# Laksa Sarawak: Perjalanan Kulinari

Laksa Sarawak tanpa ragu adalah salah satu hidangan paling digemari yang muncul dari Borneo Malaysia. Hidangan ikonik ini mewakili perpaduan yang indah antara pengaruh Cina, Melayu, dan pribumi, menciptakan profil rasa yang khas Sarawak.

## Asal Usul dan Sejarah

Asal usul Laksa Sarawak agak diperdebatkan, tetapi kebanyakan ahli sejarah kulinari bersetuju bahawa ia berkembang pada pertengahan abad ke-20. Satu kisah popular menisbahkan penciptaannya kepada seorang pendatang Cina bernama Goh Lik Teck, yang mengembangkan resipi selepas Perang Dunia Kedua. Menggabungkan teknik memasak Cina dengan bahan dan perasa tempatan, beliau mencipta apa yang akan dikenali sebagai Laksa Sarawak.

Tidak seperti Laksa lain di Semenanjung Malaysia (seperti Laksa Penang atau Laksa Kari), Laksa Sarawak mempunyai ciri khasnya sendiri—tidak semata-mata berasaskan kari mahupun didominasi oleh ikan, tetapi lebih kepada gabungan harmoni rempah dan herba.

## Pes Ajaib

Di jantung Laksa Sarawak adalah pes rempahnya yang kompleks (rempah), yang biasanya termasuk:

- Cili kering
- Lengkuas
- Serai
- Bawang merah
- Bawang putih
- Buah keras
- Biji ketumbar
- Jintan
- Lada hitam
- Belacan

Bahan-bahan ini dikisar menjadi pes halus, kemudian ditumis dalam minyak sehingga wangi sebelum dimasak dengan stok ayam dan santan untuk membuat kuah asas.

## Mangkuk Sempurna

Semangkuk Laksa Sarawak tradisional terdiri daripada:

1. **Kuah**: Sup yang kaya dan beraroma dengan rasa yang seimbang iaitu pedas, sedap, dan sedikit masam
2. **Bihun**: Mi beras nipis yang dicelur dan diletakkan di bahagian bawah mangkuk
3. **Protein**: Ayam yang disoyat dan udang yang dikupas
4. **Hiasan**: Taugeh, telur dadar disiat, daun ketumbar segar, limau nipis, dan sambal belacan

Komposisi ini menciptakan simfoni tekstur dan rasa—mi yang lembut, protein yang empuk, taugeh yang rangup, semuanya dimandikan dalam kuah beraroma yang khas.
    `,
      ib: `
# Laksa Sarawak: Jalai Pengeman Ti Manah

Laksa Sarawak nya sigi pemakanan ti manah ari Borneo Malaysia. Ia sigi pemakanan ti beguna ari Cina, Melayu, enggau bansa bukai, ke ngadaka asa ti bisi dalam Sarawak aja.

## Pun Enggau Pengawa Dulu

Pasal pun laksa Sarawak nya bisi beratika, tang pemakai ke pengemu bepanggai peninggi nya ngembuan taun 1950an. Kelimpah nya bejalai pekara Cina ti benama Goh Lik Teck, ti simbun pemakai nya kelari Perang Dunya Kedua. Ia nyampor jalai masak Cina enggau pemakai ari menua tu, nya ti manah meh laksa Sarawak.

Enda baka laksa di Semenanjung Malaysia (baka Laksa Penang atau Laksa Kari), laksa Sarawak bisi jalai diri—enda semina ari kari tauka bisi ikan, tang ia nya sanggup ari rempah ti beguna.

## Pemakai Ti Manah

Di Dalam laksa Sarawak bisi rempah ti manah (rempah), ti bisi:

- Cili kering
- Lengkuas
- Serai
- Bawang merah
- Bawang putih
- Buah keras
- Biji ketumbar
- Jintan
- Lada hitam
- Belacan

Pemakai tu ditunu dalam minyak nyangkak melah dia nya masak begulai kuah ayam enggau santan kena ngaga ai nya.

## Laksa Ti Manah

Laksa Sarawak ti bansa dulu:

1. **Kuah**: Sup ti manah enggau asa ti teguh pedas, sedap, enggu mit masam
2. **Bihun**: Bihun mit ti ditunu lalu dibai ba piga
3. **Daging**: Ayam enggau udang ti dikupas
4. **Ulih**: Taugeh, telur dadar, daun ketumbar, limau nipis, enggau sambal belacan

Pemakanan tu meri jalai asa—bihun mit, daging ti manah, taugeh ti rangup, semua nya begulai dalam ai ti manah.
    `
    },
    imageUrl: 'https://cdn.tasteatlas.com/images/dishes/b506087209e647eaa5d10795657bd32a.jpg',
    imageCredit: 'Image Credit: tasteatlas.com',
    author: 'Chef Wong Mei Ling',
    publishDate: '2023-07-22',
    category: 'Food',
    tags: ['Cuisine', 'Laksa', 'Food Heritage', 'Traditional Recipes'],
    estimatedReadingTime: 7
  },
  {
    id: '3',
    title: 'Rainforest World Music Festival: Celebrating Cultural Diversity',
    shortDescription: 'A look at how Sarawak\'s premier music festival bridges traditional and contemporary sounds.',
    content: `
# Rainforest World Music Festival: Celebrating Cultural Diversity

The Rainforest World Music Festival (RWMF) stands as one of Southeast Asia's most anticipated cultural events, bringing together musicians and performers from across the globe to celebrate the rich tapestry of world music against the backdrop of Sarawak's lush rainforests.

## Origins and Evolution

The festival began in 1998 as a modest event with approximately 300 attendees. Its founder, Randy Raine-Reusch, a Canadian ethnomusicologist with a deep appreciation for Borneo's musical heritage, envisioned a platform where traditional music from around the world could be showcased and preserved.

From these humble beginnings, the RWMF has grown into an internationally acclaimed festival that attracts over 20,000 attendees annually. Despite this growth, it has maintained its core commitment to celebrating indigenous music and fostering cross-cultural appreciation.

## A Unique Festival Format

What sets RWMF apart from other music festivals is its distinctive format that combines:

1. **Interactive Workshops**: During daylight hours, musicians conduct small-group workshops where they demonstrate their instruments, explain cultural contexts, and teach basic techniques to festival-goers.

2. **Mini Sessions**: These intimate performances allow audiences to experience traditional music in a personal setting.

3. **Collaborative Jamming Sessions**: Musicians from different parts of the world who may have never met before come together to create impromptu fusion performances.

4. **Main Stage Concerts**: As evening falls, the festival transforms with energetic performances on multiple stages, showcasing both traditional and contemporary interpretations of world music.

This format creates an immersive experience where music isn't just performed but shared, taught, and created collaboratively.

## Cultural Preservation Through Celebration

The RWMF plays a crucial role in preserving indigenous musical traditions by:

- **Documenting Rare Performances**: Many of the traditional instruments and techniques showcased at the festival are becoming increasingly rare.

- **Creating Intergenerational Interest**: By presenting traditional music in a contemporary festival setting, younger generations develop appreciation for their cultural heritage.

- **Fostering Cultural Pride**: Local communities see their traditions celebrated alongside international performers, reinforcing the value of their cultural identity.

- **Encouraging Innovation**: The festival demonstrates how traditional music can evolve and remain relevant in contemporary contexts.

## Sarawak's Musical Heritage at RWMF

While the festival features musicians from across the globe, it places special emphasis on showcasing Sarawak's rich musical traditions:

- **Sape Music**: The haunting melodies of the Orang Ulu's boat-shaped lute have become emblematic of the festival
  
- **Bidayuh Percussion**: Complex bamboo stamping tubes and gongs create intricate rhythmic patterns

- **Iban Vocal Traditions**: Including the hauntingly beautiful call-and-response singing styles

- **Melanau Instrumental Works**: Featuring traditional wind instruments made from natural materials

These performances provide a platform for Sarawak's musicians to showcase their heritage to an international audience.

## Environmental Commitment

True to its name, the Rainforest World Music Festival maintains a strong environmental focus:

- The venue itself, the Sarawak Cultural Village, is situated at the foot of Mount Santubong, surrounded by ancient rainforest
  
- Eco-friendly practices are implemented throughout the festival grounds

- Educational components raise awareness about rainforest conservation

- Partnerships with environmental NGOs help channel support to conservation efforts

These initiatives reinforce the connection between cultural preservation and environmental sustainability.

## Economic and Tourism Impact

Beyond its cultural significance, the festival serves as a major economic driver for Sarawak:

- It attracts thousands of international tourists during what was traditionally a low tourism season
  
- Local businesses see significant revenue increases during the festival period
  
- The event's international media coverage raises Sarawak's profile as a cultural tourism destination
  
- Local artisans and food vendors gain exposure to international markets

The festival has become a model for how cultural events can drive sustainable tourism development.

## Looking to the Future

As the Rainforest World Music Festival continues to evolve, it faces the challenge of balancing growth with maintaining its intimate atmosphere and authentic cultural experiences. Recent years have seen the addition of:

- Food and craft marketplaces showcasing local products
  
- Wellness activities incorporating indigenous healing traditions
  
- Educational components on cultural heritage and environmental conservation
  
- Digital platforms extending the festival experience beyond its physical location

These developments reflect the festival's commitment to remaining relevant while staying true to its core mission of celebrating cultural diversity through music.

For those seeking to experience the soul of Sarawak's cultural landscape alongside global musical traditions, the Rainforest World Music Festival offers an unparalleled opportunity to witness how music transcends boundaries while honoring the unique heritage of its origins.
    `,
    imageUrl: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=2070&auto=format&fit=crop',
    author: 'Thomas Williams',
    publishDate: '2023-08-10',
    category: 'Culture',
    tags: ['Music', 'Festival', 'Cultural Events', 'Traditional Music'],
    estimatedReadingTime: 9
  }
];
