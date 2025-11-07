import React from 'react';
import { Link } from 'react-router-dom';

const StorySection = () => {
  const stories = [
    {
      image: "/ibu-anak.png",
      category: "Ibu & Anak",
      title: "Pentingnya Menjaga Kesehatan Ibu: Untuk Perkembangan Optimal Anak",
      slug: 'pentingnya-menjaga-kesehatan-ibu'
    },
    {
      image: "/story-transplantasi.png",
      category: "Nefrologi",
      title: "Operasi Transplantasi Organ: Harapan Hidup Baru Untuk Masa Depan Sehat",
      slug: 'operasi-transplantasi-organ'
    },
    {
      image: "/story-kardiologi.png",
      category: "Kardiologi",
      title: "Prosedur PCI : Untuk Pasien Penyakit Jantung",
      slug: 'prosedur-pci'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container-medilink">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/3">
            <div className="text-[#003366] text-6xl mb-4">🔑</div>
            <div className="text-gray-500 mb-2">Berbagi Cerita #MedicalLink</div>
            {/* Make the left title clickable to the first article */}
            <h3 className="text-[#003366] text-2xl font-bold">
              <Link to={`/berita/${stories[0].slug}`} className="hover:underline">Ketika Kesehatan Menjadi Kunci Utama Kehidupan</Link>
            </h3>
          </div>
          
          <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-6">
            {stories.map((story, index) => (
              <div key={index} className="bg-[#e6f0ff] p-4 rounded-lg">
                <Link to={`/berita/${story.slug}`}>
                  <img src={story.image} alt={story.title} className="w-full h-48 object-cover mb-4 rounded" />
                </Link>
                <div className="text-[#003366] text-sm mb-2">{story.category}</div>
                <Link to={`/berita/${story.slug}`} className="text-[#003366] font-medium hover:underline block">
                  {story.title}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;