import { getFarmProduces } from "@/app/actions";
import { auth } from '@clerk/nextjs';


const page = async () => {
    const { userId } = auth();
    
    if (!userId) {
        return null;
    }

    const produces = await getFarmProduces(userId)

    console.log(produces);

    return (
        <div>
            <p className="font-semibold">My Farm</p>
        </div>
    );
};

export default page;