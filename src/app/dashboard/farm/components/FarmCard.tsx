import {
	Card,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { formatDate } from '../../chat-ai/ChatLink';

export interface FarmProduce {
	crop: string;
	variety: string | undefined | null;
	cultivatedAt: string;
	quantity: number;
	unit: string;
	createdAt: string;
}

const FarmCard = ({
	crop,
	variety,
	cultivatedAt,
	quantity,
	unit,
	createdAt,
}: FarmProduce) => {


	return (
		<div>
			<Card>
				<CardHeader>
					<CardTitle>{crop}</CardTitle>
					<CardDescription>
						Creted by you on {formatDate(createdAt)}
					</CardDescription>
				</CardHeader>
			</Card>
		</div>
	);
};

export default FarmCard;
