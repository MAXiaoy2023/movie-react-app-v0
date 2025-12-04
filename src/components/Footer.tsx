//import bg_image from '../assets/img/bg_image.jpg'
export function Footer() {
    return(

        <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4 sm-flex">
            <aside>
                <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
            </aside>
        </footer>
        // <footer>
        //     {/* <img src={bg_image}/> */}
        //     <div>   Copyright : 2025
        //     </div>
        // </footer>
    )
}