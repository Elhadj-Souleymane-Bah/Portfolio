"use client"

import React, { useState } from "react";
import Image from "next/image";
import TabButton from "./tabButton";

const TAB_DATA = [
    {
        title: "Compétences",
        id: "competences",
        content: (
            <ul className="list-disc pl-5">
                <li>Node.js</li>
                <li>Java</li>
                <li>JavaScript</li>
                <li>C#</li>
                <li>HTML / CSS</li>
                <li>Kotlin</li>
                <li>Swift</li>
                <li>SQL / SQLite</li>
                <li>MongoDB</li>
                <li>Cassandra</li>
            </ul>
        ),
    },
    {
        title: "Formation",
        id: "formation",
        content: (
            <ul className="list-disc pl-5">
                <li><i>Collège La Cité</i></li>
                <li><i>Université Gamal Abdel Nasser de Conakry</i></li>
            </ul>
        ),
    },
    {
        title: "Expérience",
        id: "experience",
        content: (
            <ul className="list-disc pl-5">
                <li><i>Projet scolaire : Développement d'une application web d'échange de briques</i></li>
                <li><i>Concours scolaire : Application Android "FastFood"</i></li>
            </ul>
        ),
    },
];

const AboutSection = () => {
    const [tab, setTab] = useState("competences");

    const handleTabChange = (id) => {
        setTab(id);
    };

    return (
        <section className="text-white">
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 mt-[40px] xl:gap-16 sm:py-16 xl:px-16">
                <Image
                    src="/images/image-Apropos.png"
                    alt="Photo de profil"
                    width={500}
                    height={500}
                    className="rounded-lg"
                />
                <div className="mt-4 md:mt-0 text-left flex flex-col h-full"></div>
                <div>
                    <h2 className="text-4xl font-bold text-white mb-4">À propos de moi 😊</h2>
                    <p className="text-base lg:text-lg">
                        Je suis un développeur web full stack passionné par la création d'applications web interactives et responsives.
                        J'ai de l'expérience avec JavaScript, React, Redux, Node.js, Express, PostgreSQL, Sequelize, HTML, CSS et Git.
                        Je suis autonome et apprends rapidement, toujours à la recherche de nouvelles compétences à acquérir.
                        J'aime travailler en équipe et suis enthousiaste à l'idée de collaborer pour créer des applications innovantes.
                    </p>
                    <div className="flex flex-col md:flex-row justify-start md-justify-center mt-8">
                        <TabButton
                            selectTab={() => handleTabChange("competences")}
                            active={tab === "competences"}
                        >
                            Compétences
                        </TabButton>
                        <TabButton
                            selectTab={() => handleTabChange("formation")}
                            active={tab === "formation"}
                        >
                            Formation
                        </TabButton>
                        <TabButton
                            selectTab={() => handleTabChange("experience")}
                            active={tab === "experience"}
                        >
                            Expérience
                        </TabButton>
                    </div>
                    <div className="mt-8">
                        {TAB_DATA.find((t) => t.id === tab).content}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;