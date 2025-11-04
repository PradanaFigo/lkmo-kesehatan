import React from 'react';

const StorySection = () => {
  const stories = [
    {
      image: "/story-ibu-anak.png",
      category: "Ibu & Anak",
      title: "Pentingnya Menjaga Kesehatan Ibu: Untuk Perkembangan Optimal Anak"
    },
    {
      image: "/story-transplantasi.png",
      category: "Nefrologi",
      title: "Operasi Transplantasi Organ: Harapan Hidup Baru Untuk Masa Depan Sehat"
    },
    {
      image: "/story-kardiologi.png",
      category: "Kardiologi",
      title: "Prosedur PCI : Untuk Pasien Penyakit Jantung"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container-medilink">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/3">
            <div className="text-[#003366] text-6xl mb-4">🔑</div>
            <h2 className="text-gray-500 mb-2">Berbagi Cerita #MedicalLink</h2>
            <h3 className="text-[#003366] text-2xl font-bold">Ketika Kesehatan Menjadi Kunci Utama Kehidupan</h3>
          </div>
          
          <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-6">
            {stories.map((story, index) => (
              <div key={index} className="bg-[#e6f0ff] p-4 rounded-lg">
                <img src={story.image} alt={story.title} className="w-full h-48 object-cover mb-4 rounded" />
                <div className="text-[#003366] text-sm mb-2">{story.category}</div>
                <div className="text-[#003366] font-medium">{story.title}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;