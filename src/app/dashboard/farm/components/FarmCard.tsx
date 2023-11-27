import {
	Card,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { formatDate } from '../../chat-ai/ChatLink';

export interface FarmProduce {
	id: string;
	crop: string;
	variety: string;
	cultivatedAt: string;
	quantity: number;
	unit: string;
	createdAt: string;
}

const FarmCard = ({
	id,
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
						Cultivated on {formatDate(createdAt)}
					</CardDescription>
				</CardHeader>
			</Card>
		</div>
	);
};

export default FarmCard;
