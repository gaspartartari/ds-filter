import "./styles.css";

export default function Filter() {

    return (
        <>
            <section id="form">
                <div className="df-container df-form">
                    <form action="">
                        <div >
                            <input type="text"
                                placeholder="Preço mínimo"
                            />
                        </div>
                        <div >
                            <input type="text"
                                placeholder="Preço Máximo"
                            />
                        </div>
                        <button>Filtrar</button>
                    </form>
                </div>
            </section>
        </>
    )
}