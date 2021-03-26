import './index.scss';

const Loader = ({ id }) => {
    return (
        <div data-testid="loader" className={ `${'ring'} ${id}` }></div>
    );
}

export default Loader;