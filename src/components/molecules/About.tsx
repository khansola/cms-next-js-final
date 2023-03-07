import React from 'react'
import Image from 'next/image';
import CardCircle from '../atoms/CardCircle';





const About = () => {
    const timsehjira = [{
        image: "/images/s.jpg",
        caption: "Dr. Rachmita Maun Harahap, ST., M Sn",
        title: "Dewan Pendiri",
    },
    {
        image: "/images/s.jpg",
        caption: "Linda Nora, S.E",
        title: "Dewan Pengawas",
    },
    {
        image: "/images/s.jpg",
        caption: "Plt. Ade Nurima, S.Komp",
        title: "Dewan Pengurus Ketua",
    },
    {
        image: "/images/s.jpg",
        caption: "Chaerunisa Eka, S.Ds",
        title: "Dewan Pengurus Sekretaris",
    },
    ];

    return (
        <div className='px-[7%]'>
            <div>
                <h1 className='bg-red-400 text-4xl text-left'>
                    Tentang Sehjira
                </h1>
            </div>
            <div className=" flex flex-wrap justify-center py-5">
                <Image
                    src="/images/f.jpg"
                    alt="sehjira"
                    height={200}
                    width={450}
                />
            </div>
            <div>
                <h1 className='bg-red-400 text-4xl'>
                    Latar Belakang
                </h1>
                <p className='py-5'>
                    Yayasan SEHJIRA adalah sebuah yayasan yang berfokus pada perlindungan dan advokasi bagi penyandang disabilitas khususnya disabilitas rungu/tuli. Yayasan ini ingin membantu para anggotanya mengembangkan potensi dan mendapatkan hak serta kehidupan yang layak di masyarakat. SEHJIRA menyadari pentingnya memiliki tujuan dan program kerja yang sesuai dengan visi misi untuk mencapai hal tersebut. Melalui pelatihan dan kemandirian yang diadakan, SEHJIRA dapat membantu para penyandang disabilitas rungu/tuli bersosialisasi dengan masyarakat luas. Disabilitas rungu/tuli membutuhkan dukungan dan perlindungan agar merasa terlindungi dari segala macam bentuk stigma atau diskriminasi, serta mendapatkan kehidupan yang setara dengan masyarakat non-tuli pada umumnya. SEHJIRA memberikan pelatihan bahasa isyarat yang berbasis internasional agar gerak dan bahasa tubuh yang digunakan oleh disabilitas rungu/tuli dapat dipahami dengan sempurna.
                </p>
                <Image
                    src="/images/f.jpg"
                    alt="sehjira"
                    height={200}
                    width={450}
                />
            </div>
            <div className='py-5'>
                <h1 className='bg-red-400 text-4xl '>
                    Linimasa Sehjira
                </h1>
                <p className='py-5'>
                    #Tanggal 5 Desember 2001: Yayasan SEHJIRA didirikan oleh sekelompok relawan yang memiliki hambatan pendengaran dengan tujuan menggalang dana dan menyediakan informasi seputar pendidikan dan lapangan kerja bagi disabilitas rungu/Tuli.
                    #Tahun-tahun awal: SEHJIRA hanya beranggotakan 20 orang disabilitas rungu/Tuli.
                    #Pertengahan tahun 2001: Rachmita Maun Harahap mendirikan Yayasan SEHJIRA.
                    #Anggota SEHJIRA semakin bertambah dan pada saat ini mencapai lebih dari 3020 orang disabilitas rungu/Tuli dari hampir seluruh wilayah di Indonesia yang ikut dalam program SEHJIRA.
                    #Para disabilitas rungu/Tuli yang mengikuti pelatihan dan keterampilan di SEHJIRA berhasil memiliki keterampilan menjahit dan membuka usaha mandiri, bekerja di perusahaan garmen, menjadi PNS, pegawai swasta, desainer, arsitek, programmer, barista, dan lain-lain.
                    #Salah satu anggota SEHJIRA berhasil meraih prestasi sebagai juara pertama dalam lomba membuat jas tingkat Nasional.
                    #SEHJIRA juga memberikan dukungan kepada keluarga disabilitas rungu/Tuli untuk mendapatkan kesetaraan.
                    #SEHJIRA dihadapkan pada suatu tantangan untuk mengembangkan organisasi agar eksistensinya dapat membantu pengembangan potensi para anggota untuk mendapatkan hak dan kehidupan yang layak di masyarakat.
                    #SEHJIRA menyadari pentingnya suatu tujuan dan program kerja yang sesuai dengan visi, misi serta ciri khas atau kondisi budaya identitas saat ini.
                </p>
            </div>
            <div className='flex flex-wrap justify-between'>
                <div className='w-[45%]'>
                    <h3 className='font-bold text-4xl'>Visi</h3>
                    <p className='py-5'>
                        Visi Yayasan SEHJIRA adalah pemberdayaaan disabilitas rungu/Tuli guna terwujudnya individu yang tangguh dan mandiri serta ikut berpartisipasi dalam pembangunan Indonesia inklusif.
                    </p>
                </div>
                <div className='w-[50%]'>
                    <h3 className='font-bold text-4xl'>Misi</h3>
                    <p className='py-5'>
                        #Membantu disabilitas rungu/Tuli dengan pemberian advokasi atau perlindungan terutama menjembatani penyandang disabilitas dengan organisasi kemitraan;
                        #Menjalin kerjasama antar lembaga misalnya lembaga pemerintah baik sektor sosial, pendidikan, kesehatan,  tenaga kerja, olah raga, seni budaya dan pariwisata, infrastruktur, dan sebagainya; dan
                        #Pemberdayaan disabilitas rungu/Tuli turut berpartisipasi dalam pembangunan dan memberikan sosialisasi kepada masyarakat umum mengenai ketulian.
                    </p>
                </div>
            </div>
            <div>
                <h3 className='font-bold text-4xl'>Mitra Kerja Sama</h3>
                <p>
                    Berikut adalah Partner yang pernah bekerja Sama dengan Yayasan Sehjira
                </p>
            </div>
            <Image
                src="/images/f.jpg"
                alt="sehjira"
                height={200}
                width={450}
            />
            <div>
                <h3 className='font-bold'>Tim Sehjira</h3>
            </div>
            <div className='flex w-[70%] gap-5 '>
                {timsehjira.slice(0,4).map((e, i) => {
                    return (
                        <CardCircle
                            key={i}
                            image={e.image}
                            caption={e.caption}
                            title={e.title}
                        >
                        </CardCircle>
                    )
                })}
            </div>
        </div>
    )
}

export default About