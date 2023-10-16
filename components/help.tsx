"use client";

import { FilePlus, FileStack } from 'lucide-react';

//Click to open modal for new Story:
const onClick = ()=>{
    //Check if pro member
    //Check how many free stories in library already
}

const Library = ({
}) => {
    return ( 
        <div className="flex flex-col">
            <div className="flex items-center justify-between px-5 pt-4">
                <div className="inline-flex items-center gap-x-2">
                    <FileStack  className="text-neutral-400" size={22} />
                    <p className="text-neutral-400 lg:font-medium md:text-sm text-md">
                        Help
                    </p>
                </div>
                <FilePlus  className="text-neutral-400" size={22} />
            </div>
            <div className="flex flex-col gap-y-2 mt-4 px-3">
                
                 {/*<Documents/>*/}
            </div>
        </div>
    );
}
export default Library;