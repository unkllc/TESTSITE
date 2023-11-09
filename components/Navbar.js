import Image from 'next/image';
import Link from 'next/link';
import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/Navbar.module.css';
import DropdownMenu from './utils/DropdownMenu';
import DropdownMenuCourses from './utils/DropdownMenuCourses';
import CheckClickOutside from './utils/CheckClickOutside';
import FilterContext from '../services/FilterContext';

function Navbar() {
  const router = useRouter();
  const { filter, setFilter } = useContext(FilterContext);

  function toggleMenu() {
    const toggle = document.getElementById(styles.header);
    toggle.classList.toggle(styles.show);
  }
  function removeMenu() {
    const toggle = document.getElementById(styles.header);
    toggle.classList.remove(styles.show);
  }
  const [open, setOpen] = useState(false);
  const [openCourses, setOpenCourses] = useState(false);
  const [tremDoBruno, setTremDoBruno] = useState(false);
  const [timer, setTimer] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleClickOpenCourses = () => {
    setOpenCourses(true);
  };
  const handleCloseCourses = () => {
    setOpenCourses(false);
  };
  function countdown(time) {
    // Mudar state tremDoBruno para true para exibir contador
    const finalDate = new Date(time);

    const timer = setInterval(() => {
      const currentDate = new Date();
      const difference = finalDate - currentDate;

      const days = Math.floor(difference / 1000 / 60 / 60 / 24);
      const hours = Math.floor(difference / 1000 / 60 / 60) % 24;
      const minutes = Math.floor(difference / 1000 / 60) % 60;
      const seconds = Math.floor(difference / 1000) % 60;

      setTimer({
        days: days < 10 ? '0' + days : days,
        hours: hours < 10 ? '0' + hours : hours,
        minutes: minutes < 10 ? '0' + minutes : minutes,
        seconds: seconds < 10 ? '0' + seconds : seconds,
      });

      if (difference < 0) {
        clearInterval(timer);
        days = 0;
        hours = 0;
        minutes = 0;
        seconds = 0;
        setTimer({ ...timer, days: days < 10 ? '0' + days : days });
        setTimer({ ...timer, hours: hours < 10 ? '0' + hours : hours });
        setTimer({ ...timer, minutes: minutes < 10 ? '0' + minutes : minutes });
        setTimer({ ...timer, seconds: seconds < 10 ? '0' + seconds : seconds });
        setTremDoBruno(false);
      }
    }, 1000);
  }
  // useEffect(() => {
  //   countdown('2022-09-01 22:00:00');
  // }, []);

  return (
    <header
      id={styles.header}
      className={
        router.route == '/'
          ? `${styles.headerIndex}`
          : `${styles.headerGeneral}`
      }
    >
      <div
        className={`${styles.tremDoBruno} ${
          tremDoBruno ? styles.mostra : styles.fecha
        }`}
      >
        <span
          className={styles.tremDoBrunoFecha}
          onClick={() => setTremDoBruno(false)}
        >
          x
        </span>
        <div className={styles.tremDoBrunoTitulo}>12 Horas de Loucura!</div>
        <div className={styles.tremDoBrunoTexto}>
          Converse com os operadores no nosso chat
        </div>
        <div className={styles.tremDoBrunoContador}>
          <div className={styles.item}>0</div>
          <div className={styles.item}>{timer.hours}</div>
          <div className={styles.divisor}></div>
          <div className={styles.item}>{timer.minutes}</div>
          <div className={styles.item}>{timer.seconds}</div>
        </div>
      </div>
      <nav className={styles.container}>
        <Link href="/">
          <a>
            <img
              width="66"
              height="28"
              className={styles.logo}
              src="/svgs/logo.svg"
            />
          </a>
        </Link>
        <div className={styles.menu}>
          <div className={`${styles.headerMenu} ${styles.hiddenXl}`}>
            <Image width="100" height="40" src="/svgs/logo.svg" />
            <Image
              className={styles.absolute}
              onClick={toggleMenu}
              width="20"
              height="20"
              src="/icons/close.svg"
            />
          </div>
          <ul className={styles.container}>
            <li>
              <Link href="https://blog.faculdadeibra.com.br/">
                <a target="_blank">Blog</a>
              </Link>
            </li>
            <li onClick={removeMenu}>
              <Link href="/about">
                <a className={router.asPath == '/about' ? styles.active : ''}>
                  Sobre nós
                </a>
              </Link>
            </li>
            {/* <li onClick={removeMenu}>
              <Link href="/cursos/graduacao">
                <a
                  onClick={() => {
                    setFilter({ open: false, tipo_id: 8 });
                  }}
                  className={
                    router.asPath == '/cursos/graduacao' ? styles.active : ''
                  }
                >
                  Graduação
                </a>
              </Link>
            </li>
            <li onClick={removeMenu}>
              <Link href="/cursos/pos">
                <a
                  onClick={() => setFilter({ open: false, tipo_id: 1 })}
                  className={
                    router.asPath == '/cursos/pos' ? styles.active : ''
                  }
                >
                  Pós-graduação
                </a>
              </Link>
            </li>
            <li onClick={removeMenu}>
              <Link href="/cursos/complementacao">
                <a
                  onClick={() => setFilter({ open: false, tipo_id: 2 })}
                  className={
                    router.asPath == '/cursos/complementacao'
                      ? styles.active
                      : ''
                  }
                >
                  Complementação
                </a>
              </Link>
            </li>
            <li onClick={removeMenu}>
              <Link href="/cursos/geral">
                <a
                  onClick={() => setFilter({ open: false, tipo_id: 9 })}
                  className={
                    router.asPath == '/cursos/geral' ? styles.active : ''
                  }
                >
                  Extracurriculares
                </a>
              </Link>
            </li> */}

            <CheckClickOutside onClickOutside={handleCloseCourses}>
              <li className={styles.dropDown} onClick={handleClickOpenCourses}>
                <Link href="#">
                  <a>Cursos</a>
                </Link>
                <DropdownMenuCourses open={openCourses} />
              </li>
            </CheckClickOutside>
            <CheckClickOutside onClickOutside={handleClose}>
              <li className={styles.dropDown} onClick={handleClickOpen}>
                <Link href="#">
                  <a>Polos</a>
                </Link>
                <DropdownMenu open={open} />
              </li>
            </CheckClickOutside>
            <li onClick={removeMenu}>
              <Link href="/portal">
                <a className={styles.btnNav}>Entrar como aluno</a>
              </Link>
            </li>
          </ul>
        </div>
        <Image
          onClick={toggleMenu}
          width="18"
          height="16"
          src="/icons/bars.svg"
        />
      </nav>
    </header>
  );
}
export default Navbar;
