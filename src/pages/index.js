import { Navbar, Hero } from '../components/';
import DefaultLayout from '../layout/default';

export default function Home() {
  return (
    <DefaultLayout>
      <Navbar />
      <Hero />
    </DefaultLayout>
  );
}
