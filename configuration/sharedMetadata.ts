//NextJS
import { Metadata } from "next";


const title = 'Todo list';
const description = '';
const siteName = 'Todo list';


const sharedMetadata: Metadata = {
	title,
	description,
	twitter: {
		title,
		description,
		site: siteName,
	},
	openGraph: {
		title,
		description,
		siteName,
	}
}

export default sharedMetadata;
