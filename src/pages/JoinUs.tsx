import React from "react";
import { Helmet } from "react-helmet";
import HeroSection from "../components/HeroSection";

const JoinUs: React.FC = () => {
    return (
        <div className="pt-20">
            <HeroSection
                title="Takımımıza Katılın!"
                subtitle="Takımımıza katılmak için başvuru formunu doldur. Tutkunla aramıza katıl!"
                backgroundImage="mainfoto.jpg"
            />
            <div
                style={{
                    fontFamily: "Arial, sans-serif",
                    color: "#ffffff",
                    margin: 0,
                    padding: 0,
                    minHeight: "100vh",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <div
                    style={{
                        width: "100%",
                        maxWidth: "800px",
                        padding: "20px",
                    }}
                >
                    <iframe
                        src="https://docs.google.com/forms/d/e/1FAIpQLScWsl7UvbRif2k6XIg52r7seGluzOwgQPxbzdMVbWyGnKcXFA/viewform?embedded=true"
                        style={{
                            width: "100%",
                            height: "4800px",
                            border: "none",
                        }}
                        frameBorder={0}
                        marginHeight={0}
                        marginWidth={0}
                        title="ITOBOT 6038 Başvuru Formu"
                    >
                        Yükleniyor…
                    </iframe>
                </div>
            </div>
        </div>
    );
};

export default JoinUs;
