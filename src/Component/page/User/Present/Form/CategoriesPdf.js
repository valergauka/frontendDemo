const CategoriesPdf = (props) => {
    return (
        <div>
            <label>{props.category.titule}</label>
            <input type="text" name={props.category.name} />
        </div>
    );
};

export default CategoriesPdf;