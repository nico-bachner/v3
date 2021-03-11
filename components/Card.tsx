export default function Card(props: { children: React.ReactNode }) {
    return (
        <div className="w-full px-6 py-4 text-left transition duration-300 ease-in-out shadow hover:shadow-lg sm:px-8 sm:py-6">
            {props.children}
        </div>
    );
}
