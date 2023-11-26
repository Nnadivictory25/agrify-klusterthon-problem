import Advise from '@/app/ask-ai/page';

const page = ({ params }: { params: { id: string } }) => {
    return (
        <div>
            <Advise />
        </div>
    );
};

export default page;