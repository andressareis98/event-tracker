import { useSetRecoilState } from "recoil"
import { IEvento } from "../../interfaces/IEvento"
import { listaDeEventosState } from "../atom"

const useApagarEvento = () => {
    const setListDeEventos = useSetRecoilState<IEvento[]>(listaDeEventosState)
    return(evento: IEvento) => {
        return setListDeEventos(listaAntiga => listaAntiga.filter(evt => evt.id !== evento.id))
    }
}

export default useApagarEvento