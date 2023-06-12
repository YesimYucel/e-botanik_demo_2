import { Col, Row, Container } from 'react-bootstrap';
export default function bitkiler() {

  const flowers = [
    {
      id: 1,
      title: "Anadolu Glayolü",
      paragraf:'Soğanımsı gövdeye sahip, birbiri üzerine kapanan yapraklı, başaklı yapıda, çiçeklenen bir sapbulunduran, otsu karakterde bir bitkidir.Kısa gün koşulları ve ışık yoğunluğunun azalması çiçek dejenerasyonunu artırmaktadır.',
      imageUrl: 'https://i2.milimaj.com/i/milliyet/75/0x410/6175e2fe45d2a0a10418f652.jpg',
    },
    {
      id: 2,
      title: "İstanbul Kardeleni",
      imageUrl:'https://i2.milimaj.com/i/milliyet/75/750x0/61763f7845d2a0a1041c027a.jpg',
      paragraf:'Narin ve estetik görüntüsü ile dikkat çeken İstanbul kardeleni, göknar ve kayın ormanlarının çevresinde görülür. Aynı zamanda Türkiye’ye özgü bitkiler arasında yer alan bir türdür.Bu güzel bitki ocak ve nisan ayı arasında çiçek açar. ',
    },

    {
      id: 3,
      title: "Zambakgiller",
      imageUrl:'https://upload.wikimedia.org/wikipedia/commons/4/4b/Lilium_candidum_%28P1080411%29.jpg',
      paragraf:'otsu, bir kısmı odunsu bitkiler. Toprak altında soğan, rizom veya yumruları vardır. Yapraklar yassı ve şeritsi veya kalp şeklinde, bazan da küçük zarımsı pul şeklinde veya etlidir. 250 cins ve 4000 kadar türü bulunur.',
      
    },

    {
      id: 4,
      title: "Kapadokya Soğanı",
      imageUrl:'https://www.ivydenegardens.co.uk/Mixed%20Border%20Other%20Plants/Resources/allium%20flo%20sphaerocephalon%20kavanagh.jpeg',
      paragraf:'Çiçeklerinde altı adet taç yaprak bulunur. Kayalık-ormanlık alanları sever. Yerden yüksekliği 30-40 cm.dir. 900-1400 metreler yetişmesi için uygundur. Pembeye çalan çiçekler olgunlaştığında beyaz renk alır.Haziran- Ağustos ayları arası çiçeklenen çok yıllık otsu bitki.',
    },
    {
      id: 5,
      title: "Antalya Çiğdemi",
      imageUrl:'https://i.pinimg.com/originals/e6/1b/20/e61b20227415e31281bcae46b2355257.jpg',
      paragraf:'Çok yıllık bir bitkidir. Dağınık quercuz ormanlarında dağınık halde bulunur. Ekim ayından Aralık ayına kadar çiçek açar ve çiçeklerini korur. Genellikle 1000 metre civarındaki yükseltilerde görülür. Aynı kökten yıllarca yeni filizler verebilir.',

    },
    {
      id: 6,
      title: "Van Ters Lalesi",
      imageUrl:'https://www.aa.com.tr/uploads/userFiles/f8244181-67c8-4d85-98fc-b252d1f7e0ec/2021%2FNISAN%2F26%2Fters%20lale%2F20210426_2_47990267_64571850.jpg',
      paragraf:'Çoğunlukla her dalında altı adet çiçeği bulunmaktadır. Çiçekleri oluşumundan itibaren ters bir şekilde büyüme gösterir. Bitkinin boyu genellikle 60 ila 80 cm. arasında değişiklik göstermektedir. Çiçeklerinin ters durması nedeniyle ünlenmiştir.',
    },
    {
      id: 7,
      title: "Kızılcahamam Çan Çiçeği",
      imageUrl:'https://www.cicekal.net/blog/wp-content/uploads/2017/10/Campanula-Cicekgi-Bakimi-e1508605158374-512x365.jpg',
      paragraf:'Çanak yapraklar 5 parçalıdır. 5 loplu olan taç yapraklar çan, silindir, huni şekillerde olup çeşitlilik gösterir. Mavi, menekşe ya da leylak rengindedir. Yumurtalık 3 ya da 5, ender olarak 2 gözlüdür.Meyve çok sayıda tohum içeren kapsüldür.',
    },
    {
      id: 8,
      title: "Yanardöner",
      imageUrl:'https://cdn1.ntv.com.tr/gorsel/XWubT2sVeEG9jbpe8Bze3Q.jpg?width=1000&mode=crop&scale=both',
      paragraf:' 25- 30 cm uzunluğunda, hızlı gelişen, uygun ortamlarda çok sayıda tohum üreten tek yıllık otsu bir bitkidir. Çiçekleri- nin kenarları parlak kırmızı (bazen pembe), ortası beyaz renkli olup yanardöner özelliğindedir',
    },
    {
      id: 9,
      title: "Piyan,Eber Sarısı",
      imageUrl:'https://im.haberturk.com/2019/05/09/ver1557395436/2457541_06581f6b4ddf8ad19f32d06803b3dca8.jpg',
      paragraf:'Çiçek durumu uç kısımda, salkım şeklinde; çanak yaprakları sık beyaz tüylü; taçyaprakları, yaklaşık 25 mm ve sarı renklidir. Ovaryumu bir çiçekte 3, nadiren 2 ya da 4’lüdür. Meyvesi, 2-9 tohumlu, bakla tipi (legümen) ve tüylüdür. Rizomları uzundur.',
    },
    {
      id: 10,
      title: "Dişotugiller",
      imageUrl:'https://www.leblebitozu.com/wp-content/uploads/2016/01/disotugiller.jpg',
      paragraf:'Dişotugiller familyasından, koyu yeşil renkli, çok yıllık otsu bir bitkidir.Boyu 30-120 cm arasındadır.Yaprakları sert ve dalgalıdır.Çakıllı, çorak arazide yetişir.Çiçekleri salkım şeklindedir.Zehirlidir (bilgi yelpazesi.net) .Çiçek durumlu saplan kürdan olarak da kullanılır.',
    },
    {
      id: 11,
      title: "İstanbul Nazendesi",
      imageUrl:'https://www.begonya.com/wp-content/uploads/2021/04/bezelye-cicegi-tohumu.jpg',
      paragraf:'Yapraklar 1 çift yaprakçık barındırır, bunlar mızraksı sipsivri, 5 ila 12 cm uzunluğunda, 6 ila 20 m genişliğinde ve 1 ila 5 arası damarlıdır. Yaprak kenarları hafifçe dalgalıdır. Çiçek sapı hafifçe açısal ve uzundur. ',
    },
    {
      id: 12,
      title: "Misk Soğanı",
      imageUrl:'https://pbs.twimg.com/media/FEPPYMYWYAECMNM.jpg',
      paragraf:'Beyaz renkli çiçeği olan, çok yıllık otsu bir bitki. Bitkinin soğanları 0,8-2,5 cm çapındadır. Çiçeklenme dönemi ise mart ve mayıs ayları arasındadır. Türkiye de yaygın olarak görülen bitki, genellikle 1500 metrenin üzerindeki yüksekliklerde yetişir.',
    },
    {
      id: 13,
      title: "Sütleğengiller",
      imageUrl:'https://i.nefisyemektarifleri.com/2018/11/27/sutlegen-otu-faydalari-ve-zararlari-neye-iyi-gelir-nasil-kullanilir-2.jpg',
      paragraf:'Ot, çalı ya da ağaç şeklinde bitkilerdir. Ekseriye beyaz renkli süt salgısı ihtiva ederler. Yapraklar basit veya parçalı, pul ya da diken şeklinde, genellikle stipulludur. Çiçekler tek eşeyli, tek, spika veya panikula.Güçlü bileşenleri nedeniyle müshil ilacı kadar etkilidir.',
    },
    {
      id: 14,
      title: "Anadolu Karanfili",
      imageUrl:'https://www.sanalsosyal.com.tr/wp-content/uploads/2022/10/karanfil-cicegi-1024x680.jpg',
      paragraf:'Kuraklık,nem ve ısıya dayanıklıdır. Bakımı çok kolay, ihmallere dayanıklı, sulama düzensizliklerinde büyümeye devam eden, yetersiz gün ışığına bile uyum sağlayan bir süs bitkisidir. Kuvvetli güneşte yetişirse bordo kızıl renkler hakim olur.',
    },
    {
      id: 15,
      title: "Taşlık Çiğdemi",
      imageUrl:'https://floranatolica.com/eukaria/images/640X480/007/xx796_0.jpg',
      paragraf:'Keskin uçlu, beyaz, tabana doğru sarımsı ve eflatun benekli; sapçıklar 5-6 mm, sarı, tabanda az derecede kabarcıklı; başçık 5-8 mm, sarı; tepecik 6 veya genellikle çok daha fazla narin portakal-kırmızı parçalıdır.      ',
    },
  ]

  const  trees = [
    {
      id: 1,
      title: "Ihlamur Ağacı",
      imageUrl: 'https://st2.myideasoft.com/idea/ec/08/myassets/products/465/ihlamur.jpg?revision=1603978470',
      paragraf:'30 a yakın farklı türü bulunur ve boyları 20 ila 40 m (65 ila 130 ft) yüksekliğe varır. Yaprakları kalp biçiminde, genel olarak asimetrik ve 6 ila 20 cm (2 1⁄4 ila 7 3⁄4 in) dir.Çiçekleri hermafroditik yapıya sahip olduğundan hem dişi hem erkeği böcekler tarafından polenlenir.',
    },

    {
      id: 2,
      title: "Çam Ağacı",
      imageUrl: 'https://www.balparmak.com.tr/Data/EditorFiles/lose-up-coniferous-tree-branch-bali-indonesia__1___1_.jpg',
      paragraf:'Yaprak dökmeyen, aromatik ağaç veya çalılardır. Taç gençken genellikle konik, yaşla birlikte genellikle yuvarlak veya düz tepelidir. Daha eski gövdelerin kabuğu, çeşitli şekilde oluklanmış, plakalar ve/veya katmanlı veya pullu sırtlar halinde kaplanmıştır. ',
    },

    {
      id: 3,
      title: "Kavak Ağacı",
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/PopulusTremula001.JPG/1280px-PopulusTremula001.JPG',
      paragraf:'Çoğunlukla uzun saplı olan yaprakları üçgen, elips, yumurta-yürek biçiminde loplu veya dar şerit halinde olmak üzere değişik formlarda ve boyuttadır. Yaprak ayasının kenarları tam, kaba veya ince dişlidir veya dilimli dişlidir. ',
    },

    {
      id: 4,
      title: "Servi Ağacı",
      imageUrl: 'https://www.cicekal.net/blog/wp-content/uploads/2017/11/Mavi-Servi-Ozellikleri-e1510656310241-768x582.jpg',
      paragraf:'Her dem yeşil ağaç ve ağaçcık halinde , yaprakları pul şeklinde odunsu bitkilerdir. Sürgünleri dört köşeli ya da yuvarlakça , ender olarak yassı görülür. Pul yapraklar sürgünlere karşılıklı dört sıra üzerine dizilmiş olup, pul yaprakların stoma lekeleri yoktur.',
    },

    {
      id: 5,
      title: "Çınar Ağacı",
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/PlantanusAcerifoliaLeaf2.jpg/1280px-PlantanusAcerifoliaLeaf2.jpg',
      paragraf:'Yapraklar basit ve değişkendir. Alt cins Platanus içinde avuç içi anahatları vardır. Yaprak sapının (yaprak sapı) tabanı genişlemiştir ve aksındaki genç gövde tomurcuğunu tamamen sarar. Aksiller tomurcuk ancak yaprak düştükten sonra açığa çıkar.',
    },

    {
      id: 6,
      title: "Meşe Ağacı",
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Quercus_cerris_5.jpg',
      paragraf:'Palamutların 18 ayda olgunlaşması ve dikensi (kılçıksı) uçlu yaprak lopları gibi karakterleri genel özelliklerini yansıtır. 20–30 m veya daha yükseklikte, gövdesi 2 m çapında, tacı gençlikte konik yaşlandıkça genişleyen bir orman ağacıdır.',    
    },

    {
      id: 7,
      title: "Zeytin Ağacı",
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Olivo-fiore.jpg/1280px-Olivo-fiore.jpg',
      paragraf:'Ağacı bodurdur ve yüksekliği nadiren 8-15 m (26-49 ft)yi aşar. Sadece güney İtalya nın Campania bölgesindeki Pisciotta civarındaki bölgede bulunan 40,000 ağaçtan oluşan benzersiz bir tür olan Pisciottana.',
    },

    {
      id: 8,
      title: "Gürgen Ağacı",
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Hainbuche-Trieb_17-04-2005.jpg/1280px-Hainbuche-Trieb_17-04-2005.jpg',
      paragraf: 'Yapraklar almaşık dizilişli, kenarı düzensiz ve çift veya basit testere dişli ilerler. Erkek çiçek kümesi sarkık, başak-talkımlı, silindirik, kış aylarında tomurcuklarla çevrili, çok sayıda üst üste binen brakteler bulunur; braktesiz veya çiçek örtüsüz çiçekli.',
    },

    {
      id: 9,
      title: "Kayın Ağacı",
      imageUrl: 'https://t3.gstatic.com/licensed-image?q=tbn:ANd9GcTRRvu6FYhk9O3qrNo9uD6nByKy97vvL7X6177PaVOHvSRsEJ6i-5hkq5kTjD2DcJ_i',
      paragraf:'Çeşitli cinslerden çok sayıda tür önemli süs bitkileridir ve Fagus cinsinden odun yongaları genellikle biraların tatlandırılmasında kullanılır. Asya tropikal cinsleri Castanopsis ve Lithocarpus taki bazı türlerin fındıkları yenilebilir ve genellikle süs bitkisi olarak kullanılır. ',
    },

    {
      id: 10,
      title: "Kestane Ağacı",
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Chestnuts_on_tree.jpg/1280px-Chestnuts_on_tree.jpg',
      paragraf:'Yaprak döken bazen çalı formunda olan orman ağaçlarıdır. Kabuk çatlaklıdır. Yaprak koltuğunda çıkan tomurcuklarla yalancı uç tomurcukları vardır. Tomurcuklar üst üste binmiş 2 pulla örtülmüştür. Yapraklar sarmal dizilmiş fakat bükük iki sıralı görünür.',
    },

    {
      id: 11,
      title: "Huş Ağacı",
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Changbai_Betula_leafage.JPG/1280px-Changbai_Betula_leafage.JPG',
      paragraf:'Işık ihtiyaçları fazladır, huş bir güneş ağacıdır. Derin, iyi, süzek topraklarda iyi gelişme gösterirler. Kökleri fazla derine gitmez. Soğuk yerleri tercih ederler.Kuzey Amerika da, Asya, Avrupa ve Türkiye de de doğal olarak bulunur.',
    },
    
    {
      id: 12,
      title: "Sığla Ağacı",
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Liquidambar-styraciflua-foliage.jpg/1280px-Liquidambar-styraciflua-foliage.jpg',
      paragraf:'25–40 m ye kadar boylanan yaprak döken kalın dallı ve geniş tepeli bir ağaçtır. İlk bakışta çınara benzerler. Yaşlandıkça, kabuğu koyulaşır ve derin çatlaklı bir görünüm alır. Elsi loplu yapraklar sürgünlere sarmal dizilmiştir.',    
    },




  ]
  


  return (
    
    <Container className='mt-5'>
    <Row >
      <h2 className='text-center'>Bitki Çeşitleri  </h2>
      <h4>Çiçekler  </h4>

      {flowers.map((flowers) => (
        <Col className='col-xl-4  col-12 my-2'>
          <div className='shadow-lg p-3 mb-5 bg-body-tertiary rounded-4' >
            <div className='card-img '>
              <img
                className="d-block w-100 rounded-4"
                src={flowers.imageUrl}
                height={250}
              />
            </div>
            <h6 className='fw-bold p-3' style={{ textAlign: 'justify', fontSize: '12px' }}>{flowers.title}</h6>
            <p>{flowers.paragraf}</p>
          </div>
        </Col>
      ))}

    </Row>
    <Row>
        <h4>Ağaçlar</h4>

        {trees.map((trees) => (
          <Col className='col-xl-4  col-12 my-2'>
            <div className='shadow-lg p-3 mb-5 bg-body-tertiary rounded-4' >
              <div className='card-img '>
                <img
                  className="d-block w-100 rounded-4"
                  src={trees.imageUrl}
                  height={250}
                />
              </div>
              <h6 className='fw-bold p-3' style={{ textAlign: 'justify', fontSize: '12px' }}>{trees.title}</h6>
              <p>{trees.paragraf}</p>
            </div>
          </Col>
        ))}
      </Row>
    
  </Container>
  );
}
