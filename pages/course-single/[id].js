import { useRouter } from 'next/router';
import CourseSingleView from '../../components/CourseSingleView';

function CoursesSingle() {
  const router = useRouter();
  const { id } = router.query;
  return <CourseSingleView id={id} />;
}
export default CoursesSingle;
