import React from "react";
import TeamCard from "../components/TeamCard";
import HeroSection from "../components/HeroSection";

const teamData = [
  {
    title: "Lead Mentors",
    members: [
      { name: "Metin Kaya", role: "Head Mentor", image: "/team_members/metin_men.jpg" },
      { name: "Özgür Şahin", role: "Head Mentor", image: "/team_members/ozgur_men.jpg" },
    ]
  }
  , {
    title: "Mentors",
    members: [
      { name: "Oğuzcan", role: "Alumni/Mentor", image: "/team_members/oguzcan_men.jpg" },
      { name: "Yunus Emre", role: "Alumni/Mentor", image: "/team_members/cipil_men.jpg" },
      { name: "Alp Necati", role: "Mentor", image: "/team_members/necati_men.jpg" },
      { name: "Saliha", role: "Alumni/Mentor", image: "/team_members/saliha_men.jpg" },
      { name: "Furkan", role: "Mentor", image: "/team_members/furkan_men.jpg" }
    ]
  },
  {
    title: "Yazılım",
    members: [
      { name: "Hamza Nurıddınov", role: "Team captain / Software", image: "/team_members/hamza.jpg" },
      { name: "Yahya Burak Ulu", role: "Software Captain / Driver", image: "/team_members/yahya_yaz.jpg" }
    ]
  },
  {
    title: "Mechanic",
    members: [
      { name: "Efe Üçel", role: "Mechanic / Technician", image: "/team_members/efe_mek.jpg" },
      { name: "Samed Mert", role: "Mechanic / Driver", image: "/team_members/samet_mek.jpg" },
      { name: "BurakCan", role: "Mechanic", image: "/team_members/burak_mek.jpg" },
      { name: "Akın", role: "Mechanic", image: "/team_members/akin_mek.jpg" },
      { name: "Kayra", role: "Mechanic", image: "/team_members/kayra_mek.jpg" }
    ]
  },
  {
    title: "PR",
    members: [
      { name: "Ecesu", role: "PR", image: "/team_members/ecesu_pr.jpg" },
      { name: "Esra ", role: "PR", image: "/team_members/esra_pr.jpg" },
      { name: "Kaan", role: "PR/Cameraman", image: "/team_members/kaan_pr.jpg" },
      { name: "Mina", role: "PR Captain", image: "/team_members/mina_pr.jpg" },
      { name: "Sevde", role: "PR", image: "/team_members/sevde_pr.jpg" },
      { name: "Zilan", role: "PR", image: "/team_members/zilan_pr.jpg" },
      { name: "Zeynep", role: "PR", image: "/team_members/zeynep_pr.jpg" },
      { name: "Zeynep", role: "PR", image: "/team_members/zeynep_g_pr.jpg" },
    ]
  }
];

const Team = () => {
  return (
    <div className="pt-20 min-h-screen bg-white dark:bg-slate-900 " >

      <HeroSection
        title="Team Members"
        subtitle="Our team members. We are a family."
        backgroundImage="/mainfoto.jpg"
      />



      {/* Content Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        {teamData.map((section) => (
          <div key={section.title} className="mb-16 mx-16 my-16 pb-2">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">{section.title}</h3>
            <div
              className={`grid gap-8 justify-center ${section.members.length > 2 ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3" : "grid-cols-1 sm:grid-cols-2"}`}
            >
              {section.members.map((member) => (
                <div key={member.name} className="text-center">
                  <TeamCard name={member.name} role={member.role} image={member.image} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>


    </div>

  );
};

export default Team;
