import Spinner from '../asset/image/Rolling-1s-200px.gif';

export default function Loding() {
    return (
        <div className="flex justify-center items-center h-screen">
            <img src={Spinner} alt="Spinner" />
        </div>
    )
}