import React from 'react'
import './Help.css'

const Help = () => {
    return (
        <aside className="helpBox">
            <div className="myAccount">
                <div className="divMC">Minha conta</div>
                <p><span> > Minha Conta <br/> > Identidade Histórico de Pedidos<br /> > Endereços</span></p>
            </div>
            <div className="helpDoubts">
                <div className="divMC">Ajuda</div>
                <span>> Dúvidas <br /> > Dúvidas e Perguntas Frequentes <br /> > Termos de Privacidade</span>
            </div>
            <div className="contact">
                <div className="divMC">Dúvidas</div>
                <span>> Entre em contato conosco <br /> > Rua Evandro Boás <br /> > Tel: (22) 2222-2222</span>
            </div>
        </aside>
    )
}

export default Help
