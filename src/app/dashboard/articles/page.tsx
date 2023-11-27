import ArticleCard from './components/ArticleCard';

const apiKey = '70205e22e6534efda7aba09fc274b799';

export interface NewsArticle {
	source: {
		id: string | null;
		name: string;
	};
	author: string;
	title: string;
	description: string;
	url: string;
	urlToImage: string;
	publishedAt: string;
	content: string;
}

async function getAgriculturalArticles() {
	const apiUrl = `https://newsapi.org/v2/everything?q=agriculture&pageSize=20&apiKey=${apiKey}`;

	try {
		const response = await fetch(apiUrl);
		const data = await response.json();

		if (data.status === 'ok') {
			// Process and display the articles
			const articles = data.articles as NewsArticle[];
			return articles;
		} else {
			console.error('Error fetching articles:', data.message);
		}
	} catch (error) {
		console.error('Error:', error);
	}
}

const page = async () => {
	const articles = await getAgriculturalArticles();

	if (!articles || articles.length === 0) {
		return null;
	}

	return (
		<div>
			<p className='text-lg font-semibold pl-10 mb-5'>
				Artcles curated for you
			</p>

			<div
				className={`flex flex-wrap gap-4 mt-5 ${
					articles.length > 2 ? 'justify-evenly' : ''
				}`}>
				{articles?.map((article) => {
					return <ArticleCard key={article.title} article={article} />;
				})}
			</div>
		</div>
	);
};

export default page;
