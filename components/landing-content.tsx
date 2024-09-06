"use client"

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"

const testimonials = [
    {
        name: "Sarah Miles",
        avatar: "A",
        title: "Marketing Director",
        description: "Toolify streamlined our workflow with its powerful AI tools, saving us hours every week."
    },
    {
        name: "James Bennett",
        avatar: "A",
        title: "CEO",
        description: "Toolify’s platform gave us the edge we needed to improve productivity and results across the board."
    },
    {
        name: "Lisa Turner",
        avatar: "A",
        title: "Freelance Content Creator",
        description: "I can’t imagine my creative process without Toolify now—it's a game-changer!"
    },
    {
        name: "David Carter",
        avatar: "A",
        title: "Small Business Owner",
        description: "With Toolify, managing tasks has become so much easier—I highly recommend it to anyone!"
    },
]

export const LandingContent = () => {

    return (
        <div className="px-10 pb-20">
            <h2 className="text-center text-4xl text-white font-extrabold mb-10">
                Testimonials
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {testimonials.map((item) => (
                    <Card key={item.description} className="bg-[#192339] border-none text-white">
                        <CardHeader >
                            <CardTitle className="flex items-center gap-x-2">
                                <div>
                                    <p className="text-lg">{item.name}</p>
                                    <p className="text-zinc-400 text-sm">{item.title}</p>
                                </div>
                            </CardTitle>
                            <CardContent className="pt-4 px-0">
                                {item.description}
                            </CardContent>
                        </CardHeader>
                    </Card>
                ))}
            </div>
        </div>
    )
}