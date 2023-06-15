//NextJS
import { Roboto } from 'next/font/google'


//Configuration
import sharedMetadata from '@/configuration/sharedMetadata';
export const metadata = sharedMetadata;


//Styles
import './globals.css'
const roboto = Roboto({
  subsets: [
    'latin'
  ],
  weight: '400',
});


//Components
import Header from '@/components/Header';


//Typings
type Layout = {
  children: JSX.Element;
}


//Main component content
const Layout = (props: Layout): JSX.Element => {
  //Main component render
  return (
    <html lang="en">
      <body
        className={`${roboto.className} bg-k-black-1 text-white`}
      >
        <Header />
        {props.children}
      </body>
    </html>
  );
};


export default Layout; //Export main component
