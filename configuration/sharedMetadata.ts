//NextJS
import { Metadata } from "next";


const title = 'Todo list';
const description = '';
const siteName = 'Todo list';


const sharedMetadata: Metadata = {
	title,
	description,
	themeColor: '#000000',
	keywords: [
		'todo',
		'list',
		'nextjs',
		'next',
		'kykal'
	],
	authors: [
		{
			name: 'Alan Xavier Benavides Benavides',
			url: 'https://github.com/Kykal',
		},
	],
	colorScheme: 'dark',
	twitter: {
		title,
		description,
		site: siteName,
		card: 'summary_large_image',
		images: [
			{
				url: 'https://cdn.discordapp.com/attachments/1118421375263199312/1118421378476023879/image.png',
				secureUrl: 'https://cdn.discordapp.com/attachments/1118421375263199312/1118421378476023879/image.png',
			},
		],
	},
	openGraph: {
		title,
		description,
		siteName,
		type: 'website',
		url: 'https://todo-list-chi-taupe.vercel.app/',
		images: [
			{
				url: 'https://cdn.discordapp.com/attachments/1118421375263199312/1118421378476023879/image.png',
				secureUrl: 'https://cdn.discordapp.com/attachments/1118421375263199312/1118421378476023879/image.png',
			},
		],
	},
}

export default sharedMetadata;
