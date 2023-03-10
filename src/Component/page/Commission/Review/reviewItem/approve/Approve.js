
import './Approve.css';
import '../../../../User/Present/Form/Form.css';
import Button from '../../../../../UIComponent/Button';

const Approve = (props) => {
    return (
        <main className='mainForm'>
            <h4 className="title">{props.cart.map(el => (el.category))}</h4>
            <form className='formApp'>
                <div className='cartNum'>
                    <label className='label'>Протокол засідання комісії</label>
                    <div className='date-num'>
                        <input type="date" />
                        <input type="number" min={1} placeholder="Номер" />
                    </div>
                </div>
                <div className='cartNum'>
                    <label className='label'>Протокол засідання Вченої ради</label>
                    <div className='date-num'>
                        <input type="date" />
                        <input type="number" min={1} placeholder="Номер" />
                    </div>
                </div>
                <div className='cartNum'>
                    <label className='label'>Наказ про утвердження</label>
                    <div className='date-num'>
                        <input type="date" />
                        <input type="number" min={1} placeholder="Номер" />
                    </div>
                </div>
            </form>
            <label className='labelOn'>Ухвала комісії </label>
                <div className='comentForm'>
                    <textarea className='coment' ></textarea>
                </div>
            <div className='buttonApp'>
                <Button title={'Затвердити'} />
            </div>

        </main>
    );
}


export default Approve;