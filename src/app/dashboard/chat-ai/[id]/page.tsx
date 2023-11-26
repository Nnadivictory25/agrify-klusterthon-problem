import Advise from '@/app/ask-ai/page';

const page = ({ params }: { params: { id: string } }) => {
    return (
        <div>
            <Advise isHome={false} chatId={params.id} />
        </div>
    );
};

export default page;