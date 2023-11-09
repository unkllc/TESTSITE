import { useContext } from 'react';
import Link from 'next/link';
import styles from '../../styles/ultisCss/DropdownMenu.module.css';
import FilterContext from '../../services/FilterContext';
function DropdownMenuCourses({ open }) {
  const { setFilter } = useContext(FilterContext);
  if (!open) {
    return null;
  }
  return (
    <ul className={styles.showDrop}>
      <li
        onClick={() => setFilter({ open: false, tipo_id: 4 })}
        className={styles.dropItem}
      >
        <Link href="/cursos/geral">
          <label>EJA</label>
        </Link>
      </li>
      <li className={styles.dropItem}>
        <Link href="/cursos/graduacao">
          <label>GRADUAÇÃO</label>
        </Link>
      </li>
      <li className={styles.dropItem}>
        <Link href="/cursos/pos">
          <label>PÓS GRADUAÇÃO</label>
        </Link>
      </li>
      <li className={styles.dropItem}>
        <Link href="/cursos/complementacao">
          <label>FORM.PROFESSORES</label>
        </Link>
      </li>
      <li className={styles.dropItem}>
        <Link href="https://www.ibramais.com/">
          <label>CURSOS LIVRES</label>
        </Link>
      </li>
    </ul>
  );
}
export default DropdownMenuCourses;
