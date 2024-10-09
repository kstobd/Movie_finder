import { useNavigate } from "react-router-dom"
import { Button } from "../button"

export const Menu = () => {
    const navigate = useNavigate()
  return (
    <div style={{width: '100%', height: '70px', borderBottom: '1px solid gray', display: 'flex', flexDirection: 'row'}}>
        <Button label="Главная" onClick={() => navigate('/')} color={""} size={""}/>
        <Button label="Цены" onClick={() => navigate('/price')} color={""} size={""}/>
        <Button label="Подписка" onClick={() => navigate('/prime')} color={""} size={""}/>
    </div>
  )
}
