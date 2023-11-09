import { useRouter } from 'next/router';
import EventViewer from '../../components/EventViewer';

function Eventos() {
  const router = useRouter();
  const { slug } = router.query;
  return <EventViewer slug={slug} />;
}
export default Eventos;
