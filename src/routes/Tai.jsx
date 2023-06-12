import Table from 'react-bootstrap/Table';
import { Form,Button,Container } from 'react-bootstrap';

export default function Tai() {
  return (
    <Container>
    <div> 
    <h3>Toprakta Temel Analizler</h3>
    <Table striped bordered hover  responsive="sm">
      <thead>
        <tr>
          <td>Sıra No</td>
          <td>Analiz Adı</td>
          <td>Metot Adı</td>
          <td>Kullanılan Cihazlar</td>
          <td>Referans</td>
          <td>Birim</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Bünye</td>
          <td>Su ile doygunluk</td>
          <td>Porselen kroze, spatül,büret</td>
          <td>Richards 1954
              Tüzüner 1990</td>
          <td>%</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Toprak Reaksiyonu (pH)</td>
          <td>(Saturasyon çamurunda) Potansiyometrik</td>
          <td>pH Metre(masa tipi)</td>
          <td>Richards 1954
              Tüzüner 1990</td>
          <td>-</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Kireç</td>
          <td>Kalsimetrik</td>
          <td>Kalsimetre, barometre,termometre</td>
          <td>Çağlar 1949
              Tüzüner 1990</td>
          <td>%</td>
        </tr>
        <tr>
          <td>4</td>
          <td>Toplam Tuz</td>
          <td>(Saturasyon çamurunda)Potansiyometrik</td>
          <td>EC Metre(masa tipi)</td>
          <td>Richards 1954
              Tüzüner 1990</td>
          <td>%</td>
        </tr>
        <tr>
          <td>5</td>
          <td>Organik Madde</td>
          <td>Walkley-Black</td>
          <td>Büret,Isıtıcı Tabla</td>
          <td>Richards 1954</td>
          <td>%</td>
        </tr>
        <tr>
          <td>6</td>
          <td>Alınabilir Fosfor</td>
          <td>Olsen, Bray ve Kurtz1</td>
          <td>Spektrofotometre</td>
          <td>Bray 1945, Olsen 1954,
              Kurtz 1963, Tüzüner 1990</td>
          <td>P2O5(kg/da)</td>
        </tr>
        <tr>
          <td>7</td>
          <td>Alınabilir Potasyum</td>
          <td>Amonyum Asetat</td>
          <td>Flamefotometre veya AAS
              veya ICP-OES</td>
          <td>Richards 1954
              Tüzüner 1990 </td>
          <td>K2O(kg/da)</td>
        </tr>
        <tr>
          <td>8</td>
          <td>Bünye</td>
          <td>Bouyoucus Hidrometre, Day</td>
          <td>Hidrometre, karıştırıcı,
              termometre</td>
          <td>Tüzüner 1990
              Day 1950</td>
          <td>Birimsiz</td>
        </tr>
      </tbody>
    </Table><br></br><br></br>
    <h3>Detaylı Toprak Analizleri</h3>
    <Table striped bordered hover  responsive="md">
      <thead>
        <tr>
          <td>Sıra No</td>
          <td>Analiz Adı</td>
          <td>Metot Adı</td>
          <td>Kullanılan Cihazlar</td>
          <td>Referans</td>
          <td>Birim</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Toplam Azot</td>
          <td>Kjeldahl, Dumas</td>
          <td>Kjeldahl veya Elementel Azot Cihazı</td>
          <td>Bremner 1965 </td>
          <td>%</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Değişebilir Amonyum(NH4)</td>
          <td>Potasyum Klorür</td>
          <td>Kjeldah</td>
          <td>Bremner 1965</td>
          <td>%</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Değişebilir Nitrat (NO3)</td>
          <td>Potasyum Klorür</td>
          <td>Kjeldahl</td>
          <td>Bremner 1965</td>
          <td>%</td>
        </tr>
        <tr>
          <td>4</td>
          <td>Değişebilir Kalsiyum veMagnezyum</td>
          <td>Amonyum Asetat </td>
          <td>AAS veya ICP-OES </td>
          <td>Thomas 1982 </td>
          <td>meq/L</td>
        </tr>
        <tr>
          <td>5</td>
          <td>Alınabilir Bor</td>
          <td>Azomethin- H,</td>
          <td>Spektrofotometre</td>
          <td>Wolf 1971, Tüzüner 1990</td>
          <td>mg/kg</td>
        </tr>
        <tr>
          <td>6</td>
          <td>Ekstrakte Edilebilir
              Kükürt (SO4)</td>
          <td>Türbidimetrik </td>
          <td>Spektrofotometre</td>
          <td>Fox ve ark. 1964</td>
          <td>mg/kg</td>
        </tr>
        <tr>
          <td>7</td>
          <td>Toplam Ağır Metaller</td>
          <td>Yaş Yakma</td>
          <td>AAS veya GFAAS veya ICPOES </td>
          <td>Jackson 1958</td>
          <td>mg/kg</td>
        </tr>
        <tr>
          <td>8</td>
          <td>Katyon Değişim Kapasites</td>
          <td>Sodyum Asetat</td>
          <td>Flamefotometre veya AAS veya ICP-OES</td>
          <td>Bower, Reitemeir,
              Fireman 1952
              Tüzüner 1990 </td>
          <td>meq/100 g</td>
        </tr>
        <tr>
          <td>9</td>
          <td>Değişebilir Sodyum Yüzdesi</td>
          <td>Sodyum Asetat</td>
          <td>Flamefotometre veya AAS veya ICP-OES </td>
          <td>Bower, Reitemeir,
              Fireman 1952
              Tüzüner 1990 </td>
          <td>meq/100 g</td>
        </tr>
        <tr>
          <td>10</td>
          <td>Çözünebilir Anyonlar: (CO3-2, HCO3-1,Cl-, SO4-2)</td>
          <td>Sülfürik Asit Titrasyonu, GümüşNitrat Titrasyonu, 
              EDTA Titrasyonu Baryum Klorür</td>
          <td>Spektrofotometre </td>
          <td>Richards 1954,
              Tüzüner 1990</td>
          <td>meq/L</td>
        </tr>
        <tr>
          <td>11</td>
          <td>Çözünebilir Katyonlar: ( Na+1, K+1) </td>
          <td>Flamefotometrik</td>
          <td>Flamefotometre veya AAS veya ICP-OES</td>
          <td>Richards 1954 </td>
          <td>meq/L</td>
        </tr>
        <tr>
          <td>12</td>
          <td>Çözünebilir Katyonlar: (Ca+2, Mg+2) </td>
          <td>EDTA Titrasyonu (Titrimetrik) veya Direkt Okuma</td>
          <td>Titrasyon malzemesi veya AAS veya ICP-OES </td>
          <td>Richards 1954 </td>
          <td>meq/L</td>
        </tr>
        <tr>
          <td>13</td>
          <td>Aktif Kireç</td>
          <td>Amonyum Oksalat</td>
          <td>Su Banyosu,otomatik
              dispenser,büret </td>
          <td>Drouineau 1942,
              Özgümüş 1999 </td>
          <td>%</td>
        </tr>
        <tr>
          <td>14</td>
          <td>4 Alınabilir Mikro
              Elementler ( Fe, Cu, Zn,Mn) </td>
          <td>DTPA ile ekstraksiyon </td>
          <td>AAS veya ICP-OES </td>
          <td>Lindsay ve Norwell 1978 </td>
          <td>mg/kg</td>
        </tr>
        <tr>
          <td>15</td>
          <td>Organik Karbon</td>
          <td>Modifiye Walkley Black</td>
          <td>Hot-Plate, Toplam Organik
              Karbon Cihazı </td>
          <td>Tüzüner 1990,
              Walkley 1947 </td>
          <td>%</td>
        </tr>
        <tr>
          <td>16</td>
          <td>İnorganik Karbon</td>
          <td>Kalsimetrik</td>
          <td>Kalsimetre </td>
          <td>Kalsimetre</td>
          <td>%</td>
        </tr>
        <tr>
          <td>17</td>
          <td>Suda çözünebilir Bor
              tayini </td>
          <td>Karmen </td>
          <td>Spectrofotometre </td>
          <td>Tüzüner 1990</td>
          <td>mg/kg</td>
        </tr>
      </tbody>
    </Table><br></br><br></br>
    <h3>Bitki Analizleri</h3>
    <Table striped bordered hover  responsive="lg">
      <thead>
        <tr>
          <td>Sıra No</td>
          <td>Analiz Adı</td>
          <td>Metot Adı</td>
          <td>Kullanılan Cihazlar</td>
          <td>Referans</td>
          <td>Birim</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Toplam N </td>
          <td>Kjeldahl Yöntemi, Dumas </td>
          <td>Kjeldahl cihazı veya Elementel Azot Cihazı</td>
          <td>Bremner 1965,
              Kacar ve İnal 2008</td>
          <td>%</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Toplam P </td>
          <td>Vanadomolibdofosforik Sarı Renk Yöntemi
              (spektrofotometrik)</td>
          <td>Spektrofotometre</td>
          <td>Kacar ve İnal 2008</td>
          <td>%</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Toplam K </td>
          <td>Flamefotometrik Yöntem</td>
          <td>Flamefotometre veya AAS veya ICPOES</td>
          <td>Kacar ve İnal 2008</td>
          <td>%</td>
        </tr>
        <tr>
          <td>4</td>
          <td>Toplam Ca</td>
          <td>Yaş yakma (Nitrik-Perklorik Asit Karışımı)</td>
          <td>AAS veya ICP-OES </td>
          <td>Hanlon 1998 (AAS)
              Kacar ve İnal 2008 (AAS,ICP-OES)
              Isaac ve Johnson 1998 (ICP-OES)</td>
          <td>%</td>
        </tr>
        <tr>
          <td>5</td>
          <td>Toplam Mg </td>
          <td>Yaş yakma (Nitrik-Perklorik Asit Karışımı)</td>
          <td>AAS veya ICP-OES </td>
          <td>Hanlon 1998 (AAS)
              Kacar ve İnal 2008 (AAS,ICP-OES)
              Isaac ve Johnson 1998 (ICP-OES)</td>
          <td>%</td>
        </tr>
        <tr>
          <td>6</td>
          <td>Toplam Fe,Cu, Zn, Mn </td>
          <td>Yaş yakma (Nitrik-Perklorik Asit Karışımı) </td>
          <td>AAS veya ICP-OES</td>
          <td>Hanlon 1998 (AAS)
              Kacar ve İnal 2008 (AAS,ICP-OES)
              Isaac ve Johnson 1998 (ICP-OES)</td>
          <td>mg/kg</td>
        </tr>
      </tbody>
    </Table><br></br><br></br>
    <h3>Toprakta Fiziksel Analizler</h3>
    <Table striped bordered hover  responsive="xl">
      <thead>
        <tr>
          <td>Sıra No</td>
          <td>Analiz Adı</td>
          <td>Metot Adı</td>
          <td>Kullanılan Cihazlar</td>
          <td>Referans</td>
          <td>Birim</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Tarla Kapasitesi </td>
          <td>Basınçlı Seramik Levha</td>
          <td>1 bar basınçta çalışan
              gözenekli seramik levhaya
              yerleştirilmiş basınçlı tencere</td>
          <td>Tüzüner 1990</td>
          <td>%</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Solma Noktası</td>
          <td>Basınçlı Seramik Levha</td>
          <td>15 bar basınçta çalışan
              gözenekli seramik levhaya
              yerleştirilmiş basınçlı tencere</td>
          <td>Tüzüner 1990 </td>
          <td>%</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Hacim Ağırlığı</td>
          <td>Parafin (Bozulmamış örnekte), Silindirik
              (bozulmuş ve bozulmamış örnekte)*</td>
          <td>Sıkıştırma (*Tık tık alet),
              100cm3 silindir </td>
          <td>Richards 1954</td>
          <td>g/cm3</td>
        </tr>
        <tr>
          <td>4</td>
          <td>Özgül Ağırlık</td>
          <td>Piknometre</td>
          <td>Piknometre şişeleri</td>
          <td>Richards 1954</td>
          <td>-</td>
        </tr>
        <tr>
          <td>5</td>
          <td>Porozite</td>
          <td>Hacim Ağırlık ve Özgül Ağırlık ile Hesaplamak</td>
          <td>Boş</td>
          <td>Richards 1954</td>
          <td>%</td>
        </tr>
        <tr>
          <td>6</td>
          <td>Agregasyon İndeksi </td>
          <td>Islak Eleme Metodu</td>
          <td>Islak eleme cihazı</td>
          <td>Kemper 1965</td>
          <td>%</td>
        </tr>
        <tr>
          <td>7</td>
          <td>Strüktür Stabilite İndeksi </td>
          <td>Hidrometre metodu </td>
          <td>Standart toprak hidrometresi,
              Elektrikli karıştırıcı </td>
          <td>Yeşilsoy 1969,
              Tüzüner 1990 </td>
          <td>-</td>
        </tr>
        <tr>
          <td>8</td>
          <td>Kil Tipi Tayini</td>
          <td>X-Işını kırınımı (XRD) yöntemi ile 
            kalitatif detay kil analizi </td>
          <td>XRD(X-Ray Diffraction)</td>
          <td>Boş</td>
          <td>-</td>
        </tr>
        <tr>
          <td>9</td>
          <td>Bozulmuş numunelerde 
              hidrolik iletkenlik</td>
          <td>Hidrolik Kondaktivite metodu </td>
          <td>Hidrolik İletkenlik Süzme Seti</td>
          <td>Richards 1954,
              Kulut 1986 </td>
          <td>mm/gün veya
              (mm/h)</td>
        </tr>
      </tbody>
    </Table>
    </div>
    </Container>
  );

}

