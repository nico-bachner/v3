export default function Card(props: { children: React.ReactNode }) {
    return (
        <div className="w-full p-6 text-left transition duration-300 ease-in-out shadow hover:shadow-lg sm:px-8">
            {props.children}
        </div>
    );
}
