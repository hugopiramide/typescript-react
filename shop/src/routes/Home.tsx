import CardList from "../components/CardList"
import { products } from "../products/data"

const Home = () => {
    return(
    <main className="container-fluid p-0 overflow-hidden">
        
        <section
        id="homePicture"
        className="position-relative w-100 overflow-hidden d-flex justify-content-end align-items-center"
        >

        <video
            src="/src/assets/video/peopleRunning.mp4"
            className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
            autoPlay
            loop
            muted
            playsInline
        />

        <div
            className="position-absolute top-0 start-0 w-100 h-100"
            style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
        />

        <div className="position-relative text-center w-100 jutify-content-center text-white z-1" style={{ paddingTop: 300 }}>
            <p className="fw-semibold mb-0">Nike Running</p>

            <h1
            className="display-1 fw-black fst-italic text-uppercase mb-4"
            style={{ fontWeight: 900 }}
            >
            WIN ON YOUR TERMS
            </h1>

            <div className="d-flex justify-content-center gap-3">
            <button className="btn btn-light rounded-pill px-4 py-2 fw-bold shadow-sm">
                Comprar
            </button>
            <button className="btn btn-light rounded-pill px-4 py-2 fw-bold shadow-sm">
                Ver Vídeo
            </button>
            </div>
        </div>
        </section>

        <section className="container py-5 my-5">
            <div className="d-flex justify-content-between align-items-end mb-4">
            <h2 className="h3 fw-bold text-uppercase fst-italic">Los Imprescindibles</h2>
            <div className="d-none d-md-flex gap-2">
                <button className="btn btn-outline-dark rounded-circle border-0 bg-light p-3">
                <i className="bi bi-arrow-left"></i>
                </button>
                <button className="btn btn-outline-dark rounded-circle border-0 bg-light p-3">
                <i className="bi bi-arrow-right"></i>
                </button>
            </div>
            </div>

            <div className="row g-4">
            </div>
        </section>

        <section className="container mb-5">
            <div className="bg-black text-white position-relative p-5 overflow-hidden" style={{ minHeight: '500px' }}>
            <div className="row h-100 align-items-center">
                <div className="col-lg-5 z-2">
                <h2 className="display-4 fw-black text-uppercase fst-italic mb-3">No dejes de moverte</h2>
                <p className="lead mb-4">Descubre nuestra nueva colección de entrenamiento diseñada para ofrecerte la máxima comodidad.</p>
                <button className="btn btn-light rounded-pill px-5 py-3 fw-bold text-uppercase">
                    Explorar Colección
                </button>
                </div>
            </div>
            <img 
                src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200" 
                className="position-absolute end-0 top-0 h-100 w-75 object-fit-cover opacity-75 d-none d-lg-block"
                alt="Workout Collection"
                style={{ maskImage: 'linear-gradient(to right, black 0%, transparent 100%)' }}
            />
            </div>
        </section>

    </main>
    )
}

export default Home