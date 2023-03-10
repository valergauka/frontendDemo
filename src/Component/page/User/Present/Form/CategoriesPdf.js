import './FormPdf.css';

const CategoriesPdf = (props) => {
    return (
        <div className="categoriPDF">
            <label className='title'>{props.category.titule}</label>
            <input type="file"accept="application/pdf" name={props.category.name} />
        </div>
    );
};

export default CategoriesPdf;