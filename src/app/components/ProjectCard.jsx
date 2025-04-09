import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
    return (
        <div className="group">
            <div
                className="h-52 md:h-72 rounded-t-xl relative"
                style={{
                    background: `url(${imgUrl})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="overlay absolute top-0 left-0 w-full h-full bg-[#181818] opacity-0 group-hover:opacity-80 transition-all duration-500 flex items-center justify-center gap-4">
                    <Link href={gitUrl} className="h-14 w-14 border-2 relative rounded-full border-[#ABD7BE] hover:border-white flex items-center justify-center">
                        <CodeBracketIcon className="h-10 w-10 text-[#ABD7BE] cursor-pointer hover:text-white"/>
                    </Link>
                    <Link href={previewUrl} className="h-14 w-14 border-2 relative rounded-full border-[#ABD7BE] hover:border-white flex items-center justify-center">
                        <EyeIcon className="h-10 w-10 text-[#ABD7BE] cursor-pointer hover:text-white"/>
                    </Link>
                </div>
            </div>
            <div className="text-white rounded-b-xl bg-[#181818] py-6 px-4">
                <h5 className="text-xl font-semibold mb-2">{title}</h5>
                <p className="text-[#ABD7BE]">{description}</p>
            </div>
        </div>
    );
};

export default ProjectCard;