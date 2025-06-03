
export default function Footer() {
    return (
        <footer id="footer" className="flex flex-row place-items-center bg-zinc-950 p-5 text-justify no-underline font-body">
            <div className="footer-left mr-6 ml-4 flex-col">
                <ul className="text-zinc-50">
                    <li>
                        <a href="/about" className="no-underline">About Voile</a>
                    </li>
                    <li>
                        <a href="/history" className="no-underline">History</a>
                    </li>
                    <li>
                        <a href="/contact" className="no-underline">Contact us</a>
                    </li>
                </ul>
            </div>
            <div className="grow-3" />
            <div className="footer-right flex-col pl-2 text-zinc-50">
                <div className="pd-4">
                    <p>Made by Aigle</p>
                    <p>Check out my GitHub</p>
                </div>
                <div className="address mt-3">
                    <p>4 étage,</p>
                    <p>48 Descente Saint-Bernard,</p>
                    <p>16869 Calais</p>
                    <p>Phone: 02-782003912</p>
                </div>
            </div>
        </footer>
    )
}