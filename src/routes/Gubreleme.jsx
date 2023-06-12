import {From,Button,Container} from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
export default function Gubreleme() {
    return(
        <Container>
            <h2>Bahçe Gübreleme Yöntemleri</h2>
            <p>
            Bahçe Gübreleme; Bahçe bitkilerinin sağlıklı bir şekilde büyümeleri ve meyve-sebze gibi ürünlerin verimliliği açısından, toprağın zenginleştirilmesi gerekmektedir. Çünkü; toprağın bitkilere faydalı olabilmesi için ihtiyaç duyduğu bazı besin ve vitaminler vardır. Bu besin ve vitaminleri gübreleme yoluyla toprağa kazandırarak, bahçenizin ve bitkilerinizin daha verimli olmalarını sağlayabilirsiniz.<br></br>

            Gübre, özetle, toprağın ihtiyaç duyduğu kimyasal elementleri sağlayan bir bileşimdir. Bunu toprağınıza vereceğiniz suyun yanında, bir ek besin olarak düşünebilirsiniz. Su; bahçenizin ve bahçenizde bulunan tüm organizmaların yaşamasını sağlayan bir maddedir. Gübre ise bu yaşamı daha sağlıklı ve verimli bir hale getirir. Bitki toprağına uygulanan gübreleme ile kökler bu besinlerden faydalanırlar. Gübrelenmemiş bir toprak, nasıl ki verim açısından fakirleşecekse, aynı şekilde fazla gübreleme yapılması da bitki köklerinin yanmasına ve kurumasına yol açacaktır.<br></br>
            Bahçenin gübrelenmesin de tek bir yol yoktur. Üst düzeyde bir verim almak için en doğru yöntemin tercih edilmesi gerekmektedir. Bu yöntemleri sıralamak gerekirse;<br></br>
            </p>
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Serpme Yöntemiyle Gübreleme</Accordion.Header>
        <Accordion.Body>
        El ya da alet yardımıyla yüzeye uygulanan bu yöntem aynı zamanda yüzeye serpe yöntemi olarak da adlandırılmaktadır. Ekime hazır bir toprağa uygulanabileceği gibi, ekimden sonra bitkiler üzerine de uygulamak mümkündür. Kolay ve hızlı bir uygulama sunan yöntem, zaman ve iş gücü tasarrufu sağlaması bakımında da önemlidir.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Bant Usulü Gübreleme</Accordion.Header>
        <Accordion.Body>
        Gübrelerin bant halinde uygulanmasının, araştırmalar sonucunda daha yüksek verimlilik sağladığı bilinmektedir. Bu yöntemle yapılan gübreleme sonrası, bitkinin fosfor alımının daha uzun süreçlere tekabül ettiği saptanmıştır. Bu işlem uygulanırken mibzer, pulluk ya da çapa gibi aletler kullanılmaktadır.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Yapraktan Gübreleme</Accordion.Header>
        <Accordion.Body>
        Gübrelerin belli miktarlarda ve oranlarda su ile eritilerek yapraklara ve gövdeye uygulanmasıdır. Bu yöntemde, eritilen gübreler püskürtülerek bitkiye verilmektedir. Çiçeklerin yanmaması ve meyvelerin zararlı hale gelmemesi için uygun zamanlarda yapılması gereken bir yöntemdir. Ayrıca püskürtme işlemi yapılırken yaprakların her tarafı gübrelenmelidir.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Fertigasyon</Accordion.Header>
        <Accordion.Body>
        Bu yöntem suyla birlikte bitkilerin gübrelenmesi anlamına gelmektedir. Suya karıştırılan gübre, sulama işlemiyle birlikte toprağa aktarılmış olur. Bu yöntemin uygulanmasında en elverişli gübre çeşidi suda kolay erime özelliği gösteren; azotlu ve potasyumlu gübrelerdir. İşlem sırasında suyun tortu oluşturmamasına dikkat etmek önemlidir.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion><br></br><br></br>
    <h2>Bahçe Gübreleme Zamanı</h2>
    <p>
    Toprağın ve bitkilerin ne zaman gübrelenmesi gerektiği bazı unsurlara göre değişkenlik göstermektedir. Bunlar öncelikle; gübreleme yapılacak toprağın hangi iklim türünde olduğu, toprağın niteliği, yetiştirilen bitki türleri ve tercih edilen gübreleme yöntemi ve gübre çeşididir. Bu hususlara göre ne zaman gübreleme yapılması gerektiğine karar verilir.<br></br>

    <Card>
      <Card.Body>
        <Card.Title>İklime Göre Gübreleme Zamanı</Card.Title>
        <Card.Text>
        Bol yağış alan bölgelerde toprak daha nemli olacaktır. Nemli topraklarda ekim yapılacaksa gübreleme işlemi de hemen öncesinde yapılmalı; böylece gübreden daha yüksek verim sağlanmalıdır. Az yağış alan, sıcaklık derecesi yüksek bölgelerde buharlaşma ile gübrede kayıplar oluşabilir. Bu sebeple toprağın en nemli zamanı tespit edilmeli ve gübreleme işlemi buna göre yapılmalıdır
        </Card.Text>
      </Card.Body>
    </Card>
    <Card>
      <Card.Body>
        <Card.Title>Toprağa Göre Gübreleme Zamanı</Card.Title>
        <Card.Text>
        Toprağın niteliği, gübreden alınacak faydanın belirlenmesinde etkili bir unsurdur. Burada toprağın kumlu, kireçli ve alkali toprak olup olmaması uygulanacak zamanı belirlemektedir. Kireçli ve hafif alkali toprak tiplerinde gübreleme işleminin ekimden hemen önce yapılması uygun olacaktır.
        </Card.Text>
      </Card.Body>
    </Card>
    <Card>
      <Card.Body>
        <Card.Title>Bitki Türlerine Göre Gübreleme Zamanı</Card.Title>
        <Card.Text>
        Sebze ve meyve veren bitkilerin toprağa ekim aşamasında ve ekimden sonra gübreleme işlemiyle desteklenmesi gerekmektedir. Meyve bahçelerinin gübrelenme işlemi; ılıman iklime sahip topraklar için şubat-mart ayları, kışı sert geçen iklimlerde ise mart-nisan ayların yapılmaktadır.
        </Card.Text>
      </Card.Body>
    </Card>
    <Card>
      <Card.Body>
        <Card.Title>Gübre Çeşidine Göre Gübreleme Zamanı</Card.Title>
        <Card.Text>
        Toprağın daha verimli ve canlı bir hale gelmesi adına yapılan gübreleme işleminde, gübrenin çeşidi de önemli bir unsurdur. Özellikle; hangi zamanda gübreleme yapılması gerektiği konusunda belirleyici olmaktadır. Peki, toprak ve bitkiler ne tür gübrelerle beslenmektedir? Detayları yazının devamında bulabilirsiniz.
        </Card.Text>
      </Card.Body>
    </Card>
    </p><br></br><br></br>
    <h2>Gübre Çeşitleri</h2>
    <p>
    Gübreler, en genel anlamda organik ve inorganik (kimyasal) olarak ikiye ayrılmaktadır. Fakat uygulanması bakımından da farklılıklar gösterebilir. Bunlardan bazıları şunlardır:
    <Card>
      <Card.Body>
        <Card.Title>Hayvan Gübresi</Card.Title>
        <Card.Title>Yeşil Gübre</Card.Title>
        <Card.Title>Ahır Gübreleri</Card.Title>
        <Card.Title>Azotlu Gübre</Card.Title>
        <Card.Title>Fosforlu Gübre</Card.Title>
        <Card.Title>Potasyumlu Gübre</Card.Title>
        <Card.Title>Kempoze Gübre</Card.Title>
      </Card.Body>
    </Card>
    Bitkilerin beslenmesinde önemli bazı maddeler vardır. Bunların başında fosfor, azot ve potasyum sayılabilir. Bu maddelerin toprağa gübreleme yöntemi ile verilmesi, toprağın ve bitkilerin kalitesini yükseltecektir.
    </p><br></br><br></br>
    <h2>İlaçlama</h2>
    <p>
    Tarımda verimin arttırılması ve kaliteli ürün elde edilmesine etki eden faktörlerden biri de zirai mücadele ilaçlarıdır. Zirai mücadele ilaçları, tarımsal ürünlerin üretim, tüketim ve depolanmaları esnasında; onların besin değerini bozan, onlara zarar veren veya onları tamamen tahrip eden hastalık, zararlı ve yabancı otları kontrol altına almak için kullanılan, insan yapımı ya da bitkilerde doğal olarak bulunan kimyasal maddelerdir. Kullanılacak zirai mücadele ilaçlarından istenilen faydayı sağlayabilmek için bilinçli bir seçim ve bilinçli bir uygulama yapılması gerekir. Zirai mücadele ilaçları, zararlı, hastalık ve yabancı otlara karşı mutlaka etiketinde tavsiye edilen dozda kullanılmalıdır. Etiketinde belirtilen son ilaçlama ile hasat arasında bırakılması gereken süreye de kesinlikle uyulmalıdır.
    </p>
    </Container>
    )
}