import React from 'react';
import { useParams, Link } from 'react-router-dom';

const articles = {
  'pentingnya-menjaga-kesehatan-ibu': {
    title: 'Pentingnya Menjaga Kesehatan Ibu: Untuk Perkembangan Optimal Anak',
    category: 'Ibu & Anak',
    date: 'Oktober, 2025',
    image: '/ibu-anak.png',
    content: `
Kesehatan ibu memiliki peranan yang sangat penting dalam menentukan kualitas tumbuh kembang anak. Para ahli kesehatan menegaskan bahwa kondisi fisik dan mental ibu, baik sebelum maupun selama kehamilan, akan sangat memengaruhi perkembangan janin dan masa pertumbuhan anak di kemudian hari.

Menurut data dari Kementerian Kesehatan, asupan gizi yang seimbang, pemeriksaan kehamilan rutin, serta kondisi psikologis yang stabil menjadi faktor utama yang mendukung kehamilan sehat. Ibu yang sehat cenderung melahirkan bayi dengan berat badan ideal, sistem imun yang kuat, serta perkembangan otak yang optimal.

Selain itu, perhatian terhadap kesehatan ibu tidak hanya berhenti setelah melahirkan. Masa menyusui juga merupakan periode krusial di mana kebutuhan gizi ibu tetap harus terpenuhi agar produksi ASI berkualitas dan cukup untuk bayi. Dukungan dari keluarga, khususnya pasangan, sangat dibutuhkan agar ibu dapat menjalani masa pasca-persalinan dengan baik tanpa tekanan berlebih.
Pakar kesehatan masyarakat juga menekankan pentingnya menjaga kesehatan mental ibu. Stres, kecemasan, dan depresi pascamelahirkan dapat berdampak langsung pada hubungan emosional antara ibu dan anak, serta memengaruhi perkembangan sosial dan emosional sang buah hati.

Melalui kampanye “Ibu Sehat, Anak Hebat”, pemerintah dan berbagai lembaga kesehatan mengajak masyarakat untuk lebih peduli terhadap kesehatan ibu sebagai pondasi utama bagi generasi penerus yang kuat, cerdas, dan berdaya saing.
    `
  },

  'operasi-transplantasi-organ': {
    title: 'Operasi Transplantasi Organ: Harapan Hidup Baru Untuk Masa Depan Sehat',
    category: 'Nefrologi',
    date: 'Oktober, 2025',
    image: '/story-transplantasi.png',
    content: `
Operasi transplantasi organ adalah prosedur medis untuk menggantikan organ tubuh yang rusak dengan organ sehat dari donor, baik yang masih hidup maupun yang telah meninggal dunia. Tujuannya adalah memulihkan fungsi tubuh agar pasien dapat kembali hidup normal dan sehat.

Beberapa organ yang dapat ditransplantasikan antara lain ginjal, jantung, paru-paru, hati, dan kornea mata. Transplantasi ginjal merupakan jenis yang paling sering dilakukan karena memiliki tingkat keberhasilan tinggi. Proses transplantasi meliputi pemeriksaan kondisi pasien, pencarian donor yang cocok, operasi penggantian organ, serta pemberian obat untuk mencegah penolakan organ baru oleh tubuh.

Tindakan ini memberikan kesempatan hidup baru dan meningkatkan kualitas hidup pasien dengan penyakit kronis. Namun, transplantasi juga memiliki risiko seperti infeksi dan penolakan organ, serta masih terbatasnya jumlah donor dibandingkan dengan banyaknya pasien yang membutuhkan.

Perkembangan teknologi kedokteran modern seperti bioprinting dan penelitian sel punca membuka peluang besar untuk masa depan yang lebih baik. Transplantasi organ kini tidak hanya menjadi bentuk pengobatan, tetapi juga simbol harapan, kemanusiaan, dan kesempatan baru bagi banyak orang untuk hidup lebih sehat dan bermakna.    `
  },

  'prosedur-pci': {
    title: 'Prosedur PCI : Untuk Pasien Penyakit Jantung',
    category: 'Kardiologi',
    date: 'September, 2025',
    image: '/story-kardiologi.png',
    content: `
Percutaneous Coronary Intervention (PCI) atau angioplasti koroner adalah prosedur medis yang digunakan untuk membuka pembuluh darah jantung yang tersumbat akibat penumpukan plak kolesterol. Penyumbatan pada pembuluh darah koroner dapat menyebabkan nyeri dada hingga serangan jantung. Prosedur ini menjadi salah satu langkah penting dalam menangani penyakit jantung koroner secara cepat dan efektif.

Tindakan PCI dilakukan dengan memasukkan selang tipis bernama kateter melalui pembuluh darah di pergelangan tangan atau paha menuju jantung. Di ujung kateter terdapat balon kecil yang dikembangkan untuk membuka sumbatan, dan biasanya dipasang stent, yaitu cincin logam kecil yang berfungsi menjaga agar pembuluh darah tetap terbuka dan aliran darah kembali lancar.

Dibandingkan operasi jantung terbuka, prosedur PCI memiliki keunggulan karena tidak memerlukan sayatan besar, waktu pemulihan lebih cepat, dan risiko komplikasi lebih rendah. Pasien umumnya dapat pulang dalam waktu singkat setelah kondisi stabil. Tindakan ini terbukti efektif dalam mengurangi gejala dan mencegah kerusakan otot jantung yang lebih parah.

Dengan kemajuan teknologi kardiologi modern, penggunaan stent generasi baru dan alat pencitraan canggih membuat hasil PCI semakin aman dan akurat. Setelah menjalani prosedur ini, pasien tetap disarankan untuk menjaga pola makan sehat, rutin berolahraga, dan menghindari rokok agar mencegah penyumbatan berulang. PCI menjadi bukti nyata kemajuan dunia medis dalam memberikan harapan hidup baru bagi penderita penyakit jantung.
Pasien yang menjalani PCI memerlukan pemantauan dan pengobatan berlanjut untuk mencegah komplikasi dan memastikan stent tetap terbuka.
    `
  }
};

const ArticlePage = () => {
  const { slug } = useParams();
  const article = articles[slug];

  if (!article) {
    return (
      <div className="container-medilink py-16">
        <h2 className="text-2xl font-bold">Artikel tidak ditemukan</h2>
        <p className="mt-4">Maaf, artikel yang Anda cari tidak tersedia.</p>
        <Link to="/" className="text-[#003366] mt-4 inline-block">Kembali ke beranda</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="container-medilink mx-auto py-12">
        <div className="mb-8">
          <div className="text-sm text-gray-500">{article.category}</div>
          <div className="text-gray-400 text-sm">{article.date}</div>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003366] mt-4">{article.title}</h1>
        </div>

        <img src={article.image} alt={article.title} className="w-full rounded-lg mb-6 object-cover" />

        <div className="prose max-w-none text-gray-700" style={{whiteSpace: 'pre-line'}}>
          {article.content}
        </div>

        <div className="mt-8">
          <Link to="/" className="text-[#003366]">← Kembali</Link>
        </div>
      </div>
    </div>
  );
};

export default ArticlePage;