import AOS from 'aos';
import 'aos/dist/aos.css';


export const aos = app.AOS = new AOS.init({
    // disable: () => {
    //     let maxWidth = 1000;
    //     return window.innerWidth < maxWidth;
    // },
    once: true,
    duration: 700
});
