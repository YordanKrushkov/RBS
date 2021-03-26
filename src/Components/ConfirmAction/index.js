import './index.scss';

const Confirm = ({ func, }) => {

    return (
        <div id="confirm">
            <header>
                <h1>Are you sure?</h1>
            </header>
            <footer onClick={ func }>
                <button>Yes</button>
                <button>No</button>
            </footer>
        </div>
    );
}

export default Confirm;