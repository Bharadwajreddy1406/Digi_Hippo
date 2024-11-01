import { MaxWidthWrapper } from './MaxWidthWrapper';

export const Navbar = () => {

    return (
        <div className=" bg-transparent backdrop-blur-sm sticky z-10 top-0 inset-x-0 h-16">
                <header className="relative ">
                    <MaxWidthWrapper>
                        <div className="border-b border-gray-200">
                            <div className="flex-16 items-center">
                                {/* Mobile nav here*/}
                            </div>
                        </div>
                    </MaxWidthWrapper>
                </header>
        </div>
    )


}