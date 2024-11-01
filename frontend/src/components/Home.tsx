import { CheckCircleIcon, Goal, LucideSquareArrowDown } from "lucide-react";
import { Link } from "react-router-dom";
import { MaxWidthWrapper } from "./MaxWidthWrapper";
import { Button } from "./ui/button";

export const Home = () => {
    const perks = [
        {
            name: "Instant Delivery",
            Icon: LucideSquareArrowDown,
            description: "Get your digital assets delivered instantly to your mail after purchase."
        },
        // {
        //     name: "Secure Transactions",
        //     Icon: ShieldEllipsis,
        //     description: "All transactions are encrypted and secure."
        // },
        {
            name: "24/7 Support",
            Icon: CheckCircleIcon,
            description: "Our team is available around the clock to assist you."
        },
        {
            name: "High Quality",
            Icon: Goal,
            description: "We ensure top-notch quality for all our digital assets."
        }
    ]

    return (
        <>  
          
            <MaxWidthWrapper>
                <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                        Your Market place for High_Quality{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-700">Digital Assets</span>.
                    </h1>
                    <p className="mt-6 text-lg max-w-prose text-muted-foreground">
                        Welcome to DigiPpo, Every Assest you need is here. It's verifed and
                        trusted. Maintain your digital assets with DigiPpo.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 mt-6">
                        <Button>
                            <Link to="/products"> Browse Trending </Link>
                        </Button>
                        <Button variant={"outline"}>Our Quality Promise &rarr;</Button>
                    </div>
                </div>
                {/*  Todo list of prods */}
            </MaxWidthWrapper>
            <section className="border-t border-gray-200 bg-gray-50">
                <MaxWidthWrapper className="py-20">
                    <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0 ">
                        {perks.map((perk, index) => (
                            <div key={index} className="text-center md:flex md:items-start md:text-left lg:block lg:text-center mb-8 ">
                                <div className="md:flex-shrink-0 flex justify-center">
                                    <div className="h-16 w-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-900">
                                        {<perk.Icon className="w-1/3 h-1/3" />}
                                    </div>
                                </div>
                                <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                                    <h3 className="text-base font-medium text-gray-900">
                                        {perk.name}
                                    </h3>
                                    <p className="mt-3 text-small text-muted ">
                                        {perk.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </MaxWidthWrapper>
            </section>
        </>
    );
};
