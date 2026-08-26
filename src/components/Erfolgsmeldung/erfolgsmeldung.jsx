import './erfolgsmeldung.css';

export default function Erfolgsmeldung({ message }) {
    return (
        <div className="erfolgsmeldung">
            <p>{message}</p>
        </div>
    );
}